"use client";

import { Users, Truck, Apple, Clock, Package } from "lucide-react";
import { motion } from "framer-motion";

export const Services = () => {
    const services = [
        {
            title: "個人配送",
            desc: "ネットスーパーやECサイトの購入品など、エンドユーザー様（個人宅）へ丁寧にお届けします。",
            icon: <Users className="w-6 h-6" />,
        },
        {
            title: "企業ルート便",
            desc: "決まった曜日・時間・ルートでの定期配送。支店間輸送や納品代行など、自社配送のアウトソーシングに最適です。",
            icon: <Truck className="w-6 h-6" />,
        },
        {
            title: "青果配送",
            desc: "鮮度管理が重要な野菜や果物の配送に対応。温度管理や丁寧な積載で、新鮮な状態のままお届けします。",
            icon: <Apple className="w-6 h-6" />,
        },
        {
            title: "スポット配送",
            desc: "「急に荷物が出た」「繁忙期で車が足りない」など、必要な時だけご利用いただける単発の配送サービスです。",
            icon: <Clock className="w-6 h-6" />,
        },
        {
            title: "チャーター便",
            desc: "車両を貸し切って配送します。他のお荷物と混ざらないため、重要書類や精密機器、時間厳守の納品におすすめです。",
            icon: <Package className="w-6 h-6" />,
        },
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-accent mb-4"
                    >
                        配送サービス・コース
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-text-secondary"
                    >
                        お客様のニーズに合わせた多様な配送プランをご用意しています
                    </motion.p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-6 rounded-2xl border border-slate-200 hover:border-main transition-colors bg-white hover:bg-slate-50"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center group-hover:bg-main group-hover:text-accent transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-bold text-text-primary">
                                    {service.title}
                                </h3>
                            </div>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
