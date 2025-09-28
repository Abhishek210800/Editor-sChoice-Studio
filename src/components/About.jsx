import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.img
          src="/images/Team.png"
          alt="About us"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="rounded-2xl shadow-lg object-cover"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-neutral-600 mb-4">
            We are a team of passionate photographers & filmmakers, driven to
            capture your love story, your brand, and your precious moments in the
            most timeless way possible.
          </p>
          <p className="text-neutral-600 mb-6">
            With 10+ years of experience and 200+ weddings, our mission is to
            blend creativity with emotions, delivering memories that last forever.
          </p>
          <a
            href="#contact"
            className="inline-block px-5 py-3 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800"
          >
            Let’s Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
}
