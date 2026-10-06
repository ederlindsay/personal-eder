export type Stat = { v: string; l: string };
export type Photo = { img: string; cap: string; cats: string[] };

const F = (name: string) => `/fotos/${name}.jpg`;

export const WHATSAPP = "https://wa.me/5534992942427";
export const LINKEDIN = "https://www.linkedin.com/in/ederbalbino/";
export const PORTRAIT = "/fotos/eder-desenho.webp";

export type Logo = { id: string; name: string; tall?: boolean };

const L = (id: string, name: string, tall = false): Logo => ({ id, name, tall });

/** Monochrome logos in /images/brand/mono, keyed by id. */
export const LOGOS = {
  vox: L("vox-populi", "Vox Populi"),
  oi: L("oi", "Oi", true),
  algarTelecom: L("algar-telecom", "Algar Telecom"),
  martins: L("martins", "Martins", true),
  sefaz: L("sefaz-mg", "SEFAZ MG"),
  embraer: L("embraer", "Embraer"),
  lagar: L("ong-lagar", "ONG Lagar", true),
  puc: L("puc-minas", "PUC Minas", true),
  ywam: L("ywam", "JOCUM (YWAM)"),
  lojaRentavel: L("loja-rentavel", "Loja Rentável"),
  ivarejo: L("ivarejo", "i-Varejo"),
  lince: L("lince", "Lince"),
  algarTech: L("algar-tech", "Grupo Algar"),
  aionow: L("aionow", "AioNow", true),
  beelong: L("beelong", "Beelong"),
  gaio: L("gaio", "Gaio DataOS"),
  weli: L("weli", "Weli"),
  childfund: L("childfund-brasil", "ChildFund Brasil"),
  gartner: L("gartner", "Gartner"),
  informa: L("informa", "Informa"),
  ufmg: L("ufmg", "UFMG"),
  inovativa: L("inovativa", "InovAtiva Brasil"),
  visa: L("visa", "Visa"),
  gptw: L("gptw", "Great Place to Work", true),
  sebrae: L("sebrae", "Sebrae", true),
};

export const logoSrc = (l: Logo) => `/images/brand/mono/${l.id}.png`;

const G = LOGOS;

export const DETAILS = {
  trab: [
    { a: "2004—2010", b: "Pesquisa e inteligência de dados · Vox Populi, Oi, Algar Telecom e Martins", logos: [G.vox, G.oi, G.algarTelecom, G.martins] },
    { a: "2011—2019", b: "Dados e prevenção a fraudes · TCU, TCE-CE, Secretarias de Fazenda, Ministério do Planejamento, Banco do Nordeste, Banpará, Embraer e Maxtera", logos: [G.sefaz, G.embraer] },
    { a: "2013—2015", b: "Vice-presidência da ONG Lagar", logos: [G.lagar] },
    { a: "Docência", b: "Ciência de Dados na PUC Minas · JOCUM (YWAM)", logos: [G.puc, G.ywam] },
    { a: "Empresas", b: "Loja Rentável, i-Varejo, Lince (adquirida pelo Grupo Algar em 2014), AioNow, Beelong, Gaio DataOS e Weli", logos: [G.lojaRentavel, G.ivarejo, G.lince, G.algarTech, G.aionow, G.beelong, G.gaio, G.weli] },
    { a: "Hoje", b: "Fundador e CEO da Gaio · cofundador da Weli · transformação tecnológica do ChildFund Brasil", logos: [G.gaio, G.weli, G.childfund] },
    { a: "Palestras", b: "Gartner e Informa · fé, tecnologia e trabalho · mentoria de empreendedores e jovens", logos: [G.gartner, G.informa] },
  ],
  form: [
    { t: "Estatística · UFMG", logos: [G.ufmg] },
    { t: "Gestão Estratégica da Informação · UFMG", logos: [G.ufmg] },
    { t: "Teologia · SEBI, Brasília", logos: [] },
    { t: "Product Design · Stanford, 2018", logos: [] },
    { t: "Inglês · English Live, 1º no ranking", logos: [] },
  ],
  rec: [
    { t: "InovAtiva Brasil · 1º lugar", logos: [G.inovativa] },
    { t: "Programa da Visa · 1º lugar", logos: [G.visa] },
    { t: "Sebrae · internacionalização", logos: [G.sebrae] },
    { t: "GITEX Dubai · 2025", logos: [] },
    { t: "Great Place to Work · Gaio", logos: [G.gptw] },
  ],
  fe: "Convicções: centralidade de Cristo, autoridade das Escrituras, soberania de Deus. Missão VIDE: famílias em Moçambique, Angola, Tunísia, Espanha, França e Brasil.",
  tools: "Gaio DataOS, SAS, RapidMiner, KNIME, IBM Analytics, Watson, Tableau, QlikView, Python, SQL, Oracle, MySQL, SQL Server, Teradata, MemSQL, Docker, Linux, Windows, macOS, CRM, MS Office, PHP",
  thumbs: [
    { name: "Dubai", img: F("dubai") },
    { name: "Londres", img: F("london") },
    { name: "Nova York", img: F("new-york") },
    { name: "Xangai", img: F("shanghai") },
    { name: "Paris", img: F("paris") },
    { name: "São Francisco", img: F("san-francisco") },
  ],
  cities: ["Abu Dhabi", "Austin", "Baltimore", "Boston", "Buenos Aires", "Cidade do México", "Dallas", "Dortmund", "Dubai", "Frankfurt", "Genebra", "Houston", "Londres", "Lyon", "Miami", "Milão", "Nova York", "Orlando", "Paris", "San Antonio", "São Francisco", "Shenzhen", "Washington", "Xangai"],
  nasce: "Amigos dos Miúdos, Educar Brincando, Alfabetização de Adultos, Programa Renasce, SAM, Nutrindo Vidas, Centro de Formação Integral e Apoio às Viúvas.",
};

const P = (name: string, cap: string, cats: string[]): Photo => ({ img: F(name), cap, cats });

export const PHOTOS: Photo[] = [
  P("origens-humildes", "Belo Horizonte", ["origens"]),
  P("familia-extendida", "Família estendida", ["origens", "familia"]),
  P("sonhos-empreendedores", "Juventude", ["origens"]),
  P("familia-proxima", "Heloísa, Emily, Sofia, Ravi e Nicole", ["familia"]),
  P("familia", "Em família", ["familia"]),
  P("san-antonio", "San Antonio", ["familia", "mundo"]),
  P("orlando", "Orlando", ["familia", "mundo"]),
  P("boston", "Boston", ["familia", "mundo"]),
  P("houston", "Houston", ["familia", "mundo"]),
  P("lyon", "Lyon", ["familia", "mundo"]),
  P("milan", "Milão", ["familia", "mundo"]),
  P("eder-balbino-hero", "Palestra", ["trabalho"]),
  P("teologia", "Palestra", ["trabalho", "fe"]),
  P("formacao-academica", "Stanford, 2018", ["trabalho", "mundo"]),
  P("vale-do-silicio", "Vale do Silício", ["trabalho", "mundo"]),
  P("desafio-do-ingles", "Londres · o desafio do inglês", ["trabalho", "mundo"]),
  P("o-caos", "2024", ["trabalho"]),
  P("pastor", "Evangelismo", ["fe"]),
  P("missao", "Missões", ["fe"]),
  P("nasce-hero", "Missão NASCE · Moçambique", ["fe"]),
  P("nasce-community", "Missão NASCE", ["fe"]),
  P("new-york", "Nova York · UpsideDown", ["fe", "mundo"]),
  P("dubai", "Dubai", ["mundo"]),
  P("abu-dhabi", "Abu Dhabi", ["mundo"]),
  P("london", "Londres", ["mundo"]),
  P("paris", "Paris", ["mundo"]),
  P("geneva", "Genebra", ["mundo"]),
  P("frankfurt", "Frankfurt", ["mundo"]),
  P("dortmund", "Dortmund", ["mundo"]),
  P("shanghai", "Xangai", ["mundo"]),
  P("shenzhen", "Shenzhen", ["mundo"]),
  P("san-francisco", "São Francisco", ["mundo"]),
  P("austin", "Austin", ["mundo"]),
  P("dallas", "Dallas", ["mundo"]),
  P("baltimore", "Baltimore", ["mundo"]),
  P("washington-dc", "Washington", ["mundo"]),
  P("miami", "Miami", ["mundo"]),
  P("mexico-city", "Cidade do México", ["mundo"]),
  P("buenos-aires", "Buenos Aires", ["mundo"]),
];

export const FILTERS: [string, string][] = [
  ["all", "Todas"],
  ["familia", "Família"],
  ["mundo", "Mundo"],
  ["trabalho", "Trabalho"],
  ["fe", "Fé e missão"],
  ["origens", "Origens"],
];

export const photosFor = (f: string) => PHOTOS.filter((p) => f === "all" || p.cats.includes(f));

export const CONVICTIONS = [
  { t: "Centralidade de Cristo", d: "A esperança não está na força pessoal, mas na pessoa e na obra de Jesus Cristo." },
  { t: "Autoridade das Escrituras", d: "A Palavra de Deus como referência para discernir a fé, o sofrimento e a responsabilidade." },
  { t: "Soberania de Deus", d: "Descansar na providência divina mesmo quando as circunstâncias permanecem incompreensíveis." },
];

/* ---------- Temas: o que mais importa, não a ordem cronológica ---------- */

/** Sculpture shapes in engine.ts: 0 semente · 1 escada · 2 crisálida · 3 livro · 4 borboleta · 5 árvore · 6 coração */
export type Topic = {
  id: string;
  section: string;
  label: string;
  kicker: string;
  h: string;
  em: string;
  p: string[];
  epi?: string;
  src?: string;
  img?: string;
  alt?: string;
  cap?: string;
  book?: boolean;
  wide?: boolean;
  color?: boolean;
  tag?: string;
  pull?: string;
  stats?: Stat[];
  list?: { t: string; d: string }[];
  note?: string;
  logos?: Logo[];
  href?: string;
  linkLabel?: string;
  more?: { label: string; to: string };
  shape: number;
  filter: string;
};

export const TOPICS: Topic[] = [
  {
    id: "organizacoes-cognitivas",
    section: "escritor",
    label: "Organizações Cognitivas",
    kicker: "Escritor · Novo livro",
    h: "Pessoas mudam. Empresas",
    em: "também.",
    p: ["Organizações Cognitivas — O futuro da sua empresa reúne o que aprendi em mais de 25 anos entre dados, tecnologia e pessoas."],
    pull: "“Uma empresa não se torna cognitiva porque usa IA. Torna-se cognitiva quando aprende a compreender e modificar a si mesma de forma automática.”",
    img: F("organizacoes-cognitivas-capa-hd"),
    book: true,
    color: true,
    tag: "Novo livro",
    cap: "Organizações Cognitivas",
    alt: "Capa do livro Organizações Cognitivas — O futuro da sua empresa",
    href: "https://www.cognitive.enterprises",
    linkLabel: "cognitive.enterprises ↗",
    shape: 4,
    filter: "trabalho",
  },
  {
    id: "desista-do-controle",
    section: "escritor",
    label: "Desista do Controle",
    kicker: "Escritor · Desista do Controle",
    epi: "“Aquietai-vos e sabei que eu sou Deus.”",
    src: "Salmo 46.10",
    h: "Desistir do controle não é",
    em: "desistir.",
    p: [
      "Desista do Controle é um livro sobre rendição e dependência de Deus, nascido dos estudos teológicos e de uma fé recebida em casa.",
      "É sobre encontrar chão firme justamente quando a sensação de controle deixa de existir.",
    ],
    img: F("desista-do-controle"),
    book: true,
    cap: "Desista do Controle",
    alt: "Capa do livro Desista do Controle",
    shape: 3,
    filter: "fe",
  },
  {
    id: "empreendedor",
    section: "empreendedor",
    label: "Gaio e empresas",
    kicker: "Empreendedor",
    h: "Dados, inteligência artificial e",
    em: "propósito.",
    p: [
      "Sou fundador e CEO da Gaio, responsável pelo Gaio DataOS — dados, inteligência artificial e agentes autônomos — e cofundador da Weli, voltada à saúde corporativa.",
      "Em mais de 25 anos, fundei e ajudei a construir empresas de varejo, atendimento, dados e software. A Lince foi adquirida pelo Grupo Algar em 2014. Hoje, a Gaio conduz a transformação tecnológica do ChildFund Brasil.",
    ],
    logos: [G.gaio, G.weli, G.lince, G.algarTech, G.childfund, G.beelong, G.aionow, G.ivarejo, G.lojaRentavel],
    img: F("vale-do-silicio"),
    cap: "Vale do Silício",
    alt: "Eder no Vale do Silício",
    more: { label: "Ver a trajetória completa", to: "trabalho" },
    shape: 1,
    filter: "trabalho",
  },
  {
    id: "palestrante",
    section: "palestrante",
    label: "Palestras e mentoria",
    kicker: "Palestrante e mentor",
    h: "Fé, tecnologia e",
    em: "trabalho.",
    p: [
      "Falo em eventos da Gartner e da Informa sobre fé, tecnologia e trabalho. A mensagem UpsideDown — sobre perseverar quando as possibilidades humanas parecem desaparecer — já foi levada ao Brasil e aos Estados Unidos.",
      "Fui professor de pós-graduação em Ciência de Dados na PUC Minas e professor na JOCUM, e acompanho empreendedores e jovens em início de carreira.",
    ],
    logos: [G.gartner, G.informa, G.puc, G.ywam],
    img: F("teologia"),
    cap: "Palestra",
    alt: "Eder falando ao microfone em uma palestra",
    more: { label: "Por onde já passei", to: "mundo" },
    shape: -1,
    filter: "trabalho",
  },
  {
    id: "pastor",
    section: "fe",
    label: "Pastor e missões",
    kicker: "Fé e missão",
    epi: "“Se alguém está em Cristo, é nova criatura.”",
    src: "2 Coríntios 5.17",
    h: "Fé, igreja e",
    em: "serviço.",
    p: [
      "Filho de pastor batista, graduei-me em Teologia pela SEBI, em Brasília, e me aproximei da tradição reformada. Sou pastor, escritor e mentor.",
      "Na Igreja Missão VIDE, lidero o departamento de missões, que apoia cerca de 20 famílias missionárias em Moçambique, Angola, Tunísia, Espanha, França e Brasil.",
    ],
    list: CONVICTIONS,
    img: F("missao"),
    wide: true,
    cap: "Missões",
    alt: "Eder com crianças em atividade missionária",
    shape: 5,
    filter: "fe",
  },
  {
    id: "missao-nasce",
    section: "fe",
    label: "Missão NASCE",
    kicker: "Fé e missão · Missão NASCE",
    epi: "“Mais bem-aventurado é dar que receber.”",
    src: "Atos 20.35",
    h: "Transformação existe para ser",
    em: "compartilhada.",
    p: ["Parte dos lucros da Gaio sustenta a Missão NASCE, que cuida de crianças e famílias em situação de vulnerabilidade no Brasil e em Moçambique."],
    stats: [
      { v: "+600", l: "cestas básicas por ano" },
      { v: "+1.000", l: "refeições por mês" },
      { v: "+3.500", l: "líderes formados no SAM" },
    ],
    note: "Frentes: Amigos dos Miúdos, Educar Brincando, Alfabetização de Adultos, Programa Renasce, SAM, Nutrindo Vidas, Centro de Formação Integral e Apoio às Viúvas.",
    img: F("nasce-hero"),
    wide: true,
    cap: "Missão NASCE · Moçambique",
    alt: "Crianças correndo em comunidade atendida pela Missão NASCE",
    shape: 5,
    filter: "fe",
  },
  {
    id: "familia",
    section: "familia",
    label: "Família",
    kicker: "Pai e marido",
    h: "O lugar de",
    em: "pertencimento.",
    p: [
      "Sou casado com Heloísa Cristina e pai de Emily, Sofia, Ravi e Nicole. A família ocupa um lugar central na minha vida.",
      "Caminho com propósito, não para ser grande, mas para ser fiel — buscando menos reconhecimento e mais significado.",
    ],
    img: F("familia-proxima"),
    wide: true,
    cap: "Heloísa, Emily, Sofia, Ravi e Nicole",
    alt: "Eder com Heloísa e os quatro filhos",
    shape: 6,
    filter: "familia",
  },
  {
    id: "desafios",
    section: "desafios",
    label: "Desafios",
    kicker: "Desafios",
    epi: "“Se morrer, produz muito fruto.”",
    src: "João 12.24",
    h: "Há estações em que perdemos o",
    em: "controle.",
    p: [
      "Em fevereiro de 2024, uma ordem de busca e apreensão foi cumprida na minha casa, numa investigação sobre uma análise de dados eleitorais feita pela Gaio.",
      "Foram dez meses de apuração e exposição. Ao final, não fui indiciado — fui chamado como testemunha. Não saí mais forte por mérito próprio; saí sabendo onde está a minha esperança.",
    ],
    pull: "“Há paz interior mesmo em meio à guerra exterior.”",
    shape: 2,
    filter: "trabalho",
  },
  {
    id: "origens",
    section: "origens",
    label: "Origens",
    kicker: "Origens",
    epi: "“Quem despreza o dia dos humildes começos?”",
    src: "Zacarias 4.10",
    h: "Todo começo parece",
    em: "pequeno.",
    p: [
      "Nasci em Belo Horizonte, num lar simples, o caçula de Pedro Balbino e Maria José. Meu pai era pastor. Cresci entre música, amizade e fé — e aos sete anos já juntava moedas para ter meu próprio negócio.",
      "Aos 15 anos, fiz meu primeiro site. Estudei Estatística na UFMG e, para aprender inglês, estudei 12 horas por dia durante três meses.",
    ],
    img: F("origens-humildes"),
    cap: "Belo Horizonte",
    alt: "Foto antiga da família de origem de Eder",
    shape: 0,
    filter: "origens",
  },
];

/* ---------- Navegação: seções (menu) e blocos (sub-menu) ---------- */

export type BlockKind = "home" | "topic" | "work" | "study" | "world" | "photos" | "contact";
export type Block = { id: string; section: string; label: string; kind: BlockKind; topic?: Topic };

export const SECTIONS = [
  { id: "inicio", label: "Início" },
  { id: "escritor", label: "Escritor" },
  { id: "empreendedor", label: "Empreendedor" },
  { id: "palestrante", label: "Palestrante" },
  { id: "fe", label: "Fé e missão" },
  { id: "familia", label: "Família" },
  { id: "desafios", label: "Desafios" },
  { id: "origens", label: "Origens" },
  { id: "fotografias", label: "Fotografias" },
  { id: "contato", label: "Contato" },
];

const T = (id: string): Block => {
  const t = TOPICS.find((x) => x.id === id)!;
  return { id: t.id, section: t.section, label: t.label, kind: "topic", topic: t };
};

export const BLOCKS: Block[] = [
  { id: "inicio", section: "inicio", label: "Início", kind: "home" },
  T("organizacoes-cognitivas"),
  T("desista-do-controle"),
  T("empreendedor"),
  { id: "trabalho", section: "empreendedor", label: "Trajetória completa", kind: "work" },
  { id: "formacao", section: "empreendedor", label: "Formação e prêmios", kind: "study" },
  T("palestrante"),
  { id: "mundo", section: "palestrante", label: "Por onde já passei", kind: "world" },
  T("pastor"),
  T("missao-nasce"),
  T("familia"),
  T("desafios"),
  T("origens"),
  { id: "fotografias", section: "fotografias", label: "Fotografias", kind: "photos" },
  { id: "contato", section: "contato", label: "Contato", kind: "contact" },
];
