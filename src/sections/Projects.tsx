"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiExternalLink, HiCode, HiCheck } from "react-icons/hi";
import { projects } from "@/data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const [featured, ...rest] = projects;

export default function Projects() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="projects" className="py-20 md:py-24 container-section">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-16"
      >
        <motion.div variants={fadeUp}>
          <p className="text-accent font-mono text-sm mb-2">Karya</p>
          <h2 className="text-2xl sm:text-3xl font-bold">Karya Terbaru</h2>
        </motion.div>

        {/* Featured Project */}
        <motion.article
          variants={fadeUp}
          className="group grid md:grid-cols-2 gap-8 p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)]"
        >
          {/* Screenshot */}
          <div className="relative aspect-video rounded-lg overflow-hidden bg-bg border border-border">
            {featured.screenshot && !imgError ? (
              <Image
                src={featured.screenshot}
                alt={`${featured.title} screenshot`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-muted text-sm">
                {featured.screenshot && imgError
                  ? "Gambar tidak tersedia"
                  : "Belum ada screenshot"}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center space-y-5">
            <h3 className="text-xl sm:text-2xl font-bold">{featured.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{featured.desc}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-bg border border-border text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Key Features */}
            <ul className="space-y-1.5">
              {featured.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted">
                  <HiCheck className="size-4 text-accent mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Dampak / Hasil */}
            {featured.results && (
              <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                <p className="text-xs text-green-400 font-mono mb-1">Dampak</p>
                <p className="text-sm text-green-300 font-medium">
                  {featured.results}
                </p>
              </div>
            )}

            {/* Problem Solved */}
            {featured.problemSolved && (
              <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                <p className="text-xs text-accent font-mono mb-1">Problem Solved</p>
                <p className="text-sm text-foreground leading-relaxed">
                  {featured.problemSolved}
                </p>
              </div>
            )}

            {/* Links */}
            <div className="flex items-center gap-4 pt-2">
              {featured.liveUrl && (
                <a
                  href={featured.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
                >
                  <HiExternalLink className="size-4" />
                  Live Demo
                </a>
              )}
              {featured.repoUrl && (
                <a
                  href={featured.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-accent/10 transition-colors"
                >
                  <HiCode className="size-4" />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </motion.article>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              className="group p-6 rounded-xl bg-card border border-border hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.08)] flex flex-col"
            >
              <div className="flex-1 space-y-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-bg border border-border text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-border">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-2 transition-colors"
                  >
                    <HiExternalLink className="size-4" />
                    Live
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
                  >
                    <HiCode className="size-4" />
                    Repo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
