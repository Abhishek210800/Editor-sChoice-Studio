import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FeaturedGalleries() {
  const [activeGallery, setActiveGallery] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (gallery) => {
    setActiveGallery(gallery);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % activeGallery.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + activeGallery.images.length) % activeGallery.images.length);
  };

  return (
    <section id="portfolio" className="py-16 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Galleries</h2>
        <p className="text-neutral-600 mb-12">
          Some of our favorite stories captured beautifully.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {GALLERIES.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={item.cover}
                alt={item.title}
                className="h-64 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <span className="text-white font-semibold">{item.title}</span>
              </div>

              {/* View Gallery Button */}
              <button
                onClick={() => openGallery(item)}
                className="absolute bottom-3 right-3 bg-white/80 hover:bg-white text-black text-sm px-3 py-1 rounded-lg shadow"
              >
                View Gallery
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Slider */}
      <AnimatePresence>
        {activeGallery && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-4xl w-full">
              {/* Close Button */}
              <button
                onClick={() => setActiveGallery(null)}
                className="absolute top-3 right-3 text-white font-bold text-2xl z-50"
              >
                ✕
              </button>

              {/* Current Image */}
              <motion.img
                key={currentIndex}
                src={activeGallery.images[currentIndex]}
                alt=""
                className="rounded-lg object-contain max-h-[80vh] mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              />

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white text-black rounded-full p-2"
              >
                ◀
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white text-black rounded-full p-2"
              >
                ▶
              </button>

              {/* Gallery Title */}
              <div className="text-white text-center mt-4 text-lg">
                {activeGallery.title}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
