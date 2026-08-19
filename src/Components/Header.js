import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { contactDetails } from "../Details";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Selected Work", href: "/#work" },
    { name: "Teardowns", href: "/#teardowns" },
    { name: "Product Thinking", href: "/#thinking" },
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Toolkit", href: "/#toolkit" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-soft-white transition-all duration-200 ${
        scrolled
          ? "border-b border-border-light shadow-sm"
          : "border-b border-border-light/60 md:border-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 md:py-5 px-6 md:px-12 lg:px-20 max-w-[1320px]">
        {/* Brand/Wordmark */}
        <Link to="/" onClick={closeMenu} className="group relative z-[60]">
          <div className="flex flex-col">
            <span className="text-[15px] font-extrabold tracking-tight text-soft-black group-hover:text-accent transition-colors">
              KASHISH KATARIA<span className="text-accent">.</span>
            </span>
            <span className="text-[10px] font-semibold tracking-label uppercase text-muted">
              Product Manager
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-7 text-[10px] font-semibold uppercase tracking-label text-muted">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-soft-black transition-colors duration-200 relative group py-1"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-px bg-border-light mx-1" />

          {/* Quick Connect CTA */}
          <a
            href="/#contact"
            className="text-[12px] font-semibold tracking-wider uppercase px-4 py-2 bg-soft-black text-white rounded-sm hover:bg-ink hover:text-white transition-all duration-200 shadow-sm"
          >
            Let's Talk →
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden relative z-[60] text-soft-black focus:outline-none p-2"
          aria-label="Toggle navigation menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <span
              className={`h-[2px] bg-current transition-all duration-300 ${
                isOpen ? "w-6 rotate-45 translate-y-2.5" : "w-6"
              }`}
            />
            <span
              className={`h-[2px] bg-current transition-all duration-300 ${
                isOpen ? "opacity-0" : "w-4"
              }`}
            />
            <span
              className={`h-[2px] bg-current transition-all duration-300 ${
                isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"
              }`}
            />
          </div>
        </button>

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed inset-0 z-50 bg-soft-white opacity-100 shadow-2xl lg:hidden transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full px-8 py-24 justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-label text-accent mb-8">
                Navigation
              </p>
              <nav className="flex flex-col space-y-5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="text-2xl font-bold text-soft-black hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-8 border-t border-border-light space-y-4">
              <p className="text-[11px] font-bold uppercase tracking-label text-muted">
                Direct Contact
              </p>
              <a
                href={`mailto:${contactDetails.email}`}
                className="text-base font-semibold text-soft-black underline decoration-accent underline-offset-4 block"
              >
                {contactDetails.email}
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-xs font-bold uppercase tracking-wider text-muted hover:text-soft-black"
                >
                  LinkedIn
                </a>
                <span className="text-muted">/</span>
                <a
                  href={contactDetails.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-xs font-bold uppercase tracking-wider text-muted hover:text-soft-black"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
