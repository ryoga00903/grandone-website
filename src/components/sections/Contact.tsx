"use client";

import { Phone, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useTransition } from "react";
import { contactFormSchema, ContactFormValues } from "@/lib/schema";
import { sendContactEmail } from "@/actions/contact";

export const Contact = () => {
    const [isPending, startTransition] = useTransition();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            company: "",
            email: "",
            tel: "",
            message: "",
        },
    });

    const onSubmit = (data: ContactFormValues) => {
        startTransition(async () => {
            const result = await sendContactEmail(data);
            if (result.success) {
                toast.success("お問い合わせを送信しました");
                reset();
            } else {
                toast.error(result.error || "送信に失敗しました");
            }
        });
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-4xl font-bold text-accent mb-4"
                        >
                            お問い合わせ
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-text-secondary mb-8"
                        >
                            お見積りや配送のご相談など、お気軽にお問い合わせください。
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="inline-flex items-center gap-3 bg-slate-50 px-8 py-4 rounded-full border border-main/20"
                        >
                            <Phone className="text-main w-6 h-6" />
                            <span className="text-2xl md:text-3xl font-bold text-accent">
                                044-555-0652
                            </span>
                        </motion.div>
                    </div>

                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        onSubmit={handleSubmit(onSubmit)}
                        className="bg-slate-50 p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100"
                    >
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-bold text-text-primary mb-2"
                                >
                                    お名前 <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    {...register("name")}
                                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-main/20 outline-none transition-all ${errors.name
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-slate-200 focus:border-main"
                                        }`}
                                    placeholder="山田 太郎"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="company"
                                    className="block text-sm font-bold text-text-primary mb-2"
                                >
                                    貴社名
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    {...register("company")}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-main focus:ring-2 focus:ring-main/20 outline-none transition-all"
                                    placeholder="株式会社〇〇"
                                />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-bold text-text-primary mb-2"
                                >
                                    メールアドレス <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register("email")}
                                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-main/20 outline-none transition-all ${errors.email
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-slate-200 focus:border-main"
                                        }`}
                                    placeholder="example@grandone.co.jp"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="tel"
                                    className="block text-sm font-bold text-text-primary mb-2"
                                >
                                    電話番号 <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="tel"
                                    {...register("tel")}
                                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-main/20 outline-none transition-all ${errors.tel
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-slate-200 focus:border-main"
                                        }`}
                                    placeholder="090-1234-5678"
                                />
                                {errors.tel && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.tel.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="mb-8">
                            <label
                                htmlFor="message"
                                className="block text-sm font-bold text-text-primary mb-2"
                            >
                                お問い合わせ内容 <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                {...register("message")}
                                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-main/20 outline-none transition-all ${errors.message
                                    ? "border-red-500 focus:border-red-500"
                                    : "border-slate-200 focus:border-main"
                                    }`}
                                placeholder="配送のお見積りをお願いしたいのですが..."
                            ></textarea>
                            {errors.message && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={isPending}
                                className="px-12 py-4 bg-main hover:bg-main-hover text-accent font-bold rounded-full transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
                            >
                                {isPending && <Loader2 className="animate-spin" />}
                                {isPending ? "送信中..." : "送信する"}
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};
