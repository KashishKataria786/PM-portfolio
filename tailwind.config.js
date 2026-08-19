module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Inter', sans-serif",
      },
      colors: {
        "soft-black": "#0F172A",     // Deep slate navy / near-black
        "ink": "#1E293B",            // Slate 800
        "soft-white": "#FAFBFC",     // Soothing crisp background
        "warm": "#F1F5F9",           // Soothing slate-100 neutral (no brown/red)
        "accent": "#2563EB",         // Soothing Cobalt / Royal Blue
        "accent-hover": "#1D4ED8",   // Deep blue
        "accent-subtle": "#EFF6FF",  // Soothing ice blue tint
        "muted": "#64748B",          // Slate 500
        "muted-light": "#94A3B8",    // Slate 400
        "border-light": "#E2E8F0",   // Slate 200
        "border-warm": "#CBD5E1",    // Slate 300
      },
      borderRadius: {
        sm: "0.125rem",
      },
      letterSpacing: {
        label: "0.15em",
      },
      maxWidth: {
        reading: "65ch",
      },
    },
  },
  plugins: [],
};
