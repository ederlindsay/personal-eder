import { HorizontalJourney } from "./InteractivePortfolio";

const themes = [
  { href:"/carreira", n:"01", title:"Carreira", text:"Estatística, tecnologia, educação e empreendedorismo em uma trajetória iniciada ainda na adolescência.", image:"/images/formacao-academica.png" },
  { href:"/experiencia-internacional", n:"02", title:"Mundo", text:"Palestras, congressos, visitas técnicas e encontros com diferentes cidades e culturas.", image:"/images/international/dubai.png" },
  { href:"/vida-espiritual", n:"03", title:"Espiritual", text:"Fé reformada, pastorado, escrita, missões e confiança na soberania de Deus.", image:"/images/pastor.png" },
  { href:"/impacto-social", n:"04", title:"Social", text:"O apoio da Gaio à Missão NASCE e a iniciativas de educação, formação e cuidado.", image:"/images/nasce/nasce-hero.png" },
];

export default function Home() {
  return <main>
    <section className="hero home-hero">
      <div className="hero-copy"><p>Trajetória pessoal e profissional</p><h1>Uma vida.<br /><em>Muitos capítulos.</em></h1><blockquote>&quot;Caminho com propósito, não para ser grande, mas para ser fiel — buscando menos reconhecimento e mais significado.&quot;</blockquote><a href="#temas">Conhecer os temas <span>↓</span></a></div>
      <div className="hero-image"><img src="/images/eder-balbino-hero.png" alt="Eder Balbino" /></div>
    </section>
    <section className="opening"><span>Fé</span><i>•</i><span>Tecnologia</span><i>•</i><span>Propósito</span></section>
    <section className="foundations" id="fundamentos">
      <div className="foundations-intro"><span>O que sustenta a trajetória</span><h2>Raízes simples.<br/>Convicções profundas.</h2><p>Eder nasceu em Belo Horizonte, em uma família cristã de recursos limitados. Filho de Pedro Balbino e Maria José, cresceu entre fé, música, generosidade e trabalho — referências que continuam presentes em sua forma de liderar, empreender e servir.</p></div>
      <div className="foundations-grid">
        <figure><img src="/images/familia-proxima.jpg" alt="Eder com Heloísa e seus quatro filhos"/><figcaption><span>Família</span><h3>O lugar de pertencimento.</h3><p>Eder é casado com Heloísa Cristina e pai de Emily, Sofia, Ravi e Nicole. A vida familiar ocupa um lugar central em sua trajetória.</p></figcaption></figure>
        <figure><img src="/images/familia-extendida.jpeg" alt="Família de origem de Eder Balbino"/><figcaption><span>Origens</span><h3>Uma história recebida.</h3><p>Caçula de cinco irmãos, cresceu em uma casa marcada pela fé, pela música, pelo trabalho e pela convivência em família.</p></figcaption></figure>
      </div>
    </section>
    <HorizontalJourney />
    <section className="theme-hub" id="temas">
      <div className="hub-intro"><span>Navegação por tema</span><h2>Quatro dimensões.<br />Uma mesma vida.</h2><p>Explore a carreira, as experiências internacionais, a fé e os projetos sociais.</p></div>
      <div className="theme-list">{themes.map((theme)=><a href={theme.href} key={theme.href}><span>{theme.n}</span><div><h3>{theme.title}</h3><p>{theme.text}</p></div><img src={theme.image} alt="" /><b>↗</b></a>)}</div>
    </section>
    <section className="contact" id="contato"><p>Contato</p><h2>Para perguntas, conversas<br />ou troca de informações.</h2><a href="https://wa.me/5534992942427" target="_blank" rel="noreferrer">Entrar em contato <span>↗</span></a></section>
  </main>;
}
