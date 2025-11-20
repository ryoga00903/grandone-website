"use client";

import { Users } from "lucide-react";
import { motion } from "framer-motion";

export const Testimonials = () => {
    const testimonials = [
        {
            role: "個人宅配送のお客様",
            content:
                "丁寧な対応で安心して任せられました。ドライバーの方も清潔感があり、またお願いしたいと思いました。",
        },
        {
            role: "企業ルート便の法人様",
            content:
                "安定した品質で取引先からも高評価をいただいています。急な変更にも柔軟に対応してくれるので助かっています。",
        },
        {
            role: "生花配送の店舗様",
            content:
                "花の扱いが丁寧で鮮度が保たれるので、安心してお客様の元へ届けられます。プロ意識の高さを感じます。",
        },
        {
            role: "スポット配送の法人様",
            content:
                "急な依頼にもすぐ対応してくれました。困った時のグランドワンさん頼みです。",
        },
    ];

    return (
        <section id="testimonials" className="py-20 bg-accent text-white">
            <div className="container mx-auto px-4 md:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    お客様の声
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
                        >
                            <div className="flex gap-1 mb-4 text-main">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                            <p className="text-lg mb-6 leading-relaxed opacity-90">
                                &quot;{item.content}&quot;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <Users size={20} />
                                </div>
                                <span className="font-bold text-sm opacity-80">{item.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
