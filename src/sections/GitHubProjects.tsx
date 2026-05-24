"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";
import { HiCodeBracket } from "react-icons/hi2";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572a5",
  HTML: "#e34c26",
  CSS: "#563d7c",
};

export default function GitHubProjects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/sccpBreach/repos?sort=updated&per_page=6")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal fetch");
        return res.json();
      })
      .then((data: Repo[]) => setRepos(data))
      .catch(() => setError(true));
  }, []);

  if (error || repos.length === 0) return null;

  return (
    <section id="github" className="py-20 md:py-24 container-section">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-12"
      >
        <motion.div variants={fadeUp}>
          <p className="text-accent font-mono text-sm mb-2">GitHub</p>
          <h2 className="text-2xl sm:text-3xl font-bold">Proyek Terbaru</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo) => (
            <motion.a
              key={repo.id}
              variants={fadeUp}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-card border border-border hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 block"
            >
              <h3 className="font-semibold text-sm text-accent mb-2 truncate">
                {repo.name}
              </h3>
              <p className="text-xs text-muted leading-relaxed mb-4 line-clamp-2">
                {repo.description || "Tidak ada deskripsi"}
              </p>
              <div className="flex items-center gap-4 text-xs text-muted">
                {repo.language && (
                  <span className="flex items-center gap-1.5">
                    <span
                      className="size-2.5 rounded-full"
                      style={{ backgroundColor: languageColors[repo.language] || "#94a3b8" }}
                    />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <HiStar className="size-3.5" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <HiCodeBracket className="size-3.5" />
                  {repo.forks_count}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
