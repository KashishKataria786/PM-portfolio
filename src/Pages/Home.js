import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { headline, role, subheading, coreAreas, img, name } = personalDetails;

  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const badgesRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (headlineRef.current) {
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9 }
      );
    }
    if (subRef.current) {
      tl.fromTo(
        subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      );
    }
    if (badgesRef.current) {
      tl.fromTo(
        badgesRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.4"
      );
    }
    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      );
    }
    if (imageRef.current) {
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 1 },
        "-=0.8"
      );
    }
  }, []);

  return (
    <div className="container mx-auto max-width section pt-12 pb-24 md:pt-16 md:pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Core Positioning & Problem-First Narrative */}
        <div className="lg:col-span-8 space-y-8">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-warm border border-border-warm rounded-sm">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-[11px] font-bold uppercase tracking-label text-soft-black">
              {role}
            </span>
          </div>

          {/* Large Hero Headline */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-soft-black leading-[1.08]"
          >
            {headline}
          </h1>

          {/* Supporting Bio / Narrative */}
          <p
            ref={subRef}
            className="text-lg md:text-xl text-muted leading-relaxed font-normal max-w-2xl"
          >
            {subheading}
          </p>

          {/* Scope of Product Competencies */}
          <div ref={badgesRef} className="space-y-3 pt-2">
            <p className="text-[11px] font-bold uppercase tracking-label text-muted">
              Working Across The Product Lifecycle
            </p>
            <div className="flex flex-wrap gap-2">
              {coreAreas.map((area) => (
                <span
                  key={area}
                  className="text-xs font-semibold px-3 py-1.5 bg-white border border-border-light text-soft-black rounded-sm hover:border-accent/40 transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Two Primary CTAs */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#work"
              className="px-6 py-3.5 bg-soft-black text-white text-sm font-semibold tracking-wide rounded-sm hover:bg-ink transition-all duration-200 inline-flex items-center gap-2 shadow-sm"
            >
              <span>View Case Studies</span>
              <span className="text-base">↓</span>
            </a>

            <a
              href="#contact"
              className="px-6 py-3.5 border border-soft-black text-soft-black text-sm font-semibold tracking-wide rounded-sm hover:bg-warm transition-all duration-200 inline-flex items-center gap-2"
            >
              <span>Let's Connect</span>
              <span className="text-base">→</span>
            </a>
          </div>
        </div>

        {/* Right Column: Subtle Editorial Portrait */}
        <div ref={imageRef} className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] group">
            {/* Structural background offset */}
            <div className="absolute inset-0 bg-warm border border-border-warm rounded-sm translate-x-3 translate-y-3 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 duration-300" />

            {/* Image frame */}
            <div className="relative h-full w-full bg-white border border-border-light rounded-sm overflow-hidden p-2">
              <img
                src={img}
                alt={name}
                className="w-full h-full object-cover object-top grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-sm border border-border-light text-left">
                <p className="text-xs font-bold text-soft-black">{name}</p>
                <p className="text-[10px] text-muted tracking-wide uppercase">AI & Product Strategy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
