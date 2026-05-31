import Link from "next/link";
import Image from "next/image";

const sections = [
  {
    title: "الخدمات",
    links: [
      { href: "/#services", label: "القبول الجامعي" },
      { href: "/#services", label: "تأشيرة الدراسة" },
      { href: "/#services", label: "السكن الجامعي" },
      { href: "/#services", label: "سنة اللغة" },
    ],
  },
  {
    title: "عن الشركة",
    links: [
      { href: "/#services", label: "من نحن" },
      { href: "/#contact", label: "اتصل بنا" },
    ],
  },
  {
    title: "قانوني",
    links: [
      { href: "/#", label: "سياسة الخصوصية" },
      { href: "/#", label: "الشروط والأحكام" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-surface">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/[0.02] to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Image src="/images/logo.png" alt="SafeStepEdu" width={40} height={40} className="rounded-lg" />
              <span className="text-lg font-bold text-white">
                SafeStep<span className="text-gold-400">Edu</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              خطوتك آمنة نحو المستقبل — نرافقك من التقديم حتى الوصول والاستقرار في جامعات روسيا
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { name: "FB", href: "#" },
                { name: "IG", href: "#" },
                { name: "TG", href: "#" },
                { name: "WA", href: "https://wa.me/970569277490" }
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.name === "WA" ? "_blank" : undefined}
                  rel={s.name === "WA" ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center hover:bg-gold-500/20 hover:text-gold-400 transition-all duration-300 text-xs text-white/30 border border-white/[0.06]"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {sections.map((sec) => (
            <div key={sec.title}>
              <h3 className="font-semibold text-sm mb-5 text-gold-400/80 tracking-wide">{sec.title}</h3>
              <ul className="space-y-3">
                {sec.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-gold-400 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} SafeStepEdu. جميع الحقوق محفوظة.
          </p>
          <p className="text-sm text-white/30">Study in Russia — SafeStepEdu</p>
        </div>
      </div>
    </footer>
  );
}
