import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Orbitron } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/lib/theme";
import Navbar from "@/sections/Navbar";
import CodeRain from "@/components/CodeRain";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const baseUrl = "https://sccpBreachFolio.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Fauzan | AI Orchestrator",
  description:
    "Portfolio Fauzan — AI Orchestrator yang menjembatani AI, frontend engineering, dan arsitektur digital. Next.js, TypeScript, Tailwind CSS.",
  keywords: [
    "Fauzan",
    "Frontend Developer",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "AI Orchestrator",
    "Web Developer Indonesia",
  ],
  authors: [{ name: "Fauzan" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Fauzan | AI Orchestrator",
    description:
      "AI Orchestrator yang menjembatani AI, frontend engineering, dan arsitektur digital.",
    url: baseUrl,
    siteName: "Fauzan Portfolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: `${baseUrl}/api/og`,
        width: 1200,
        height: 630,
        alt: "Fauzan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fauzan | AI Orchestrator",
    description:
      "AI Orchestrator yang menjembatani AI, frontend engineering, dan arsitektur digital.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fauzan",
    jobTitle: "AI Orchestrator",
    url: baseUrl,
    sameAs: [
      "https://github.com/sccpBreach",
      "https://linkedin.com/in/sccpBreach",
      "https://instagram.com/fauzan_fna",
    ],
  };

  return (
    <html
      lang="id"
      data-theme="dark"
      className={`${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-dvh flex flex-col bg-bg text-foreground">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme")||(matchMedia("(prefers-color-scheme:light)").matches?"light":"dark");document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg"
        >
          Langsung ke konten utama
        </a>
        <ThemeProvider>
          <CodeRain />
          <Navbar />
          <main id="main-content" className="flex-1 relative z-10">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
