import { Camera, Video, Heart } from "lucide-react";
import ServiceCard from "./ServiceCard";

const SERVICES = [
  {
    icon: Camera,
    title: "Wedding Photography",
    description: "Capturing your big day with creativity, love, and timeless memories.",
  },
  {
    icon: Heart,
    title: "Pre-Wedding Shoots",
    description: "Fun, candid & romantic shoots to celebrate your journey.",
  },
  {
    icon: Video,
    title: "Cinematic Films",
    description: "Beautifully crafted films that tell your unique story.",
  },
  {
    icon: Heart,
    title: "Corporate Shoots",
    description: "Professional photography to showcase your brand and events.",
  },
  {
    icon: Heart,
    title: "Product Photography",
    description: "Professional photography to showcase your products in the best light.",
  },
  {
    icon: Heart,
    title: "Fashion Photography",
    description: "Professional photography to showcase your brand and events.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-neutral-600 mb-12">
          From weddings to portraits, we offer professional photography &
          cinematography services tailored to your needs.
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
