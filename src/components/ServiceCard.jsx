import { useState } from "react";
import { motion } from "framer-motion";

const SERVICE_COLORS = {
  "Wedding Photography": "bg-pink-300",
  "Pre-Wedding Shoots": "bg-red-200",
  "Cinematic Films": "bg-purple-300",
  "Corporate Shoots": "bg-blue-300",
  "Product Photography": "bg-yellow-300",
  "Fashion Photography": "bg-purple-200",
};

export default function ServiceCard({ icon: Icon, title, description, image }) {
  const [showPreview, setShowPreview] = useState(false);
  const bgColor = SERVICE_COLORS[title] || "bg-gray-200";

  const handleClick = () => {
    setShowPreview(true);
    // Automatically hide preview after 3 seconds
    setTimeout(() => setShowPreview(false), 3000);
  };

  return (
    <motion.div
      className="relative p-6 bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer"
      onTap={handleClick} // Works for mobile tap
      onClick={handleClick} // Works for desktop click
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Animated background blob */}
      <motion.div
        className={`absolute -top-10 -right-10 w-36 h-36 rounded-full ${bgColor} opacity-20 blur-3xl pointer-events-none`}
        initial={{ scale: 0 }}
        animate={{ scale: showPreview ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Work preview image */}
      {image && (
        <motion.img
          src={image}
          alt={`${title} preview`}
          className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-0"
          animate={{ opacity: showPreview ? 0.3 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ zIndex: 0 }}
        />
      )}

      <div className="relative z-10">
        {/* Icon animation */}
        <motion.div
          whileHover={{ scale: 1.3, rotate: 15 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mb-4"
        >
          <Icon className="h-10 w-10 text-neutral-900" />
        </motion.div>

        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-neutral-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
