import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contactDetails } from "../Details";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const { email, phone } = contactDetails;
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el);
  };

  useEffect(() => {
    // Header reveal
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        }
      }
    );

    // Staggered contact cards
    gsap.fromTo(cardsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
        }
      }
    );
  }, []);

  return (
    <div className="container mx-auto max-width section">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div ref={headerRef} className="space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-soft-black">
            Let's build something <span className="text-accent underline decoration-4 underline-offset-8">extraordinary</span> together.
          </h2>
          <p className="text-muted text-xl max-w-2xl mx-auto pt-4 leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          <a
            ref={addToCardsRef}
            href={`mailto:${email}`}
            className="card group flex flex-col items-center justify-center space-y-4 p-12 hover:border-accent transition-all"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <p className="text-muted font-medium uppercase tracking-widest text-[10px]">Send an Email</p>
            <h3 className="text-xl md:text-2xl font-bold text-soft-black">{email}</h3>
          </a>

          <a
            ref={addToCardsRef}
            href={`tel:${phone}`}
            className="card group flex flex-col items-center justify-center space-y-4 p-12 hover:border-accent transition-all"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <p className="text-muted font-medium uppercase tracking-widest text-[10px]">Direct Call</p>
            <h3 className="text-xl md:text-2xl font-bold text-soft-black">{phone}</h3>
          </a>
        </div>

        <div className="pt-12">
          <p className="text-muted text-sm italic">Inspired by minimal and user-friendly design principles.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;