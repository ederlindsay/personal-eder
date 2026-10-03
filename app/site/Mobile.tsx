"use client";

import { useEffect, useState } from "react";
import {
  BLOCKS, CHAPTERS, CHAPTER_FILTER, CONVICTIONS, DETAILS, LINKEDIN, PORTRAIT, ROMAN, SECTIONS, WHATSAPP,
  photosFor, type Photo,
} from "./content";

const CATS: [string, string][] = [
  ["familia", "Família"],
  ["mundo", "Mundo"],
  ["trabalho", "Trabalho"],
  ["fe", "Fé e missão"],
  ["origens", "Origens"],
];

function Next({ id, onJump }: { id: string; onJump: (id: string) => void }) {
  const n = BLOCKS.findIndex((b) => b.id === id) + 1;
  if (n >= BLOCKS.length) return null;
  const nx = BLOCKS[n];
  return (
    <button className="m-next" onClick={() => onJump(nx.id)}>
      <span className="mono small">Próximo</span>
      <span>{nx.label} ↓</span>
    </button>
  );
}

export default function Mobile({ active }: { active: boolean }) {
  const [menu, setMenu] = useState(false);
  const [lb, setLb] = useState<{ list: Photo[]; i: number } | null>(null);
  const [current, setCurrent] = useState("inicio");

  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = menu || lb ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active, menu, lb]);

  // Marca no menu o bloco que está na tela.
  useEffect(() => {
    if (!active) return;
    const els = BLOCKS.map((b) => document.getElementById(`m-${b.id}`)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis) setCurrent(vis.target.id.slice(2));
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [active]);

  const jump = (id: string) => {
    setMenu(false);
    requestAnimationFrame(() => document.getElementById(`m-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  const curBlock = BLOCKS.find((b) => b.id === current) ?? BLOCKS[0];
  const mundo = photosFor("mundo");

  return (
    <div className="m-root">
      <header className="m-top">
        <button className="m-brand serif" onClick={() => jump("inicio")}>Eder Balbino</button>
        <span className="mono m-where">{curBlock.label}</span>
        <button className="m-menu-btn" onClick={() => setMenu(true)} aria-haspopup="dialog" aria-expanded={menu}>
          Menu
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="M2 5h12M2 11h12" /></svg>
        </button>
      </header>

      <section id="m-inicio" className="m-home">
        <figure className="m-portrait"><img src={PORTRAIT} alt="Retrato de Eder Balbino em desenho a lápis" /></figure>
        <p className="mono ink">Fé · Tecnologia · Propósito</p>
        <h1 className="serif">Eder <em>Balbino</em></h1>
        <p className="serif m-sub">Ninguém se transforma de uma vez.</p>
        <p className="m-p">Estatístico, empreendedor, pastor e escritor. Esta é uma história real de transformação, contada em capítulos curtos — para ler em sequência ou escolher pelo menu.</p>
        <button className="cta dark block" onClick={() => jump("capitulo-1")}>Começar a história ↓</button>
      </section>

      {CHAPTERS.map((ch, k) => {
        const id = k < 6 ? `capitulo-${k + 1}` : "quem-sou";
        return (
          <section id={`m-${id}`} className="m-block" key={id}>
            <div className="m-numeral" aria-hidden="true">{ROMAN[k]}</div>
            <p className="mono">{k < 6 ? `Capítulo ${ROMAN[k]} · ${ch.label}` : ch.label}</p>
            <figure className="epi">
              <blockquote className="serif">{ch.epi}</blockquote>
              <figcaption className="mono small">— {ch.src}</figcaption>
            </figure>
            <h2 className="serif m-title">{ch.h} <em>{ch.em}</em></h2>
            {ch.img && (
              <figure className="m-plate-fig">
                <div className={`m-plate${ch.color ? " color" : ""}`} style={{ aspectRatio: ch.book ? "2 / 3" : ch.wide ? "4 / 3" : "4 / 5" }}>
                  <img src={ch.img} alt={ch.alt ?? ""} loading="lazy" />
                  {ch.tag && <span className="tag">{ch.tag}</span>}
                </div>
                <figcaption><span className="mono ink">Fig. {ROMAN[k]}</span><span className="mono">{ch.cap}</span></figcaption>
              </figure>
            )}
            {ch.p.map((t, n) => <p className="m-p" key={n}>{t}</p>)}
            {ch.pull && <blockquote className="serif pull">{ch.pull}</blockquote>}
            {ch.stats && (
              <div className="m-stats">{ch.stats.map((s) => <div key={s.v}><span className="serif">{s.v}</span><span className="muted">{s.l}</span></div>)}</div>
            )}
            {ch.href && <a className="textlink" href={ch.href} target="_blank" rel="noreferrer">{ch.linkLabel}</a>}
            {ch.end && <a className="cta dark block" href={WHATSAPP} target="_blank" rel="noreferrer">Conversar comigo ↗</a>}
            <button className="chip" onClick={() => setLb({ list: photosFor(CHAPTER_FILTER[k]), i: 0 })}>
              Ver fotos deste tema ({photosFor(CHAPTER_FILTER[k]).length}) →
            </button>
            <Next id={id} onJump={jump} />
          </section>
        );
      })}

      <section id="m-trabalho" className="m-block">
        <p className="mono">Trajetória · Trabalho</p>
        <h2 className="serif m-title">Dados, empresas <em>e ensino.</em></h2>
        <div className="m-group">{DETAILS.trab.map((r) => <div className="drow stack" key={r.a}><span className="muted small-text">{r.a}</span><span>{r.b}</span></div>)}</div>
        <Next id="trabalho" onJump={jump} />
      </section>

      <section id="m-formacao" className="m-block">
        <p className="mono">Trajetória · Formação e prêmios</p>
        <h2 className="serif m-title">Aprender, <em>sempre.</em></h2>
        <div className="m-group"><span className="mono">Formação</span>{DETAILS.form.map((t) => <div className="drow" key={t}>{t}</div>)}</div>
        <div className="m-group"><span className="mono">Reconhecimentos</span>{DETAILS.rec.map((t) => <div className="drow" key={t}>{t}</div>)}</div>
        <div className="m-group"><span className="mono">Ferramentas</span><div className="tools">{DETAILS.tools.split(", ").map((t) => <span className="tool" key={t}>{t}</span>)}</div></div>
        <Next id="formacao" onJump={jump} />
      </section>

      <section id="m-mundo" className="m-block">
        <p className="mono">Trajetória · Mundo</p>
        <h2 className="serif m-title">Conhecimento em <em>movimento.</em></h2>
        <p className="m-p">Palestras, congressos e visitas técnicas em {DETAILS.cities.length} cidades.</p>
        <div className="m-thumbs bleed">
          {mundo.map((p, n) => (
            <button key={p.img} className="m-thumb" onClick={() => setLb({ list: mundo, i: n })} aria-label={`Ampliar: ${p.cap}`}><img src={p.img} alt={p.cap} loading="lazy" /></button>
          ))}
        </div>
        <div className="m-cities">{DETAILS.cities.map((c) => <span key={c}>{c}</span>)}</div>
        <Next id="mundo" onJump={jump} />
      </section>

      <section id="m-fe" className="m-block">
        <p className="mono">Trajetória · Fé e missão</p>
        <h2 className="serif m-title">Fé, igreja <em>e serviço.</em></h2>
        {CONVICTIONS.map((c, n) => (
          <div className="m-conv" key={c.t}><span className="serif">{ROMAN[n]}</span><div><strong>{c.t}</strong><p>{c.d}</p></div></div>
        ))}
        <div className="m-group"><span className="mono">Missão VIDE</span><p className="drow">Departamento de missões que apoia cerca de 20 famílias missionárias em Moçambique, Angola, Tunísia, Espanha, França e Brasil.</p></div>
        <div className="m-group"><span className="mono">Missão NASCE · frentes</span><p className="drow">{DETAILS.nasce}</p></div>
        <Next id="fe" onJump={jump} />
      </section>

      <section id="m-fotografias" className="m-block flush">
        <div className="m-head"><h2 className="serif m-title">Fotografias</h2><span className="mono">{photosFor("all").length} fotos</span></div>
        {CATS.map(([key, label]) => {
          const list = photosFor(key);
          return (
            <div className="m-cat" key={key}>
              <div className="m-cat-h"><span className="serif">{label}</span><span className="mono">{list.length} · deslize →</span></div>
              <div className="m-thumbs">
                {list.map((p, n) => (
                  <button key={p.img + n} className="m-thumb" onClick={() => setLb({ list, i: n })} aria-label={`Ampliar: ${p.cap}`}><img src={p.img} alt={p.cap} loading="lazy" /></button>
                ))}
              </div>
            </div>
          );
        })}
        <div className="m-pad"><Next id="fotografias" onJump={jump} /></div>
      </section>

      <section id="m-contato" className="m-block">
        <p className="mono">Contato</p>
        <h2 className="serif m-title">Para perguntas, conversas <em>ou troca de informações.</em></h2>
        <a className="cta dark block" href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp ↗</a>
        <a className="cta line block" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <button className="m-next" onClick={() => jump("inicio")}><span className="mono small">Voltar</span><span>Início ↑</span></button>
      </section>

      {menu && (
        <div className="m-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="m-menu-top">
            <span className="serif m-brand">Eder Balbino</span>
            <button className="m-menu-btn" onClick={() => setMenu(false)}>Fechar
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="M3 3l8 8M11 3l-8 8" /></svg>
            </button>
          </div>
          <nav className="m-menu-nav">
            {SECTIONS.map((s) => {
              const items = BLOCKS.filter((b) => b.section === s.id);
              return (
                <div className="m-menu-sec" key={s.id}>
                  <button className={`m-menu-head${curBlock.section === s.id ? " on" : ""}`} onClick={() => jump(items[0].id)}>{s.label}</button>
                  {items.length > 1 && (
                    <ul>
                      {items.map((b) => (
                        <li key={b.id}>
                          <button className={`m-menu-sub${b.id === current ? " on" : ""}`} onClick={() => jump(b.id)}>
                            {b.kind === "chapter" && <span className="r">{ROMAN[b.ch!]}</span>}{b.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}

      {lb && (
        <div className="m-lightbox" role="dialog" aria-modal="true" aria-label={lb.list[lb.i].cap}>
          <button className="m-lbclose" aria-label="Fechar" onClick={() => setLb(null)}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="M3 3l8 8M11 3l-8 8" /></svg>
          </button>
          <img key={lb.list[lb.i].img} src={lb.list[lb.i].img} alt={lb.list[lb.i].cap} />
          <div className="m-lbcap"><span className="serif">{lb.list[lb.i].cap}</span><span className="pos">{lb.i + 1} / {lb.list.length}</span></div>
          <div className="m-lbnav">
            <button onClick={() => setLb({ ...lb, i: (lb.i - 1 + lb.list.length) % lb.list.length })}>← Anterior</button>
            <button onClick={() => setLb({ ...lb, i: (lb.i + 1) % lb.list.length })}>Próxima →</button>
          </div>
        </div>
      )}
    </div>
  );
}
