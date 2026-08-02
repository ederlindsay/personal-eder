import { writeFile } from "node:fs/promises";

const routes = ["/", "/carreira", "/experiencia-internacional", "/vida-espiritual", "/impacto-social", "/o-caos"];
const languages = ["en", "es", "zh-CN"];
const decode = (text) => text
  .replaceAll("&amp;", "&").replaceAll("&quot;", "\"").replaceAll("&#x27;", "'")
  .replaceAll("&lt;", "<").replaceAll("&gt;", ">").replace(/<!--.*?-->/g, "")
  .replace(/\s+/g, " ").trim();

const source = new Set();
for (const route of routes) {
  const html = await (await fetch(`${process.env.SITE_TRANSLATION_URL || "http://127.0.0.1:3000"}${route}`)).text();
  const visible = html
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<style[\s\S]*?<\/style>/g, "");
  for (const match of visible.matchAll(/>([^<>]+)</g)) {
    const text = decode(match[1]);
    if (text && /[A-Za-zÀ-ÿ]/.test(text) && !/^https?:/.test(text)) source.add(text);
  }
}

const items = [...source];
const dictionaries = {};
for (const language of languages) {
  const translated = {};
  const marker = "\n___ZXQ___\n";
  const batches = [];
  for (let index = 0; index < items.length; index += 8) batches.push(items.slice(index, index + 8));
  let cursor = 0;
  async function worker() {
    while (cursor < batches.length) {
      const batch = batches[cursor++];
      const joined = batch.join(marker);
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=pt&tl=${language}&dt=t&q=${encodeURIComponent(joined)}`;
      try {
        const data = await (await fetch(url)).json();
        const result = data[0].map((part) => part[0]).join("").split(/[\n ]*___ZXQ___[\n ]*/);
        batch.forEach((text, index) => translated[text] = result[index] || text);
      } catch {
        batch.forEach((text) => translated[text] = text);
      }
    }
  }
  await Promise.all(Array.from({length: 6}, worker));
  dictionaries[language === "zh-CN" ? "zh" : language] = translated;
}
await writeFile("app/translations.generated.json", JSON.stringify(dictionaries, null, 2) + "\n");
