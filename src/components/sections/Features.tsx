"use client";

import { MapPin, Clock, Package } from "lucide-react";
import { motion } from "framer-motion";

export const Features = () => {
    const features = [
        {
            icon: <MapPin className="w-10 h-10 text-main" />,
            title: "川崎市幸区拠点の「フットワーク」",
            desc: "JR川崎駅近くに拠点を構え、川崎市内・横浜・東京都内へスムーズにアクセス。地域に精通しているからこそ、交通状況を把握した的確でスピーディな配送が可能です。",
        },
        {
            icon: <Clock className="w-10 h-10 text-main" />,
            title: "「スポット」も「定期」も選べる柔軟性",
            desc: "「今日だけ1台欲しい」というスポット依頼から、「毎日の決まった配送」という定期契約まで、お客様のビジネス状況に合わせて最適なプランをご提案します。",
        },
        {
            icon: <Package className="w-10 h-10 text-main" />,
            title: "丁寧な荷扱いと確かな品質",
            desc: "大手宅配業務で培ったノウハウを活かし、個人宅への配送から企業間の重要書類、鮮度管理が重要な青果まで、あらゆるお荷物を大切にお届けします。",
        },
    ];

    return (
        <section id="features" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-accent mb-4"
                    >
                        グランドワンが選ばれる<br />
                        3つの理由
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-text-secondary"
                    >
                        地域密着ならではの機動力と、柔軟な対応力でお客様をサポートします
                    </motion.p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                        >
                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-text-primary mb-4 text-center">
                                {feature.title}
                            </h3>
                            <p className="text-text-secondary leading-relaxed text-justify">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
