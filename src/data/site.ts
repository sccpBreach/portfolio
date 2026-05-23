export const siteConfig = {
  name: "Fauzan",
  role: "Frontend Developer",
  tagline: "Web developer yang fokus pada AI-assisted tooling dan performa frontend.",
  intro:
    "Saya membantu produk digital menjadi lebih cepat, responsif, dan mudah diakses — dengan bantuan AI di setiap tahap pengembangan.",
  email: "fauzan@email.com",
  socials: {
    github: "https://github.com/fauzan",
    linkedin: "https://linkedin.com/in/fauzan",
  },
} as const;

export type SiteConfig = typeof siteConfig;
