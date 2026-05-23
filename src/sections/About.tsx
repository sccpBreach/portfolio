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
    <section id="about" className="py-20 md:py-24 container-section">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-16"
      >
        {/* Header */}
        <motion.div variants={fadeUp}>
          <p className="text-accent font-mono text-sm mb-2">About</p>
          <h2 className="text-2xl sm:text-3xl font-bold">Tentang Saya</h2>
        </motion.div>

        {/* Narasi + Tujuan Karier */}
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div variants={fadeUp} className="space-y-4 text-muted text-sm sm:text-base leading-relaxed">
            {aboutData.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Tujuan Karier</h3>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              {aboutData.careerGoal}
            </p>
          </motion.div>
        </div>

        {/* Highlight Pencapaian */}
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

        {/* Mini Timeline */}
        <motion.div variants={fadeUp} className="space-y-6">
          <h3 className="text-lg font-semibold">Pengalaman</h3>
          <div className="space-y-0">
            {aboutData.timeline.map((item, i) => (
              <div key={i} className="flex gap-5 group">
                <div className="flex flex-col items-center">
                  <div className="size-3 rounded-full bg-accent mt-1.5 shrink-0 transition-transform duration-300 group-hover:scale-125" />
                  {i < aboutData.timeline.length - 1 && (
                    <div className="w-px flex-1 bg-border" />
                  )}
                </div>
                <div className="pb-8 transition-all duration-300 group-hover:translate-x-1">
                  <span className="text-xs text-accent font-mono">{item.year}</span>
                  <h4 className="font-medium text-foreground mt-1">{item.title}</h4>
                  <p className="text-xs text-muted mb-1">{item.org}</p>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
