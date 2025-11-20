import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-accent text-white py-12 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                    <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-4">
                        <div className="relative h-12 w-auto aspect-[1/1]">
                            <Image
                                src="/logo.png"
                                alt="グランドワン合同会社"
                                width={100}
                                height={100}
                                className="h-full w-auto object-contain brightness-0 invert"
                            />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2">グランドワン合同会社</h2>
                            <p className="text-sm text-gray-300">
                                〒212-0007 神奈川県川崎市幸区河原町3-4
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/grandone_group?igsh=MXBwdTdxbHI2OGZ4eQ%3D%3D&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://www.facebook.com/share/19pBeQMz4s/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://lin.ee/utOtBNM"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors font-bold text-sm"
                                aria-label="LINE"
                            >
                                LINE
                            </a>
                        </div>
                        <div className="flex gap-6">
                            <Link
                                href="#"
                                className="text-sm text-gray-300 hover:text-white transition-colors"
                            >
                                プライバシーポリシー
                            </Link>
                            <Link
                                href="#"
                                className="text-sm text-gray-300 hover:text-white transition-colors"
                            >
                                特定商取引法に基づく表記
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-400">
                    © Grand One LLC. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};
