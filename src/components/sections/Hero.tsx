"use client";

import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section
            id="hero"
            className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900"
        >
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/90 to-slate-900/80 z-10" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40" />

            <div className="container mx-auto px-4 md:px-6 relative z-20 text-center text-white">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                >
                    川崎から、<br className="md:hidden" />
                    <span className="text-main">信頼</span>と
                    <span className="text-main">安心</span>を運びます。
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-base md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    定期ルート便から緊急のスポット配送まで。
                    <br />
                    グランドワンは、地域のお客様の『物流の悩み』を柔軟に解決します。
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="#contact"
                        className="w-full sm:w-auto px-8 py-4 bg-main hover:bg-main-hover text-accent font-bold rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                    >
                        <Mail size={20} />
                        お見積り・ご相談（無料）
                    </Link>
                    <a
                        href="tel:0445550652"
                        className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2"
                    >
                        <Phone size={20} />
                        お電話でのお問い合わせ
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
