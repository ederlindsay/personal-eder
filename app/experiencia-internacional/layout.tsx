import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mundo",
  description: "Palestras, congressos, visitas técnicas e experiências internacionais de Eder Balbino.",
};

export default function MundoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
