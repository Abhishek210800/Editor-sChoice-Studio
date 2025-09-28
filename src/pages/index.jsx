import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Services from "@/components/Services";
import CTABanner from "@/components/CTABanner";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((i) => (i + 1) % 3);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <Hero heroIndex={heroIndex} />
      <Gallery />
      <About />
      <Services />
      <CTABanner />
      <Testimonials />
      <Blog />
      <Contact setToast={setToast} />
      <Footer />
      {toast && <Toast message={toast} />}
    </div>
  );
}
