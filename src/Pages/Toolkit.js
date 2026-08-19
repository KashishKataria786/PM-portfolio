import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toolkitCategories } from "../Details";

gsap.registerPlugin(ScrollTrigger);

function Toolkit() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".toolkit-card");
      cards.forEach((card, idx) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: idx * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
            },
          }
        );
      });
    }
  }, []);

  return (
    <div className="bg-warm/50 border-t border-b border-border-warm py-24 md:py-32">
      <div ref={containerRef} className="container mx-auto max-width">
        {/* Header */}
        <div className="space-y-4 mb-16 max-w-2xl">
          <p className="section-label flex items-center gap-2">
            <span className="w-6 h-px bg-accent" />
            Capabilities & Stack
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-soft-black tracking-tight leading-tight">
            Product & Technical Toolkit
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Categorized functional domains enabling high-velocity product scoping, technical collaboration, and rigorous execution.
          </p>
        </div>

        {/* Categorized Matrix (No giant unorganized cloud) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolkitCategories.map((cat, idx) => (
            <div
              key={idx}
              className="toolkit-card bg-white border border-border-light rounded-sm p-7 space-y-5 hover:border-accent/40 transition-colors shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-soft-black">
                    {cat.category}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-label text-accent font-mono">
                    0{idx + 1}
                  </span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="pt-2 border-t border-border-light/70 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-semibold px-2.5 py-1 bg-soft-white border border-border-light text-soft-black rounded-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Toolkit;
