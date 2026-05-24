"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/data/about";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  return (
    <section id="profil" className="py-20 md:py-24 container-section">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12"
      >
        <motion.div variants={fadeUp}>
          <p className="text-accent font-mono text-sm mb-2">Tentang</p>
          <h2 className="text-2xl sm:text-3xl font-bold">Yang Saya Bantu</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div variants={fadeUp} className="space-y-4 text-muted text-sm sm:text-base leading-relaxed">
            {aboutData.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Misi</h3>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Saya bantu kamu: bikin produk digital lebih cepat rilis, tim lebih efisien, dan biaya development lebih hemat — semuanya dengan orkestrasi AI yang tepat di setiap tahap.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8"
        >
          {aboutData.highlights.map((h) => (
            <div
              key={h.label}
              className="text-center p-6 rounded-xl bg-card border border-border transition-all duration-300 hover:border-accent/40 hover:-translate-y-1"
            >
              <p className="text-2xl sm:text-3xl font-bold text-accent mb-1">
                {h.value}
              </p>
              <p className="text-muted text-xs sm:text-sm">{h.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
