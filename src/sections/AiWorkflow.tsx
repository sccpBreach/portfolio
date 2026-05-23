"use client";

import { motion } from "framer-motion";
import {
  HiLightBulb,
  HiChat,
  HiCode,
  HiEye,
  HiBeaker,
  HiTemplate,
  HiShieldExclamation,
  HiDocumentText,
  HiChartBar,
  HiShieldCheck,
} from "react-icons/hi";
import { HiRocketLaunch } from "react-icons/hi2";
import type { IconType } from "react-icons";
import { workflowSteps, useCases, toolsUsed, disclaimer } from "@/data/ai-workflow";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const iconMap: Record<string, IconType> = {
  HiLightBulb,
  HiChat,
  HiCode,
  HiEye,
  HiBeaker,
  HiRocketLaunch,
  HiTemplate,
  HiShieldExclamation,
  HiDocumentText,
  HiChartBar,
};

export default function AiWorkflow() {
  return (
    <section id="ai-workflow" className="py-20 md:py-24 container-section">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-16"
      >
        {/* Header */}
        <motion.div variants={fadeUp}>
          <p className="text-accent font-mono text-sm mb-2">AI Workflow</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            How I Use AI in Development
          </h2>
          <p className="text-muted max-w-2xl text-sm sm:text-base">
            AI membantu saya bekerja lebih cepat dan fokus pada logika & arsitektur.
            Berikut alur kerja saya dari ide hingga deploy.
          </p>
        </motion.div>

        {/* Animated Workflow Pipeline */}
        <motion.div variants={fadeUp} className="w-full">
          {/* Mobile: vertical pipeline */}
          <div className="flex flex-col gap-3 sm:hidden">
            {workflowSteps.map((step, i) => {
              const Icon = iconMap[step.icon];
              return (
                <div key={step.label} className="flex items-center gap-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                    className="size-9 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0"
                  >
                    {Icon && <Icon className="size-4 text-accent" />}
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.15, duration: 0.3 }}
                    className="text-sm text-foreground font-mono"
                  >
                    {step.label}
                  </motion.span>
                  {i < workflowSteps.length - 1 && (
                    <div className="w-px h-4 bg-border ml-[17px] hidden" />
                  )}
                </div>
              );
            })}
          </div>
          {/* Tablet+: horizontal pipeline */}
          <div className="hidden sm:flex items-center justify-between gap-2">
            {workflowSteps.map((step, i) => {
              const Icon = iconMap[step.icon];
              return (
                <div key={step.label} className="flex items-center gap-2 flex-1">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, type: "spring", stiffness: 200 }}
                    className="flex flex-col items-center gap-1.5 min-w-0"
                  >
                    <div className="size-10 sm:size-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center transition-colors">
                      {Icon && <Icon className="size-5 sm:size-6 text-accent" />}
                    </div>
                    <span className="text-[10px] sm:text-xs text-muted font-mono truncate max-w-full">
                      {step.label}
                    </span>
                  </motion.div>
                  {i < workflowSteps.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.3, duration: 0.4, ease: "easeOut" }}
                      className="h-px flex-1 bg-gradient-to-r from-accent/50 to-border origin-left"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* 4 Use Case Cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {useCases.map((uc) => {
            const Icon = iconMap[uc.icon];
            return (
              <motion.article
                key={uc.title}
                variants={fadeUp}
                className="p-5 sm:p-6 rounded-xl bg-card border border-border hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="size-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  {Icon && <Icon className="size-5 text-accent" />}
                </div>
                <h3 className="font-semibold mb-2">{uc.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{uc.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {uc.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-accent/5 text-accent border border-accent/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Tools Used */}
        <motion.div variants={fadeUp} className="text-center space-y-4">
          <p className="text-sm text-muted">AI tools yang saya gunakan sehari-hari:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {toolsUsed.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground transition-all duration-300 hover:border-accent/40 hover:-translate-y-0.5"
                >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          variants={fadeUp}
          className="p-5 sm:p-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5"
        >
          <div className="flex items-start gap-3">
            <HiShieldCheck className="size-5 text-yellow-500 mt-0.5 shrink-0" />
            <div>
              <h4 className="font-semibold text-sm mb-1">{disclaimer.title}</h4>
              <p className="text-sm text-muted leading-relaxed">{disclaimer.body}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
