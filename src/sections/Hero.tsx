"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiArrowDown, HiDocumentDownload } from "react-icons/hi";
import { siteConfig } from "@/data/site";

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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative grid md:grid-cols-12 gap-8 w-full items-center z-10"
      >
        <div className="md:col-span-7 space-y-6">
          <motion.p
            variants={itemVariants}
            className="text-accent font-mono text-sm sm:text-base"
          >
            Hi, nama saya
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            {siteConfig.name}
            <span className="text-accent">.</span>
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
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent/90 transition-colors"
            >
              <HiArrowDown className="size-4" />
              View Projects
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-card transition-colors"
            >
              <HiDocumentDownload className="size-4" />
              Download CV
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
