export interface Project {
  title: string;
  desc: string;
  tags: string[];
  features: string[];
  problemSolved?: string;
  results?: string;
  screenshot?: string;
  liveUrl?: string;
  repoUrl?: string;
}

const baseScreenshot = "/screenshots";

export const projects: Project[] = [
  {
    title: "E-Commerce Dashboard",
    desc: "Dashboard admin real-time untuk mengelola produk, pesanan, dan pelanggan. Dilengkapi grafik penjualan, manajemen stok, dan autentikasi pengguna.",
    tags: ["React", "Firebase", "Tailwind CSS", "Chart.js"],
    features: [
      "CRUD produk dengan validasi form",
      "Grafik penjualan interaktif (Chart.js)",
      "Autentikasi email/password (Firebase Auth)",
      "Responsive table dengan search & filter",
      "Real-time update stok dari Firestore",
    ],
    problemSolved:
      "Membantu pemilik UMKM memantau pesanan dan stok secara real-time tanpa perlu spreadsheet manual.",
    // [kamu] Ganti dengan hasil terukur dari project ini
    results: "Hemat 10+ jam/minggu dari ngurus stok manual",
    screenshot: `${baseScreenshot}/ecommerce.svg`, // [kamu] Ganti screenshot asli di public/screenshots/
    liveUrl: "https://fauzan-ecommerce.vercel.app",
    repoUrl: "https://github.com/sccpBreach/ecommerce-dashboard",
  },
  {
    title: "Portfolio Website",
    desc: "Portfolio pribadi berbasis Next.js dengan animasi Framer Motion, dark theme, dan integrasi AI workflow section.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Animasi scroll & hover dengan Framer Motion",
      "Sticky navbar dengan backdrop blur",
      "Fully responsive, mobile-first",
    ],
    liveUrl: "https://sccpBreachFolio.com",
    repoUrl: "https://github.com/sccpBreach/portfolio",
  },
  {
    title: "Weather App",
    desc: "Aplikasi cuaca yang menampilkan suhu, kelembapan, dan prakiraan 7 hari berdasarkan lokasi pengguna.",
    tags: ["React", "REST API", "CSS Modules"],
    features: [
      "Deteksi lokasi otomatis (Geolocation API)",
      "Prakiraan 7 hari dari OpenWeatherMap",
      "Search kota manual",
    ],
    liveUrl: "https://fauzan-weather.vercel.app",
    repoUrl: "https://github.com/sccpBreach/weather-app",
  },
];
