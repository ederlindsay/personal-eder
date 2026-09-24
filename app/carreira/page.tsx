"use client";

import { useState } from "react";

type Mark = {
  image?: string;
  name: string;
  caption: string;
  format?: "wide" | "standard" | "compact" | "badge";
};

const chapters: {period:string; title:string; text:string; details?:string[]; marks:Mark[]}[] = [
  {
    period:"Formação e início profissional",
    title:"Da Estatística à inteligência de dados",
    text:"O interesse por matemática, empresas e computadores começou ainda na infância. Aos 15 anos, Eder criou seu primeiro site profissional; mais tarde, a formação em Estatística e Gestão Estratégica da Informação na UFMG abriu caminho para atividades de pesquisa, análise e tecnologia.",
    details:[
      "Na UFMG, estudou Estatística, Gestão Estratégica da Informação e Inteligência Artificial.",
      "Atuou em pesquisa e inteligência de dados na Vox Populi, Oi, Algar Telecom e Martins, incluindo projetos de análise competitiva com SAS."
    ],
    marks:[
      {image:"/images/brand/normalized/ufmg.png",name:"UFMG",caption:"Graduação e pós-graduação",format:"wide"},
      {image:"/images/brand/normalized/vox-populi.png",name:"Vox Populi",caption:"Análise de informações · 2004—2006",format:"standard"},
      {image:"/images/brand/normalized/oi.png",name:"Oi",caption:"Análise de informações · 2006",format:"compact"},
      {image:"/images/brand/normalized/algar-telecom.png",name:"Algar Telecom",caption:"Data Mining · 2007",format:"wide"},
      {image:"/images/brand/normalized/martins.png",name:"Martins",caption:"Inteligência competitiva · 2007—2010",format:"compact"},
    ]
  },
  {
    period:"Consultoria, setor público e docência",
    title:"Dados aplicados a diferentes instituições",
    text:"Os anos seguintes reuniram projetos de análise de dados e prevenção a fraudes para empresas e órgãos públicos, além da formação de profissionais em Ciência de Dados.",
    details:[
      "A trajetória incluiu Ministério do Planejamento, Secretarias de Fazenda, Procuradoria, Tribunais de Contas, Banpará e Banco do Nordeste, além da docência em Ciência de Dados na PUC Minas e na JOCUM."
    ],
    marks:[
      {image:"/images/brand/normalized/sefaz-mg.png",name:"SEFAZ MG",caption:"Consultoria em Analytics · 2011—2012",format:"wide"},
      {image:"/images/brand/normalized/embraer.png",name:"Embraer",caption:"Atividade de Big Data · 2013",format:"wide"},
      {name:"MAXTERA",caption:"Fraudes tributárias · 2016—2019"},
      {image:"/images/brand/normalized/puc-minas.png",name:"PUC Minas",caption:"Docência em Data Science e Big Data",format:"compact"},
      {image:"/images/brand/normalized/ywam.png",name:"YWAM",caption:"Docência e mentoria",format:"wide"},
      {image:"/images/brand/normalized/ong-lagar.png",name:"ONG Lagar",caption:"Vice-presidência · 2013—2015",format:"badge"},
    ]
  },
  {
    period:"Empreendedorismo",
    title:"Projetos construídos em diferentes momentos",
    text:"Eder fundou e participou de empresas voltadas a varejo, atendimento, análise de dados e software. Entre elas está a Lince, adquirida pelo Grupo Algar.",
    details:[
      "A Loja Rentável foi criada para automatizar cotações entre atacadistas e varejistas.",
      "A Lince desenvolveu projetos de análise de dados para empresas como Martins e Embraer. Após a aquisição pelo Grupo Algar, Eder atuou como executivo do grupo, inclusive em iniciativas com IBM Watson."
    ],
    marks:[
      {image:"/images/brand/normalized/loja-rentavel.png",name:"Loja Rentável",caption:"Automação de cotações",format:"wide"},
      {image:"/images/brand/normalized/ivarejo.png",name:"i-varejo",caption:"Tecnologia para o varejo",format:"wide"},
      {image:"/images/brand/normalized/aionow.png",name:"aioNow",caption:"Atendimento empresarial",format:"compact"},
      {image:"/images/brand/normalized/lince.png",name:"Lince",caption:"Adquirida pelo Grupo Algar",format:"standard"},
      {image:"/images/brand/normalized/beelong.png",name:"Beelong",caption:"Empresa fundada nos Estados Unidos",format:"wide"},
      {image:"/images/brand/normalized/gaio.png",name:"Gaio DataOS",caption:"Dados, IA e agentes autônomos",format:"standard"},
      {image:"/images/brand/normalized/weli.png",name:"Weli",caption:"Saúde, bem-estar e gestão",format:"wide"},
    ]
  },
  {
    period:"Programas, eventos e ambiente de trabalho",
    title:"Participações que ampliaram o repertório",
    text:"Participou de programas de aceleração, encontros profissionais e iniciativas de internacionalização, com atividades no Vale do Silício e em Dubai.",
    details:[
      "Em 2018, Eder cursou Product Design em Stanford. A Gaio obteve a certificação Great Place to Work."
    ],
    marks:[
      {image:"/images/brand/normalized/visa.png",name:"Visa",caption:"Programa de aceleração",format:"standard"},
      {image:"/images/brand/normalized/inovativa.png",name:"InovAtiva Brasil",caption:"Programa de aceleração",format:"standard"},
      {image:"/images/brand/normalized/sebrae.png",name:"Sebrae",caption:"Internacionalização",format:"compact"},
      {image:"/images/brand/normalized/gartner.png",name:"Gartner",caption:"Eventos e palestras",format:"wide"},
      {image:"/images/brand/normalized/informa.png",name:"Informa",caption:"Eventos e palestras",format:"standard"},
      {image:"/images/brand/normalized/gptw.png",name:"Great Place to Work",caption:"Certificação da Gaio",format:"badge"},
    ]
  },
  {
    period:"Atuação atual",
    title:"Gaio, Weli e a transformação do ChildFund",
    text:"Eder atua em projetos de dados e inteligência artificial na Gaio e é cofundador da Weli, voltada à saúde corporativa. A Gaio realiza a transformação tecnológica do ChildFund Brasil.",
    marks:[
      {image:"/images/brand/normalized/gaio.png",name:"Gaio DataOS",caption:"Dados e inteligência artificial",format:"standard"},
      {image:"/images/brand/normalized/weli.png",name:"Weli",caption:"Saúde corporativa",format:"wide"},
      {image:"/images/brand/normalized/childfund-brasil.png",name:"ChildFund Brasil",caption:"Transformação tecnológica em andamento",format:"wide"},
    ]
  },
];

function LogoMark({mark}:{mark:Mark}){
  return <figure className="career-mark">
    <div className={`career-mark-visual ${mark.format ?? "standard"}`}>
      {mark.image?<img src={mark.image} alt={mark.name}/>:<strong>{mark.name}</strong>}
    </div>
    <figcaption>{mark.caption}</figcaption>
  </figure>
}

export default function Carreira(){
  const [active,setActive] = useState(0);
  return <main className="inner-page">
    <section className="page-hero career-hero"><span>01 — Carreira</span><h1>Trabalho, formação<br/>e projetos.</h1><p>Mais de 25 anos conectando estatística, tecnologia, educação e empreendedorismo — com os acertos, transições e aprendizados que deram forma ao percurso.</p></section>
    <section className="career-story">
      <div className="career-chapter-tabs" role="tablist" aria-label="Capítulos da carreira">
        {chapters.map((chapter,index)=><button type="button" role="tab" aria-selected={active===index} className={active===index?"active":""} onClick={()=>setActive(index)} key={chapter.period}><span>{String(index+1).padStart(2,"0")}</span>{chapter.period}</button>)}
      </div>
      <div className="career-chapter-stage">
        {chapters.map((chapter,index)=><article className={`career-chapter ${active===index?"active":""}`} aria-hidden={active!==index} key={chapter.title}>
          <div className="career-chapter-copy"><span>{String(index+1).padStart(2,"0")} — {chapter.period}</span><h2>{chapter.title}</h2><p>{chapter.text}</p>{chapter.details?.map(detail=><p className="career-detail" key={detail}>{detail}</p>)}</div>
          <div className="career-logo-flow">{chapter.marks.map(mark=><LogoMark mark={mark} key={`${chapter.title}-${mark.name}`}/>)}</div>
        </article>)}
      </div>
    </section>
  </main>
}
