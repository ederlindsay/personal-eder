import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

function render(path = "/") {
  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
      redirect: "manual",
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

const unfinishedCopy =
  /Temas em desenvolvimento|Contextos a documentar|Informações a acrescentar|Possibilidade em estudo|Esta área poderá/i;

test("home presents the final four-part narrative", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  for (const label of ["Carreira", "Mundo", "Espiritual", "Social"]) {
    assert.match(html, new RegExp(`>${label}<`));
  }
  assert.doesNotMatch(html, />História</);
  assert.doesNotMatch(html, />Vida espiritual</);
  assert.doesNotMatch(html, />Impacto social</);
  assert.doesNotMatch(html, unfinishedCopy);
  assert.match(html, /og-production\.png/);
});

test("all active sections render without unfinished editorial copy", async () => {
  for (const path of [
    "/carreira",
    "/experiencia-internacional",
    "/vida-espiritual",
    "/impacto-social",
    "/o-caos",
  ]) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.doesNotMatch(html, unfinishedCopy, path);
    assert.doesNotMatch(html, /href="#(?:aprofundar|galeria)"/i, path);
  }
});

test("the retired history URL returns visitors to the home page", async () => {
  const response = await render("/historia");
  assert.ok([301, 302, 307, 308].includes(response.status));
  assert.equal(new URL(response.headers.get("location")).pathname, "/");
});
