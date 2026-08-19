
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-light bg-soft-white py-6">
      <div className="container mx-auto max-width">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
          {/* Brand/Role */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-1.5">
              <span className="text-sm font-extrabold tracking-tight text-soft-black">
                KASHISH KATARIA<span className="text-accent">.</span>
              </span>
            </div>
            <p className="text-xs text-muted">
              Product Manager · AI, Security & Full-Stack Systems
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-xs text-muted">
            <p>&copy; {currentYear} Kashish Kataria. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
