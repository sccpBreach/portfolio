"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiArrowDown } from "react-icons/hi";
import { siteConfig } from "@/data/site";
import Typewriter from "@/components/Typewriter";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-dvh flex items-center container-section pt-24 md:pt-32 overflow-hidden"
    >
      <div className="hero-gradient" aria-hidden="true" />
      <div className="hero-grid-bg absolute inset-0 pointer-events-none" aria-hidden="true" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative grid md:grid-cols-12 gap-8 w-full items-center z-10"
      >
        <div className="md:col-span-7 space-y-6">
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex size-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs font-mono text-muted tracking-wide uppercase">
              Available for work
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-robot"
          >
            <Typewriter text={`${siteConfig.name}.`} speed={120} />
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted"
          >
            {siteConfig.role}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-muted text-sm sm:text-base leading-relaxed max-w-lg"
          >
            {siteConfig.tagline}{" "}
            {siteConfig.intro}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#github"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent/90 transition-colors"
            >
              <HiArrowDown className="size-4" />
              Lihat Projek
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="md:col-span-5 flex justify-center md:justify-end"
        >
          <div className="relative size-56 sm:size-64 lg:size-72">
            <div className="absolute inset-0 rounded-full bg-accent/20 -translate-x-2 translate-y-2" />
            <div className="absolute inset-0 rounded-full border border-accent/30" />
            <Image
              src="/avatar.svg"
              alt={siteConfig.name}
              fill
              className="rounded-full object-cover"
              priority
              sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
