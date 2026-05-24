export interface WorkflowStep {
  label: string;
  icon: string;
}

export interface UseCase {
  title: string;
  desc: string;
  icon: string;
  tools: string[];
}

export const workflowSteps: WorkflowStep[] = [
  { label: "Ide", icon: "HiLightBulb" },
  { label: "Riset", icon: "HiChat" },
  { label: "Koding", icon: "HiCode" },
  { label: "Review", icon: "HiEye" },
  { label: "Uji", icon: "HiBeaker" },
  { label: "Deploy", icon: "HiRocketLaunch" },
];

export const useCases: UseCase[] = [
  {
    title: "Prototyping Cepat",
    desc: "Pakai Claude & Cursor untuk generate komponen dari figma mockup dalam hitungan menit, bukan jam. Iterasi UI langsung di browser.",
    icon: "HiTemplate",
    tools: ["Claude", "Cursor", "v0"],
  },
  {
    title: "Debugging & Troubleshoot",
    desc: "Copy error stack ke Claude — dapat penjelasan akar masalah + solusi dalam konteks codebase yang sedang dikerjakan.",
    icon: "HiShieldExclamation",
    tools: ["Claude", "ChatGPT"],
  },
  {
    title: "Dokumentasi Otomatis",
    desc: "Buat JSDoc, README, dan type definitions dari kode existing pakai AI. Hemat waktu tapi tetap diedit manual.",
    icon: "HiDocumentText",
    tools: ["Claude", "Copilot"],
  },
  {
    title: "Optimasi Performa",
    desc: "Minta AI review bundle size, re-render, dan lazy loading pattern. Dapat saran refaktor konkret + code snippet.",
    icon: "HiChartBar",
    tools: ["Claude", "Copilot"],
  },
];

export const toolsUsed = [
  "Claude (Anthropic)",
  "ChatGPT (OpenAI)",
  "GitHub Copilot",
  "Cursor IDE",
  "v0 by Vercel",
];

export const disclaimer = {
  title: "AI sebagai Asisten, Bukan Pengganti",
  body: "Semua output AI selalu saya review, edit, dan test sebelum masuk ke production. Saya tidak pernah deploy kode yang tidak saya pahami sepenuhnya. AI mempercepat proses, tapi keputusan arsitektur dan kualitas tetap tanggung jawab saya.",
};
