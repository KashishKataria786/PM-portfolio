import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { capabilities } from "../Details";

gsap.registerPlugin(ScrollTrigger);

function Capabilities() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      }
    );

    const items = gridRef.current?.querySelectorAll(".capability-item");
    if (items?.length) {
      gsap.fromTo(
        items,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <div className="bg-warm">
      <div className="container mx-auto max-width section space-y-16">
        {/* Header */}
        <div ref={headerRef} className="space-y-3 max-w-reading">
          <p className="section-label">How I work</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-soft-black leading-[1.1]">
            Capabilities
          </h2>
          <p className="text-[17px] leading-[1.75] text-muted">
            The lenses I bring to every product problem — from early discovery to launch and iteration.
          </p>
        </div>

        {/* Capabilities grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border-warm"
        >
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="capability-item border-b border-r border-border-warm p-8 lg:p-10 space-y-3 hover:bg-white transition-colors duration-300 group"
            >
              {/* Number */}
              <span className="text-[11px] font-bold text-muted-light tracking-label">
                {String(i + 1).padStart(2, "0")}
              </span>
              {/* Area name */}
              <h3 className="text-base font-bold text-soft-black leading-snug group-hover:text-accent transition-colors duration-200">
                {cap.area}
              </h3>
              {/* Description */}
              <p className="text-sm text-muted leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Capabilities;
