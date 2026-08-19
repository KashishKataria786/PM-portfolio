import { getAllCaseStudies } from "../data/caseStudies";
import CaseStudyCard from "../Components/case-study/CaseStudyCard";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function CaseStudies() {
  const caseStudies = getAllCaseStudies();

  return (
    <div className="bg-soft-white min-h-screen text-soft-black font-primary selection:bg-accent selection:text-white">
      <Header />

      <main className="container mx-auto max-width py-16 md:py-24 space-y-16">
        <div className="space-y-4 max-w-2xl">
          <p className="section-label flex items-center gap-2">
            <span className="w-6 h-px bg-accent" />
            Product Archives
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-soft-black tracking-tight leading-tight">
            Case Studies & Product Teardowns
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            In-depth product breakdowns focusing on user research, product strategy, technical trade-offs, and measurable outcomes.
          </p>
        </div>

        {/* Directory Grid with CaseStudyCard components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default CaseStudies;
