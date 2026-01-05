import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { socialMediaUrl } from "../Details";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkdein, github, twitter } = socialMediaUrl;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="container mx-auto flex justify-between items-center py-4 max-width relative z-50">
      {/* Logo */}
      <NavLink to="/" onClick={closeMenu}>
        <h1 className="text-2xl font-bold text-gray-400">
          Kashish.<span className="text-gray-600">dev</span>
        </h1>
      </NavLink>

      {/* Hamburger (Mobile Only) */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-gray-600 focus:outline-none z-50"
      >
        {isOpen ? (
          // Close icon
          <svg width="28" height="28" viewBox="0 0 24 24">
            <path
              d="M6 6L18 18M6 18L18 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          // Hamburger icon
          <svg width="28" height="28" viewBox="0 0 24 24">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {/* Navigation */}
      <nav
        className={`
          fixed inset-0 bg-white dark:bg-dark-background
          flex flex-col justify-center items-center
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          md:static md:translate-x-0 md:flex md:flex-row md:bg-transparent
        `}
      >
        {/* Nav Links */}
        <ul className="text-center md:flex md:items-center md:space-x-6 text-lg font-medium">
          {["/", "/about", "/technologies", "/projects", "/contact"].map(
            (path, i) => (
              <li key={i} className="my-4 md:my-0">
                <NavLink
                  to={path}
                  onClick={closeMenu}
                  className="hover:text-gray-500"
                >
                  {path === "/" ? "Home" : path.replace("/", "").replace(/^\w/, c => c.toUpperCase())}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* Social Icons */}
        <ul className="flex space-x-6 mt-8 md:mt-0 md:ml-8">
          <li>
            <a href={twitter} target="_blank" rel="noreferrer noopener">
              <span className="text-xl">🐦</span>
            </a>
          </li>
          <li>
            <a href={linkdein} target="_blank" rel="noreferrer noopener">
              <span className="text-xl">💼</span>
            </a>
          </li>
          <li>
            <a href={github} target="_blank" rel="noreferrer noopener">
              <span className="text-xl">🐙</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
