import BlogCard from "./BlogCard";

export default function BlogSection() {
  return (
    <section id="blog" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left">
        From the Blog
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <BlogCard
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTThXxTS9elgeWTdzNhU6p6aAqLV51zJ6H2jA&s"
          title="10 Tips for a Flawless Pre-Wedding Shoot Experience"
          href="https://loveinmedia.com/10-tips-for-a-flawless-pre-wedding-shoot-experience/"
          author="Love in Media"
          category="Pre-Wedding Tips"
          date="Jan 2023"
        />
        <BlogCard
          img="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop"
          title="Top 10 Wedding Venues in Kansas City"
          href="https://oliviatarkowskiphoto.com/top-10-wedding-venues-in-kansas-city"
          author="Olivia Tarkowski Photography"
          category="Wedding Venues"
          date="Feb 2023"
        />
        <BlogCard
          img="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
          title="How to Choose a Wedding Photographer"
          href="https://rachelyearick.com/how-to-choose-a-wedding-photographer-2/"
          author="Rachel Yearick Photography"
          category="Photography Tips"
          date="Aug 2023"
        />
      </div>
    </section>
  );
}
