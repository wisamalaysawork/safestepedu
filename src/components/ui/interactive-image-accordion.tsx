"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, PhoneCall, ShieldCheck, GraduationCap, Home, Globe, Phone, MapPin } from "lucide-react";

const accordionItems = [
  {
    id: 1,
    title: "جامعات حكومية معترف بها",
    desc: "ادرس في أفضل الجامعات الروسية المعترف بها دولياً",
    imageUrl: "/images/msu-drone.jpg",
  },
  {
    id: 2,
    title: "قبول مضمون ١٠٠٪",
    desc: "نضمن لك القبول في برامج الماجستير والدكتوراه",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "دفع آمن عبر محامي",
    desc: "أموالك عند محامٍ معتمد. لا قبول = استرداد كامل",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "سكن مجاني",
    desc: "سكن جامعي مجاني طوال فترة الدراسة",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "لا IELTS ولا TOEFL",
    desc: "ادرس بدون الحاجة لاختبارات اللغة الدولية",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
  },
];

const AccordionItem = ({ item, isActive, onMouseEnter }: {
  item: typeof accordionItems[0];
  isActive: boolean;
  onMouseEnter: () => void;
}) => {
  return (
    <div
      className={`
        relative h-[400px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? "w-[320px] md:w-[400px]" : "w-[50px] md:w-[60px]"}
      `}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div
        className={`
          absolute text-white transition-all duration-300 ease-in-out
          ${isActive
            ? "bottom-6 left-1/2 -translate-x-1/2 w-[80%] text-center"
            : "bottom-20 left-1/2 -translate-x-1/2 rotate-90 origin-left whitespace-nowrap"
          }
        `}
      >
        {isActive ? (
          <>
            <h3 className="text-lg md:text-xl font-bold mb-1">{item.title}</h3>
            <p className="text-sm text-white/70">{item.desc}</p>
          </>
        ) : (
          <span className="text-sm md:text-base font-semibold">{item.title}</span>
        )}
      </div>
    </div>
  );
};

export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section className="relative min-h-screen flex items-center bg-surface overflow-hidden" dir="rtl">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

          <motion.div
            className="w-full md:w-1/2 flex flex-col justify-between min-h-[400px] md:min-h-[500px]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <img src="/images/logo.png" alt="SafeStepEdu" className="h-10 inline-block ml-3" />
              <span className="text-lg font-bold text-white">SafeStepEdu</span>
              <p className="text-xs tracking-widest text-white/50 mt-1">مسارك المضمون نحو روسيا</p>
            </motion.div>

            <div className="text-center md:text-right">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                دراستك في روسيا{" "}
                <span className="text-gold-400">مضمونة</span>
              </motion.h1>
              <motion.div
                className="h-0.5 w-16 bg-gold-500 my-4 md:mx-0 md:mr-auto"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
              <motion.p
                className="text-white/60 max-w-md mx-auto md:mx-0 text-sm md:text-base mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                SafeStepEdu — مسارك المضمون نحو الماجستير والدكتوراه في روسيا.
                نظام دفع آمن عبر محامي، قبول مضمون، وسكن مجاني.
              </motion.p>
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold-500 text-brand-950 font-semibold px-8 py-3.5 rounded-xl hover:bg-gold-400 transition-colors shadow-[0_0_25px_rgba(201,168,76,0.3)]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                احصل على استشارة مجانية <PhoneCall className="w-4 h-4" />
              </motion.a>
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start mb-6">
                {[
                  { icon: ShieldCheck, label: "دفع آمن" },
                  { icon: GraduationCap, label: "قبول مضمون" },
                  { icon: Home, label: "سكن مجاني" },
                  { icon: Globe, label: "جامعات حكومية" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-1.5 text-white/40 text-xs">
                    <item.icon className="w-3.5 h-3.5 text-gold-500" />
                    {item.label}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-white/30">
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-gold-500/60" />
                  safestepedu.com
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-gold-500/60" />
                  +7 (123) 456-78-90
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-500/60" />
                  موسكو، روسيا
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex flex-row items-center justify-center gap-2 md:gap-4 p-2 md:p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
