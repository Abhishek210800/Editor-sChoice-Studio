import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GALLERIES = [
  { title: "Weddings", cover: "/images/weddings.jpg", images: ["/images/weddings.jpg", "/images/portraits.jpg", "/images/weddings.jpg", "/images/weddings.jpg", "/images/weddings.jpg", "/images/weddings.jpg"], group: "Events" },
  { title: "Pre-Wedding", cover: "/images/preweddings.jpg", images: ["/images/portraits.jpg", "/images/pre2.jpg", "/images/portraits.jpg","/images/A22.jpg","/images/c1.jpg"], group: "Events" },
  { title: "Engagement", cover: "/images/Ann1.jpg", images: ["/images/Ann1.jpg", "/images/portraits.jpg"], group: "Events" },

  { title: "Corporate Shoots", cover: "/images/c1.jpg", images: ["/images/c1.jpg", "/images/p4.jpg"], group: "Corporate" },
  { title: "Product Launch", cover: "/images/p1.jpg", images: ["/images/p2.jpg", "/images/p3.jpg"], group: "Corporate" },
  { title: "Food Photography", cover: "/images/A11.jpg", images: ["/images/A13.jpg", "/images/A31.jpg"], group: "Corporate" },
  { title: "Birthday Photography", cover: "/images/weddings.jpg", images: ["/images/portraits.jpg", "/images/portraits.jpg"], group: "Family" },
  { title: "Family Functions", cover: "/images/M1.jpg", images: ["/images/new1.jpg", "/images/M2.jpg", "/images/M2.jpg"], group: "Family" },

  { title: "Fashion Photography", cover: "/images/fas1.jpg", images: ["/images/fas1.jpg", "/images/fas2.jpg","/images/A22.jpg"], group: "Corporate" },
];

const TABS = ["Events", "Corporate", "Family"];

export default function FeaturedGalleriesTabs() {
  const [activeTab, setActiveTab] = useState("Events");
  const [activeGallery, setActiveGallery] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const imgRef = useRef(null);

  const openGallery = (gallery) => {
    setActiveGallery(gallery);
    setCurrentIndex(0);
  };

  const navigate = (direction) => {
    if (!activeGallery) return;
    const total = activeGallery.images.length;
    setCurrentIndex((prev) =>
      direction === "next" ? (prev + 1) % total : (prev - 1 + total) % total
    );
  };

  const selectImage = (index) => setCurrentIndex(index);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeGallery) return;
      if (e.key === "Escape") setActiveGallery(null);
      if (e.key === "ArrowLeft") navigate("prev");
      if (e.key === "ArrowRight") navigate("next");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeGallery]);

  // Auto slideshow
  useEffect(() => {
    if (!activeGallery || !autoPlay) return;
    const interval = setInterval(() => navigate("next"), 3000);
    return () => clearInterval(interval);
  }, [activeGallery, currentIndex, autoPlay]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullScreenChange = () => {
      if (!document.fullscreenElement) {
        // Exited fullscreen
        setAutoPlay(true); // Resume autoplay
      }
    };
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullScreenChange);
  }, []);

  // Enter fullscreen
  const goFullScreen = () => {
    if (imgRef.current && imgRef.current.requestFullscreen) {
      imgRef.current.requestFullscreen();
      setAutoPlay(false); // Stop slideshow when fullscreen
    }
  };

  return (
    <section id="portfolio" className="relative py-16 min-h-screen bg-gray-200">
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">Featured Galleries</h2>
        <p className="text-neutral-600 mb-8">Explore our signature work across weddings, pre-weddings, destination stories and intimate portraits.</p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-800 hover:bg-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {GALLERIES.filter((g) => g.group === activeTab).map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              onClick={() => openGallery(item)}
            >
              <img
                src={item.cover}
                alt={item.title}
                loading="lazy"
                className="h-64 w-full object-cover rounded-2xl transition duration-500 ease-in-out hover:scale-105"
              />
              {/* Always visible title overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeGallery && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveGallery(null)}
            >
              <div className="relative flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                
                {/* Controls */}
                <div className="absolute -top-10 right-2 flex gap-3">
                  <button
                    onClick={() => setAutoPlay((p) => !p)}
                    className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-md text-white hover:bg-white/30 transition"
                  >
                    {autoPlay ? "⏸" : "▶"}
                  </button>
                  <button
                    onClick={goFullScreen}
                    className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-md text-white hover:bg-white/30 transition"
                  >
                    ⛶
                  </button>
                  <button
                    onClick={() => setActiveGallery(null)}
                    className="text-white text-2xl font-bold hover:text-red-400"
                  >
                    ✕
                  </button>
                </div>

                {/* Main Image */}
                <motion.img
                  ref={imgRef}
                  key={currentIndex}
                  src={activeGallery.images[currentIndex]}
                  alt={`${activeGallery.title} ${currentIndex + 1}`}
                  loading="lazy"
                  className="rounded-xl border-4 border-white shadow-2xl object-contain max-h-[70vh] max-w-[90vw] min-w-[300px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                {/* Caption */}
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white text-center py-3 text-lg font-medium">
                  {activeGallery.title}
                </div>

                {/* Prev / Next buttons */}
                {activeGallery.images.length > 1 && (
                  <>
                    <button
                      onClick={() => navigate("prev")}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white text-2xl rounded-full p-4 shadow-lg transition-all duration-300"
                    >
                      ◀
                    </button>
                    <button
                      onClick={() => navigate("next")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white text-2xl rounded-full p-4 shadow-lg transition-all duration-300"
                    >
                      ▶
                    </button>
                  </>
                )}

                {/* Thumbnails */}
                <div className="flex justify-center gap-2 mt-6 overflow-x-auto py-2">
                  {activeGallery.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      loading="lazy"
                      onClick={() => selectImage(i)}
                      className={`h-16 w-24 object-cover rounded-lg cursor-pointer border-2 transition-all duration-300 ${
                        i === currentIndex
                          ? "border-blue-500 scale-105 shadow-lg"
                          : "border-transparent hover:border-gray-300 hover:scale-105"
                      }`}
                    />
                  ))}
                </div>

                {/* Progress dots */}
                <div className="flex justify-center gap-2 mt-3">
                  {activeGallery.images.map((_, i) => (
                    <div
                      key={i}
                      onClick={() => selectImage(i)}
                      className={`w-3 h-3 rounded-full cursor-pointer transition ${
                        i === currentIndex ? "bg-white scale-125" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
