import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Espiritual",
  description: "Fé reformada, pastorado, missões e confiança na soberania de Deus.",
};

export default function EspiritualLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
