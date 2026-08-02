"use client";

import { useEffect, useRef } from "react";

const chapters = [
  { n:"01", kicker:"Belo Horizonte", title:"Raízes que formam", text:"Fé, integridade, generosidade e música formaram a base de tudo.", image:"/images/origens-humildes.png", href:"#fundamentos", action:"Conhecer as raízes" },
  { n:"02", kicker:"Desde os sete", title:"Primeiros interesses", text:"A curiosidade por empresas e tecnologia apareceu cedo e permaneceu ao longo da vida profissional.", image:"/images/sonhos-empreendedores.png", href:"/carreira", action:"Percorrer a carreira" },
  { n:"03", kicker:"Formação", title:"Estudo e aprendizado", text:"Estatística, informação, teologia, dados e tecnologia fazem parte do percurso de formação.", image:"/images/formacao-academica.png", href:"/carreira", action:"Ver formação" },
  { n:"04", kicker:"Serviço", title:"Fé e missão", text:"Atividades pastorais, missionárias e sociais ligadas às convicções cristãs.", image:"/images/missao.png", href:"/vida-espiritual", action:"Conhecer a dimensão espiritual" },
  { n:"05", kicker:"Mundo", title:"Conhecimento em movimento", text:"Palestras, congressos e experiências culturais ampliaram o repertório e criaram novas relações.", image:"/images/vale-do-silicio.jpg", href:"/experiencia-internacional", action:"Explorar o mundo" },
];

export function HorizontalJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;
      const top = section.getBoundingClientRect().top;
      const distance = section.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -top / distance));
      const maxMove = Math.max(0, track.scrollWidth - window.innerWidth);
      track.style.transform = `translate3d(${-progress * maxMove}px,0,0)`;
    };
    update();
    window.addEventListener("scroll", update, { passive:true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  return <section className="horizontal-journey" ref={sectionRef}>
    <div className="journey-sticky">
      <div className="journey-head"><span>Resumo por capítulos</span><p>Continue rolando</p></div>
      <div className="journey-track" ref={trackRef}>
        {chapters.map((chapter) => <article className="journey-panel" key={chapter.n}>
          <div className="journey-photo"><img src={chapter.image} alt={chapter.title} /></div>
          <div className="journey-copy"><span>{chapter.n} — {chapter.kicker}</span><h2>{chapter.title}</h2><p>{chapter.text}</p><a href={chapter.href}>{chapter.action} ↗</a></div>
        </article>)}
        <article className="journey-end"><span>A trajetória continua nas quatro dimensões abaixo.</span><strong>↓</strong></article>
      </div>
      <div className="journey-progress" />
    </div>
  </section>;
}
