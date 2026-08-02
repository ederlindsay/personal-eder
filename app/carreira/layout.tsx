import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carreira",
  description: "A trajetória de Eder Balbino em estatística, tecnologia, educação e empreendedorismo.",
};

export default function CarreiraLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
