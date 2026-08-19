import React from "react";

function CaseStudyGallery({ images, title, subtitle }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-6 pt-2">
      {(title || subtitle) && (
        <div className="space-y-1">
          {title && <h3 className="text-xl font-bold text-soft-black">{title}</h3>}
          {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
        </div>
      )}

      <div
        className={`grid gap-6 ${
          images.length === 1
            ? "grid-cols-1"
            : images.length === 2
            ? "grid-cols-1 md:grid-cols-2"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {images.map((imgItem, idx) => {
          const src = typeof imgItem === "string" ? imgItem : imgItem.src;
          const caption = typeof imgItem === "object" ? imgItem.caption : null;

          return (
            <div
              key={idx}
              className="bg-white border border-border-light rounded-sm overflow-hidden shadow-sm group"
            >
              <div className="relative aspect-[16/10] bg-warm overflow-hidden">
                <img
                  src={src}
                  alt={caption || `Gallery visual ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              {caption && (
                <div className="p-3.5 bg-soft-white border-t border-border-light">
                  <p className="text-xs text-muted font-medium">{caption}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CaseStudyGallery;
