"use client";

const features = [
  {
    title: "AI Talent Matching",
    description:
      "Our AI scores skills, experience and career goals to match you with the right opportunities.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="text-primary"
        strokeWidth="1.5"
      >
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <circle cx="18" cy="8" r="1.5" />
        <path d="M18 11c0 0 2.5 1.5 2.5 4" />
        <path d="M15.5 11c0 0-2.5 1.5-2.5 4" />
      </svg>
    ),
  },
  {
    title: "Specialist Consultants",
    description:
      "Our engineers understand your industry and connect you with the right teams.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="text-primary"
        strokeWidth="1.5"
      >
        <circle cx="8" cy="8" r="3" />
        <circle cx="16" cy="8" r="3" />
        <path d="M2 20v-1a5 5 0 015-5h4" />
        <path d="M16 14l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Proven Results",
    description:
      "We deliver talent that drives innovation and long-term business growth.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="text-primary"
        strokeWidth="1.5"
      >
        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-background py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <p className="text-center text-2xl font-semibold tracking-[0.2em] text-foreground-soft mb-10 uppercase">
          <span className="text-primary">AI</span>-POWERED MATCHING. HUMAN-LED
          RECRUITMENT.
        </p>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="feature-card p-6 flex flex-col gap-4 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-0.5">{f.icon}</div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-2">
                    {f.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
