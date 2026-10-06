"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
  BLOCKS, DETAILS, LINKEDIN, PORTRAIT, SECTIONS, WHATSAPP,
  photosFor, type Block, type Photo,
} from "./content";
import { Logos } from "./Logos";

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

function TopicSection({ b, onJump, onPhotos }: { b: Block; onJump: (id: string) => void; onPhotos: (list: Photo[]) => void }) {
  const ch = b.topic!;
  const photos = photosFor(ch.filter);
  return (
    <section id={`m-${b.id}`} className="m-block">
      <p className="mono">{ch.kicker}</p>
      {ch.epi && (
        <figure className="epi">
          <blockquote className="serif">{ch.epi}</blockquote>
          <figcaption className="mono small">— {ch.src}</figcaption>
        </figure>
      )}
      <h2 className="serif m-title">{ch.h} <em>{ch.em}</em></h2>
      {ch.img && (
        <figure className="m-plate-fig">
          <div className={`m-plate${ch.color ? " color" : ""}`} style={{ aspectRatio: ch.book ? "2 / 3" : ch.wide ? "4 / 3" : "4 / 5" }}>
            <img src={ch.img} alt={ch.alt ?? ""} loading="lazy" />
          </div>
          <figcaption><span className="mono ink">Fig.</span><span className="mono">{ch.cap}</span></figcaption>
          {ch.tag && <span className="tag">{ch.tag}</span>}
        </figure>
      )}
      {ch.p.map((t, n) => <p className="m-p" key={n}>{t}</p>)}
      {ch.pull && <blockquote className="serif pull">{ch.pull}</blockquote>}
      {ch.list && ch.list.map((c) => <div className="m-conv" key={c.t}><span className="serif">·</span><div><strong>{c.t}</strong><p>{c.d}</p></div></div>)}
      {ch.stats && (
        <div className="m-stats">{ch.stats.map((s) => <div key={s.v}><span className="serif">{s.v}</span><span className="muted">{s.l}</span></div>)}</div>
      )}
      {ch.note && <p className="small-text" style={{ margin: 0 }}>{ch.note}</p>}
      {ch.logos && <Logos items={ch.logos} />}
      {ch.href && <a className="textlink" href={ch.href} target="_blank" rel="noreferrer">{ch.linkLabel}</a>}
      {ch.more && <button className="chip" onClick={() => onJump(ch.more!.to)}>{ch.more.label} →</button>}
      <button className="chip" onClick={() => onPhotos(photos)}>Ver fotos ({photos.length}) →</button>
      <Next id={b.id} onJump={onJump} />
    </section>
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

  const mundo = photosFor("mundo");
  const special: Record<string, ReactNode> = {
    "trabalho": (
      <section id="m-trabalho" className="m-block">
        <p className="mono">Empreendedor · Trajetória completa</p>
        <h2 className="serif m-title">Dados, empresas <em>e ensino.</em></h2>
        <div className="m-group">{DETAILS.trab.map((r) => <div className="drow stack" key={r.a}><span className="muted small-text">{r.a}</span><span>{r.b}</span><Logos items={r.logos} /></div>)}</div>
        <Next id="trabalho" onJump={jump} />
      </section>
    ),
    "formacao": (
      <section id="m-formacao" className="m-block">
        <p className="mono">Empreendedor · Formação e prêmios</p>
        <h2 className="serif m-title">Aprender, <em>sempre.</em></h2>
        <div className="m-group"><span className="mono">Formação</span>{DETAILS.form.map((x) => <div className="drow with-logo" key={x.t}><span>{x.t}</span><Logos items={x.logos} /></div>)}</div>
        <div className="m-group"><span className="mono">Reconhecimentos</span>{DETAILS.rec.map((x) => <div className="drow with-logo" key={x.t}><span>{x.t}</span><Logos items={x.logos} /></div>)}</div>
        <div className="m-group"><span className="mono">Ferramentas</span><div className="tools">{DETAILS.tools.split(", ").map((t) => <span className="tool" key={t}>{t}</span>)}</div></div>
        <Next id="formacao" onJump={jump} />
      </section>
    ),
    "mundo": (
      <section id="m-mundo" className="m-block">
        <p className="mono">Palestrante · Por onde já passei</p>
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
    ),
    "fotografias": (
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
    ),
    "contato": (
      <section id="m-contato" className="m-block">
        <p className="mono">Contato</p>
        <h2 className="serif m-title">Para perguntas, conversas <em>ou troca de informações.</em></h2>
        <a className="cta dark block" href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp ↗</a>
        <a className="cta line block" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <button className="m-next" onClick={() => jump("inicio")}><span className="mono small">Voltar</span><span>Início ↑</span></button>
      </section>
    ),
  };

  const curBlock = BLOCKS.find((b) => b.id === current) ?? BLOCKS[0];

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
        <p className="mono ink">Escritor · Palestrante · Empreendedor · Pastor</p>
        <h1 className="serif">Eder <em>Balbino</em></h1>
        <p className="serif m-sub">Ninguém se transforma de uma vez.</p>
        <p className="m-p">Fundador e CEO da Gaio, autor de Organizações Cognitivas e Desista do Controle, pastor e mentor. Marido da Heloísa e pai de quatro.</p>
        <button className="cta dark block" onClick={() => jump("organizacoes-cognitivas")}>Conheça o novo livro ↓</button>
      </section>

      {BLOCKS.map((b) => {
        if (b.kind === "home") return null;
        if (b.topic) return <TopicSection key={b.id} b={b} onJump={jump} onPhotos={(list) => setLb({ list, i: 0 })} />;
        return <div key={b.id}>{special[b.id]}</div>;
      })}

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
