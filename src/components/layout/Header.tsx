"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "ホーム", href: "/#hero" },
        { name: "選ばれる理由", href: "/#features" },
        { name: "サービス", href: "/#services" },
        { name: "お客様の声", href: "/#testimonials" },
        { name: "会社概要", href: "/#company" },
        { name: "お問い合わせ", href: "/#contact" },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/#hero" className="flex items-center gap-2 group">
                    <div className="relative h-10 w-auto aspect-[1/1]">
                        <Image
                            src="/logo.png"
                            alt="グランドワン合同会社"
                            width={100}
                            height={100}
                            className="h-full w-auto object-contain"
                            priority
                        />
                    </div>
                    <h1
                        className={`text-lg md:text-xl font-bold tracking-tight transition-colors ${isScrolled ? "text-accent" : "text-white drop-shadow-md"
                            }`}
                    >
                        グランドワン合同会社
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-sm font-medium hover:text-main transition-colors relative group ${isScrolled ? "text-text-primary" : "text-white drop-shadow-md"
                                }`}
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-main transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden">
                    <a
                        href="tel:0445550652"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-main text-accent shadow-lg hover:scale-105 transition-transform"
                        aria-label="電話をかける"
                    >
                        <Phone size={20} />
                    </a>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`p-2 rounded-md transition-colors ${isScrolled ? "text-text-primary" : "text-white"
                            }`}
                        aria-label="メニューを開く"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg md:hidden overflow-hidden"
                    >
                        <nav className="flex flex-col p-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="py-3 px-4 text-text-primary hover:bg-gray-50 rounded-md font-medium flex items-center justify-between group"
                                >
                                    {item.name}
                                    <span className="text-main opacity-0 group-hover:opacity-100 transition-opacity">
                                        →
                                    </span>
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};
