export type Stat = { v: string; l: string };

export type Chapter = {
  label: string;
  epi: string;
  src: string;
  h: string;
  em: string;
  p: string[];
  img?: string;
  alt?: string;
  cap?: string;
  book?: boolean;
  wide?: boolean;
  color?: boolean;
  tag?: string;
  pull?: string;
  stats?: Stat[];
  href?: string;
  linkLabel?: string;
  end?: boolean;
};

export type Photo = { img: string; cap: string; cats: string[] };

const F = (name: string) => `/fotos/${name}.jpg`;

export const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII"];

export const WHATSAPP = "https://wa.me/5534992942427";

export const CHAPTERS: Chapter[] = [
  {
    label: "O começo",
    epi: "“Quem despreza o dia dos humildes começos?”",
    src: "Zacarias 4.10",
    h: "Todo começo parece",
    em: "pequeno.",
    img: F("origens-humildes"),
    cap: "Belo Horizonte",
    alt: "Foto antiga da família de origem de Eder",
    p: [
      "Nasci em Belo Horizonte, num lar simples, o caçula de Pedro Balbino e Maria José. Meu pai era pastor. Cresci entre música, amizade e fé.",
      "Aos sete anos, juntava moedas para ter meu próprio negócio — e gastei tudo com picolés da Dona Teófila quando os amigos vieram me visitar. Aprendi cedo que generosidade também é investimento.",
    ],
  },
  {
    label: "A construção",
    epi: "“Adquire a sabedoria, adquire o entendimento.”",
    src: "Provérbios 4.5",
    h: "Aprender é uma forma de",
    em: "esperança.",
    img: F("formacao-academica"),
    cap: "Stanford, 2018",
    alt: "Eder em Stanford",
    p: [
      "Aos 15 anos, fiz meu primeiro site. Na UFMG, estudei Estatística e descobri nos dados uma forma de compreender o mundo. Para aprender inglês, estudei 12 horas por dia durante três meses.",
      "Depois vieram empresas, projetos e salas de aula. Nenhum deles foi um salto. Cada um foi um degrau.",
    ],
  },
  {
    label: "O casulo",
    epi: "“Se morrer, produz muito fruto.”",
    src: "João 12.24",
    h: "Há estações em que perdemos o",
    em: "controle.",
    pull: "“Há paz interior mesmo em meio à guerra exterior.”",
    p: [
      "Em fevereiro de 2024, uma ordem de busca e apreensão foi cumprida na minha casa, numa investigação sobre uma análise de dados eleitorais feita pela Gaio.",
      "Foram dez meses de apuração e exposição. Ao final, não fui indiciado — fui chamado como testemunha. Não saí mais forte por mérito próprio; saí sabendo onde está a minha esperança.",
    ],
  },
  {
    label: "A rendição",
    epi: "“Aquietai-vos e sabei que eu sou Deus.”",
    src: "Salmo 46.10",
    h: "Desistir do controle não é",
    em: "desistir.",
    img: F("desista-do-controle"),
    book: true,
    cap: "Desista do Controle",
    alt: "Capa do livro Desista do Controle",
    p: [
      "Foi o que aprendi — e o que escrevi em Desista do Controle, um livro sobre rendição e dependência de Deus. A fé que recebi em casa, aprofundada na Teologia, virou chão firme.",
      "Dessa travessia nasceu UpsideDown, uma mensagem sobre perseverar quando as possibilidades humanas parecem desaparecer, levada ao Brasil e aos Estados Unidos.",
    ],
  },
  {
    label: "A transformação",
    epi: "“Transformai-vos pela renovação da vossa mente.”",
    src: "Romanos 12.2",
    h: "Pessoas mudam. Empresas",
    em: "também.",
    img: F("organizacoes-cognitivas-capa"),
    book: true,
    color: true,
    tag: "Novo livro · em breve",
    cap: "Organizações Cognitivas",
    alt: "Capa do livro Organizações Cognitivas — O futuro da sua empresa",
    p: ["Depois de mais de 25 anos entre dados, tecnologia e pessoas, escrevi Organizações Cognitivas — O futuro da sua empresa."],
    pull: "“Uma empresa não se torna cognitiva porque usa IA. Torna-se cognitiva quando aprende a compreender e modificar a si mesma de forma automática.”",
    href: "https://www.cognitive.enterprises",
    linkLabel: "cognitive.enterprises ↗",
  },
  {
    label: "O que se multiplica",
    epi: "“Mais bem-aventurado é dar que receber.”",
    src: "Atos 20.35",
    h: "Transformação existe para ser",
    em: "compartilhada.",
    img: F("nasce-hero"),
    wide: true,
    cap: "Missão NASCE · Moçambique",
    alt: "Crianças correndo em comunidade atendida pela Missão NASCE",
    p: [
      "Parte dos lucros da Gaio sustenta a Missão NASCE, que cuida de crianças e famílias vulneráveis no Brasil e em Moçambique. Na Igreja Missão VIDE, lidero o apoio a cerca de 20 famílias missionárias em seis países.",
    ],
    stats: [
      { v: "+600", l: "cestas básicas por ano" },
      { v: "+1.000", l: "refeições por mês" },
      { v: "+3.500", l: "líderes formados no SAM" },
    ],
  },
  {
    label: "Quem sou eu",
    epi: "“Se alguém está em Cristo, é nova criatura.”",
    src: "2 Coríntios 5.17",
    h: "Eu sou",
    em: "Eder Balbino.",
    end: true,
    img: F("familia-proxima"),
    wide: true,
    cap: "Heloísa, Emily, Sofia, Ravi e Nicole",
    alt: "Eder com Heloísa e os quatro filhos",
    p: [
      "Marido da Heloísa e pai de Emily, Sofia, Ravi e Nicole. Estatístico, fundador e CEO da Gaio, pastor, mentor e escritor.",
      "Caminho com propósito, não para ser grande, mas para ser fiel — buscando menos reconhecimento e mais significado. Inovador, generoso, intenso; com prazer em ensinar.",
    ],
  },
];

export const DETAILS = {
  trab: [
    { a: "2004—2010", b: "Pesquisa e inteligência de dados · Vox Populi, Oi, Algar Telecom e Martins" },
    { a: "2011—2019", b: "Dados e prevenção a fraudes · TCU, TCE-CE, Secretarias de Fazenda, Ministério do Planejamento, Banco do Nordeste, Banpará, Embraer e Maxtera" },
    { a: "2013—2015", b: "Vice-presidência da ONG Lagar" },
    { a: "Docência", b: "Ciência de Dados na PUC Minas · JOCUM (YWAM)" },
    { a: "Empresas", b: "Loja Rentável, i-Varejo, Lince (adquirida pelo Grupo Algar em 2014), AioNow, Beelong, Gaio DataOS e Weli" },
    { a: "Hoje", b: "Fundador e CEO da Gaio · cofundador da Weli · transformação tecnológica do ChildFund Brasil" },
    { a: "Palestras", b: "Gartner e Informa · fé, tecnologia e trabalho · mentoria de empreendedores e jovens" },
  ],
  form: ["Estatística · UFMG", "Gestão Estratégica da Informação · UFMG", "Teologia · SEBI, Brasília", "Product Design · Stanford, 2018", "Inglês · English Live, 1º no ranking"],
  rec: ["InovAtiva Brasil · 1º lugar", "Programa da Visa · 1º lugar", "GITEX Dubai · 2025", "Great Place to Work · Gaio"],
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

export const CHAPTER_FILTER = ["origens", "trabalho", "trabalho", "fe", "trabalho", "fe", "familia"];

export const photosFor = (f: string) => PHOTOS.filter((p) => f === "all" || p.cats.includes(f));

export const LINKEDIN = "https://www.linkedin.com/in/ederbalbino/";
export const PORTRAIT = "/fotos/eder-desenho.webp";

/* ---------- Navegação: seções (menu) e blocos (sub-menu) ---------- */

export type BlockKind = "home" | "chapter" | "work" | "study" | "world" | "faith" | "photos" | "contact";
export type Block = { id: string; section: string; label: string; kind: BlockKind; ch?: number };

export const SECTIONS = [
  { id: "inicio", label: "Início" },
  { id: "historia", label: "A história" },
  { id: "quem-sou", label: "Quem sou eu" },
  { id: "trajetoria", label: "Trajetória" },
  { id: "fotografias", label: "Fotografias" },
  { id: "contato", label: "Contato" },
];

export const BLOCKS: Block[] = [
  { id: "inicio", section: "inicio", label: "Início", kind: "home" },
  ...CHAPTERS.slice(0, 6).map((c, i): Block => ({ id: `capitulo-${i + 1}`, section: "historia", label: c.label, kind: "chapter", ch: i })),
  { id: "quem-sou", section: "quem-sou", label: "Quem sou eu", kind: "chapter", ch: 6 },
  { id: "trabalho", section: "trajetoria", label: "Trabalho", kind: "work" },
  { id: "formacao", section: "trajetoria", label: "Formação e prêmios", kind: "study" },
  { id: "mundo", section: "trajetoria", label: "Mundo", kind: "world" },
  { id: "fe", section: "trajetoria", label: "Fé e missão", kind: "faith" },
  { id: "fotografias", section: "fotografias", label: "Fotografias", kind: "photos" },
  { id: "contato", section: "contato", label: "Contato", kind: "contact" },
];

export const CONVICTIONS = [
  { t: "Centralidade de Cristo", d: "A esperança não está na força pessoal, mas na pessoa e na obra de Jesus Cristo." },
  { t: "Autoridade das Escrituras", d: "A Palavra de Deus como referência para discernir a fé, o sofrimento e a responsabilidade." },
  { t: "Soberania de Deus", d: "Descansar na providência divina mesmo quando as circunstâncias permanecem incompreensíveis." },
];
