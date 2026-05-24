"use client";

import { contactData } from "@/data/contact";
import { navLinks } from "@/data/navigation";
import { HiMail } from "react-icons/hi";
import { socialIconMap } from "@/lib/social-icons";

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
      <div className="container-section py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <a href="#hero" className="text-xl font-bold tracking-tight text-accent">
              Fauzan<span className="text-accent">.</span>
            </a>
            <p className="text-sm text-muted mt-2 leading-relaxed max-w-xs">
              AI Orchestrator — menjembatani AI, frontend engineering, dan arsitektur digital.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Navigasi</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-muted hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Kontak</h4>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${contactData.email}`}
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
              >
                <HiMail className="size-4" />
                {contactData.email}
              </a>
              <div className="flex items-center gap-3 mt-1">
                {contactData.socials.map((s) => {
                  const Icon = socialIconMap[s.icon];
                  return (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-8 rounded-lg bg-card border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all duration-300"
                      aria-label={s.label}
                    >
                      {Icon && <Icon className="size-4" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted">
            &copy; {year} Fauzan. Dibangun dengan Next.js, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
