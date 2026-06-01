import { CandidatesHero } from "@/components/features/candidates/CandidatesHero";
import { AiMatchScoreCard } from "@/components/features/candidates/AiMatchScoreCard";
import { AiCvReview } from "@/components/features/candidates/AiCvReview";
import { ConsultantCTA } from "@/components/features/candidates/ConsultantCTA";

export default function CandidatesPage() {
  return (
    <div className="w-full pt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-6 pb-24">
        <CandidatesHero />
        <AiMatchScoreCard />
        <AiCvReview />
        <ConsultantCTA />
      </div>
    </div>
  );
}
