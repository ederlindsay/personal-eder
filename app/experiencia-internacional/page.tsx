import { InternationalGallery } from "../DeepDiveInteractions";

export default function Experiencia(){
  return <main className="inner-page dark-page">
    <section className="page-hero"><span>02 — Mundo</span><h1>Conhecimento em<br/>movimento.</h1><p>Uma trajetória internacional construída em palestras, congressos, encontros profissionais, visitas técnicas e experiências culturais — compartilhando conhecimento e aprendendo com cada contexto.</p></section>
    <InternationalGallery/>
    <section className="world-context"><div><span>Trocas internacionais</span><h2>Viajar como forma de compartilhar e ampliar conhecimento.</h2></div><div><article><b>01</b><h3>Palestras</h3><p>Participação como palestrante em encontros ligados a dados, tecnologia, fé e trabalho.</p></article><article><b>02</b><h3>Congressos</h3><p>Presença em eventos profissionais para acompanhar debates, apresentar experiências e construir relações.</p></article><article><b>03</b><h3>Visitas e aprendizado</h3><p>Contato com empresas, universidades, igrejas, projetos e culturas que contribuíram para novas perspectivas.</p></article></div></section>
  </main>
}
