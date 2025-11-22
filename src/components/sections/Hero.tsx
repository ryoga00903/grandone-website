"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white pt-20 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-8 backdrop-blur-md shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-main animate-pulse" />
            川崎市幸区拠点・軽貨物配送のプロフェッショナル
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight whitespace-nowrap">
            物流の力で、
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-main via-blue-400 to-main bg-300% animate-gradient">
              未来
            </span>
            を繋ぐ。
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            定期ルート便から緊急のスポット配送まで。
            <br className="hidden md:block" />
            確かな技術と信頼で、お客様の大切なお荷物をお届けします。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <Link
            href="#contact"
            className="group relative w-full sm:w-auto px-10 py-5 bg-main hover:bg-main-hover text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(96,209,255,0.5)] hover:shadow-[0_0_30px_rgba(96,209,255,0.7)] flex items-center justify-center gap-3 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              無料お見積り
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
          </Link>
          <a
            href="tel:0445550652"
            className="group w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full transition-all flex items-center justify-center gap-3 hover:border-white/40"
          >
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            044-555-0652
          </a>
        </motion.div>


      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};
