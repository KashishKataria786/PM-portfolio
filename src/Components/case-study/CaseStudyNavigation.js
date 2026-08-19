import React from "react";
import { Link } from "react-router-dom";

function CaseStudyNavigation({ prev, next }) {
  return (
    <div className="border-t border-border-light bg-warm/50 py-16">
      <div className="container mx-auto max-width space-y-8">
        <div className="flex items-center justify-between">
          <p className="section-label">More Product Work</p>
          <Link
            to="/#work"
            className="text-xs font-bold uppercase tracking-label text-muted hover:text-soft-black transition-colors"
          >
            All Case Studies ↑
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Previous Case Study */}
          {prev ? (
            <Link
              to={`/case-studies/${prev.slug}`}
              className="p-6 bg-white border border-border-light rounded-sm hover:border-accent/40 transition-all group shadow-sm flex flex-col justify-between space-y-3"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-label text-muted flex items-center gap-1 group-hover:-translate-x-1 transition-transform">
                  ← Previous Case Study
                </span>
                <h4 className="text-lg font-bold text-soft-black group-hover:text-accent transition-colors">
                  {prev.title}
                </h4>
              </div>
              <p className="text-xs text-muted">{prev.category}</p>
            </Link>
          ) : (
            <div className="p-6 bg-soft-white/60 border border-dashed border-border-light rounded-sm flex items-center justify-center">
              <span className="text-xs text-muted">First Case Study</span>
            </div>
          )}

          {/* Next Case Study */}
          {next ? (
            <Link
              to={`/case-studies/${next.slug}`}
              className="p-6 bg-white border border-border-light rounded-sm hover:border-accent/40 transition-all group shadow-sm flex flex-col justify-between space-y-3 text-right"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-label text-muted flex items-center justify-end gap-1 group-hover:translate-x-1 transition-transform">
                  Next Case Study →
                </span>
                <h4 className="text-lg font-bold text-soft-black group-hover:text-accent transition-colors">
                  {next.title}
                </h4>
              </div>
              <p className="text-xs text-muted">{next.category}</p>
            </Link>
          ) : (
            <div className="p-6 bg-soft-white/60 border border-dashed border-border-light rounded-sm flex items-center justify-center">
              <span className="text-xs text-muted">Latest Case Study</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CaseStudyNavigation;
