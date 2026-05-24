export const siteConfig = {
  name: "Fauzan",
  role: "AI Orchestrator",
  tagline: "Saya membantu tim dan startup mengubah ide menjadi produk digital yang cepat, andal, dan berdampak — dengan mengorkestrasi AI di setiap tahap pengembangan.",
  intro:
    "Bukan cuma nulis kode. Saya merangkai AI tools, frontend engineering, dan arsitektur yang solid jadi satu alur kerja efisien yang bikin rilis lebih cepat dan biaya lebih hemat.",
  email: "sccpbreach@gmail.com",
  socials: {
    github: "https://github.com/sccpBreach",
    linkedin: "https://linkedin.com/in/sccpBreach",
  },
} as const;

export type SiteConfig = typeof siteConfig;
