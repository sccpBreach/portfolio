"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiMenu,
  HiX,
  HiSun,
  HiMoon,
  HiCog,
  HiChevronDown,
  HiDocumentDownload,
} from "react-icons/hi";
import { useTheme, type Theme } from "@/lib/theme";

const themeIcons: Record<string, React.ReactNode> = {
  dark: <HiMoon size={20} />,
  light: <HiSun size={20} />,
  retro: <HiCog size={20} />,
};

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Beranda", href: "#hero" },
  {
    label: "Tentang Saya",
    dropdown: [
      { label: "Profil", href: "#profil" },
      { label: "Skill", href: "#skills" },
      { label: "Pendidikan", href: "#pendidikan" },
      { label: "Pengalaman", href: "#pengalaman" },
    ],
  },
  {
    label: "Karya",
    dropdown: [
      { label: "Alur AI", href: "#ai-workflow" },
      { label: "GitHub", href: "#github" },
    ],
  },
  {
    label: "Lainnya",
    dropdown: [
      { label: "Testimoni", href: "#testimonial" },
      { label: "Kontak", href: "#contact" },
    ],
  },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  el?.scrollIntoView({ behavior: "smooth" });
}

function DropdownDesktop({ item, activeSection }: { item: NavItem; activeSection: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors"
      >
        {item.label}
        <HiChevronDown
          className={`size-3 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-2 w-44 bg-card border border-border rounded-lg shadow-lg py-1 z-[60]"
          >
            {item.dropdown!.map((d) => {
              const isActive = activeSection === d.href.replace("#", "");
              return (
                <a
                  key={d.href}
                  href={d.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    scrollTo(d.href);
                  }}
                  className={`block px-4 py-2 text-sm transition-colors ${
                    isActive
                      ? "text-accent font-medium"
                      : "text-muted hover:text-foreground hover:bg-bg"
                  }`}
                >
                  {d.label}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileAccordion({ item, activeSection, onClose }: { item: NavItem; activeSection: string; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  if (!item.dropdown) {
    return (
      <a
        href={item.href}
        onClick={(e) => {
          e.preventDefault();
          onClose();
          scrollTo(item.href!);
        }}
        className="text-2xl font-medium text-muted hover:text-foreground transition-colors"
      >
        {item.label}
      </a>
    );
  }

  return (
    <div className="w-full max-w-xs">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center gap-2 text-2xl font-medium text-muted hover:text-foreground transition-colors w-full"
      >
        {item.label}
        <HiChevronDown className={`size-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 pt-4 pb-2">
              {item.dropdown.map((d) => {
                const isActive = activeSection === d.href.replace("#", "");
                return (
                  <a
                    key={d.href}
                    href={d.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onClose();
                      scrollTo(d.href);
                    }}
                    className={`text-lg transition-colors ${
                      isActive
                        ? "text-accent font-medium"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {d.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const close = () => setIsOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!isOpen) return;

    if (e.key === "Escape") {
      close();
      toggleRef.current?.focus();
      return;
    }

    if (e.key !== "Tab") return;

    const menu = menuRef.current;
    if (!menu) return;

    const focusable = menu.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector('a');
      firstLink?.focus();
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-section flex items-center justify-between h-16">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            close();
            scrollTo("#hero");
          }}
          className="text-xl font-bold tracking-tight text-accent"
        >
          Fauzan.
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.dropdown ? (
              <DropdownDesktop key={item.label} item={item} activeSection={activeSection} />
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href!);
                }}
                aria-current={activeSection === item.href!.replace("#", "") ? "true" : undefined}
                className={`text-sm transition-colors ${
                  activeSection === item.href!.replace("#", "")
                    ? "text-accent font-medium"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            )
          )}
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            <HiDocumentDownload className="size-4" />
            Download CV
          </a>
        </nav>

        <div className="flex items-center gap-1">
          <button
            onClick={() => {
              const themes = ["dark", "light", "retro"] as const;
              const next = themes[(themes.indexOf(theme) + 1) % themes.length];
              setTheme(next);
            }}
            className="text-muted hover:text-foreground p-2 rounded-lg hover:bg-card transition-colors"
            aria-label={`Tema: ${theme}. Klik ganti`}
          >
            {themeIcons[theme]}
          </button>

          <button
            ref={toggleRef}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 bg-black/50 z-[65]"
              onClick={close}
            />
            <motion.div
              ref={menuRef}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden fixed bottom-0 left-0 right-0 z-[70] bg-bg border-t border-border rounded-t-2xl max-h-[85dvh] overflow-y-auto"
              onKeyDown={handleKeyDown}
            >
              <div className="w-10 h-1 rounded-full bg-muted mx-auto mt-3 mb-2" />
              <nav className="flex flex-col items-center gap-5 py-6 px-4">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <MobileAccordion item={item} activeSection={activeSection} onClose={close} />
                  </motion.div>
                ))}
                <motion.a
                  href="/cv.pdf"
                  download
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  onClick={close}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white text-base font-medium"
                >
                  <HiDocumentDownload className="size-5" />
                  Download CV
                </motion.a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
