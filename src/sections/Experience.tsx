"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Experience() {
  return (
    <section id="pengalaman" className="py-20 md:py-24 container-section">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12"
      >
        <motion.div variants={fadeUp}>
          <p className="text-accent font-mono text-sm mb-2">Pengalaman</p>
          <h2 className="text-2xl sm:text-3xl font-bold">Pengalaman Kerja</h2>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-0">
          {experienceData.map((item, i) => (
            <div key={i} className="flex gap-5 group">
              <div className="flex flex-col items-center">
                <div className="size-3 rounded-full bg-accent mt-1.5 shrink-0 transition-transform duration-300 group-hover:scale-125" />
                {i < experienceData.length - 1 && (
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
        </motion.div>
      </motion.div>
    </section>
  );
}
