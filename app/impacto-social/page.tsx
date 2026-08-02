const projects=["Amigos dos Miúdos","Educar Brincando","Alfabetização de Adultos","Programa Renasce","SAM","Nutrindo Vidas","Centro de Formação Integral","Apoio às Viúvas"];

export default function Impacto(){
  return <main className="inner-page">
    <section className="page-hero impact-hero"><span>04 — Social</span><h1>Missão NASCE<br/>e projetos apoiados.</h1><p>Uma parceria que transforma parte do resultado empresarial em educação, formação e cuidado no Brasil e em Moçambique.</p></section>
    <section className="impact-feature"><img src="/images/nasce/nasce-hero.png" alt="Missão NASCE"/><div><span>Sobre o apoio</span><h2>Uma parceria ligada à fé e ao serviço.</h2><p>A Gaio destina parte de seus lucros ao apoio de famílias e crianças em situação de vulnerabilidade. Os recursos colaboram com atividades mantidas pela Missão NASCE.</p><a href="https://mnasce.com/" target="_blank">Site da Missão NASCE ↗</a></div></section>
    <section className="impact-numbers"><article><strong>+600</strong><span>cestas básicas fornecidas anualmente</span></article><article><strong>+1.000</strong><span>refeições entregues mensalmente</span></article><article><strong>+3.500</strong><span>líderes e pastores formados no SAM</span></article></section>
    <section className="project-index"><div><span>Frentes de atuação</span><h2>Projetos mantidos pela Missão NASCE.</h2></div><div>{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3></article>)}</div></section>
    <section className="impact-gallery"><img src="/images/nasce/nasce-project.png" alt="Projeto da Missão NASCE"/><img src="/images/nasce/nasce-community.jpg" alt="Comunidade atendida pela Missão NASCE"/></section>
  </main>
}
