import { youtubeSearchCaseStudy } from "./youtubeSearch";
import { securityReportsCaseStudy } from "./securityReports";

export const allCaseStudies = [
  youtubeSearchCaseStudy,
  securityReportsCaseStudy,
]

export function getAllCaseStudies() {
  return allCaseStudies;
}

export function getCaseStudyBySlug(slug) {
  if (!slug) return null;
  return allCaseStudies.find(
    (cs) => cs.slug.toLowerCase() === slug.toLowerCase()
  ) || null;
}

export function getAdjacentCaseStudies(currentSlug) {
  const index = allCaseStudies.findIndex(
    (cs) => cs.slug.toLowerCase() === currentSlug.toLowerCase()
  );
  if (index === -1) return { prev: null, next: null };

  const prev = index > 0 ? allCaseStudies[index - 1] : null;
  const next = index < allCaseStudies.length - 1 ? allCaseStudies[index + 1] : null;

  return { prev, next };
}
