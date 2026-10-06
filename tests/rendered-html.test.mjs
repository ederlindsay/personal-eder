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

test("home presents the portrait and the menu by theme", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Ninguém se transforma de uma vez/);
  assert.match(html, /eder-desenho\.webp/);
  assert.doesNotMatch(html, /[Aa]tlas/);
  for (const label of ["Escritor", "Empreendedor", "Palestrante", "Fé e missão", "Família", "Desafios", "Origens"]) {
    assert.match(html, new RegExp(`>${label}<`), label);
  }
  assert.match(html, /Organizações Cognitivas/);
  assert.match(html, /images\/brand\/mono\//);
  assert.doesNotMatch(html, /em breve/i);
  assert.match(html, /Fotografias/);
  assert.match(html, /Trajetória/);
  assert.match(html, /og-production\.png/);
  assert.doesNotMatch(html, /Curtir/);
});

test("retired section URLs return visitors to the home page", async () => {
  for (const path of ["/historia", "/carreira", "/experiencia-internacional", "/vida-espiritual", "/impacto-social", "/o-caos"]) {
    const response = await render(path);
    assert.ok([301, 302, 307, 308].includes(response.status), path);
    assert.equal(new URL(response.headers.get("location")).pathname, "/", path);
  }
});
