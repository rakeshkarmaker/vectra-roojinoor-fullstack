import { JobsHero } from "@/components/features/jobs/JobsHero";
import { FeaturedCompanies } from "@/components/features/jobs/FeaturedCompanies";
import { JobListings } from "@/components/features/jobs/JobListings";
import { ConsultantCTA } from "@/components/features/candidates/ConsultantCTA";

export default function JobsPage() {
  return (
    <div className="w-full relative overflow-hidden">
      {/* Subtle radial background glow for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        <JobsHero />
      </div>

      <FeaturedCompanies />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16 lg:gap-24 py-16 lg:py-24">
        <JobListings />
        <ConsultantCTA />
      </div>
    </div>
  );
}

