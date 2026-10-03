"use client";

import { useEffect, useState } from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

// Same breakpoint as `.desk` / `.mob` in globals.css.
const DESKTOP_QUERY = "(min-width: 900px) and (min-height: 600px)";

export default function Site() {
  const [desktop, setDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const sync = () => setDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <>
      <div className="desk"><Desktop active={desktop === true} /></div>
      <div className="mob"><Mobile active={desktop === false} /></div>
    </>
  );
}
