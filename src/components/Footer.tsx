"use client";

import { contactData } from "@/data/contact";
import { siteConfig } from "@/data/site";
import { HiMail } from "react-icons/hi";
import { socialIconMap } from "@/lib/social-icons";

const navGroups = [
  {
    title: "Tentang Saya",
    links: [
      { label: "Profil", href: "#profil" },
      { label: "Keahlian", href: "#skills" },
      { label: "Pendidikan", href: "#pendidikan" },
      { label: "Pengalaman", href: "#pengalaman" },
    ],
  },
  {
    title: "Karya",
    links: [
      { label: "Proyek", href: "#projects" },
      { label: "Alur AI", href: "#ai-workflow" },
      { label: "GitHub", href: "#github" },
    ],
  },
  {
    title: "Lainnya",
    links: [
      { label: "Testimoni", href: "#testimonial" },
      { label: "Kontak", href: "#contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container-section py-12 md:py-16">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12">
          <div className="md:col-span-2 space-y-4">
            <a href="#hero" className="text-xl font-bold tracking-tight text-accent">
              Fauzan<span className="text-accent">.</span>
            </a>
            <p className="text-sm text-muted leading-relaxed max-w-sm">
              AI Orchestrator — menjembatani AI, frontend engineering, dan arsitektur digital.
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex size-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-green-500" />
              </span>
              <span className="text-xs font-mono text-muted">Open to work</span>
            </div>
          </div>

          {navGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-foreground mb-3">{group.title}</h4>
              <nav className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-muted hover:text-accent transition-colors w-fit"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-section py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted">
            &copy; {year} {siteConfig.name}. Built with Next.js, Tailwind CSS & Framer Motion.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${contactData.email}`}
              className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors"
            >
              <HiMail className="size-3.5" />
              {contactData.email}
            </a>
            <div className="flex items-center gap-2">
              {contactData.socials.map((s) => {
                const Icon = socialIconMap[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-7 rounded-md bg-card border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all duration-300"
                    aria-label={s.label}
                  >
                    {Icon && <Icon className="size-3.5" />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
