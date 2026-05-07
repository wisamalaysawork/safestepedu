import type { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const notoKufi = Noto_Kufi_Arabic({
  subsets: ["arabic", "latin"],
  variable: "--font-noto-kufi",
});

export const metadata: Metadata = {
  title: "SafeStepEdu | خطوتك آمنة — الدراسة في روسيا",
  description:
    " SafeStepEdu —  استثمر في مستقبلك، ونحن نحمي مالك. نظام دفع آمن عبر محامي، نسبة قبول ٩٩٪، واسترداد كامل. الدراسة في روسيا.",
  keywords: ["دراسة في روسيا", "ماجستير روسيا", "دكتوراه روسيا", "قبول جامعي", "SafeStepEdu"],
  openGraph: {
    title: "SafeStepEdu | خطوتك آمنة",
    description: "استثمر في مستقبلك، ونحن نحمي مالك. القبول الجامعي المضمون في روسيا.",
    type: "website",
    locale: "ar_PS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${notoKufi.variable}`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
