import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eder-balbino-personal.ederlindsay.chatgpt.site"),
  title: { default: "Eder Balbino — Ninguém se transforma de uma vez", template: "%s — Eder Balbino" },
  description: "Estatístico, empreendedor, pastor e escritor. Uma história real de transformação, em capítulos curtos.",
  icons: { icon: "/images/brand/eder-balbino-mark.png", shortcut: "/images/brand/eder-balbino-mark.png" },
  openGraph: {
    title: "Eder Balbino — Ninguém se transforma de uma vez",
    description: "Uma história real de transformação, em capítulos curtos.",
    images: ["/og-production.png"],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eder Balbino — Ninguém se transforma de uma vez",
    description: "Uma história real de transformação, em capítulos curtos.",
    images: ["/og-production.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ECEAE4",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500&family=Geist+Mono:wght@400&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
