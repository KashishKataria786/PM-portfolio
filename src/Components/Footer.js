import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-light bg-white py-12 mt-20">
      <div className="container mx-auto max-width">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-lg font-bold text-soft-black">Kashish<span className="text-accent">.</span></h2>
            <p className="text-muted text-sm tracking-tight">AI-First Full-Stack Engineer</p>
          </div>

          <div className="text-center md:text-right space-y-2">
            <p className="text-muted text-sm">
              &copy; {currentYear} Designed and Coded by{" "}
              <a
                className="font-bold text-soft-black hover:text-accent transition-colors underline decoration-border-light decoration-2 underline-offset-4"
                href="https://github.com/kashishkataria786"
                target="_blank"
                rel="noreferrer noopener"
              >
                Kashish Kataria
              </a>
            </p>
            <p className="text-muted text-xs flex items-center justify-center md:justify-end gap-1.5">
              Built with <span className="text-red-500">❤️</span> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
