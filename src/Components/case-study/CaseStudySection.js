import React from "react";

function CaseStudySection({ overline, title, intro, children, className = "" }) {
  return (
    <section className={`py-14 md:py-20 border-b border-border-light last:border-0 ${className}`}>
      <div className="container mx-auto max-width space-y-8">
        {(overline || title || intro) && (
          <div className="space-y-3 max-w-3xl">
            {overline && (
              <p className="section-label flex items-center gap-2">
                <span className="w-6 h-px bg-accent" />
                {overline}
              </p>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-soft-black tracking-tight leading-tight">
                {title}
              </h2>
            )}
            {intro && (
              <p className="text-base sm:text-lg text-muted leading-relaxed">
                {intro}
              </p>
            )}
          </div>
        )}

        <div className="space-y-6">{children}</div>
      </div>
    </section>
  );
}

export default CaseStudySection;
