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
      "Na graduação, cursou Inteligência Artificial em 2000 e disciplinas de Marketing, conectando matemática, tecnologia e comportamento humano — uma combinação que permanece central em seu trabalho.",
      "A experiência profissional passou por Vox Populi, Oi, Algar Telecom e Martins, onde coordenou uma equipe de inteligência competitiva.",
      "Eder e Heloísa mudaram-se para Uberlândia com oito meses de casamento. Ele trabalhou na Algar Telecom e, depois de um ano, seguiu para o Martins.",
      "No Martins, passou a coordenar uma equipe de análise de dados e trabalhou com a plataforma SAS. A equipe chegou a reunir cerca de 12 pessoas."
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
    text:"Os anos seguintes reuniram consultorias para empresas, órgãos públicos e instituições financeiras. Os trabalhos envolveram análise de dados, prevenção a fraudes e formação de profissionais, incluindo um projeto no TCU que apontou aproximadamente R$ 50 bilhões em possíveis fraudes na Previdência Social.",
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
    text:"Ao longo da carreira, Eder participou da fundação de negócios voltados a varejo, atendimento, análise de dados e software. Alguns foram encerrados, outros mudaram de direção e a Lince foi adquirida pelo Grupo Algar. O conjunto registra aprendizados, tentativas, continuidade e mudanças de contexto.",
    details:[
      "A Loja Rentável foi criada para automatizar cotações entre atacadistas e varejistas. O projeto recebeu recursos de cinco investidores, mas foi encerrado oito meses depois, com a devolução de aproximadamente 85% do capital.",
      "Eder fundou a Lince, empresa de análise de dados parceira da RapidMiner na Alemanha, com projetos em SAS para Martins, Embraer e outras organizações.",
      "Após aproximadamente um ano de negociação, o Grupo Algar adquiriu a Lince. Os colaboradores foram incorporados à Algar Tech e Eder passou a atuar como executivo do grupo, inclusive em trabalhos com IBM Watson."
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
    text:"Programas de aceleração, eventos e certificações fizeram parte da trajetória das empresas. Essas experiências incluíram atividades no Vale do Silício e em Dubai, palestras em encontros profissionais e a avaliação do ambiente de trabalho da Gaio.",
    details:[
      "A empresa participou dos programas InovAtiva, Visa e SEBRAE, com atividades no Vale do Silício e em Dubai. Em 2018, Eder cursou Product Design em Stanford. A Gaio também obteve a certificação GPTW."
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
    title:"Gaio, Weli e uma possível colaboração social",
    text:"Atualmente, Eder é CEO da Gaio e cofundador da Weli. A Gaio trabalha com plataformas de dados, inteligência artificial e agentes autônomos; a Weli integra saúde, bem-estar, gestão e proteção legal. Também existem conversas sobre uma possível colaboração tecnológica com o ChildFund Brasil.",
    details:[
      "O médico Vinícius Paulino apresentou a Eder uma necessidade que poderia ser tratada com IA. Em um mês, foram desenvolvidos quatro sistemas para testar a proposta.",
      "Os dois criaram a Weli — Well-Being Intelligence. Em cerca de cinco meses, a empresa chegou a aproximadamente 15 clientes e receita recorrente próxima de R$ 10 mil. O projeto combina saúde, bem-estar, gestão e proteção legal."
    ],
    marks:[
      {image:"/images/brand/normalized/gaio.png",name:"Gaio DataOS",caption:"Atuação como CEO",format:"standard"},
      {image:"/images/brand/normalized/weli.png",name:"Weli",caption:"Atuação como cofundador",format:"wide"},
      {image:"/images/brand/normalized/childfund-brasil.png",name:"ChildFund Brasil",caption:"Possível colaboração em estudo",format:"wide"},
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
