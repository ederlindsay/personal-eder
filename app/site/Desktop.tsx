"use client";

import { useEffect, useRef, useState, type MouseEvent, type WheelEvent } from "react";
import { CHAPTERS, CHAPTER_FILTER, DETAILS, FILTERS, PHOTOS, ROMAN, WHATSAPP, photosFor } from "./content";
import { K, makeEngine, type Engine } from "./engine";
import { Details } from "./Details";

const TAU = Math.PI * 2;

function words(h: string, em: string) {
  return [...h.split(" ").map((t) => ({ t, it: false })), ...em.split(" ").map((t) => ({ t, it: true }))];
}

const Arrow = ({ dir = "right", size = 16 }: { dir?: "left" | "right"; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
    <path d={dir === "left" ? "M10 3L5 8l5 5" : "M6 3l5 5-5 5"} />
  </svg>
);
const Close = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
    <path d="M3 3l8 8M11 3l-8 8" />
  </svg>
);

export default function Desktop({ active }: { active: boolean }) {
  const [f, setF] = useState(-1);
  const [hover, setHover] = useState(-1);
  const [details, setDetails] = useState(false);
  const [gal, setGal] = useState(false);
  const [gf, setGf] = useState("all");
  const [lb, setLb] = useState(-1);
  const [nav, setNav] = useState(0);

  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const engRef = useRef<Engine | null>(null);
  const live = useRef({ f: -1, gal: false, lb: -1, galR: 600 });
  const ring = useRef({ yaw: 0, target: 0 });
  const drag = useRef<{ x: number; yaw: number } | null>(null);
  const gdrag = useRef<{ x: number; t: number } | null>(null);
  const moved = useRef(false);

  const glist = photosFor(gf);
  const gn = glist.length;
  const rows = gn > 16 ? 3 : gn > 7 ? 2 : 1;
  const cols = Math.ceil(gn / rows);
  const slots = Math.max(cols, 8);
  const galR = Math.round((slots * 250) / TAU);

  useEffect(() => {
    live.current = { f, gal, lb, galR };
  }, [f, gal, lb, galR]);

  useEffect(() => {
    if (!active || !canvasRef.current) return;
    if (!engRef.current) {
      engRef.current = makeEngine(canvasRef.current, {
        particles: 2100,
        atlasX: 0.62,
        atlasScale: 0.21,
        atlasTilt: -0.36,
        focusX: (k) => (CHAPTERS[k].img ? 0.6 : 0.68),
        repel: true,
      });
    }
    let raf = 0;
    const tick = () => {
      const e = engRef.current!;
      const st = live.current;
      if (st.gal && ringRef.current) {
        const g = ring.current;
        if (!gdrag.current && st.lb < 0) g.target += 0.03;
        g.yaw += (g.target - g.yaw) * 0.08;
        ringRef.current.style.transform = `translateZ(${-st.galR}px) rotateX(-4deg) rotateY(${g.yaw.toFixed(2)}deg)`;
      }
      if (!st.gal) {
        e.focus = st.f;
        e.frame();
        for (let k = 0; k < K; k++) {
          const el = labelRefs.current[k];
          if (!el) continue;
          const nd = e.nodes[k];
          el.style.transform = `translate3d(${nd.x.toFixed(1)}px,${nd.y.toFixed(1)}px,0) translate(-4px,-50%) translateY(${(34 + 26 * e.scl[k]).toFixed(1)}px)`;
          el.style.opacity = st.f < 0 ? (0.35 + nd.depth * 0.65).toFixed(2) : "0";
          el.style.zIndex = String(Math.round(nd.depth * 100));
          el.style.pointerEvents = st.f < 0 ? "auto" : "none";
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  const bump = () => setNav((n) => n + 1);
  const open = (k: number) => {
    if (engRef.current) engRef.current.hover = -1;
    setHover(-1);
    setDetails(false);
    setF(k);
    bump();
  };
  const toAtlas = () => {
    setF(-1);
    bump();
  };
  const hoverOn = (k: number) => {
    if (engRef.current) engRef.current.hover = k;
    setHover(k);
  };
  const openGal = (filter: string) => {
    ring.current = { yaw: -30, target: 0 };
    setGf(filter);
    setLb(-1);
    setDetails(false);
    setGal(true);
  };

  const onDown = (ev: MouseEvent) => {
    if (gal && lb < 0) {
      gdrag.current = { x: ev.clientX, t: ring.current.target };
      moved.current = false;
      return;
    }
    if ((ev.target as HTMLElement).closest?.("button,a")) return;
    if (engRef.current) {
      drag.current = { x: ev.clientX, yaw: engRef.current.yaw };
      engRef.current.drag = true;
    }
  };
  const onUp = () => {
    drag.current = null;
    gdrag.current = null;
    if (engRef.current) engRef.current.drag = false;
  };
  const onMove = (ev: MouseEvent) => {
    const r = rootRef.current?.getBoundingClientRect();
    if (!r) return;
    const x = ev.clientX - r.left, y = ev.clientY - r.top, nx = x / r.width - 0.5, ny = y / r.height - 0.5;
    if (gdrag.current) {
      const dx = ev.clientX - gdrag.current.x;
      if (Math.abs(dx) > 5) moved.current = true;
      ring.current.target = gdrag.current.t + dx * 0.12;
      return;
    }
    const e = engRef.current;
    if (e) {
      e.mx = nx; e.my = ny; e.px = x; e.py = y;
      if (drag.current) e.yaw = drag.current.yaw + (ev.clientX - drag.current.x) * 0.006;
    }
    const t = tiltRef.current;
    if (t) {
      t.style.transform = `rotateY(${(nx * 14).toFixed(2)}deg) rotateX(${(-ny * 10).toFixed(2)}deg)`;
      t.style.setProperty("--gx", `${(50 + nx * 80).toFixed(1)}%`);
      t.style.setProperty("--gy", `${(40 + ny * 80).toFixed(1)}%`);
    }
  };
  const onLeave = () => {
    onUp();
    if (engRef.current) { engRef.current.px = -9999; engRef.current.py = -9999; }
  };
  const onWheel = (ev: WheelEvent) => {
    if (gal) {
      if (lb < 0) ring.current.target += (Math.abs(ev.deltaX) > Math.abs(ev.deltaY) ? ev.deltaX : ev.deltaY) * 0.06;
      return;
    }
    const e = engRef.current;
    if (!e || details || f >= 0) return;
    e.zoomT = Math.min(1.55, Math.max(0.7, e.zoomT * (ev.deltaY > 0 ? 0.92 : 1.08)));
  };

  const ch = f >= 0 ? CHAPTERS[f] : null;
  const hw = ch ? words(ch.h, ch.em) : words("Ninguém se transforma", "de uma vez.");
  const lbItem = lb >= 0 ? glist[lb] : null;
  const chapterPhotos = f >= 0 ? photosFor(CHAPTER_FILTER[f]).length : 0;
  const plateW = ch?.book ? 260 : ch?.wide ? 360 : 290;

  const wordEls = hw.map((w, i) => (
    <span className="w" key={`${nav}-${i}`}>
      <span className={`wi${w.it ? " it" : ""}`} style={{ animationDelay: `${200 + i * 70}ms` }}>{w.t}</span>
    </span>
  ));

  return (
    <div
      className="shell"
      ref={rootRef}
      onMouseMove={onMove}
      onMouseDown={onDown}
      onMouseUp={onUp}
      onMouseLeave={onLeave}
      onWheel={onWheel}
      style={{ cursor: f < 0 ? "grab" : "default" }}
    >
      <canvas ref={canvasRef} aria-hidden="true" className="art" />
      {ch && <div className="numeral" key={`n${nav}`} aria-hidden="true">{ROMAN[f]}</div>}

      <div className="nodes" aria-label="Atlas">
        {CHAPTERS.map((c, k) => (
          <button
            key={k}
            ref={(el) => { labelRefs.current[k] = el; }}
            className={`node${hover === k ? " hot" : ""}`}
            onClick={() => open(k)}
            onMouseEnter={() => hoverOn(k)}
            onMouseLeave={() => hoverOn(-1)}
            onFocus={() => hoverOn(k)}
            onBlur={() => hoverOn(-1)}
            style={{ opacity: 0 }}
            aria-label={`Abrir capítulo ${ROMAN[k]}: ${c.label}`}
            tabIndex={f < 0 ? 0 : -1}
          >
            <span className="dot" />
            <span className="r">{ROMAN[k]}</span>
            <span className="t">{c.label}</span>
          </button>
        ))}
      </div>

      <header className="top">
        <button className="plain brand" onClick={toAtlas}>Eder Balbino</button>
        <div className="top-r">
          <span className="mono">{ch ? `${ROMAN[f]} · ${ch.label}` : "Atlas · 7 capítulos"}</span>
          <button className="plain" onClick={() => openGal("all")} aria-haspopup="dialog">
            Fotografias <span className="mono small">{PHOTOS.length}</span>
          </button>
          <button className="plain" onClick={() => setDetails(true)} aria-haspopup="dialog">
            Trajetória em detalhe
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="M2 4h10M2 7h10M2 10h6" /></svg>
          </button>
        </div>
      </header>

      <main className="stage">
        {!ch && (
          <div className="txt atlas-txt" key={`a${nav}`}>
            <p className="fd mono ink" style={{ animationDelay: "100ms" }}>Um atlas da transformação</p>
            <h1 className="serif display">{wordEls}</h1>
            <p className="fd body" style={{ animationDelay: "600ms" }}>
              Sete capítulos de uma história real. Gire o atlas, aproxime, passe o olhar por cada constelação — e entre por onde quiser.
            </p>
            <nav className="fd list" aria-label="Capítulos" style={{ animationDelay: "800ms" }}>
              {CHAPTERS.map((c, k) => (
                <button key={k} className={`item${hover === k ? " hot" : ""}`} onClick={() => open(k)} onMouseEnter={() => hoverOn(k)} onMouseLeave={() => hoverOn(-1)}>
                  <span className="r">{ROMAN[k]}</span>
                  <span className="t">{c.label}</span>
                  <span aria-hidden="true">→</span>
                </button>
              ))}
            </nav>
            <button className="fd photolink" onClick={() => openGal("all")} style={{ animationDelay: "900ms" }}>
              Ver todas as {PHOTOS.length} fotografias →
            </button>
            <figure className="fd epi-row" style={{ animationDelay: "1000ms" }}>
              <blockquote className="serif">“Nada é permanente, exceto a mudança.”</blockquote>
              <figcaption className="mono small">Heráclito</figcaption>
            </figure>
          </div>
        )}

        {ch && (
          <>
            <div className="txt focus-txt" key={`f${nav}`} style={{ maxWidth: ch.img ? 600 : 640 }}>
              <div className="fd back-row">
                <button className="plain" onClick={toAtlas}><Arrow dir="left" /> Atlas</button>
                <span className="mono">{ROMAN[f]} · {ch.label}</span>
              </div>
              <figure className="fd epi" style={{ animationDelay: "120ms" }}>
                <blockquote className="serif">{ch.epi}</blockquote>
                <figcaption className="mono small">— {ch.src}</figcaption>
              </figure>
              <h1 className="serif title">{wordEls}</h1>
              <div className="fd paras" style={{ animationDelay: "600ms" }}>
                {ch.p.map((t, i) => <p key={i}>{t}</p>)}
              </div>
              {ch.pull && <blockquote className="fd serif pull" style={{ animationDelay: "780ms" }}>{ch.pull}</blockquote>}
              {ch.stats && (
                <div className="fd stats" style={{ animationDelay: "780ms" }}>
                  {ch.stats.map((s) => (
                    <div key={s.v}><span className="serif">{s.v}</span><span>{s.l}</span></div>
                  ))}
                </div>
              )}
              {ch.href && <a className="fd textlink" href={ch.href} target="_blank" rel="noreferrer" style={{ animationDelay: "860ms" }}>{ch.linkLabel}</a>}
              {ch.end && (
                <div className="fd ctas" style={{ animationDelay: "860ms" }}>
                  <a className="cta dark" href={WHATSAPP} target="_blank" rel="noreferrer">Conversar comigo ↗</a>
                  <button className="cta line" onClick={() => setDetails(true)}>Trajetória em detalhe</button>
                </div>
              )}
              <div className="fd others" style={{ animationDelay: "950ms" }}>
                <span className="mono">Continue por onde quiser</span>
                <div className="chips">
                  {CHAPTERS.map((c, k) => k === f ? null : (
                    <button key={k} className="chip" onClick={() => open(k)} onMouseEnter={() => hoverOn(k)} onMouseLeave={() => hoverOn(-1)}>
                      <span className="r">{ROMAN[k]}</span>{c.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {ch.img ? (
              <div className="platepos" style={{ width: plateW }}>
                <div className="tilt" ref={tiltRef}>
                  <figure className="card" key={`c${nav}`} style={{ animationDelay: "300ms" }}>
                    <div className={`plate${ch.color ? " color" : ""}`} style={{ aspectRatio: ch.book ? "2 / 3" : ch.wide ? "4 / 3" : "4 / 5" }}>
                      <img src={ch.img} alt={ch.alt ?? ""} />
                      <span className="glare" />
                      {ch.tag && <span className="tag">{ch.tag}</span>}
                    </div>
                    <figcaption><span className="mono ink">Fig. {ROMAN[f]}</span><span className="mono">{ch.cap}</span></figcaption>
                  </figure>
                </div>
                <button className="photolink" onClick={() => openGal(CHAPTER_FILTER[f])} style={{ marginTop: 14 }}>
                  Ver fotos deste tema ({chapterPhotos}) →
                </button>
              </div>
            ) : (
              <div className="platepos bare">
                <button className="photolink" onClick={() => openGal(CHAPTER_FILTER[f])}>Ver fotos deste tema ({chapterPhotos}) →</button>
              </div>
            )}
          </>
        )}
      </main>

      <footer className="bottom">
        <span className="mono">
          {ch ? "Passe o mouse na imagem · escolha outro capítulo quando quiser" : "Arraste para girar · role para aproximar · clique numa constelação"}
        </span>
        <a href={WHATSAPP} target="_blank" rel="noreferrer">Conversar ↗</a>
      </footer>

      {gal && (
        <div className="gallery" role="dialog" aria-modal="true" aria-label="Fotografias">
          <div className="g-head">
            <div className="g-title">
              <h2 className="serif">Fotografias</h2>
              <span className="mono">{gn} de {PHOTOS.length}</span>
            </div>
            <button className="icon" aria-label="Fechar fotografias" onClick={() => setGal(false)}><Close /></button>
          </div>
          <div className="g-filters" role="group" aria-label="Filtrar fotografias">
            {FILTERS.map(([key, label]) => (
              <button
                key={key}
                className={`chip${gf === key ? " on" : ""}`}
                aria-pressed={gf === key}
                onClick={() => { ring.current = { yaw: ring.current.target - 40, target: ring.current.target }; setGf(key); setLb(-1); }}
              >
                {label} <span className="n">{photosFor(key).length}</span>
              </button>
            ))}
          </div>
          <div className="gstage">
            <div className="ring" ref={ringRef} key={gf}>
              {glist.map((p, i) => {
                const col = i % cols, row = Math.floor(i / cols);
                const ang = (col * 360) / slots, y = (row - (rows - 1) / 2) * 200;
                return (
                  <button
                    key={p.img + i}
                    className="gitem"
                    style={{ transform: `rotateY(${ang.toFixed(2)}deg) translateZ(${galR}px) translateY(${y}px)` }}
                    onClick={() => { if (moved.current) { moved.current = false; return; } setLb(i); }}
                    aria-label={`Ampliar: ${p.cap}`}
                  >
                    <img src={p.img} alt={p.cap} draggable={false} loading="lazy" />
                    <span className="gc">{p.cap}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="g-foot">
            <span className="mono">Arraste ou role para girar · passe o mouse para ver em cor · clique para ampliar</span>
            <button className="plain" onClick={() => setGal(false)}>Voltar ao atlas</button>
          </div>
        </div>
      )}

      {lbItem && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={lbItem.cap}>
          <button className="lbbtn" aria-label="Foto anterior" onClick={() => setLb((lb - 1 + gn) % gn)}><Arrow dir="left" size={18} /></button>
          <figure>
            <img className="lbimg" key={lbItem.img} src={lbItem.img} alt={lbItem.cap} />
            <figcaption><span className="serif">{lbItem.cap}</span><span className="pos">{lb + 1} / {gn}</span></figcaption>
          </figure>
          <button className="lbbtn" aria-label="Próxima foto" onClick={() => setLb((lb + 1) % gn)}><Arrow size={18} /></button>
          <button className="lbbtn lbclose" aria-label="Fechar" onClick={() => setLb(-1)}><Close /></button>
        </div>
      )}

      {details && (
        <div className="details-wrap" role="dialog" aria-modal="true" aria-label="Trajetória em detalhe">
          <button className="backdrop" aria-label="Fechar" onClick={() => setDetails(false)} />
          <div className="drawer">
            <div className="d-head">
              <h2 className="serif">Trajetória <em>em detalhe</em></h2>
              <button className="icon" aria-label="Fechar" onClick={() => setDetails(false)}><Close /></button>
            </div>
            <Details d={DETAILS} />
          </div>
        </div>
      )}
    </div>
  );
}
