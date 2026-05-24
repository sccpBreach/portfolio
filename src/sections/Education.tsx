"use client";

import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";
import { educationData } from "@/data/education";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Education() {
  return (
    <section id="pendidikan" className="py-20 md:py-24 container-section">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12"
      >
        <motion.div variants={fadeUp}>
          <p className="text-accent font-mono text-sm mb-2">Pendidikan</p>
          <h2 className="text-2xl sm:text-3xl font-bold">Riwayat Pendidikan</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {educationData.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-6 rounded-xl bg-card border border-border transition-all duration-300 hover:border-accent/40 hover:-translate-y-1"
            >
              <HiAcademicCap className="size-8 text-accent mb-4" />
              <span className="text-xs text-accent font-mono">{item.year}</span>
              <h3 className="font-semibold text-foreground mt-1">{item.degree}</h3>
              <p className="text-sm text-muted">{item.school}</p>
              {item.desc && (
                <p className="text-sm text-muted mt-2 leading-relaxed">{item.desc}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
