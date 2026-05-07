import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-brand-800 mb-4">٤٠٤</h1>
        <p className="text-xl text-text-secondary mb-8">الصفحة غير موجودة</p>
        <Link
          href="/"
          className="inline-flex bg-gold-500 text-brand-900 px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
        >
          العودة إلى الرئيسية
        </Link>
      </div>
    </div>
  );
}
