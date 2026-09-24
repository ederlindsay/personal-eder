import { InternationalGallery } from "../DeepDiveInteractions";

export default function Experiencia(){
  return <main className="inner-page dark-page">
    <section className="page-hero"><span>02 — Mundo</span><h1>Conhecimento em<br/>movimento.</h1><p>Palestras, congressos, visitas técnicas e encontros profissionais em diferentes países fazem parte da trajetória de Eder.</p></section>
    <InternationalGallery/>
    <section className="world-context"><div><span>Trocas internacionais</span><h2>Experiências em diferentes contextos.</h2></div><div><article><b>01</b><h3>Palestras</h3><p>Participação como palestrante em encontros ligados a dados, tecnologia, fé e trabalho.</p></article><article><b>02</b><h3>Congressos</h3><p>Eventos profissionais dedicados a debates e à troca de experiências.</p></article><article><b>03</b><h3>Visitas e aprendizado</h3><p>Encontros com empresas, universidades, igrejas e projetos em diferentes países.</p></article></div></section>
  </main>
}
