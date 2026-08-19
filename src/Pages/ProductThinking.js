import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { productPrinciples } from "../Details";

gsap.registerPlugin(ScrollTrigger);

function ProductThinking() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".principle-card");
      cards.forEach((card, idx) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: idx * 0.1,
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
    <div className="bg-warm/60 border-t border-b border-border-warm py-24 md:py-32">
      <div ref={containerRef} className="container mx-auto max-width">
        {/* Header */}
        <div className="space-y-4 mb-16 max-w-2xl">
          <p className="section-label flex items-center gap-2">
            <span className="w-6 h-px bg-accent" />
            Product Philosophy
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-soft-black tracking-tight leading-tight">
            How I think about products
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            The core operating principles that guide my prioritization, decision-making, and alignment across cross-functional teams.
          </p>
        </div>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {productPrinciples.map((principle) => (
            <div
              key={principle.number}
              className="principle-card bg-white border border-border-light rounded-sm p-8 lg:p-10 space-y-4 hover:border-accent/40 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-accent font-mono">
                  {principle.number}
                </span>
                <span className="text-[10px] font-bold tracking-label uppercase text-muted">
                  Principle
                </span>
              </div>

              <h3 className="text-xl font-bold text-soft-black tracking-tight">
                {principle.title}
              </h3>

              <p className="text-sm md:text-base text-muted leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductThinking;
