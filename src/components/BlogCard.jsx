export default function BlogCard({ img, title, href, author, category, date }) {
  return (
    <a
      href={href}
      target="_blank" // Opens in new tab
      rel="noopener noreferrer"
      className="group relative rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-white transition-transform transform hover:scale-105 hover:shadow-2xl"
    >
      {/* Image with overlay */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Card content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-yellow-500 transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-1 text-sm text-neutral-500">
          {author} | {category} | {date}
        </p>
        <p className="mt-2 text-sm text-neutral-600 flex items-center gap-1 group-hover:text-yellow-500 transition-colors duration-300">
          Read more 
          <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
        </p>
      </div>
    </a>
  );
}
