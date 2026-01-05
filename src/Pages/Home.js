import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails, techStackDetails } from "../Details";
import { Link } from "react-router-dom";

function Home() {
  const { name, tagline, img ,summary} = personalDetails;

  // floating icons refs
  const iconsRef = useRef([]);
  iconsRef.current = [];

  const addToIconsRef = (el) => {
    if (el && !iconsRef.current.includes(el)) iconsRef.current.push(el);
  };

  useEffect(() => {
    // ✨ floating icons animation only
    iconsRef.current.forEach((icon, index) => {
      gsap.to(icon, {
        y: gsap.utils.random(-14, 14),
        x: gsap.utils.random(-14, 14),
        rotate: gsap.utils.random(-12, 12),
        duration: gsap.utils.random(4, 7),
        ease: "easeInOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.2,
      });
    });
  }, []);

  return (
    <main className="container mx-auto max-width section grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* ========= LEFT CONTENT ========= */}
      <div className="text-center md:text-left space-y-4">
        <h1 className="text-dark-heading dark:text-light-heading text-4xl md:text-5xl xl:text-6xl font-bold leading-snug">
          Hi,<br />My Name is
        </h1>

        <h1 className="bg-clip-text text-transparent text-dark-heading dark:text-light-heading text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
          {name}
        </h1>

        <h2 className="text-dark-heading dark:text-light-heading text-2xl md:text-3xl xl:text-4xl font-semibold leading-snug">
          {tagline}
        </h2>

        <p className="text-gray-400 max-w-xl md:mt-2 mx-auto md:mx-0">
        {summary}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center md:justify-start pt-3">
          <a
            href="/resume.pdf"
            download='resume.pdf'
            className="px-5 py-2 rounded-md bg-gray-800 dark:bg-gray-200 text-sm"
          >
            Download Resume
          </a>

          <Link
            to="/contact"
            className="px-5 py-2 rounded-md border border-gray-800 dark:border-gray-200 text-gray-200 text-sm"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* ========= RIGHT IMAGE & ROUND FLOATING ICONS ========= */}
      <div className="relative flex justify-center md:justify-end">

        <div className="absolute inset-0 -z-10 flex flex-wrap gap-4 justify-center md:justify-end opacity-70 pointer-events-none">
          {Object.values(techStackDetails).map((icon, i) => (
            <img
              key={i}
              ref={addToIconsRef}
              src={icon}
              alt="skill"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-10 md:h-10 xl:w-14 xl:h-14 object-contain"
            />
          ))}
        </div>

        {/* profile image */}
        <img
          className="w-2/3 sm:w-1/2 md:w-2/3 lg:w-1/2 xl:w-1/2 max-w-md rounded-full shadow-xl"
          src={img}
          alt={name}
        />
      </div>
    </main>
  );
}

export default Home;
