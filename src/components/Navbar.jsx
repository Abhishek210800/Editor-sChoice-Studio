import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-neutral-200">
      <nav className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold tracking-wide text-lg">
          <img 
            src="/images/logo.png"   
            alt="EditorsChoice Logo" 
            className="h-8 w-8 object-contain"
          />
          EditorsChoice Studio's
        </div>

        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li><a href="#portfolio" className="hover:text-neutral-700">Portfolio</a></li>
          <li><a href="#about" className="hover:text-neutral-700">About</a></li>
          <li><a href="#services" className="hover:text-neutral-700">Services</a></li>
          <li><a href="#blog" className="hover:text-neutral-700">Blog</a></li>
          <li><a href="#contact" className="hover:text-neutral-700">Contact</a></li>
        </ul>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-800">
          Book Now <ArrowRight className="h-4 w-4" />
        </a>
        <button className="md:hidden inline-flex items-center px-3 py-2 rounded-lg border border-neutral-300">Menu</button>
      </nav>
    </header>
  );
}
