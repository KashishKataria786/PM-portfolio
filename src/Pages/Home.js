import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails, techStackDetails } from "../Details";

function Home() {
  const { name, tagline, img, summary } = personalDetails;

  // floating icons refs
  const iconsRef = useRef([]);
  iconsRef.current = [];

  const addToIconsRef = (el) => {
    if (el && !iconsRef.current.includes(el)) iconsRef.current.push(el);
  };

  useEffect(() => {
    iconsRef.current.forEach((icon, index) => {
      gsap.to(icon, {
        y: gsap.utils.random(-15, 15),
        x: gsap.utils.random(-15, 15),
        rotate: gsap.utils.random(-10, 10),
        duration: gsap.utils.random(3, 5),
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.1,
      });
    });
  }, []);

  return (
    <main className="container mx-auto max-width section grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[90vh]">
      {/* ========= LEFT CONTENT ========= */}
      <div className="text-center lg:text-left space-y-8 animate-in fade-in slide-in-from-left duration-1000">
        <div className="space-y-4">
          <p className="text-accent font-medium tracking-wider uppercase text-sm">Welcome to my portfolio</p>
          <h1 className="text-5xl md:text-6xl xl:text-8xl tracking-tight leading-[1.1]">
            I'm <span className="text-soft-black">{name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted font-medium">
            {tagline}
          </h2>
        </div>

        <p className="text-muted text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
          {summary}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
          <a
            href="/resume.pdf"
            download='resume.pdf'
            className="button-primary"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="button-secondary"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* ========= RIGHT IMAGE & ROUND FLOATING ICONS ========= */}
      <div className="relative flex justify-center lg:justify-end animate-in fade-in zoom-in duration-1000">
        <div className="relative w-full max-w-lg aspect-square">
          {/* Decorative background circle */}
          <div className="absolute inset-0 bg-gray-100 rounded-full scale-110 opacity-50 blur-3xl"></div>

          {/* Floating icons background */}
          <div className="absolute inset-0 -z-10 overflow-visible">
            {Object.values(techStackDetails).slice(0, 10).map((icon, i) => (
              <img
                key={i}
                ref={addToIconsRef}
                src={icon}
                alt="skill"
                className="absolute w-12 h-12 md:w-16 md:h-16 object-contain grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all cursor-crosshair"
                style={{
                  top: `${Math.random() * 80}%`,
                  left: `${Math.random() * 80}%`,
                }}
              />
            ))}
          </div>

          {/* Profile image container */}
          <div className="relative z-10 w-full h-full rounded-sm overflow-hidden border-8 border-white shadow-2xl">
            <img
              className="w-full h-full object-cover"
              src={img}
              alt={name}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
