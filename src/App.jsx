import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickInquiry from "./components/QuickInquiry";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Services from "./components/Services";
import CTABanner from "./components/CTABanner";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

export default function App() {
  const [form, setForm] = useState({
    eventType: "Wedding",
    date: "",
    location: "",
    budget: "",
    contact: "",
  });

  const [heroIndex, setHeroIndex] = useState(0);
  const [toast, setToast] = useState({ show: false, message: "" });

  // Hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Quick inquiry submit
  const submitQuick = (e) => {
    e.preventDefault();
    setToast({ show: true, message: "Inquiry submitted! We'll contact you soon." });
    setTimeout(() => setToast({ show: false, message: "" }), 3000);
    setForm({ eventType: "Wedding", date: "", location: "", budget: "", contact: "" });
  };

  return (
    <>
      <Navbar />
      <Hero heroIndex={heroIndex} />
      <QuickInquiry form={form} setForm={setForm} submitQuick={submitQuick} />
      <Gallery />
      <About />
      <Services />
      <CTABanner />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
      <Toast show={toast.show} message={toast.message} />
    </>
  );
}
