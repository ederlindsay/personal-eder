"use client";

import { useEffect, useRef, useState } from "react";
import dictionaries from "./translations.generated.json";

type Language = "pt" | "en" | "es" | "zh";
const labels: Record<Language,string> = {pt:"PT",en:"EN",es:"ES",zh:"中文"};
const names: Record<Language,string> = {pt:"Português",en:"English",es:"Español",zh:"中文"};

export default function LanguageController(){
  const [language,setLanguage]=useState<Language>("pt");
  const originals=useRef(new Map<Text,string>());

  useEffect(()=>{
    const params = new URLSearchParams(location.search);
    const requested = params.get("lang") as Language | null;
    const saved = localStorage.getItem("eder-language") as Language | null;
    const next = requested && labels[requested] ? requested : saved && labels[saved] ? saved : "pt";
    const frame = requestAnimationFrame(() => setLanguage(next));
    return () => cancelAnimationFrame(frame);
  },[]);

  useEffect(()=>{
    document.documentElement.lang = language === "zh" ? "zh-CN" : language === "pt" ? "pt-BR" : language;
    localStorage.setItem("eder-language",language);
    const dictionary = language === "pt" ? null : dictionaries[language];
    originals.current.forEach((original,node)=>node.textContent=original);
    originals.current.clear();
    if (!dictionary) return;
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    const nodes:Text[]=[];
    while(walker.nextNode()) nodes.push(walker.currentNode as Text);
    nodes.forEach((node)=>{
      const parent=node.parentElement;
      const raw=node.textContent||"";
      const original=raw.replace(/\s+/g," ").trim();
      if(!parent||!original||parent.closest(".language-switcher")||["SCRIPT","STYLE"].includes(parent.tagName)) return;
      const translated=(dictionary as Record<string,string>)[original];
      if(translated){
        originals.current.set(node,raw);
        const leading=raw.match(/^\s*/)?.[0]||"";
        const trailing=raw.match(/\s*$/)?.[0]||"";
        node.textContent=leading+translated+trailing;
      }
    });
  },[language]);

  const change=(next:Language)=>{
    const url=new URL(location.href);
    if(next==="pt") url.searchParams.delete("lang"); else url.searchParams.set("lang",next);
    history.replaceState(null,"",url);
    setLanguage(next);
  };

  return <div className="language-switcher" aria-label="Selecionar idioma">
    <button className="language-current" aria-label={`Idioma: ${names[language]}`}>{labels[language]} <span>⌄</span></button>
    <div>{(Object.keys(labels) as Language[]).map(item=><button className={item===language?"active":""} onClick={()=>change(item)} key={item}>{labels[item]}<small>{names[item]}</small></button>)}</div>
  </div>
}
