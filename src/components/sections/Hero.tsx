"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-main/10 via-slate-50 to-accent/10 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-accent mb-6 leading-tight"
        >
          川崎から、あなたのビジネスを
          <br />
          <span className="text-main">より速く、より確実に</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-text-secondary mb-12 max-w-3xl mx-auto"
        >
          グランドワン合同会社は、川崎市幸区を拠点に、軽貨物配送サービスを提供しています。
          <br />
          定期ルート便からスポット配送まで、お客様のニーズに柔軟に対応いたします。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="#contact"
            className="px-8 py-4 bg-main hover:bg-main-hover text-accent font-bold rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            お問い合わせ
          </Link>
          <Link
            href="#services"
            className="px-8 py-4 bg-white hover:bg-slate-50 text-accent font-bold rounded-full transition-all transform hover:scale-105 shadow-lg border-2 border-main"
          >
            サービス詳細
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-main/10">
            <div className="text-4xl font-bold text-main mb-2">24h</div>
            <div className="text-text-secondary">迅速対応</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-main/10">
            <div className="text-4xl font-bold text-main mb-2">100%</div>
            <div className="text-text-secondary">顧客満足度</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-main/10">
            <div className="text-4xl font-bold text-main mb-2">10+</div>
            <div className="text-text-secondary">年の実績</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
