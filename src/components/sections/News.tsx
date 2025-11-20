"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { newsData } from "@/data/news";
import { motion } from "framer-motion";

export const News = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto bg-base rounded-2xl p-6 md:p-10 shadow-sm border border-slate-100"
                >
                    <h3 className="text-xl font-bold text-accent mb-6 flex items-center gap-2">
                        <span className="w-1 h-6 bg-main rounded-full"></span>
                        最新情報
                    </h3>
                    <div className="space-y-4">
                        {newsData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 border-b border-slate-200 pb-4 last:border-0 last:pb-0"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-text-secondary font-mono">
                                        {item.date}
                                    </span>
                                    <span
                                        className={`text-xs px-2 py-1 rounded text-white font-medium ${item.tag === "重要"
                                                ? "bg-red-500"
                                                : item.tag === "募集"
                                                    ? "bg-green-500"
                                                    : "bg-accent"
                                            }`}
                                    >
                                        {item.tag}
                                    </span>
                                </div>
                                <Link
                                    href={`/news/${item.id}`}
                                    className="text-text-primary hover:text-main transition-colors cursor-pointer group flex items-center gap-1"
                                >
                                    {item.title}
                                    <ChevronRight
                                        size={16}
                                        className="opacity-0 group-hover:opacity-100 transition-opacity text-main"
                                    />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
