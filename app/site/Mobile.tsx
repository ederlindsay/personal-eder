"use client";

import { useEffect, useRef, useState, type TouchEvent } from "react";
import { CHAPTERS, CHAPTER_FILTER, DETAILS, PHOTOS, ROMAN, WHATSAPP, photosFor } from "./content";
import { K, makeEngine, type Engine } from "./engine";

const CATS: [string, string][] = [
  ["familia", "Família"],
  ["mundo", "Mundo"],
  ["trabalho", "Trabalho"],
  ["fe", "Fé e missão"],
  ["origens", "Origens"],
];

export default function Mobile({ active }: { active: boolean }) {
  const [f, setF] = useState(-1);
  const [lbf, setLbf] = useState("all");
  const [lb, setLb] = useState(-1);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const engRef = useRef<Engine | null>(null);
  const touch = useRef<{ x: number; yaw: number } | null>(null);

  useEffect(() => {
    if (!active || !canvasRef.current) return;
    if (!engRef.current) {
      engRef.current = makeEngine(canvasRef.current, { particles: 1260, atlasX: 0.5, atlasScale: 0.18, atlasTilt: -0.4, repel: false });
    }
    let raf = 0;
    const tick = () => {
      const e = engRef.current!;
      e.frame();
      for (let k = 0; k < K; k++) {
        const el = labelRefs.current[k];
        if (!el) continue;
        const nd = e.nodes[k];
        el.style.transform = `translate3d(${nd.x.toFixed(1)}px,${nd.y.toFixed(1)}px,0) translate(-3px,-50%) translateY(46px)`;
        el.style.opacity = (0.4 + nd.depth * 0.6).toFixed(2);
        el.style.zIndex = String(Math.round(nd.depth * 100));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = f >= 0 || lb >= 0 ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active, f, lb]);

  const onTouchStart = (ev: TouchEvent) => {
    const t = ev.touches[0];
    if (t && engRef.current) { touch.current = { x: t.clientX, yaw: engRef.current.yaw }; engRef.current.drag = true; }
  };
  const onTouchMove = (ev: TouchEvent) => {
    const t = ev.touches[0];
    if (t && touch.current && engRef.current) engRef.current.yaw = touch.current.yaw + (t.clientX - touch.current.x) * 0.01;
  };
  const onTouchEnd = () => {
    touch.current = null;
    if (engRef.current) engRef.current.drag = false;
  };

  const ch = f >= 0 ? CHAPTERS[f] : null;
  const lbl = photosFor(lbf);
  const lbItem = lb >= 0 ? lbl[lb] : null;
  const hw = ch ? [...ch.h.split(" ").map((t) => ({ t, it: false })), ...ch.em.split(" ").map((t) => ({ t, it: true }))] : [];

  return (
    <div className="m-root">
      <header className="m-top">
        <span className="m-brand">Eder Balbino</span>
        <div className="m-links">
          <a href="#fotos">Fotos</a>
          <a href="#detalhes">Trajetória</a>
        </div>
      </header>

      <section className="m-hero">
        <p className="mono ink">Um atlas da transformação</p>
        <h1 className="serif">Ninguém se transforma <em>de uma vez.</em></h1>
      </section>

      <div className="m-stage" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <canvas ref={canvasRef} aria-hidden="true" />
        {CHAPTERS.map((c, k) => (
          <button
            key={k}
            ref={(el) => { labelRefs.current[k] = el; }}
            className="m-node"
            onClick={() => setF(k)}
            style={{ opacity: 0 }}
            aria-label={`Abrir capítulo ${ROMAN[k]}: ${c.label}`}
          >
            <span className="dot" /><span className="r">{ROMAN[k]}</span>
          </button>
        ))}
        <span className="mono m-hint">Deslize para girar · toque num numeral</span>
      </div>

      <section className="m-intro">
        <p>Sete capítulos de uma história real. Entre por onde quiser — não existe ordem certa.</p>
        <nav aria-label="Capítulos" className="m-list">
          {CHAPTERS.map((c, k) => (
            <button key={k} className="m-card" onClick={() => setF(k)}>
              <span className="r">{ROMAN[k]}</span>
              <span className="m-card-t"><span>{c.label}</span><span className="serif">{c.h} {c.em}</span></span>
              <span aria-hidden="true" className="muted">→</span>
            </button>
          ))}
        </nav>
        <figure className="epi-row">
          <blockquote className="serif">“Nada é permanente, exceto a mudança.”</blockquote>
          <figcaption className="mono small">Heráclito</figcaption>
        </figure>
      </section>

      <section id="fotos" className="m-section">
        <div className="m-head"><h2 className="serif">Fotografias</h2><span className="mono">{PHOTOS.length} fotos</span></div>
        {CATS.map(([key, label]) => {
          const list = photosFor(key);
          return (
            <div className="m-cat" key={key}>
              <div className="m-cat-h"><span className="serif">{label}</span><span className="mono">{list.length} · deslize →</span></div>
              <div className="m-thumbs">
                {list.map((p, i) => (
                  <button key={p.img + i} className="m-thumb" onClick={() => { setLbf(key); setLb(i); }} aria-label={`Ampliar: ${p.cap}`}>
                    <img src={p.img} alt={p.cap} loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section id="detalhes" className="m-section">
        <h2 className="serif m-pad">Trajetória <em>em detalhe</em></h2>
        <div className="m-pad m-group">
          <span className="mono">Trabalho</span>
          {DETAILS.trab.map((r) => <div className="drow stack" key={r.a}><span className="muted small-text">{r.a}</span><span>{r.b}</span></div>)}
        </div>
        <div className="m-pad m-group">
          <span className="mono">Formação</span>
          {DETAILS.form.map((t) => <div className="drow" key={t}>{t}</div>)}
        </div>
        <div className="m-pad m-group">
          <span className="mono">Reconhecimentos</span>
          {DETAILS.rec.map((t) => <div className="drow" key={t}>{t}</div>)}
        </div>
        <div className="m-pad m-group">
          <span className="mono">Fé</span>
          <p className="drow">{DETAILS.fe}</p>
        </div>
        <div className="m-group">
          <span className="mono m-pad">Mundo · {DETAILS.cities.length} cidades</span>
          <div className="m-cities m-pad">{DETAILS.cities.map((c) => <span key={c}>{c}</span>)}</div>
        </div>
        <div className="m-pad m-group">
          <span className="mono">Missão NASCE · frentes</span>
          <p className="drow">{DETAILS.nasce}</p>
        </div>
        <div className="m-pad m-group">
          <span className="mono">Ferramentas</span>
          <p className="drow small-text">{DETAILS.tools}</p>
        </div>
        <div className="m-pad m-group">
          <a className="cta dark block" href={WHATSAPP} target="_blank" rel="noreferrer">Conversar comigo ↗</a>
          <span className="muted small-text center">Eder Balbino · Belo Horizonte</span>
        </div>
      </section>

      {ch && (
        <div className="m-sheet" role="dialog" aria-modal="true" aria-label={`${ROMAN[f]} · ${ch.label}`} key={f}>
          <div className="m-sheet-in">
            <div className="m-numeral" aria-hidden="true">{ROMAN[f]}</div>
            <div className="m-sheet-top">
              <button className="chip" onClick={() => setF(-1)}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="M10 3L5 8l5 5" /></svg> Atlas
              </button>
              <span className="mono">{ROMAN[f]} · {ch.label}</span>
            </div>
            <div className="m-sheet-body">
              <figure className="epi">
                <blockquote className="serif">{ch.epi}</blockquote>
                <figcaption className="mono small">— {ch.src}</figcaption>
              </figure>
              <h2 className="serif m-title">
                {hw.map((w, i) => (
                  <span className="w" key={i}><span className={`wi${w.it ? " it" : ""}`} style={{ animationDelay: `${150 + i * 70}ms` }}>{w.t}</span></span>
                ))}
              </h2>
              {ch.img && (
                <figure className="m-plate-fig">
                  <div className={`m-plate${ch.color ? " color" : ""}`} style={{ aspectRatio: ch.book ? "2 / 3" : ch.wide ? "4 / 3" : "4 / 5" }}>
                    <img src={ch.img} alt={ch.alt ?? ""} />
                    {ch.tag && <span className="tag">{ch.tag}</span>}
                  </div>
                  <figcaption><span className="mono ink">Fig. {ROMAN[f]}</span><span className="mono">{ch.cap}</span></figcaption>
                </figure>
              )}
              <button className="chip" onClick={() => { setLbf(CHAPTER_FILTER[f]); setLb(0); }}>
                Ver fotos deste tema ({photosFor(CHAPTER_FILTER[f]).length}) →
              </button>
              {ch.p.map((t, i) => <p className="m-p" key={i}>{t}</p>)}
              {ch.pull && <blockquote className="serif pull">{ch.pull}</blockquote>}
              {ch.stats && (
                <div className="m-stats">
                  {ch.stats.map((s) => <div key={s.v}><span className="serif">{s.v}</span><span className="muted">{s.l}</span></div>)}
                </div>
              )}
              {ch.href && <a className="textlink" href={ch.href} target="_blank" rel="noreferrer">{ch.linkLabel}</a>}
              {ch.end && <a className="cta dark block" href={WHATSAPP} target="_blank" rel="noreferrer">Conversar comigo ↗</a>}
              <div className="m-others">
                <span className="mono">Continue por onde quiser</span>
                <div className="chips">
                  {CHAPTERS.map((c, k) => k === f ? null : (
                    <button key={k} className="chip" onClick={() => setF(k)}><span className="r">{ROMAN[k]}</span>{c.label}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {lbItem && (
        <div className="m-lightbox" role="dialog" aria-modal="true" aria-label={lbItem.cap}>
          <button className="m-lbclose" aria-label="Fechar" onClick={() => setLb(-1)}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="M3 3l8 8M11 3l-8 8" /></svg>
          </button>
          <img key={lbItem.img} src={lbItem.img} alt={lbItem.cap} />
          <div className="m-lbcap"><span className="serif">{lbItem.cap}</span><span className="pos">{lb + 1} / {lbl.length}</span></div>
          <div className="m-lbnav">
            <button onClick={() => setLb((lb - 1 + lbl.length) % lbl.length)}>← Anterior</button>
            <button onClick={() => setLb((lb + 1) % lbl.length)}>Próxima →</button>
          </div>
        </div>
      )}
    </div>
  );
}
