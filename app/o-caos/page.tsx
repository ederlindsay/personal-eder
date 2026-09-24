const chaosChapters = [
  {
    n:"01", title:"O contexto",
    text:"Eder nasceu em uma realidade de grande dificuldade, estudou em escola pública, formou família e construiu uma trajetória em dados e tecnologia. Aos 43 anos, foi inserido em uma investigação relacionada ao cenário político nacional. Seu nome apareceu em mais de 200 reportagens no Brasil e no exterior, enquanto estimativas divulgadas durante a apuração mencionavam uma possível pena de 16 anos."
  },
  {
    n:"02", title:"O sistema e as eleições de 2022",
    text:"A Gaio, desenvolvedora do Gaio DataOS, foi contratada pelo Instituto Voto Legal para analisar dados das eleições presidenciais de 2022. O instituto havia sido contratado pelo Partido Liberal. O sistema processou os dados e apontou inconsistências que passaram a integrar o debate público e a investigação."
  },
  {
    n:"03", title:"A busca e apreensão",
    text:"A Polícia Federal esteve em sua residência e levou equipamentos e passaportes. Por decisão do ministro Alexandre de Moraes, Eder ficou impedido de deixar o Brasil e teve restrições de contato. Sua esposa e os quatro filhos acompanharam aquele momento, em um período marcado por apreensão e incerteza."
  },
  {
    n:"04", title:"Dez meses de investigação",
    text:"Após cerca de dez meses, a investigação foi concluída sem o indiciamento de Eder. Posteriormente, o procurador-geral da República, Paulo Gonet, convocou-o como testemunha no processo junto ao STF. O ano de 2024 reuniu novos desafios, receios e consequências pessoais, familiares e profissionais."
  },
  {
    n:"05", title:"Uma experiência espiritual",
    text:"Durante os dias em que não sabia se seria preso nem o que aconteceria com a família, Eder passou a compreender a esperança como algo que não depende das circunstâncias, mas da confiança em Jesus Cristo. O período que descreve como um vale da sombra da morte desfez a sensação de controle e tornou a fé uma experiência concreta de refúgio."
  },
  {
    n:"06", title:"111 — 102",
    text:"Cento e onze dias depois de 8 de fevereiro de 2024, data da busca e apreensão, Eder registrava 101 ocasiões em que entendia ter sido orientado por Jesus. Em 28 de maio, a 102ª experiência tornou-se o ponto de partida para compartilhar publicamente o que estava vivendo. O significado não estava apenas em aprender a viver um dia de cada vez, mas em esperar o melhor de Deus sem presumir qual seria esse melhor."
  },
];

export default function OCaos(){
  return <main className="inner-page chaos-page">
    <section className="page-hero chaos-page-hero">
      <span>03 — Espiritual</span>
      <h1>O Caos — a história completa</h1>
      <p>Um relato pessoal sobre a investigação de 2024 e a esperança encontrada em Jesus Cristo.</p>
    </section>
    <section className="chaos-complete">
      <div className="chaos-intro"><span>Da dor ao refúgio secreto</span><h2>Da investigação à esperança</h2><p>O relato reúne o contexto dos acontecimentos e as reflexões espirituais nascidas daquele período.</p></div>
      <div className="chaos-chapters">{chaosChapters.map(chapter=><article key={chapter.n}><span>{chapter.n}</span><h3>{chapter.title}</h3><p>{chapter.text}</p></article>)}</div>
      <div className="chaos-context">
        <article><span>Pessoas e instituições citadas</span><h3>O ambiente público da investigação</h3><p>O relato menciona o ex-presidente Jair Bolsonaro, o ministro do STF Alexandre de Moraes, o Instituto Voto Legal, o Partido Liberal, a Polícia Federal, a Procuradoria-Geral da República e a cobertura da imprensa nacional e internacional.</p></article>
        <article><span>Contexto profissional</span><h3>Dados antes do episódio</h3><p>Antes da investigação, Eder já havia trabalhado por mais de 25 anos com inteligência de dados em empresas e projetos públicos, fundado empresas de tecnologia, lecionado Ciência de Dados e participado de eventos da Gartner e da Informa.</p></article>
      </div>
      <blockquote className="chaos-hope">“Por não saber qual será o melhor dele para mim, tomou a liberdade de imaginar e a essa esperança se apegar.”</blockquote>
      <div className="chaos-meaning"><span>O significado</span><h3>A lição de Casper ten Boom</h3><p>A imagem do bilhete que chega na hora de embarcar tornou-se uma referência para o período: a força necessária chegaria junto com a adversidade. O amor também chegaria com o convite para amar aqueles que poderiam ser vistos como inimigos, compreendidos no relato como servos inconscientes do Altíssimo.</p><strong>O propósito da vida nunca foi a busca do prazer ou a fuga da dor, mas conhecer o Autor.</strong></div>
      <div className="chaos-testimony"><h3>Esperança em meio ao caos</h3><p>A conclusão apresentada em 111–102 é que a esperança encontrada não é ausência de caos, mas a presença de Alguém. Mesmo quando os acontecimentos não são compreendidos, Jesus Cristo permanece fiel. As cicatrizes não são apresentadas como troféus, mas como lembranças da graça e de uma vida que não permaneceu igual.</p><a href="https://www.111-102.com/" target="_blank" rel="noreferrer">Visitar o relato original ↗</a></div>
    </section>
  </main>
}
