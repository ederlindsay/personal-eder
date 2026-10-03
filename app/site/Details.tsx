import type { DETAILS } from "./content";

export function Details({ d }: { d: typeof DETAILS }) {
  return (
    <div className="dcols">
      <section className="dcol">
        <span className="mono">Trabalho</span>
        {d.trab.map((r) => (
          <div className="drow two" key={r.a}><span className="muted">{r.a}</span><span>{r.b}</span></div>
        ))}
      </section>
      <section className="dcol">
        <div className="dgroup">
          <span className="mono">Formação</span>
          {d.form.map((t) => <div className="drow" key={t}>{t}</div>)}
        </div>
        <div className="dgroup">
          <span className="mono">Reconhecimentos</span>
          {d.rec.map((t) => <div className="drow" key={t}>{t}</div>)}
        </div>
        <div className="dgroup">
          <span className="mono">Fé</span>
          <p className="drow">{d.fe}</p>
        </div>
        <div className="dgroup">
          <span className="mono">Ferramentas</span>
          <p className="drow small-text">{d.tools}</p>
        </div>
      </section>
      <section className="dcol">
        <span className="mono">Mundo · {d.cities.length} cidades</span>
        <div className="dthumbs">
          {d.thumbs.map((t) => (
            <div className="thumb" key={t.name}><img src={t.img} alt={`Eder em ${t.name}`} loading="lazy" /></div>
          ))}
        </div>
        <div className="dcities">
          {d.cities.map((c) => <span key={c}>{c}</span>)}
        </div>
        <span className="mono" style={{ paddingTop: 8 }}>Missão NASCE · frentes</span>
        <p className="drow small-text">{d.nasce}</p>
      </section>
    </div>
  );
}
