import Image from "next/image";

export function CompaniesHero() {
  return (
    <section className="pt-32 pb-16 w-full relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="max-w-xl z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            Find the Right Talent.
            <br />
            Build the Future.
          </h1>
          <p className="text-lg md:text-xl text-foreground-soft leading-relaxed max-w-lg">
            Access specialist engineering talent and hire faster with AI-powered solutions.
          </p>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-full lg:w-3/4 h-[120%] pointer-events-none z-0">
        <Image 
          src="/images/companies_bg.png" 
          alt="Futuristic buildings" 
          fill 
          sizes="(max-width: 1024px) 100vw, 75vw"
          className="object-cover object-right mix-blend-lighten opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:hidden" />
      </div>
    </section>
  );
}
