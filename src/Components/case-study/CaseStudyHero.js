import React from "react";
import { Link } from "react-router-dom";

function CaseStudyHero({ caseStudy }) {
  const { title, subtitle, category, year, role, duration, type, heroImage } =
    caseStudy;

  return (
    <div className="border-b border-border-light bg-soft-white pt-10 pb-16 md:pt-14 md:pb-20">
      <div className="container mx-auto max-width space-y-10">
        {/* Back Link */}
        <div>
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-label uppercase text-muted hover:text-soft-black transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* Header Content */}
        <div className="space-y-6 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-warm border border-border-warm text-soft-black text-xs font-bold tracking-wider uppercase rounded-sm">
              {category}
            </span>
            <span className="text-muted text-xs">·</span>
            <span className="text-muted text-xs font-semibold">{year}</span>
            {type && (
              <>
                <span className="text-muted text-xs">·</span>
                <span className="text-muted text-xs font-semibold">{type}</span>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-soft-black tracking-tight leading-[1.08]">
            {title}
          </h1>

          <p className="text-lg sm:text-xl text-muted font-medium leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Meta Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-border-light">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-label text-muted">Role</p>
            <p className="text-sm font-bold text-soft-black mt-1">{role}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-label text-muted">Duration</p>
            <p className="text-sm font-bold text-soft-black mt-1">{duration || "4 Weeks"}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-label text-muted">Category</p>
            <p className="text-sm font-bold text-soft-black mt-1">{category}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-label text-muted">Year</p>
            <p className="text-sm font-bold text-soft-black mt-1">{year}</p>
          </div>
        </div>

        {/* Hero Visual Thumbnail / Banner */}
        {heroImage && (
          <div className="relative overflow-hidden rounded-sm border border-border-light bg-warm aspect-[16/9] shadow-sm">
            <img
              src={heroImage}
              alt={title}
              className="w-full h-full object-cover object-top"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CaseStudyHero;
