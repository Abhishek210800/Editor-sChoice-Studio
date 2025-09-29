import { motion } from "framer-motion";
import { Camera, Video, Heart } from "lucide-react";

export default function CtaBanner() {
  const floatingIcons = [
    { icon: Camera, size: 16, color: "text-yellow-400", top: "20%", left: "25%", duration: 4 },
    { icon: Video, size: 14, color: "text-pink-400", top: "50%", left: "60%", duration: 5 },
    { icon: Heart, size: 12, color: "text-purple-400", top: "70%", left: "40%", duration: 6 },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 text-white overflow-hidden">
      {/* Background animated blobs */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, -20, 0], y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Floating icons */}
      {floatingIcons.map((f, i) => {
        const Icon = f.icon;
        return (
          <motion.div
            key={i}
            className={`absolute ${f.top} ${f.left} ${f.color}`}
            style={{ fontSize: `${f.size}rem` }}
            animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
            transition={{ duration: f.duration, repeat: Infinity, repeatType: "mirror" }}
          >
            <Icon className={`w-${f.size} h-${f.size} opacity-70`} />
          </motion.div>
        );
      })}

      <div className="relative mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Animated heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center md:text-left leading-snug"
        >
          Let’s Capture <span className="text-yellow-400">Your Story</span> Together
        </motion.h2>

        {/* Smooth scroll button */}
        <a
          onClick={(e) => {
            e.preventDefault();
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
          className="cursor-pointer px-6 py-3 rounded-xl bg-white text-neutral-900 font-medium hover:bg-yellow-400 hover:text-white transition-all duration-300 shadow-lg"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}
