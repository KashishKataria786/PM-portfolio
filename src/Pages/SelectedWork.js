import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { selectedProjects } from "../Details";

gsap.registerPlugin(ScrollTrigger);

function SelectedWork() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll(".project-block");
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          }
        );
      });
    }
  }, []);

  return (
    <div ref={sectionRef} className="container mx-auto max-width section border-t border-border-light pt-24 pb-28">
      {/* Section Header */}
      <div className="space-y-4 mb-16 md:mb-20 max-w-2xl">
        <p className="section-label flex items-center gap-2">
          <span className="w-6 h-px bg-accent" />
          Selected Work
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-soft-black tracking-tight leading-tight">
           Case Studies & Product 
        </h2>
        <p className="text-base sm:text-lg text-muted leading-relaxed">
          Deep dives into problem identification, product trade-offs, architecture design, and measurable impact across AI, SaaS, and consumer experiences.
        </p>
      </div>

      {/* Large Editorial Project Blocks (Asymmetric Layout) */}
      <div className="space-y-16 md:space-y-24">
        {selectedProjects.map((project, idx) => {
          const isEven = idx % 2 === 1;
          const isInternal = project.link && project.link.startsWith("/");

          return (
            <article
              key={project.id}
              className="project-block group bg-white border border-border-light rounded-sm p-6 sm:p-8 md:p-10 hover:border-accent/30 transition-all duration-300 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                {/* Visual Thumbnail Column */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-sm border border-border-light bg-warm aspect-[16/10] group/img">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-white/95 backdrop-blur-sm border border-border-light text-[11px] font-bold uppercase tracking-wider text-soft-black">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content & Metadata Column */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {/* Top Meta Line */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-light pb-3">
                    <span className="text-2xl font-black text-accent/80 font-mono">
                      {project.id}
                    </span>
                    <div className="flex items-center gap-3 text-xs text-muted font-medium">
                      <span>{project.type}</span>
                      <span className="text-border-light">·</span>
                      <span className="font-semibold text-soft-black">{project.year}</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-soft-black tracking-tight group-hover:text-accent transition-colors">
                      {isInternal ? (
                        <Link to={project.link}>{project.title}</Link>
                      ) : (
                        <a href={project.link} target="_blank" rel="noreferrer noopener">
                          {project.title}
                        </a>
                      )}
                    </h3>
                    <p className="text-sm font-semibold text-muted tracking-wide">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Core Problem Statement */}
                  <div className="bg-warm/70 border-l-2 border-accent p-3.5 space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-label text-muted">
                      Problem Statement
                    </p>
                    <p className="text-sm text-soft-black font-medium leading-snug">
                      "{project.problem}"
                    </p>
                  </div>

                  {/* Role & Outcome */}
                  <div className="space-y-1.5 text-sm text-muted">
                    <p>
                      <span className="font-semibold text-soft-black">My Role:</span>{" "}
                      {project.role}
                    </p>
                    <p>
                      <span className="font-semibold text-soft-black">Key Outcome:</span>{" "}
                      {project.outcome}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-1 bg-soft-white border border-border-light rounded-sm text-soft-black/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action CTA */}
                  <div className="pt-2">
                    {isInternal ? (
                      <Link
                        to={project.link}
                        className="inline-flex items-center gap-2 text-sm font-bold text-soft-black hover:text-accent transition-all duration-200 group/link"
                      >
                        <span className="border-b-2 border-accent pb-0.5">
                          {project.ctaText}
                        </span>
                      </Link>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 text-sm font-bold text-soft-black hover:text-accent transition-all duration-200 group/link"
                      >
                        <span className="border-b-2 border-accent pb-0.5">
                          {project.ctaText}
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default SelectedWork;
