"use client";

import { motion } from "framer-motion";

export const Company = () => {
    return (
        <section id="company" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-accent mb-12 text-center"
                >
                    会社概要
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                    >
                        <dl className="space-y-6">
                            <div className="border-b border-slate-100 pb-4">
                                <dt className="font-bold text-text-primary mb-1">会社名</dt>
                                <dd className="text-text-secondary">グランドワン合同会社</dd>
                            </div>
                            <div className="border-b border-slate-100 pb-4">
                                <dt className="font-bold text-text-primary mb-1">所在地</dt>
                                <dd className="text-text-secondary">
                                    〒212-0007 神奈川県川崎市幸区河原町3-4
                                </dd>
                            </div>
                            <div className="border-b border-slate-100 pb-4">
                                <dt className="font-bold text-text-primary mb-1">電話番号</dt>
                                <dd className="text-text-secondary">
                                    044-555-0652 / 080-7240-5467
                                </dd>
                            </div>
                            <div className="border-b border-slate-100 pb-4">
                                <dt className="font-bold text-text-primary mb-1">営業時間</dt>
                                <dd className="text-text-secondary">
                                    8:00〜17:00 ※日祝を除く
                                </dd>
                            </div>
                            <div>
                                <dt className="font-bold text-text-primary mb-1">交通案内</dt>
                                <dd className="text-text-secondary">
                                    JR線「川崎駅」東口より徒歩8分
                                </dd>
                            </div>
                        </dl>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-[400px] bg-slate-200 rounded-2xl overflow-hidden relative"
                    >
                        {/* Google Maps Placeholder */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.5687654321!2d139.695!3d35.535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDMyJzA2LjAiTiAxMznCsDQxJzQyLjAiRQ!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
