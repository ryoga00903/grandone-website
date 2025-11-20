"use client";

import { motion } from "framer-motion";

export const Message = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden relative">
                            {/* Placeholder for CEO Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                                <span className="font-bold text-lg">代表写真</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-3xl font-bold text-accent mb-6">
                            物流を通じて、<br />
                            地域の皆様の暮らしとビジネスを支えます
                        </h2>
                        <p className="text-text-secondary leading-relaxed mb-6">
                            私たちグランドワンは、単に物を運ぶだけでなく、お客様の想いも一緒にお届けすることを大切にしています。
                            変化の激しい物流業界において、常に「お客様にとって何がベストか」を考え、柔軟で高品質なサービスを提供し続けることが私たちの使命です。
                        </p>
                        <p className="text-text-secondary leading-relaxed">
                            地域に根ざした企業として、皆様から信頼されるパートナーであり続けられるよう、日々努力を重ねてまいります。
                            今後とも変わらぬご愛顧を賜りますようお願い申し上げます。
                        </p>
                        <div className="mt-8">
                            <p className="font-bold text-text-primary text-lg">代表社員</p>
                            <p className="text-text-secondary">（氏名）</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
