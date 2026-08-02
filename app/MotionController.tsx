"use client";

import { useEffect } from "react";

export default function MotionController(){
  useEffect(()=>{
    const targets=Array.from(document.querySelectorAll<HTMLElement>("main section:not(.page-hero):not(.horizontal-journey), main article, .career-mark"));
    if(!("IntersectionObserver" in window)){
      targets.forEach(target=>target.classList.add("is-visible"));
      return;
    }
    const observer=new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.08,rootMargin:"0px 0px -7% 0px"});
    targets.forEach((target,index)=>{
      target.classList.add("motion-ready");
      target.style.setProperty("--motion-order",String(index%6));
      observer.observe(target);
    });
    return ()=>observer.disconnect();
  },[]);
  return null;
}
