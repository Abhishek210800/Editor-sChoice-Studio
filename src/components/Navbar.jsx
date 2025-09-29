import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false); // close mobile menu after click
    }
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-neutral-200">
      <nav className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold tracking-wide text-lg">
          <img 
            src="/images/logo.png"   
            alt="EditorsChoice Logo" 
            className="h-8 w-8 object-contain"
          />
          EditorsChoice Studio's
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {["#portfolio", "#about", "#services", "#blog", "#contact"].map((id, idx) => (
            <li key={idx}>
              <a
                href={id}
                onClick={(e) => handleScroll(e, id)}
                className="hover:text-neutral-700"
              >
                {id.replace("#", "").charAt(0).toUpperCase() + id.replace("#", "").slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Book Now */}
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "#contact")}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-800"
        >
          Book Now <ArrowRight className="h-4 w-4" />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden inline-flex items-center px-3 py-2 rounded-lg border border-neutral-300"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 shadow-md">
          <ul className="flex flex-col gap-4 p-4 text-sm">
            {["#portfolio", "#about", "#services", "#blog", "#contact"].map((id, idx) => (
              <li key={idx}>
                <a
                  href={id}
                  onClick={(e) => handleScroll(e, id)}
                  className="block hover:text-neutral-700"
                >
                  {id.replace("#", "").charAt(0).toUpperCase() + id.replace("#", "").slice(1)}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-800"
              >
                Book Now <ArrowRight className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
