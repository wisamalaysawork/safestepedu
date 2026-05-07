"use client";

import { motion } from "motion/react";

export function SectionHeading({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <motion.div
      className={`text-center max-w-3xl mx-auto mb-20 ${className || ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {subtitle && (
        <motion.span
          className="inline-block text-gold-400 font-medium text-xs tracking-[0.3em] uppercase mb-4 relative"
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="relative">
            {subtitle}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-px bg-gold-500/50" />
          </span>
        </motion.span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
        {title}
      </h2>
    </motion.div>
  );
}

export function Button({
  children,
  variant = "primary",
  href,
  className,
  onClick,
  type,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}) {
  const base =
    "relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-500 overflow-hidden group";

  const variants = {
    primary:
      "bg-gradient-to-r from-gold-600 to-gold-500 text-brand-950 hover:from-gold-500 hover:to-gold-400 shadow-[0_0_25px_rgba(201,168,76,0.3)] hover:shadow-[0_0_40px_rgba(201,168,76,0.5)]",
    secondary:
      "glass text-white hover:bg-white/10 hover:border-white/20",
    outline:
      "border border-gold-500/40 text-gold-400 hover:bg-gold-500/10 hover:border-gold-500/60",
    ghost: "text-gold-400 hover:bg-gold-500/10",
  };

  const cn = `${base} ${variants[variant]} ${className || ""}`;

  if (href) {
    return (
      <a href={href} className={cn}>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </a>
    );
  }

  return (
    <button type={type || "button"} className={cn} onClick={onClick}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}

export function Card({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <motion.div
      className={`glass rounded-2xl p-7 relative ${
        hover
          ? "hover:border-gold-500/30 hover:shadow-[0_0_30px_rgba(201,168,76,0.08)] transition-all duration-500"
          : ""
      } ${className || ""}`}
      whileHover={hover ? { y: -4, transition: { duration: 0.3 } } : undefined}
    >
      {hover && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export function GlowCard({
  children,
  className,
  color = "gold",
}: {
  children: React.ReactNode;
  className?: string;
  color?: "gold" | "brand";
}) {
  const glowColor = color === "gold"
    ? "rgba(201,168,76,0.06)"
    : "rgba(42,107,196,0.06)";

  return (
    <motion.div
      className={`relative rounded-2xl p-8 bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/[0.06] overflow-hidden ${className || ""}`}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl pointer-events-none transition-opacity duration-700"
        style={{ backgroundColor: glowColor }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
