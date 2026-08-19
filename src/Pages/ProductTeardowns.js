import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { selectedTeardowns } from "../Details";

import angeloneImg from "../assets/projects/angelone.jpg";
import nobrokerImg from "../assets/projects/nobroker.jpg";
import filoImg from "../assets/projects/Filo.png";

gsap.registerPlugin(ScrollTrigger);

const imageMap = {
  angelone: angeloneImg,
  nobroker: nobrokerImg,
  filo: filoImg,
};

function ProductTeardowns() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll(".teardown-card");

    items.forEach((item) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            once: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container mx-auto max-width section border-t border-border-light pt-24 pb-28"
    >
      {/* Section Header */}
      <div className="space-y-4 mb-16 md:mb-20 max-w-2xl">
        <p className="section-label flex items-center gap-2">
          <span className="w-6 h-px bg-accent" />
          Teardowns
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-soft-black tracking-tight leading-tight">
          Product Teardowns
        </h2>

        <p className="text-base sm:text-lg text-muted leading-relaxed">
          Deep dives into friction points, UX decisions, and product flows
          across fintech, edtech, and consumer apps.
        </p>
      </div>

      {/* Teardown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {selectedTeardowns.map((item) => {
          const img = imageMap[item.image];

          return (
            <article
              key={item.id}
              className="teardown-card group bg-white border border-border-light rounded-sm overflow-hidden transition-colors duration-300 hover:border-accent/40"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] bg-warm overflow-hidden">
                {img ? (
                  <img
                    src={img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-warm">
                    <span className="text-4xl font-black text-accent/30 font-mono">
                      {item.id}
                    </span>
                  </div>
                )}

                {/* Index Badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-white border border-border-light text-[10px] font-bold uppercase tracking-label text-soft-black rounded-sm">
                  {item.id}
                </span>

                {/* Category Badge */}
                <span className="absolute top-3 right-3 px-2.5 py-1 bg-white border border-border-light text-[10px] font-bold uppercase tracking-label text-soft-black rounded-sm">
                  Teardown
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-4">
                <h3 className="text-base font-extrabold text-soft-black leading-snug tracking-tight group-hover:text-accent transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Accent Underline */}
                <div className="w-6 h-[2px] bg-accent transition-all duration-300 group-hover:w-12" />

                {/* CTA */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-soft-black hover:text-accent transition-colors duration-200"
                >
                  <span className="border-b-2 border-accent pb-0.5">
                    {item.ctaText}
                  </span>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ProductTeardowns;