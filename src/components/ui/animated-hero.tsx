"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { MoveRight, PhoneCall, ShieldCheck, GraduationCap, Home, Globe } from "lucide-react";
import { Button } from "@/components/ui";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["قبول", "تأشيرة", "تعليم", "مستقبل", "فرصة"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" dir="rtl">
      <div className="absolute inset-0 bg-surface">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/msu-drone.jpg')" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/30 to-surface pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-gold-500/[0.03] via-transparent to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex gap-6 py-20 lg:py-16 items-center justify-center flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button href="/#services" variant="secondary" className="gap-3 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
              ضمان قانوني — الدفع عبر محامي معتمد
              <MoveRight className="w-4 h-4" />
            </Button>
          </motion.div>

          <div className="flex gap-3 flex-col items-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl max-w-3xl tracking-tight text-center font-bold">
              <span className="text-white/90">دراستك في روسيا</span>
              <span className="relative flex w-full items-center justify-center overflow-hidden text-center min-h-[2.5em] h-[2.5em] mt-2">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute inset-0 flex items-center justify-center font-bold text-gradient-gold"
                    initial={{ opacity: 0, y: "-100%" }}
                    transition={{ type: "spring", stiffness: 50, damping: 12 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? "-120%" : "120%", opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.p
              className="text-base md:text-lg leading-relaxed text-white/50 max-w-xl text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              SafeStepEdu — مسارك المضمون نحو الماجستير والدكتوراه في روسيا.
              نظام دفع آمن عبر محامي، نسبة قبول ٩٩٪، وسكن مجاني.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button href="/#contact" variant="outline" className="gap-3">
              اتصل بنا <PhoneCall className="w-4 h-4" />
            </Button>
            <Button href="/#contact" variant="primary" className="gap-3">
              احصل على استشارة مجانية <MoveRight className="w-4 h-4" />
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-6 md:gap-10 mt-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {[
              { icon: ShieldCheck, label: "دفع آمن" },
              { icon: GraduationCap, label: "قبول ٩٩٪" },
              { icon: Home, label: "سكن مجاني" },
              { icon: Globe, label: "جامعات حكومية" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-white/40 text-sm">
                <item.icon className="w-4 h-4 text-gold-500" />
                {item.label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
