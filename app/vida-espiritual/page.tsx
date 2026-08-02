import { SpiritualTabs } from "../DeepDiveInteractions";

export default function Espiritual(){
  return <main className="inner-page">
    <section className="page-hero spiritual-hero"><span>03 — Espiritual</span><h1>Fé, igreja<br/>e serviço.</h1><p>Uma fé recebida em casa, aprofundada nas Escrituras e vivida no pastorado, nas missões e em períodos nos quais a sensação de controle deixou de existir.</p></section>
    <SpiritualTabs/>
    <section className="spiritual-chronicle" id="trajetoria-espiritual">
      <article><span>Das origens ao ministério</span><h2>Teologia reformada, ministério e missões</h2><p>Filho de pastor batista, Eder cresceu em uma família cristã. Na SEBI, aprofundou a formação teológica e se aproximou da tradição reformada, com ênfase na soberania de Deus, na centralidade das Escrituras e na graça. Desses estudos nasceu o livro Desista do Controle.</p><p>Como pastor de missões da Missão VIDE, lidera o departamento responsável pelo apoio a aproximadamente 20 famílias missionárias em vários países.</p></article>
      <article><span>Após 2024</span><h2>UpsideDown</h2><p>Eder preparou uma pregação sobre superação, perseverança e confiança em Jesus. A mensagem não trata de vencer pela força pessoal, mas de confiar em Cristo quando as possibilidades humanas desaparecem.</p><p>UpsideDown foi apresentada no Brasil e nos Estados Unidos e permanece entre as mensagens que ele considera mais importantes.</p></article>
    </section>
    <section className="chaos-callout">
      <div className="chaos-intro"><span>Da dor ao refúgio secreto</span><h2>O Caos — a história completa</h2><p>Eder apresenta este relato não como uma história de força pessoal, mas como o registro de alguém comum que atravessou uma experiência assustadora e encontrou esperança em Jesus Cristo.</p></div>
      <a className="chaos-page-link" href="/o-caos">Aprofundar este capítulo <span>↗</span></a>
    </section>
    <section className="principles"><span>Convicções</span><div><article><b>01</b><h3>Centralidade de Cristo</h3><p>A esperança não está na força pessoal, mas na pessoa e na obra de Jesus Cristo.</p></article><article><b>02</b><h3>Autoridade das Escrituras</h3><p>A Palavra de Deus como referência para discernir a fé, o sofrimento e a responsabilidade.</p></article><article><b>03</b><h3>Soberania de Deus</h3><p>Descansar na providência divina mesmo quando as circunstâncias permanecem incompreensíveis.</p></article></div></section>
    <section className="philosophy"><span>Reflexão pessoal</span><blockquote>“Há paz interior mesmo em meio à guerra exterior.”</blockquote><p>Essa frase resume a busca por serenidade em períodos difíceis e a confiança na soberania de Deus.</p></section>
  </main>
}
