import BlogCard from "./BlogCard";

export default function BlogSection() {
  return (
    <section id="blog" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold">From the Blog</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <BlogCard
          img="https://images.unsplash.com/photo-1505236732389-2b1bd1c0e7f9?q=80&w=1200&auto=format&fit=crop"
          title="10 Tips for a Perfect Pre-Wedding Shoot"
          href="#"
        />
        <BlogCard
          img="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop"
          title="Best Wedding Venues in Your City for Photos"
          href="#"
        />
        <BlogCard
          img="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
          title="How to Choose the Right Wedding Photographer"
          href="#"
        />
      </div>
    </section>
  );
}
