"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  ["/carreira", "Carreira"],
  ["/experiencia-internacional", "Mundo"],
  ["/vida-espiritual", "Espiritual"],
  ["/impacto-social", "Social"],
];

export default function GlobalNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return <header className={`global-header ${open ? "menu-open" : ""}`}>
    <Link className="brand personal-brand" href="/" onClick={() => setOpen(false)}><img src="/images/brand/eder-balbino-mark.png" alt="Eder Balbino"/><span>Eder Balbino</span></Link>
    <nav aria-label="Navegação principal">
      {links.map(([href, label]) =>
        <Link className={pathname === href || (pathname === "/o-caos" && href === "/vida-espiritual") ? "active" : ""} href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>
      )}
    </nav>
    <Link className="header-contact" href="/#contato" onClick={() => setOpen(false)}>Contato</Link>
    <button className="menu-toggle" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
      <i/><i/>
    </button>
    <div className="mobile-nav">
      <span>Explore</span>
      {links.map(([href, label], index) =>
        <Link className={pathname === href || (pathname === "/o-caos" && href === "/vida-espiritual") ? "active" : ""} href={href} key={href} onClick={() => setOpen(false)}><small>0{index + 1}</small>{label}<b>↗</b></Link>
      )}
      <Link href="/#contato" onClick={() => setOpen(false)}><small>05</small>Contato<b>↗</b></Link>
    </div>
  </header>;
}
