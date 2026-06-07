import { CvUploadWidget } from "./CvUploadWidget";

export function CandidatesHero() {
  return (
    <section className="pt-32 lg:pt-40 pb-16 lg:pb-24 w-full relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            Your Career.
            <br />
            Our Expertise.
          </h1>
          <p className="text-lg md:text-xl text-foreground-soft leading-relaxed max-w-lg">
            Upload your CV and let our AI find out new engineering opportunities for you.
          </p>
        </div>
        
        <div className="w-full flex justify-end">
          <CvUploadWidget />
        </div>
      </div>
    </section>
  );
}
