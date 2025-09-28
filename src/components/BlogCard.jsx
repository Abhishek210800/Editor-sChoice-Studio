export default function BlogCard({ img, title, href }) {
  return (
    <a href={href} className="group rounded-2xl border border-neutral-200 overflow-hidden bg-white shadow-sm">
      <img src={img} alt={title} className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="p-5">
        <h3 className="font-semibold group-hover:underline underline-offset-4">{title}</h3>
        <p className="mt-2 text-sm text-neutral-600">Read more →</p>
      </div>
    </a>
  );
}
