// src/components/CtaBanner.jsx
import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section className="py-16 bg-neutral-900 text-white">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center md:text-left"
        >
          Let’s Capture Your Story Together
        </motion.h2>
        <a
          href="#contact"
          className="px-6 py-3 rounded-xl bg-white text-neutral-900 font-medium hover:bg-neutral-200 transition"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}
