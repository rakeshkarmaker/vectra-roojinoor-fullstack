import { CandidatesHero } from "@/components/features/candidates/CandidatesHero";
import { AiMatchScoreCard } from "@/components/features/candidates/AiMatchScoreCard";
import { AiCvReview } from "@/components/features/candidates/AiCvReview";
import { ConsultantCTA } from "@/components/features/candidates/ConsultantCTA";

export default function CandidatesPage() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16 lg:gap-24 pb-16 lg:pb-24">
        <CandidatesHero />
        <AiMatchScoreCard />
        <AiCvReview />
        <ConsultantCTA />
      </div>
    </div>
  );
}
