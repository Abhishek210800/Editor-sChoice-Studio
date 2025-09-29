import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function AboutUs() {
  // Get scroll position
  const { scrollY } = useViewportScroll();

  // Transform scroll for blob movement
  const pinkY = useTransform(scrollY, [0, 500], [0, 50]);   // moves 50px down
  const purpleY = useTransform(scrollY, [0, 500], [0, -50]); // moves 50px up

  return (
    <section id="about" className="relative py-20 bg-white overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        style={{ y: pinkY }}
        className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-20"
      ></motion.div>
      <motion.div
        style={{ y: purpleY }}
        className="absolute top-40 -right-20 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20"
      ></motion.div>

      <div className="relative mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <motion.img
          src="/images/Team.png"
          alt="About us"
          loading="lazy"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="rounded-2xl shadow-lg object-cover"
        />

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-neutral-600 mb-4">
            We are a team of passionate photographers & filmmakers, dedicated to
            capturing love stories, brands, and moments in the most timeless way possible.
          </p>
          <p className="text-neutral-600 mb-6">
            With 10+ years of experience, 200+ weddings, and countless events,
            we blend creativity with emotions—delivering memories that last forever.
          </p>
          <motion.a
            onClick={(e) => {
              e.preventDefault(); // prevent default anchor jump
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            whileHover={{ scale: 1.05 }}
            className="inline-block px-5 py-3 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition cursor-pointer"
          >
            Start Your Story
          </motion.a>

        </motion.div>
      </div>
    </section>
  );
}
