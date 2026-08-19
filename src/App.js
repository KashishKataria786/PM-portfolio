import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import SelectedWork from "./Pages/SelectedWork";
import ProductTeardowns from "./Pages/ProductTeardowns";
import ProductThinking from "./Pages/ProductThinking";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Toolkit from "./Pages/Toolkit";
import Contact from "./Pages/Contact";
import CaseStudies from "./Pages/CaseStudies";
import CaseStudyDetail from "./Pages/CaseStudyDetail";

// Helper component to ensure window scrolls to top on route change or hash navigation
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

// ─── Main Homepage Layout ────────────────────────────────────
function HomePage() {
  return (
    <div className="bg-soft-white min-h-screen text-soft-black font-primary selection:bg-accent selection:text-white">
      <Header />
      <main>
        {/* 1. HERO */}
        <section id="hero">
          <Home />
        </section>

        {/* 2. SELECTED WORK (Flagship Editorial Projects) */}
        <section id="work">
          <SelectedWork />
        </section>

        {/* 3. PRODUCT TEARDOWNS & STRATEGY DECKS */}
        <section id="teardowns">
          <ProductTeardowns />
        </section>

        {/* 4. PRODUCT THINKING (How I Think About Products) */}
        <section id="thinking">
          <ProductThinking />
        </section>

        {/* 5. ABOUT (PM Bio & Core Strengths) */}
        <section id="about">
          <About />
        </section>

        {/* 6. WORK / EXPERIENCE (Problem -> Action -> Contribution -> Outcome) */}
        <section id="experience">
          <Experience />
        </section>

        {/* 7. TOOLKIT (Categorized Product, AI, Technical, Design, Security) */}
        <section id="toolkit">
          <Toolkit />
        </section>

        {/* 8. CONTACT */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

// ─── Root App with Scalable Dynamic Routing ──────────────────
function App() {
  return (
    <Router>
      <ScrollManager />
      <Routes>
        {/* Homepage with 7-part architecture */}
        <Route path="/" element={<HomePage />} />

        {/* Case Studies Directory */}
        <Route path="/case-studies" element={<CaseStudies />} />

        {/* Dynamic Case Study Detail Renderer */}
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />

        {/* Fallback to Home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
