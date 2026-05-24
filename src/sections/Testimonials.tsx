"use client";

import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";
import { testimonials } from "@/data/testimonials";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonial" className="py-20 md:py-24 container-section">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12"
      >
        <motion.div variants={fadeUp}>
          <p className="text-accent font-mono text-sm mb-2">Testimoni</p>
          <h2 className="text-2xl sm:text-3xl font-bold">Kata Mereka</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              variants={fadeUp}
              className="p-6 rounded-xl bg-card border border-border hover:border-accent/40 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <HiStar key={j} className="size-4 text-yellow-500" />
                ))}
              </div>
              <blockquote className="text-sm text-muted leading-relaxed mb-4">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption className="text-sm font-medium text-foreground">
                {t.name}
                <span className="text-muted font-normal"> — {t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
