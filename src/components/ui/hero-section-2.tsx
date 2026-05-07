"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Globe, Phone, MapPin } from "lucide-react";

const InfoIcon = ({ type }: { type: "website" | "phone" | "address" }) => {
  const icons = {
    website: <Globe className="h-5 w-5 text-gold-500" />,
    phone: <Phone className="h-5 w-5 text-gold-500" />,
    address: <MapPin className="h-5 w-5 text-gold-500" />,
  };
  return <div className="ml-2 flex-shrink-0">{icons[type]}</div>;
};

interface HeroSectionProps {
  className?: string;
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  contactInfo: {
    website: string;
    phone: string;
    address: string;
  };
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, logo, slogan, title, subtitle, callToAction, backgroundImage, contactInfo }, ref) => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1] as const,
        },
      },
    };

    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex w-full flex-col overflow-hidden bg-surface text-white md:flex-row min-h-[70vh] md:min-h-screen",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        dir="rtl"
      >
        <div className="flex w-full flex-col justify-center p-6 md:w-1/2 md:p-10 lg:w-3/5 lg:p-14">
          <div>
            <motion.header className="mb-6" variants={itemVariants}>
              {logo && (
                <div className="flex items-center">
                  <img src={logo.url} alt={logo.alt} className="ml-3 h-10" />
                  <div>
                    {logo.text && <p className="text-lg font-bold text-white">{logo.text}</p>}
                    {slogan && <p className="text-xs tracking-widest text-white/50">{slogan}</p>}
                  </div>
                </div>
              )}
            </motion.header>

            <motion.main variants={containerVariants}>
              <motion.h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl" variants={itemVariants}>
                {title}
              </motion.h1>
              <motion.div className="my-4 h-0.5 w-16 bg-gold-500" variants={itemVariants} />
              <motion.p className="mb-6 max-w-md text-sm text-white/60" variants={itemVariants}>
                {subtitle}
              </motion.p>
              <motion.a
                href={callToAction.href}
                className="text-lg font-bold tracking-widest text-gold-400 transition-colors hover:text-gold-300"
                variants={itemVariants}
              >
                {callToAction.text}
              </motion.a>
            </motion.main>
          </div>

          <motion.footer className="mt-8 w-full" variants={itemVariants}>
            <div className="grid grid-cols-1 gap-6 text-xs text-white/40 sm:grid-cols-3">
              <div className="flex items-center">
                <InfoIcon type="website" />
                <span>{contactInfo.website}</span>
              </div>
              <div className="flex items-center">
                <InfoIcon type="phone" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <InfoIcon type="address" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.footer>
        </div>

        <motion.div
          className="w-full min-h-[300px] bg-cover bg-center md:w-1/2 md:min-h-full lg:w-2/5"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          initial={{ clipPath: "polygon(0% 0, 0% 0, 0% 100%, 0% 100%)" }}
          animate={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)" }}
          transition={{ duration: 1.2, ease: [0, 0.55, 0.45, 1] as const }}
        />
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
