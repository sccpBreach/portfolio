"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiFirebase,
  SiPostman,
  SiPostgresql,
  SiGit,
  SiFigma,
  SiNpm,
  SiOpenai,
  SiAnthropic,
  SiGithub,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, IconType> = {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiFirebase,
  SiPostman,
  SiPostgresql,
  SiGit,
  VscVscode,
  SiFigma,
  SiNpm,
  SiOpenai,
  SiAnthropic,
  SiGithub,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24 container-section">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-12"
      >
        <motion.div variants={fadeUp}>
          <p className="text-accent font-mono text-sm mb-2">Keahlian</p>
          <h2 className="text-2xl sm:text-3xl font-bold">Tech Stack</h2>
        </motion.div>

        <div className="space-y-10">
          {skillCategories.map((cat) => (
            <motion.div key={cat.label} variants={fadeUp}>
              <h3 className="text-sm font-mono text-muted mb-4 uppercase tracking-wider">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => {
                  const Icon = iconMap[skill.icon];
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground transition-all duration-300 hover:border-accent/40 hover:-translate-y-0.5"
                    >
                      {Icon && <Icon className="size-4 shrink-0" />}
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
