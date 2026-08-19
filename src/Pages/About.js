import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalDetails } from "../Details";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const containerRef = useRef(null);
  const { about } = personalDetails;

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  const coreStrengths = [
    {
      title: "Product Strategy & Discovery",
      desc: "Uncovering root causes through qualitative interviews, quantitative metrics, and disciplined prioritization.",
    },
    {
      title: "Technical & AI Depth",
      desc: "Hands-on experience with LLMs, RAG, API design, and system architecture to evaluate feasibility without friction.",
    },
    {
      title: "Security & Trust Mindset",
      desc: "Applying OWASP standards and threat modeling to build trustworthy, compliant, and privacy-conscious products.",
    },
    {
      title: "Cross-Functional Translation",
      desc: "Speaking the native languages of engineers, designers, and business leaders to drive consensus and execution speed.",
    },
  ];

  return (
    <div ref={containerRef} className="container mx-auto max-width section py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-6 space-y-6">
          <p className="section-label flex items-center gap-2">
            <span className="w-6 h-px bg-accent" />
            About Me
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-soft-black tracking-tight leading-[1.15]">
            Bridging technical depth with user-centric product discovery.
          </h2>

          <p className="text-lg font-medium text-soft-black/90 leading-snug">
            {about.lead}
          </p>

          {about.paragraphs.map((p, idx) => (
            <p key={idx} className="text-base text-muted leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* Right Column: 4 PM Pillars */}
        <div className="lg:col-span-6 space-y-4">
          <p className="text-[11px] font-bold uppercase tracking-label text-muted mb-4">
            How I Create Leverage
          </p>

          <div className="space-y-4">
            {coreStrengths.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-border-light rounded-sm p-5 hover:border-accent/40 transition-colors shadow-sm space-y-1.5"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <h3 className="text-sm font-bold text-soft-black">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-relaxed pl-4">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
