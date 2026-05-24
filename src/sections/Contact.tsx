"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HiMail, HiCheckCircle, HiXCircle } from "react-icons/hi";
import { contactData } from "@/data/contact";
import { contactSchema, type ContactForm } from "@/lib/contact-schema";
import { socialIconMap } from "@/lib/social-icons";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Gagal mengirim");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 container-section">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12"
      >
        <motion.div variants={fadeUp}>
          <p className="text-accent font-mono text-sm mb-2">Kontak</p>
          <h2 className="text-2xl sm:text-3xl font-bold">Hubungi Saya</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div variants={fadeUp} className="space-y-6">
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Punya proyek, ide, atau hanya ingin ngobrol? Jangan ragu untuk menghubungi saya.
            </p>

            <a
              href={`mailto:${contactData.email}`}
              className="inline-flex items-center gap-3 text-muted hover:text-accent transition-colors"
            >
              <HiMail className="size-5 text-accent" />
              <span className="text-sm">{contactData.email}</span>
            </a>

            <div className="flex items-center gap-4 pt-2">
              {contactData.socials.map((s) => {
                const Icon = socialIconMap[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all duration-300"
                    aria-label={s.label}
                  >
                    {Icon && <Icon className="size-5" />}
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            noValidate
          >
            <div>
              <label htmlFor="name" className="sr-only">Nama</label>
              <input
                {...register("name")}
                id="name"
                placeholder="Nama"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors aria-invalid:border-red-400"
              />
              {errors.name && (
                <p id="name-error" className="text-red-400 text-xs mt-1" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                {...register("email")}
                id="email"
                type="email"
                placeholder="Email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors aria-invalid:border-red-400"
              />
              {errors.email && (
                <p id="email-error" className="text-red-400 text-xs mt-1" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Pesan</label>
              <textarea
                {...register("message")}
                id="message"
                placeholder="Pesan"
                rows={4}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors resize-y aria-invalid:border-red-400"
              />
              {errors.message && (
                <p id="message-error" className="text-red-400 text-xs mt-1" role="alert">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
            </button>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-green-400"
                role="status"
                aria-live="polite"
              >
                <HiCheckCircle className="size-4" />
                Pesan berhasil dikirim!
              </motion.p>
            )}

            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-red-400"
                role="alert"
                aria-live="assertive"
              >
                <HiXCircle className="size-4" />
                Gagal mengirim. Coba lagi atau hubungi langsung via email.
              </motion.p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
