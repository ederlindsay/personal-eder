import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social",
  description: "Apoio da Gaio à Missão NASCE e a iniciativas de educação, formação e cuidado.",
};

export default function SocialLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
