import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import GlobalNav from "./GlobalNav";
import LanguageController from "./LanguageController";
import MotionController from "./MotionController";

export const metadata: Metadata = {
  metadataBase: new URL("https://eder-balbino-personal.ederlindsay.chatgpt.site"),
  title: { default:"Eder Balbino — Fé, tecnologia e propósito", template:"%s — Eder Balbino" },
  description: "A trajetória de Eder Balbino em quatro dimensões: carreira, mundo, fé e serviço social.",
  icons: { icon:"/images/brand/eder-balbino-mark.png", shortcut:"/images/brand/eder-balbino-mark.png" },
  openGraph: { title: "Eder Balbino", description: "Fé, tecnologia e propósito em uma mesma trajetória.", images: ["/og-production.png"], locale:"pt_BR", type:"website" },
  twitter: { card: "summary_large_image", title:"Eder Balbino", description:"Fé, tecnologia e propósito em uma mesma trajetória.", images: ["/og-production.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>
    <GlobalNav/><LanguageController/><MotionController/>
    {children}
    <footer><Link className="brand personal-brand" href="/"><img src="/images/brand/eder-balbino-mark.png" alt="Eder Balbino"/><span>Eder Balbino</span></Link><p>Fé, tecnologia e propósito.</p><div><a href="https://www.linkedin.com/in/ederbalbino/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://wa.me/5534992942427" target="_blank" rel="noreferrer">WhatsApp ↗</a></div><small>© 2026 Eder Balbino</small></footer>
  </body></html>;
}
