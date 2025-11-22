"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { newsData } from "@/data/news";

export const News = () => {
  const latestNews = newsData.slice(0, 3);

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-accent mb-4"
          >
            お知らせ
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary"
          >
            最新の情報をお届けします
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {latestNews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/news/${item.id}`}
                className="block bg-slate-50 hover:bg-slate-100 p-6 rounded-xl transition-all border border-slate-100 hover:border-main/30 hover:shadow-md group"
              >
                <div className="flex items-center gap-4">
                  <time className="text-sm text-text-secondary font-medium">
                    {item.date}
                  </time>
                  <span className="px-3 py-1 bg-main/10 text-main text-xs font-bold rounded-full">
                    {item.tag}
                  </span>
                  <h3 className="flex-1 text-text-primary font-bold group-hover:text-main transition-colors">
                    {item.title}
                  </h3>
                  <ChevronRight className="text-main opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
