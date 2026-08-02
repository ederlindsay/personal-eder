import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O Caos",
  description: "Um relato de sofrimento, perseverança e confiança em Jesus Cristo.",
};

export default function OCaosLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
