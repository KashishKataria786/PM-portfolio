module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Inter', sans-serif",
        mono: "'JetBrains Mono', monospace",
      },
      colors: {
        "soft-black": "#121212",
        "soft-white": "#FAFAFA",
        "accent": "#3B82F6", // Clean Blue
        "muted": "#6B7280",
        "border-light": "#E5E7EB",
      },
      borderRadius: {
        'sm': '0.125rem',
      }
    },
  },
  plugins: [],
};
