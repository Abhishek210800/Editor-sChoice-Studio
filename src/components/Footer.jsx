export default function Footer() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-neutral-600">
          © {new Date().getFullYear()} EditorChoice's Studio. All rights reserved.
        </div>
        <ul className="flex items-center gap-5 text-sm">
          <li>
            <a
              href="#portfolio"
              onClick={(e) => handleScroll(e, "#portfolio")}
              className="hover:text-neutral-900"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={(e) => handleScroll(e, "#services")}
              className="hover:text-neutral-900"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#blog"
              onClick={(e) => handleScroll(e, "#blog")}
              className="hover:text-neutral-900"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="hover:text-neutral-900"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
