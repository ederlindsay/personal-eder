"use client";
import { useState } from "react";

const cities = [
 ["Abu Dhabi","🇦🇪","abu-dhabi"],["San Francisco","🇺🇸","san-francisco"],["Mexico City","🇲🇽","mexico-city"],["Dallas","🇺🇸","dallas"],["Dortmund","🇩🇪","dortmund"],["Dubai","🇦🇪","dubai"],["Buenos Aires","🇦🇷","buenos-aires"],["Boston","🇺🇸","boston"],["Lyon","🇫🇷","lyon"],["Austin","🇺🇸","austin"],["Geneva","🇨🇭","geneva"],["Miami","🇺🇸","miami"],["Shanghai","🇨🇳","shanghai"],["New York","🇺🇸","new-york"],["London","🇬🇧","london"],["Houston","🇺🇸","houston"],["Paris","🇫🇷","paris"],["Washington, D.C.","🇺🇸","washington-dc"],["Milan","🇮🇹","milan"],["San Antonio","🇺🇸","san-antonio"],["Baltimore","🇺🇸","baltimore"],["Frankfurt","🇩🇪","frankfurt"],["Shenzhen","🇨🇳","shenzhen"],["Orlando","🇺🇸","orlando"],
];
export function InternationalGallery(){
 const [active,setActive]=useState(0);
 const move=(d:number)=>setActive((active+d+cities.length)%cities.length);
 return <div className="city-explorer"><div className="city-main"><img src={`/images/international/${cities[active][2]}.png`} alt={cities[active][0]}/><div><span>{String(active+1).padStart(2,"0")} / {cities.length}</span><h2>{cities[active][0]}</h2><b>{cities[active][1]}</b></div><button onClick={()=>move(-1)}>←</button><button onClick={()=>move(1)}>→</button></div><div className="city-thumbs">{cities.map((city,i)=><button className={i===active?"active":""} onClick={()=>setActive(i)} key={city[0]}><img src={`/images/international/${city[2]}.png`} alt=""/><span>{city[0]}</span></button>)}</div></div>
}

const spiritual = [
 {tab:"Pastorado",title:"Liderança do departamento de missões",text:"Na Igreja Missão VIDE, Eder lidera o departamento responsável pelo apoio a cerca de 20 famílias missionárias em Moçambique, Angola, Tunísia, Espanha, França e Brasil.",image:"/images/pastor.png",href:"#trajetoria-espiritual",action:"Conhecer a trajetória"},
 {tab:"Livro",title:"Desista do Controle",text:"Livro sobre rendição, confiança e dependência do Senhor, escrito a partir de reflexões sobre a soberania de Deus.",image:"/images/desista-do-controle.png",href:"#trajetoria-espiritual",action:"Entender o contexto"},
 {tab:"Projetos",title:"Apoio à Missão NASCE",text:"Parte dos lucros da Gaio é destinada a projetos da Missão NASCE voltados a famílias e crianças em situação de vulnerabilidade.",image:"/images/nasce/nasce-community.jpg",href:"/impacto-social",action:"Conhecer a dimensão social"},
];
export function SpiritualTabs(){const [active,setActive]=useState(0);const item=spiritual[active];return <div className="deep-tabs"><div className="deep-tab-buttons">{spiritual.map((x,i)=><button className={active===i?"active":""} onClick={()=>setActive(i)} key={x.tab}>{x.tab}<span>0{i+1}</span></button>)}</div><div className="deep-tab-panel"><img src={item.image} alt={item.title}/><div><span>0{active+1}</span><h2>{item.title}</h2><p>{item.text}</p><a href={item.href}>{item.action} ↗</a></div></div></div>}
