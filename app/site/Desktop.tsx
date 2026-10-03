"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent, type WheelEvent } from "react";
import {
  BLOCKS, CHAPTERS, CHAPTER_FILTER, CONVICTIONS, DETAILS, FILTERS, LINKEDIN, PORTRAIT, ROMAN, SECTIONS, WHATSAPP,
  photosFor, type Photo,
} from "./content";
import { makeEngine, type Engine } from "./engine";

const Arrow = ({ dir = "right", size = 16 }: { dir?: "left" | "right" | "down"; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
    <path d={dir === "left" ? "M10 3L5 8l5 5" : dir === "down" ? "M3 6l5 5 5-5" : "M6 3l5 5-5 5"} />
  </svg>
);
const Close = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
    <path d="M3 3l8 8M11 3l-8 8" />
  </svg>
);

function indexFromHash() {
  if (typeof window === "undefined") return 0;
  const id = window.location.hash.slice(1);
  const i = BLOCKS.findIndex((b) => b.id === id);
  return i < 0 ? 0 : i;
}

export default function Desktop({ active }: { active: boolean }) {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const [gf, setGf] = useState("all");
  const [lb, setLb] = useState<{ list: Photo[]; i: number } | null>(null);

  const mainRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const engRef = useRef<Engine | null>(null);
  const live = useRef({ i: 0 });
  const wheel = useRef({ acc: 0, lock: 0 });

  const block = BLOCKS[i];
  const ch = block.kind === "chapter" ? CHAPTERS[block.ch!] : null;
  const chIdx = block.ch ?? -1;

  useEffect(() => { live.current.i = i; }, [i]);

  const go = useCallback((n: number) => {
    const next = Math.max(0, Math.min(BLOCKS.length - 1, n));
    setI((cur) => {
      if (cur === next) return cur;
      setDir(next > cur ? 1 : -1);
      return next;
    });
  }, []);

  // Deep links: #capitulo-3 etc.
  useEffect(() => {
    if (!active) return;
    const onHash = () => go(indexFromHash());
    const frame = requestAnimationFrame(onHash);
    window.addEventListener("hashchange", onHash);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("hashchange", onHash); };
  }, [active, go]);
  useEffect(() => {
    if (!active) return;
    const id = BLOCKS[i].id;
    if (window.location.hash.slice(1) !== id) history.replaceState(null, "", i === 0 ? window.location.pathname : `#${id}`);
  }, [active, i]);

  // Keyboard: → ↓ avançam, ← ↑ voltam; dentro da foto ampliada, as setas trocam a foto.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (lb) {
        if (e.key === "Escape") setLb(null);
        else if (e.key === "ArrowRight" || e.key === "ArrowDown") setLb({ ...lb, i: (lb.i + 1) % lb.list.length });
        else if (e.key === "ArrowLeft" || e.key === "ArrowUp") setLb({ ...lb, i: (lb.i - 1 + lb.list.length) % lb.list.length });
        else return;
        e.preventDefault();
        return;
      }
      const cur = live.current.i;
      if (["ArrowRight", "ArrowDown", "PageDown"].includes(e.key) || (e.key === " " && tag !== "BUTTON" && tag !== "A")) go(cur + 1);
      else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) go(cur - 1);
      else if (e.key === "Home") go(0);
      else if (e.key === "End") go(BLOCKS.length - 1);
      else return;
      e.preventDefault();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, lb, go]);

  // Rolagem: um gesto troca um bloco inteiro.
  const onWheel = (e: WheelEvent) => {
    if (lb) return;
    const now = Date.now(), w = wheel.current;
    if (now < w.lock) return;
    w.acc += Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
    if (Math.abs(w.acc) < 40) return;
    go(live.current.i + (w.acc > 0 ? 1 : -1));
    w.acc = 0;
    w.lock = now + 900;
  };

  // Escultura de partículas: aparece nos capítulos, com a forma de cada um.
  useEffect(() => {
    if (!active || !canvasRef.current) return;
    if (!engRef.current) {
      engRef.current = makeEngine(canvasRef.current, {
        particles: 3200,
        focusX: (k) => (CHAPTERS[k].img ? 0.7 : 0.72),
        focusScale: 0.24,
        repel: true,
      });
    }
    let raf = 0;
    const tick = () => {
      const e = engRef.current!;
      const b = BLOCKS[live.current.i];
      e.focus = b.kind === "chapter" ? b.ch! : 6;
      e.frame();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  const onMove = (ev: MouseEvent) => {
    const r = mainRef.current?.getBoundingClientRect();
    if (!r) return;
    const x = ev.clientX - r.left, y = ev.clientY - r.top, nx = x / r.width - 0.5, ny = y / r.height - 0.5;
    const e = engRef.current;
    if (e) { e.mx = nx; e.my = ny; e.px = x; e.py = y; }
    const t = tiltRef.current;
    if (t) {
      t.style.transform = `rotateY(${(nx * 14).toFixed(2)}deg) rotateX(${(-ny * 10).toFixed(2)}deg)`;
      t.style.setProperty("--gx", `${(50 + nx * 80).toFixed(1)}%`);
      t.style.setProperty("--gy", `${(40 + ny * 80).toFixed(1)}%`);
    }
  };
  const onLeave = () => { if (engRef.current) { engRef.current.px = -9999; engRef.current.py = -9999; } };

  const openGallery = (filter: string) => { setGf(filter); go(BLOCKS.findIndex((b) => b.kind === "photos")); };
  const openPhoto = (list: Photo[], n: number) => setLb({ list, i: n });

  const prev = i > 0 ? BLOCKS[i - 1] : null;
  const next = i < BLOCKS.length - 1 ? BLOCKS[i + 1] : null;
  const anim = dir > 0 ? "enter-next" : "enter-prev";

  const words = (h: string, em: string) =>
    [...h.split(" ").map((t) => ({ t, it: false })), ...em.split(" ").map((t) => ({ t, it: true }))].map((w, n) => (
      <span className="w" key={n}><span className={`wi${w.it ? " it" : ""}`} style={{ animationDelay: `${180 + n * 60}ms` }}>{w.t}</span></span>
    ));

  const gl = photosFor(gf);
  const gcols = Math.max(3, Math.ceil(Math.sqrt(gl.length * 1.9)));
  const grows = Math.ceil(gl.length / gcols);
  const mundo = photosFor("mundo");

  return (
    <div className="shell">
      <aside className="side">
        <button className="side-brand" onClick={() => go(0)}>
          <span className="serif">Eder Balbino</span>
          <span className="mono">Fé · Tecnologia · Propósito</span>
        </button>
        <nav className="menu" aria-label="Menu">
          {SECTIONS.map((s) => {
            const items = BLOCKS.map((b, n) => ({ b, n })).filter((x) => x.b.section === s.id);
            const current = block.section === s.id;
            return (
              <div className={`menu-sec${current ? " on" : ""}`} key={s.id}>
                <button className="menu-head" onClick={() => go(items[0].n)} aria-current={current && items.length === 1 ? "page" : undefined}>
                  <span>{s.label}</span>
                  {items.length > 1 && <span className="menu-count">{items.length}</span>}
                </button>
                {items.length > 1 && (
                  <ul className="submenu">
                    {items.map(({ b, n }) => (
                      <li key={b.id}>
                        <button className={`sub${n === i ? " on" : ""}`} onClick={() => go(n)} aria-current={n === i ? "page" : undefined}>
                          {b.kind === "chapter" && <span className="r">{ROMAN[b.ch!]}</span>}
                          {b.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>
        <div className="side-foot">
          <div className="keys" aria-hidden="true"><kbd>←</kbd><kbd>→</kbd><kbd>↑</kbd><kbd>↓</kbd></div>
          <span className="mono small">Setas ou rolagem para navegar</span>
        </div>
      </aside>

      <div className="main" ref={mainRef} onWheel={onWheel} onMouseMove={onMove} onMouseLeave={onLeave}>
        <canvas ref={canvasRef} aria-hidden="true" className={`art${ch ? " on" : ""}`} />
        {ch && <div className="numeral" key={`n${i}`} aria-hidden="true">{ROMAN[chIdx]}</div>}

        <section className={`block ${anim} k-${block.kind}`} key={i} aria-label={block.label}>
          {block.kind === "home" && (
            <div className="home">
              <div className="home-txt">
                <p className="mono ink fd" style={{ animationDelay: "80ms" }}>Fé · Tecnologia · Propósito</p>
                <h1 className="serif home-name">{words("Eder", "Balbino")}</h1>
                <p className="serif home-sub fd" style={{ animationDelay: "420ms" }}>Ninguém se transforma de uma vez.</p>
                <p className="body fd" style={{ animationDelay: "560ms" }}>
                  Estatístico, empreendedor, pastor e escritor. Esta é uma história real de transformação, contada em capítulos curtos — para ler em sequência ou escolher pelo menu.
                </p>
                <div className="ctas fd" style={{ animationDelay: "700ms" }}>
                  <button className="cta dark" onClick={() => go(1)}>Começar a história <Arrow /></button>
                  <button className="cta line" onClick={() => openGallery("all")}>Fotografias</button>
                </div>
              </div>
              <figure className="portrait">
                <img src={PORTRAIT} alt="Retrato de Eder Balbino em desenho a lápis" />
              </figure>
            </div>
          )}

          {ch && (
            <>
              <div className="txt" style={{ maxWidth: 540 }}>
                <p className="mono fd">{block.section === "historia" ? `Capítulo ${ROMAN[chIdx]} · ${ch.label}` : ch.label}</p>
                <figure className="epi fd" style={{ animationDelay: "100ms" }}>
                  <blockquote className="serif">{ch.epi}</blockquote>
                  <figcaption className="mono small">— {ch.src}</figcaption>
                </figure>
                <h2 className="serif title">{words(ch.h, ch.em)}</h2>
                <div className="paras fd" style={{ animationDelay: "520ms" }}>{ch.p.map((t, n) => <p key={n}>{t}</p>)}</div>
                {ch.pull && <blockquote className="serif pull fd" style={{ animationDelay: "680ms" }}>{ch.pull}</blockquote>}
                {ch.stats && (
                  <div className="stats fd" style={{ animationDelay: "680ms" }}>
                    {ch.stats.map((s) => <div key={s.v}><span className="serif">{s.v}</span><span>{s.l}</span></div>)}
                  </div>
                )}
                {ch.href && <a className="textlink fd" href={ch.href} target="_blank" rel="noreferrer" style={{ animationDelay: "760ms" }}>{ch.linkLabel}</a>}
                {ch.end && (
                  <div className="ctas fd" style={{ animationDelay: "760ms" }}>
                    <a className="cta dark" href={WHATSAPP} target="_blank" rel="noreferrer">Conversar comigo ↗</a>
                    <button className="cta line" onClick={() => go(BLOCKS.findIndex((b) => b.id === "trabalho"))}>Ver a trajetória</button>
                  </div>
                )}
                <button className="photolink fd" onClick={() => openGallery(CHAPTER_FILTER[chIdx])} style={{ animationDelay: "840ms" }}>
                  Ver fotos deste tema ({photosFor(CHAPTER_FILTER[chIdx]).length}) →
                </button>
              </div>
              {ch.img && (
                <div className="platepos" style={{ width: ch.book ? 180 : ch.wide ? 270 : 200 }}>
                  <div className="tilt" ref={tiltRef}>
                    <figure className="card" style={{ animationDelay: "260ms" }}>
                      <div className={`plate${ch.color ? " color" : ""}`} style={{ aspectRatio: ch.book ? "2 / 3" : ch.wide ? "4 / 3" : "4 / 5" }}>
                        <img src={ch.img} alt={ch.alt ?? ""} />
                        <span className="glare" />
                        {ch.tag && <span className="tag">{ch.tag}</span>}
                      </div>
                      <figcaption><span className="mono ink">Fig. {ROMAN[chIdx]}</span><span className="mono">{ch.cap}</span></figcaption>
                    </figure>
                  </div>
                </div>
              )}
            </>
          )}

          {block.kind === "work" && (
            <div className="wide">
              <p className="mono fd">Trajetória · Trabalho</p>
              <h2 className="serif title">{words("Dados, empresas", "e ensino.")}</h2>
              <div className="rows fd" style={{ animationDelay: "420ms" }}>
                {DETAILS.trab.map((r) => <div className="row" key={r.a}><span className="mono">{r.a}</span><span>{r.b}</span></div>)}
              </div>
            </div>
          )}

          {block.kind === "study" && (
            <div className="wide">
              <p className="mono fd">Trajetória · Formação e prêmios</p>
              <h2 className="serif title">{words("Aprender,", "sempre.")}</h2>
              <div className="cols3 fd" style={{ animationDelay: "420ms" }}>
                <div className="col"><span className="mono">Formação</span>{DETAILS.form.map((t) => <div className="drow" key={t}>{t}</div>)}</div>
                <div className="col"><span className="mono">Reconhecimentos</span>{DETAILS.rec.map((t) => <div className="drow" key={t}>{t}</div>)}</div>
                <div className="col"><span className="mono">Ferramentas</span><div className="tools">{DETAILS.tools.split(", ").map((t) => <span className="tool" key={t}>{t}</span>)}</div></div>
              </div>
            </div>
          )}

          {block.kind === "world" && (
            <div className="wide world">
              <div className="world-txt">
                <p className="mono fd">Trajetória · Mundo</p>
                <h2 className="serif title">{words("Conhecimento em", "movimento.")}</h2>
                <p className="body fd" style={{ animationDelay: "420ms" }}>Palestras, congressos e visitas técnicas a empresas, universidades, igrejas e projetos em {DETAILS.cities.length} cidades.</p>
                <div className="cities fd" style={{ animationDelay: "520ms" }}>{DETAILS.cities.map((c) => <span key={c}>{c}</span>)}</div>
              </div>
              <div className="world-grid fd" style={{ animationDelay: "380ms" }}>
                {mundo.slice(0, 20).map((p, n) => (
                  <button className="gcell" key={p.img} onClick={() => openPhoto(mundo, n)} aria-label={`Ampliar: ${p.cap}`}>
                    <img src={p.img} alt={p.cap} loading="lazy" /><span className="gc">{p.cap}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {block.kind === "faith" && (
            <div className="wide">
              <p className="mono fd">Trajetória · Fé e missão</p>
              <h2 className="serif title">{words("Fé, igreja", "e serviço.")}</h2>
              <div className="cols3 fd" style={{ animationDelay: "420ms" }}>
                {CONVICTIONS.map((c, n) => (
                  <div className="col" key={c.t}><span className="serif roman">{ROMAN[n]}</span><span className="col-t">{c.t}</span><p>{c.d}</p></div>
                ))}
              </div>
              <div className="cols2 fd" style={{ animationDelay: "560ms" }}>
                <div className="col"><span className="mono">Missão VIDE</span><p>Departamento de missões que apoia cerca de 20 famílias missionárias em Moçambique, Angola, Tunísia, Espanha, França e Brasil.</p></div>
                <div className="col"><span className="mono">Missão NASCE · frentes</span><p>{DETAILS.nasce}</p></div>
              </div>
            </div>
          )}

          {block.kind === "photos" && (
            <div className="wide photos">
              <div className="photos-head fd">
                <h2 className="serif title">Fotografias</h2>
                <div className="chips" role="group" aria-label="Filtrar fotografias">
                  {FILTERS.map(([key, label]) => (
                    <button key={key} className={`chip${gf === key ? " on" : ""}`} aria-pressed={gf === key} onClick={() => setGf(key)}>
                      {label} <span className="n">{photosFor(key).length}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="pgrid" key={gf} style={{ gridTemplateColumns: `repeat(${gcols}, minmax(0, 1fr))`, gridTemplateRows: `repeat(${grows}, minmax(0, 1fr))` }}>
                {gl.map((p, n) => (
                  <button className="gcell" key={p.img + n} onClick={() => openPhoto(gl, n)} aria-label={`Ampliar: ${p.cap}`} style={{ animationDelay: `${n * 18}ms` }}>
                    <img src={p.img} alt={p.cap} loading="lazy" /><span className="gc">{p.cap}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {block.kind === "contact" && (
            <div className="contact">
              <div>
                <p className="mono fd">Contato</p>
                <h2 className="serif contact-t">{words("Para perguntas, conversas", "ou troca de informações.")}</h2>
                <div className="ctas fd" style={{ animationDelay: "560ms" }}>
                  <a className="cta dark" href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp ↗</a>
                  <a className="cta line" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn ↗</a>
                </div>
              </div>
              <figure className="portrait small"><img src={PORTRAIT} alt="" /></figure>
            </div>
          )}
        </section>

        <footer className="pager">
          <button className="pager-btn" onClick={() => prev && go(i - 1)} disabled={!prev}>
            <Arrow dir="left" /><span><span className="mono small">Anterior</span>{prev?.label ?? "—"}</span>
          </button>
          <div className="dots" aria-hidden="true">
            {BLOCKS.map((b, n) => <span key={b.id} className={`dotp${n === i ? " on" : n < i ? " done" : ""}`} />)}
          </div>
          <button className="pager-btn next" onClick={() => next && go(i + 1)} disabled={!next}>
            <span><span className="mono small">Próximo</span>{next?.label ?? "—"}</span><Arrow />
          </button>
        </footer>
      </div>

      {lb && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={lb.list[lb.i].cap}>
          <button className="lbbtn" aria-label="Foto anterior" onClick={() => setLb({ ...lb, i: (lb.i - 1 + lb.list.length) % lb.list.length })}><Arrow dir="left" size={18} /></button>
          <figure>
            <img className="lbimg" key={lb.list[lb.i].img} src={lb.list[lb.i].img} alt={lb.list[lb.i].cap} />
            <figcaption><span className="serif">{lb.list[lb.i].cap}</span><span className="pos">{lb.i + 1} / {lb.list.length}</span></figcaption>
          </figure>
          <button className="lbbtn" aria-label="Próxima foto" onClick={() => setLb({ ...lb, i: (lb.i + 1) % lb.list.length })}><Arrow size={18} /></button>
          <button className="lbbtn lbclose" aria-label="Fechar" onClick={() => setLb(null)}><Close /></button>
        </div>
      )}
    </div>
  );
}
