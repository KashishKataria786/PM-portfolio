import React, { useState, useEffect } from "react";

/**
 * CaseStudyDiagrams — Displays all diagrams directly as image cards (no tabs, no carousel).
 * Props:
 *   diagrams: Array<{ src: string, title: string, caption?: string, badge?: string, details?: string[] }>
 *   layout?: "grid" | "single" (default: "grid")
 */
function CaseStudyDiagrams({ diagrams, layout = "grid" }) {
  const [lightbox, setLightbox] = useState(null);

  // Close on Escape key or navigate with arrows
  useEffect(() => {
    const handler = (e) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft")
        setLightbox((i) => (i > 0 ? i - 1 : diagrams.length - 1));
      if (e.key === "ArrowRight")
        setLightbox((i) => (i < diagrams.length - 1 ? i + 1 : 0));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, diagrams]);

  if (!diagrams || diagrams.length === 0) return null;

  const openLightbox = (idx) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);
  const prevImage = (e) => {
    e.stopPropagation();
    setLightbox((i) => (i > 0 ? i - 1 : diagrams.length - 1));
  };
  const nextImage = (e) => {
    e.stopPropagation();
    setLightbox((i) => (i < diagrams.length - 1 ? i + 1 : 0));
  };

  const gridClass =
    layout === "single" || diagrams.length === 1
      ? "w-full space-y-6"
      : "grid grid-cols-1 md:grid-cols-2 gap-6";

  return (
    <>
      {/* Diagram Grid - all images directly visible */}
      <div className={gridClass}>
        {diagrams.map((diagram, idx) => (
          <div
            key={idx}
            className="group relative bg-white border border-border-light rounded-sm overflow-hidden shadow-sm hover:border-accent/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            {/* Header / Badge bar */}
            <div className="px-5 py-3 border-b border-border-light flex items-center justify-between bg-white">
              <span className="text-[11px] font-mono font-bold text-accent">
                FIG {String(idx + 1).padStart(2, "0")}
              </span>
              {diagram.badge && (
                <span className="text-[10px] font-semibold px-2 py-0.5 bg-warm text-soft-black border border-border-light rounded-sm">
                  {diagram.badge}
                </span>
              )}
            </div>

            {/* Image Area - click to expand */}
            <button
              type="button"
              onClick={() => openLightbox(idx)}
              className="relative w-full text-left bg-warm/30 border-b border-border-light/80 p-5 flex items-center justify-center cursor-zoom-in group/btn focus:outline-none focus:ring-2 focus:ring-accent/40"
              style={{ minHeight: "220px" }}
              aria-label={`Inspect ${diagram.title}`}
            >
              <img
                src={diagram.src}
                alt={diagram.title}
                className="w-full max-h-[360px] object-contain transition-transform duration-300 group-hover/btn:scale-[1.015]"
                loading="lazy"
              />

              {/* Hover expand hint badge */}
              <div className="absolute inset-0 flex items-end justify-end p-3 pointer-events-none">
                <span className="opacity-0 group-hover/btn:opacity-100 transition-all duration-200 bg-soft-black/85 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-sm flex items-center gap-1.5 shadow-lg">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                  Click to Expand
                </span>
              </div>
            </button>

            {/* Caption & Description */}
            <div className="px-5 py-4 space-y-2 bg-white flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-soft-black leading-snug">
                  {diagram.title}
                </h4>
                {diagram.caption && (
                  <p className="text-xs text-muted leading-relaxed">
                    {diagram.caption}
                  </p>
                )}
              </div>

              {/* Optional Key Points */}
              {diagram.details && diagram.details.length > 0 && (
                <div className="pt-2 border-t border-border-light/60 space-y-1 mt-2">
                  {diagram.details.slice(0, 2).map((detail, dIdx) => (
                    <p key={dIdx} className="text-[11px] text-soft-black/80 flex items-start gap-1.5">
                      <span className="text-accent font-bold">•</span>
                      <span>{detail}</span>
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox for high-resolution inspection */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Diagram viewer"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-soft-black/90 backdrop-blur-md" />

          {/* Dialog Panel */}
          <div
            className="relative z-10 w-full max-w-5xl flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="w-full flex items-center justify-between text-white border-b border-white/10 pb-2.5">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 bg-white/20 text-white rounded-sm">
                    FIG {String(lightbox + 1).padStart(2, "0")} / {String(diagrams.length).padStart(2, "0")}
                  </span>
                  <p className="text-white font-bold text-sm sm:text-base leading-snug">
                    {diagrams[lightbox].title}
                  </p>
                </div>
                {diagrams[lightbox].caption && (
                  <p className="text-white/60 text-xs max-w-3xl">
                    {diagrams[lightbox].caption}
                  </p>
                )}
              </div>

              <button
                onClick={closeLightbox}
                className="text-white/70 hover:text-white transition-colors p-2 rounded-sm hover:bg-white/10 ml-4 flex-shrink-0"
                aria-label="Close"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Image Container */}
            <div className="bg-white rounded-sm overflow-hidden shadow-2xl w-full border border-white/10 relative flex items-center justify-center p-4 sm:p-8">
              <img
                src={diagrams[lightbox].src}
                alt={diagrams[lightbox].title}
                className="w-full max-h-[72vh] object-contain"
              />

              {/* Prev / Next Arrows */}
              {diagrams.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-soft-black/70 hover:bg-soft-black/90 text-white rounded-sm p-2.5 transition-colors"
                    aria-label="Previous diagram"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-soft-black/70 hover:bg-soft-black/90 text-white rounded-sm p-2.5 transition-colors"
                    aria-label="Next diagram"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Footer Dot Indicators */}
            {diagrams.length > 1 && (
              <div className="flex items-center gap-2">
                {diagrams.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setLightbox(i)}
                    className={`rounded-full transition-all duration-200 ${
                      i === lightbox
                        ? "w-6 h-1.5 bg-accent"
                        : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`View diagram ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default CaseStudyDiagrams;
