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
                            繋ぐ力で、物流の常識を突破する。
                        </h2>
                        <p className="text-text-secondary leading-relaxed mb-6">
                            私たちが繋ぐのは、<br />
                            人と人。物流と物流。そして未来。
                        </p>
                        <p className="text-text-secondary leading-relaxed mb-6">
                            深刻化する人材不足、ドライバー高齢化。<br />
                            業界が抱える現実から逃げない。背を向けない。<br />
                            仲間同士・クライアントと強固なコミュニケーションを築き、<br />
                            一人では届かない領域へ、チームで挑む。
                        </p>
                        <p className="text-text-secondary leading-relaxed mb-6">
                            新世代の独立支援にも力を注ぎ、<br />
                            独立後も&quot;戦う仲間&quot;として共に前へ。<br />
                            問題が起きればすぐ動く。絶対に孤独にしない。<br />
                            だからこそ、サービスのクオリティを守れる。
                        </p>
                        <p className="text-text-secondary leading-relaxed mb-6">
                            物流の世界では、増加する需要・厳しい労働時間・運賃高騰という波に対し、<br />
                            共同配送などの革新的な配送効率化で突破口を開く。<br />
                            業界の課題に、解決と攻めの提案で応える存在へ。
                        </p>
                        <div className="mt-10 pt-6 border-t border-slate-200">
                            <div className="flex items-end justify-between">
                                <p className="text-sm text-text-secondary">代表社員</p>
                                <p className="text-3xl font-bold text-accent">岡部翔大</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
