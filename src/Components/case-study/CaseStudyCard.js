import React from "react";
import { Link } from "react-router-dom";

function CaseStudyCard({ caseStudy }) {
  const {
    slug,
    title,
    subtitle,
    category,
    year,
    role,
    type,
    heroImage,
    summary,
    problem,
    metrics,
  } = caseStudy;

  const problemText = summary?.problem || problem?.statement || "";
  const keyMetric = metrics && metrics.length > 0 ? metrics[0] : null;

  return (
    <article className="group bg-white border border-border-light rounded-sm p-6 sm:p-8 hover:border-accent/40 transition-all duration-300 shadow-sm flex flex-col justify-between space-y-6">
      <div className="space-y-5">
        {/* Top Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-light pb-3">
          <span className="px-2.5 py-1 bg-warm border border-border-warm text-soft-black text-[11px] font-bold uppercase tracking-wider rounded-sm">
            {category}
          </span>
          <div className="flex items-center gap-2 text-xs text-muted font-medium">
            <span>{year}</span>
            {type && (
              <>
                <span className="text-border-light">·</span>
                <span>{type}</span>
              </>
            )}
          </div>
        </div>

        {/* Hero Visual if present */}
        {heroImage && (
          <div className="relative overflow-hidden rounded-sm border border-border-light bg-warm aspect-[16/9]">
            <img
              src={heroImage}
              alt={title}
              className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500"
            />
          </div>
        )}

        {/* Title & Subtitle */}
        <div className="space-y-1.5">
          <h3 className="text-xl sm:text-2xl font-bold text-soft-black tracking-tight group-hover:text-accent transition-colors">
            <Link to={`/case-studies/${slug}`}>{title}</Link>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-muted">
            {subtitle}
          </p>
        </div>

        {/* Problem Teaser */}
        {problemText && (
          <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-3">
            {problemText}
          </p>
        )}

        {/* Role & Metric */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-muted border-t border-border-light/70">
          <span>
            <strong className="text-soft-black">Role:</strong> {role}
          </span>
          {keyMetric && (
            <span className="font-bold text-accent font-mono">
              {keyMetric.label}: {keyMetric.value}
            </span>
          )}
        </div>
      </div>

      {/* Action CTA Link */}
      <div className="pt-2">
        <Link
          to={`/case-studies/${slug}`}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-soft-black hover:text-accent transition-colors group/link"
        >
          <span className="border-b border-accent pb-0.5">Read Case Study</span>
          <span className="group-hover/link:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </article>
  );
}

export default CaseStudyCard;
