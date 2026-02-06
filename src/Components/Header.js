import React, { useState, useEffect } from "react";
import { socialMediaUrl, contactDetails } from "../Details";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkdein, github, twitter } = socialMediaUrl;
  const { email } = contactDetails;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-light">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12 lg:px-24">
        {/* Logo */}
        <a href="#home" onClick={closeMenu} className="group relative z-[60]">
          <h1 className="text-xl font-bold tracking-tighter text-soft-black">
            KASHISH<span className="text-accent">.</span>
          </h1>
        </a>

        {/* Desktop Navigation (md and up) */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8 text-[13px] font-semibold uppercase tracking-widest">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-muted hover:text-soft-black transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-[1px] bg-border-light mx-2"></div>

          <div className="flex items-center space-x-4">
            <a href={github} target="_blank" rel="noreferrer noopener" className="text-muted hover:text-soft-black transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href={linkdein} target="_blank" rel="noreferrer noopener" className="text-muted hover:text-soft-black transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </nav>

        {/* Hamburger Button (Mobile Only) */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative z-[60] text-soft-black focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-2.5" : "w-6"}`}></span>
            <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "w-4"}`}></span>
            <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`}></span>
          </div>
        </button>

        {/* Improved Mobile Menu Overlay */}
        <div
          className={`
            fixed inset-0 z-50 bg-white md:hidden
            transition-transform duration-500 cubic-bezier(0.77,0,0.175,1)
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex flex-col h-full px-8 py-24">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted mb-8 animate-in fade-in slide-in-from-left duration-700">Navigation</p>

            <nav className="flex flex-col space-y-6">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`
                    text-4xl font-bold text-soft-black hover:text-accent transition-colors
                    animate-in fade-in slide-in-from-left
                  `}
                  style={{ animationDelay: `${(i + 1) * 100}ms` }}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mt-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
              <div className="h-[1px] w-full bg-border-light mb-10"></div>

              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted mb-3">Get in touch</p>
                  <a href={`mailto:${email}`} className="text-xl font-bold text-soft-black underline decoration-accent decoration-2 underline-offset-4">
                    {email}
                  </a>
                </div>

                <div className="flex items-center space-x-6">
                  <a href={github} target="_blank" rel="noreferrer noopener" className="text-soft-black">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a href={linkdein} target="_blank" rel="noreferrer noopener" className="text-soft-black">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href={twitter} target="_blank" rel="noreferrer noopener" className="text-soft-black">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
