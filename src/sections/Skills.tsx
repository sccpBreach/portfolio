"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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

function SkillBar({ name, icon, level, index }: { name: string; icon: string; level: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = iconMap[icon];

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm text-foreground">
          {Icon && <Icon className="size-4 shrink-0 text-accent" />}
          {name}
        </span>
        <span className="text-xs font-mono text-muted tabular-nums">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-card border border-border overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: index * 0.08, ease: "easeOut" }}
          className="h-full rounded-full bg-accent"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24 container-section">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-12"
      >
        <div>
          <p className="text-accent font-mono text-sm mb-2">Keahlian</p>
          <h2 className="text-2xl sm:text-3xl font-bold">Tech Stack</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-10">
          {skillCategories.map((cat) => (
            <div key={cat.label} className="space-y-4">
              <h3 className="text-sm font-mono text-muted uppercase tracking-wider">
                {cat.label}
              </h3>
              <div className="space-y-3">
                {cat.skills.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
