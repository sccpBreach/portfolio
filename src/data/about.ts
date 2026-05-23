// ============================================================
// ABOUT — Edit konten di bawah ini sesuai kebutuhan
// Semua teks bisa kamu ganti tanpa menyentuh file komponen.
// ============================================================

export interface TimelineItem {
  year: string;
  title: string;
  org: string;
  desc: string;
}

export interface HighlightItem {
  label: string;
  value: string;
}

export const aboutData = {
  // --- NARASI UTAMA: siapa kamu, fokus belajar, minat teknologi ---
  // Ganti dengan cerita personal kamu. Max 3 paragraf.
  paragraphs: [
    "Saya adalah web developer yang mulai serius mendalami frontend engineering sejak 2023. Fokus saya saat ini adalah membangun antarmuka yang cepat, responsif, dan mudah diakses — dengan pendekatan AI-assisted development di setiap tahap, dari prototyping hingga deployment.",
    "Saya percaya teknologi terbaik adalah yang menyelesaikan masalah nyata. Karena itu saya tidak hanya belajar framework, tapi juga memahami prinsip di baliknya: performa, arsitektur komponen, dan user experience.",
  ],

  // --- TUJUAN KARIER: 1-2 kalimat spesifik ---
  careerGoal:
    "Target saya ke depan adalah menjadi frontend engineer yang mampu menjembatani desain dan engineering — menulis kode yang bersih, dokumentasi yang jelas, dan produk yang berdampak.",

  // --- MINI TIMELINE: pengalaman organisasi / belajar ---
  // Format: { year, title, org, desc }
  timeline: [
    {
      year: "2024",
      title: "Freelance Web Developer",
      org: "Self-employed",
      desc: "Mengerjakan 3+ proyek landing page dan dashboard menggunakan Next.js, Tailwind, dan Firestore.",
    },
    {
      year: "2023",
      title: "Belajar Frontend Intensif",
      org: "Self-study",
      desc: "Menyelesaikan repository belajar frontend — dari HTML/CSS dasar hingga React, TypeScript, dan Next.js App Router.",
    },
  ],

  // --- HIGHLIGHT PENCAPAIAN ---
  // Format: { label, value } — tampil sebagai stat cards
  highlights: [
    { label: "Proyek Selesai", value: "5+" },
    { label: "Teknologi Dikuasai", value: "8+" },
    { label: "Repo GitHub", value: "15+" },
  ],
};
