import { Camera, Heart, Film, Briefcase, Box, Star } from "lucide-react";
import ServiceCard from "./ServiceCard";

const SERVICES = [
  {
    icon: Camera,
    title: "Wedding Photography",
    description: "Capturing your big day with creativity, love, and timeless memories.",
    image: "/images/weddings.jpg"
  },
  {
    icon: Heart,
    title: "Pre-Wedding Shoots",
    description: "Fun, candid & romantic shoots to celebrate your journey.",
    image: "/images/preweddings.jpg"
  },
  {
    icon: Film,
    title: "Cinematic Films",
    description: "Beautifully crafted films that tell your unique story.",
    image: "/images/portraits.jpg"
  },
  {
    icon: Briefcase,
    title: "Corporate Shoots",
    description: "Professional photography to showcase your brand and events.",
    image: "/images/c1.jpg"
  },
  {
    icon: Box,
    title: "Product Photography",
    description: "Professional photography to showcase your products in the best light.",
    image: "/images/p1.jpg"
  },
  {
    icon: Star,
    title: "Fashion Photography",
    description: "Professional photography to showcase your brand and events.",
    image: "/images/fas1.jpg"
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-neutral-600 mb-12">
          From weddings to portraits, we offer professional photography & cinematography services tailored to your needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
