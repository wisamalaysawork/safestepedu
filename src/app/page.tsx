"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/FadeIn";
import { SectionHeading, Button, GlowCard } from "@/components/ui";
import { Hero } from "@/components/ui/animated-hero";

const services = [
  {
    image: "/images/service-acceptance.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
    ),
    title: "قبول مضمون ٩٩٪",
    desc: "نسبة نجاح ٩٩٪ في القبول بالجامعات الروسية لبرامج الماجستير والدكتوراه",
  },
  {
    image: "/images/service-shield.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
    title: "دفع آمن عبر محامي",
    desc: "أموالك عند محامٍ معتمد. لا قبول = استرداد كامل ١٠٠٪",
  },
  {
    image: "/images/service-students-housing.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    ),
    title: "سكن مجاني",
    desc: "سكن جامعي مجاني طوال فترة الدراسة في أشهر المدن الروسية",
  },
  {
    image: "/images/service-russian-language.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
    ),
    title: "سنة لغة مجانية",
    desc: "دورة لغة روسية مجانية قبل البدء ببرنامجك الأكاديمي",
  },
  {
    image: "/images/service-airport.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
    title: "متابعة بعد السفر",
    desc: "نستقبلك في المطار ونرافقك حتى الاستقرار في سكنك الجامعي",
  },
  {
    image: "/images/service-lecturer.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    ),
    title: "إكمال دكتوراه مجاني",
    desc: "أكمل شهادة الدكتوراه مجاناً بعد إنهاء الماجستير",
  },
];

const steps = [
  { num: "01", title: "تقييم مجاني", desc: "قدم بياناتك واحصل على تقييم دقيق لفرص قبولك" },
  { num: "02", title: "عقد قانوني", desc: "نوقع عقداً مع محامٍ لضمان حقك القانوني" },
  { num: "03", title: "قبول + تدريب", desc: "نضمن قبولك ونعدك لامتحان القبول بنجاح" },
  { num: "04", title: "وصول واستقرار", desc: "نستقبلك في المطار وننهي كل معاملاتك" },
];

const faqs = [
  {
    q: "ما هي شروط القبول في الجامعات الروسية؟",
    a: "شروط القبول تختلف حسب الجامعة والتخصص، لكن بشكل عام تحتاج إلى: شهادة بكالوريوس (للماجستير) بمعدل جيد فما فوق، جواز سفر ساري، واجتياز امتحان القبول. لا نحتاج إلى IELTS أو TOEFL.",
  },
  {
    q: "كيف يعمل نظام الدفع عبر المحامي؟",
    a: "تقوم بإيداع رسوم الخدمة لدى محامٍ معتمد بدلاً من دفعها لنا مباشرة. يتم تحويل المبلغ إلينا فقط بعد حصولك على القبول الرسمي. إذا لم تحصل على القبول، تسترد أموالك بالكامل دون أي خصم.",
  },
  {
    q: "هل الدراسة باللغة الإنجليزية أم الروسية؟",
    a: "توفر الجامعات الروسية برامجاً باللغتين الإنجليزية والروسية. إذا اخترت الدراسة بالروسية، نوفر لك سنة لغة مجانية قبل بدء البرنامج الأكاديمي.",
  },
  {
    q: "كم تكلفة المعيشة في روسيا؟",
    a: "تعتبر روسيا من الوجهات الدراسية الاقتصادية. متوسط تكاليف المعيشة الشهرية (سكن، طعام، مواصلات) يتراوح بين ٣٠٠ و ٥٠٠ دولار أمريكي. السكن الجامعي مجاني ضمن باقاتنا.",
  },
  {
    q: "هل الشهادات الروسية معترف بها في فلسطين والعالم؟",
    a: "نعم، الجامعات الروسية التي نتعاقد معها جميعها حكومية ومعترف بها دولياً. الشهادات مصدقة من وزارة التعليم العالي الروسية ويمكن توثيقها للسفارات وهيئات الاعتراف في فلسطين والدول العربية.",
  },
  {
    q: "كم تستغرق عملية التقديم كاملة؟",
    a: "عملية التقديم تستغرق عادة من ٤ إلى ٨ أسابيع من تاريخ تقديم الطلب حتى الحصول على القبول. بعد ذلك، تستغرق إجراءات التأشيرة من ٢ إلى ٤ أسابيع.",
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", education: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Hero />

      {/* ====== SERVICES ====== */}
      <section id="services" className="relative py-32 border-t border-white/[0.04]">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-500/[0.02] via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="لماذا SafeStepEdu؟"
            subtitle="مزايا حصرية"
          />
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <GlowCard className="h-full group relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-75 transition-all duration-700"
                    style={{ backgroundImage: `url(${s.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-500/15 via-transparent to-brand-800/20" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-500/5 border border-gold-500/20 flex items-center justify-center text-gold-400 mb-5 group-hover:from-gold-500/30 group-hover:to-gold-500/10 transition-all duration-500">
                      {s.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
                    <p className="text-sm text-white/45 leading-relaxed">{s.desc}</p>
                  </div>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ====== PRICING ====== */}
      <section id="pricing" className="relative py-32 border-t border-white/[0.04]">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-500/[0.02] via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="باقاتنا المميزة"
            subtitle="اختر الباقة المناسبة لرحلتك"
          />
          <p className="text-center text-white/40 -mt-12 mb-14 text-sm">
            باقتان مصممتان لتناسب جميع احتياجاتك. اختر الخطوة الآمنة للبداية، أو الباقة الذهبية لوصول بلا قلق.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeIn direction="right">
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8 h-full flex flex-col hover:border-gold-500/30 transition-all duration-500">
                <div className="mb-2">
                  <span className="text-xs text-white/30 font-medium tracking-widest uppercase">الباقة الأساسية</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">الخطوة الآمنة</h3>
                <p className="text-sm text-white/40 mb-8">بداية رحلتك الجامعية بضمان قانوني كامل</p>
                <ul className="space-y-3 mb-10 flex-1">
                  {[
                    "تقييم مجاني لفرص القبول",
                    "تدريب مكثف لامتحان القبول",
                    "متابعة كاملة لإجراءات القبول الجامعي",
                    "سنة لغة روسية مجانية",
                    "سكن جامعي مجاني",
                    "الدفع الآمن عبر محامي معتمد",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white/60">
                      <svg className="w-5 h-5 text-gold-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button href="#contact" variant="outline" className="w-full text-center">
                  ابدأ بالخطوة الآمنة
                </Button>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="relative bg-gradient-to-b from-gold-500/[0.08] to-gold-500/[0.02] border-2 border-gold-500/40 rounded-3xl p-8 h-full flex flex-col shadow-[0_0_40px_rgba(201,168,76,0.1)]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-brand-950 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  الأكثر اختياراً
                </div>
                <div className="mb-2">
                  <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">الباقة المميزة</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">الذهبية VIP</h3>
                <p className="text-sm text-white/40 mb-8">رعاية شاملة من أول خطوة حتى الاستقرار</p>
                <ul className="space-y-3 mb-10 flex-1">
                  {[
                    "كل مزايا الخطوة الآمنة",
                    "استقبال من المطار",
                    "إنهاء جميع الأوراق الحكومية",
                    "استخراج الإقامة الرسمية",
                    "فتح حساب بنكي في روسيا",
                    "شراء خط هاتف محلي",
                    "مرافقة شخصية طوال الأسبوع الأول",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white/60">
                      <svg className="w-5 h-5 text-gold-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button href="#contact" variant="primary" className="w-full text-center">
                  اطّلب الباقة الذهبية VIP
                </Button>
                <p className="text-xs text-white/30 text-center mt-4 leading-relaxed">
                  نصيحة: 80% من الطلاب يختارون الباقة الذهبية لتجاوز حاجز اللغة الروسية في الأسابيع الأولى من الوصول.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ====== HOW IT WORKS ====== */}
      <section id="steps" className="relative py-32 border-t border-white/[0.04]">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-500/[0.01] via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="رحلتك في ٤ خطوات"
            subtitle="كيف نعمل"
          />

          <div className="relative">
            <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

            <div className="grid lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <FadeIn key={step.num} delay={i * 0.15} direction={i % 2 === 0 ? "up" : "down"}>
                  <div className="text-center group">
                    <motion.div
                      className="relative w-20 h-20 mx-auto mb-6"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-500/5 blur-sm" />
                      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-gold-500/15 to-gold-500/5 border border-gold-500/20 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gold-400">{step.num}</span>
                      </div>
                    </motion.div>
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed max-w-[220px] mx-auto">{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section id="faq" className="relative py-32 border-t border-white/[0.04]">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-500/[0.01] via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="الأسئلة الشائعة"
            subtitle="كل ما تريد معرفته"
          />
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-right"
                >
                  <span className="font-semibold text-white text-sm">{faq.q}</span>
                  <motion.svg
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-5 text-gold-500 shrink-0 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-white/45 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CONTACT ====== */}
      <section id="contact" className="relative py-32 border-t border-white/[0.04]">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-500/[0.02] via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="احصل على استشارة مجانية"
            subtitle="سنعود إليك خلال ٢٤ ساعة"
          />
          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            <FadeIn direction="right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">معلومات التواصل</h2>
                  <div className="space-y-5">
                    {[
                      { icon: (
                        <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      ), label: "الهاتف", value: "+970 56 9277490" },
                      { icon: (
                        <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ), label: "البريد الإلكتروني", value: "info@safestepedu.com" },
                      { icon: (
                        <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ), label: "العنوان", value: "فلسطين" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm text-white/40">{item.label}</p>
                          <p className="font-medium text-white">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                  <h3 className="font-bold text-white mb-2">تواصل معنا عبر واتساب</h3>
                  <p className="text-sm text-white/45 leading-relaxed mb-4">
                    أسرع طريقة للرد. فريقنا جاهز للرد على استفساراتك فوراً.
                  </p>
                  <a
                    href="https://wa.me/970569277490"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 border border-green-500/20 px-5 py-3 rounded-xl text-sm font-bold hover:bg-green-500/20 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    تواصل واتساب
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">تم إرسال طلبك!</h3>
                    <p className="text-white/45">سنتواصل معك خلال ٢٤ ساعة لتقييم فرص قبولك مجاناً.</p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: "", phone: "", education: "", message: "" }); }}
                      className="mt-6 text-sm text-gold-400 hover:text-gold-300 font-medium"
                    >
                      إرسال طلب آخر
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-white mb-6">تقييم مجاني لفرص قبولك</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-white/50 mb-1.5">الاسم الكامل</label>
                        <input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg bg-white/[0.06] border border-white/[0.08] focus:border-gold-500/50 focus:ring-2 focus:ring-gold-500/10 outline-none transition-all text-sm text-white placeholder:text-white/20"
                          placeholder="أدخل اسمك"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/50 mb-1.5">رقم الهاتف</label>
                        <input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg bg-white/[0.06] border border-white/[0.08] focus:border-gold-500/50 focus:ring-2 focus:ring-gold-500/10 outline-none transition-all text-sm text-white placeholder:text-white/20"
                          placeholder="+970"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/50 mb-1.5">المؤهل العلمي</label>
                        <select
                          value={formData.education}
                          onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg bg-white/[0.06] border border-white/[0.08] focus:border-gold-500/50 focus:ring-2 focus:ring-gold-500/10 outline-none transition-all text-sm text-white"
                        >
                          <option value="" className="bg-surface">اختر المؤهل</option>
                          <option value="بكالوريوس" className="bg-surface">بكالوريوس</option>
                          <option value="ماجستير" className="bg-surface">ماجستير</option>
                          <option value="دبلوم" className="bg-surface">دبلوم</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/50 mb-1.5">رسالتك (اختياري)</label>
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg bg-white/[0.06] border border-white/[0.08] focus:border-gold-500/50 focus:ring-2 focus:ring-gold-500/10 outline-none transition-all text-sm text-white placeholder:text-white/20 resize-none"
                          placeholder="أخبرنا عن اهتماماتك..."
                        />
                      </div>
                      <Button variant="primary" className="w-full text-center py-3">
                        إرسال طلب التقييم المجاني
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ====== GUARANTEE ====== */}
      <section className="relative py-32 border-t border-white/[0.04]">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-800/30 via-surface to-surface pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-500/5 border border-gold-500/20 mb-8"
              whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
            >
              <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              أموالك آمنة.{" "}
              <span className="text-gradient-gold">مستقبلك مضمون.</span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl mx-auto mb-10">
              استثمارك محمي بعقد قانوني موثق مع محامٍ معتمد. إذا لم تحصل على القبول،
              تسترد كل قرش دفعته بدون أي خصم أو رسوم.
            </p>
            <Button href="#contact" variant="primary" className="text-base px-10 py-4">
              ابدأ رحلتك الآن
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </FadeIn>
        </div>
      </section>

    </>
  );
}
