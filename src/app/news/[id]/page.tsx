import { newsData } from "@/data/news";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const newsItem = newsData.find((item) => item.id === id);

    if (!newsItem) {
        return {
            title: "記事が見つかりません",
        };
    }

    return {
        title: `${newsItem.title} | グランドワン合同会社`,
        description: newsItem.content.replace(/<[^>]+>/g, "").slice(0, 100) + "...",
    };
}

export async function generateStaticParams() {
    return newsData.map((item) => ({
        id: item.id,
    }));
}

export default async function NewsPage({ params }: Props) {
    const { id } = await params;
    const newsItem = newsData.find((item) => item.id === id);

    if (!newsItem) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-base py-20 px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/#news"
                    className="inline-flex items-center gap-2 text-text-secondary hover:text-main transition-colors mb-8 font-medium"
                >
                    <ArrowLeft size={20} />
                    トップページへ戻る
                </Link>

                <article className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="p-8 md:p-12 border-b border-slate-100">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <div className="flex items-center gap-2 text-text-secondary font-mono bg-slate-50 px-3 py-1 rounded-full">
                                <Calendar size={16} />
                                {newsItem.date}
                            </div>
                            <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-white font-medium text-sm ${newsItem.tag === "重要" ? "bg-red-500" : newsItem.tag === "募集" ? "bg-green-500" : "bg-accent"
                                }`}>
                                <Tag size={14} />
                                {newsItem.tag}
                            </div>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold text-accent leading-relaxed">
                            {newsItem.title}
                        </h1>
                    </div>

                    <div
                        className="p-8 md:p-12 prose prose-slate max-w-none prose-headings:text-accent prose-a:text-main hover:prose-a:text-main-hover"
                        dangerouslySetInnerHTML={{ __html: newsItem.content }}
                    />
                </article>
            </div>
        </div>
    );
}
