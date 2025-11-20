import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { News } from "@/components/sections/News";
import { Features } from "@/components/sections/Features";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Message } from "@/components/sections/Message";
import { Company } from "@/components/sections/Company";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-text-primary">
      <Header />
      <main>
        <Hero />
        <News />
        <Features />
        <Services />
        <Testimonials />
        <Message />
        <Company />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
