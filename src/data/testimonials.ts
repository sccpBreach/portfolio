export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ahmad R.",
    role: "Client",
    text: "Bekerja sama dengan Fauzan sangat menyenangkan. Hasil kerja cepat, rapi, dan selalu sesuai ekspektasi.",
  },
  {
    name: "Putri W.",
    role: "Rekan Tim",
    text: "Fauzan punya cara unik dalam menggabungkan AI tools ke dalam workflow development. Bikin proses jadi jauh lebih efisien.",
  },
];
