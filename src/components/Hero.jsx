import { useEffect, useState } from "react";
import classNames from "classnames";
// Uncomment next line if you want animations
import { motion } from "framer-motion";

// Replace these images with your actual paths in public/images/
const HERO_IMAGES = [
  "/images/p1.jpg",
  "/images/hero2.jpg",
  "/images/p2.jpg",
  "/images/A13.jpg",
  "/images/2T0A1348.jpg",
  "/images/c1.jpg"
];

export default function Hero() {
  const [heroIndex, setHeroIndex] = useState(0);

  // Image slider interval
  useEffect(() => {
    const timer = setInterval(
      () => setHeroIndex((i) => (i + 1) % HERO_IMAGES.length),
      3500
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative">
      <div className="relative h-[90vh] w-full overflow-hidden">
        {/* Images */}
        {HERO_IMAGES.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            alt="Hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: heroIndex === i ? 1 : 0 }}
            transition={{ duration: 1.2 }}
            className={classNames(
              "absolute inset-0 h-full w-full object-cover transition-transform duration-[5000ms] ease-out",
              heroIndex === i ? "scale-105" : "scale-100"
            )}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-20 pointer-events-none" />

        {/* Hero text */}
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <div className="mx-auto max-w-5xl px-4 text-center text-white">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg"
            >
              Capturing Love, Emotions & Timeless Stories
            </motion.h1>

            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="mt-3 text-base md:text-lg text-white/90"
            >
              Award-winning wedding & lifestyle photography studio
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
