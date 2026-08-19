import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contactDetails } from "../Details";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const containerRef = useRef(null);
  const { email, linkedin, github, medium } = contactDetails;

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="container mx-auto max-width section py-24 md:py-32">
      <div className="max-w-3xl space-y-10">
        <div className="space-y-4">
          <p className="section-label flex items-center gap-2">
            <span className="w-6 h-px bg-accent" />
            Let's Talk
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-soft-black tracking-tight leading-[1.1]">
            Have a product problem worth solving?
          </h2>

          <p className="text-base sm:text-lg text-muted leading-relaxed">
            I'm currently exploring Product Manager and AI PM opportunities. Whether you're building a new product from 0→1, scaling an AI initiative, or looking to discuss product strategy, let's connect.
          </p>
        </div>

      </div>
      {/* Minimalist Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-4 mt-10">
          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="p-6 bg-white border border-border-light rounded-sm hover:border-accent/40 transition-all group shadow-sm flex flex-col justify-between space-y-4"
          >
            <span className="text-[10px] font-bold uppercase tracking-label text-muted">
              Direct Email
            </span>
            <div>
              <p className="text-base font-bold text-soft-black group-hover:text-accent transition-colors break-all">
                {email}
              </p>
              <p className="text-xs text-muted font-medium mt-1">Send a message →</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="p-6 bg-white border border-border-light rounded-sm hover:border-accent/40 transition-all group shadow-sm flex flex-col justify-between space-y-4"
          >
            <span className="text-[10px] font-bold uppercase tracking-label text-muted">
              Professional Network
            </span>
            <div>
              <p className="text-base font-bold text-soft-black group-hover:text-accent transition-colors">
                LinkedIn Profile
              </p>
              <p className="text-xs text-muted font-medium mt-1">Connect on LinkedIn →</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            className="p-6 bg-white border border-border-light rounded-sm hover:border-accent/40 transition-all group shadow-sm flex flex-col justify-between space-y-4"
          >
            <span className="text-[10px] font-bold uppercase tracking-label text-muted">
              Technical Proof & Code
            </span>
            <div>
              <p className="text-base font-bold text-soft-black group-hover:text-accent transition-colors">
                GitHub Repository
              </p>
              <p className="text-xs text-muted font-medium mt-1">View Open Source →</p>
            </div>
          </a>

          <a
            href={medium}
            target="_blank"
            rel="noreferrer noopener"
            className="p-6 bg-white border border-border-light rounded-sm hover:border-accent/40 transition-all group shadow-sm flex flex-col justify-between space-y-4"
          >
            <span className="text-[10px] font-bold uppercase tracking-label text-muted">
              Knowledge Sharing
            </span>
            <div>
              <p className="text-base font-bold text-soft-black group-hover:text-accent transition-colors">
                Medium Blogs
              </p>
              <p className="text-xs text-muted font-medium mt-1">View All Blogs →</p>
            </div>
          </a>
        </div>
    </div>
  );
}

export default Contact;