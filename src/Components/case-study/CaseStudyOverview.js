import React from "react";

function CaseStudyOverview({ summary }) {
  if (!summary) return null;

  return (
    <div className="bg-warm border-b border-border-light py-14 md:py-20">
      <div className="container mx-auto max-width space-y-8">
        <div className="space-y-2 max-w-2xl">
          <p className="section-label flex items-center gap-2">
            <span className="w-6 h-px bg-accent" />
            Executive Summary
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-soft-black tracking-tight">
            At a Glance
          </h2>
        </div>

        {/* 4 Quadrants / Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {summary.problem && (
            <div className="bg-white border border-border-light rounded-sm p-6 sm:p-8 space-y-2 border-l-4 border-l-slate-400 shadow-sm">
              <p className="text-[10px] font-extrabold uppercase tracking-label text-slate-500">
                01 — The Core Problem
              </p>
              <p className="text-sm sm:text-base text-soft-black/90 leading-relaxed font-medium">
                {summary.problem}
              </p>
            </div>
          )}

          {summary.opportunity && (
            <div className="bg-white border border-border-light rounded-sm p-6 sm:p-8 space-y-2 border-l-4 border-l-sky-500 shadow-sm">
              <p className="text-[10px] font-extrabold uppercase tracking-label text-sky-600">
                02 — The Opportunity
              </p>
              <p className="text-sm sm:text-base text-soft-black/90 leading-relaxed font-medium">
                {summary.opportunity}
              </p>
            </div>
          )}

          {summary.solution && (
            <div className="bg-white border border-border-light rounded-sm p-6 sm:p-8 space-y-2 border-l-4 border-l-accent shadow-sm">
              <p className="text-[10px] font-extrabold uppercase tracking-label text-accent">
                03 — The Solution
              </p>
              <p className="text-sm sm:text-base text-soft-black/90 leading-relaxed font-medium">
                {summary.solution}
              </p>
            </div>
          )}

          {summary.impact && (
            <div className="bg-white border border-border-light rounded-sm p-6 sm:p-8 space-y-2 border-l-4 border-l-emerald-600 shadow-sm">
              <p className="text-[10px] font-extrabold uppercase tracking-label text-emerald-700">
                04 — Key Impact
              </p>
              <p className="text-sm sm:text-base text-soft-black font-semibold leading-relaxed">
                {summary.impact}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CaseStudyOverview;
