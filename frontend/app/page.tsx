import { Link, Briefcase } from "lucide-react";
import Img from "next/image";
import { IndustryStrip } from "../components/sections/industry-strip";
import { motion } from "motion/react";

export default function Home() {
  const featuredJobs = [
    {
      title: "Optical Systems Engineer",
      location: "London, UK",
      type: "Full-time",
      matchScore: 92,
    },
    {
      title: "Aerospace Systems Lead",
      location: "Stevenage, UK",
      type: "Full-time",
      matchScore: 88,
    },
    {
      title: "Photonics Design Engineer",
      location: "Bristol, UK",
      type: "Contract",
      matchScore: 85,
    },
  ];

  const features = [
    {
      icon: "🧠",
      title: "AI Talent Matching",
      description:
        "Our AI scores skills, experience and career goals to match you with the right opportunities.",
    },
    {
      icon: "👥",
      title: "Specialist Consultants",
      description:
        "Our engineers understand your industry and connect you with the right teams.",
    },
    {
      icon: "✈️",
      title: "Proven Results",
      description:
        "We deliver talent that drives innovation and long-term business growth.",
    },
  ];

  return (
    <>
      <main className="pt-28">
        {/* Hero Section with Sidebar */}
        <div className="min-h-screen bg-linear-to-b from-surface-deep-start via-surface-deep-mid to-surface-deep-end flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 py-32 grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="max-w-2xl">
                <p className="text-accent text-sm font-semibold tracking-wide mb-4">
                  SPECIALIST TALENT SOLUTIONS
                </p>
                <h1 className="mb-6 text-5xl font-semibold tracking-tight leading-[0.95] md:text-7xl">
                  Engineering Talent.
                  <br />
                  Powering{" "}
                  <span className="bg-gradient-to-r from-brand-start to-brand-end bg-clip-text text-transparent">
                    Innovation
                  </span>
                  .
                </h1>
                <p className="text-lg text-foreground-muted mb-8 leading-relaxed">
                  Specialist recruitment for advanced engineering, aerospace,
                  optics, photonics and space.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mb-16">
                  <Link
                    href="/contact"
                    className="px-8 py-3 rounded-lg brand-gradient brand-glow-button text-primary-foreground text-base font-semibold flex items-center gap-2"
                  >
                    <span>Upload Your CV</span>
                    <span>↓</span>
                  </Link>
                  <Link
                    href="/companies"
                    className="px-8 py-3 rounded-lg glass text-base font-semibold flex items-center gap-2"
                  >
                    <Briefcase className="w-5 h-5" />
                    <span>Hire Talent</span>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1 lg:sticky lg:top-32 h-fit"
            >
              <div className="glass rounded-3xl p-8 space-y-8">
                {/* Intro */}
                <div>
                  <h3 className="text-xl font-bold mb-3">Your next move.</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    Upload your CV and discover your best opportunities.
                  </p>
                </div>

                {/* CV Match Score */}
                <div className="flex flex-col items-center">
                  <p className="text-xs font-semibold text-foreground-muted mb-4 uppercase tracking-wide">
                    AI CV Match Score
                  </p>
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke="var(--surface-divider)"
                        strokeWidth="8"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="8"
                        strokeDasharray={`${(92 / 100) * 339.3} 339.3`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute text-center">
                      <div className="text-3xl font-bold text-accent">92%</div>
                      <div className="text-xs text-foreground-muted">
                        Strong Match
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommended Jobs */}
                <div>
                  <h4 className="font-semibold mb-4 text-sm">
                    Recommended for you
                  </h4>
                  <div className="space-y-3">
                    {featuredJobs.map((job, index) => (
                      <div
                        key={index}
                        className="p-3 rounded-lg bg-glass-bg border border-border hover:border-primary transition-colors duration-300"
                      >
                        <p className="font-semibold text-sm mb-1">
                          {job.title}
                        </p>
                        <p className="text-xs text-foreground-muted mb-2">
                          📍 {job.location}
                        </p>
                        <div className="flex justify-between items-center text-xs">
                          <span className="px-2 py-1 rounded bg-(--accent)/20 text-accent font-medium">
                            {job.type}
                          </span>
                          <span className="text-accent">
                            {job.matchScore}% match
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/jobs"
                    className="mt-4 text-accent text-sm font-semibold hover:text-accent-secondary transition-colors inline-flex items-center gap-2"
                  >
                    View all jobs
                    <span>→</span>
                  </Link>
                </div>

                {/* Testimonial */}
                <div className="pt-4 border-t border-border">
                  <p className="text-foreground-muted italic text-sm mb-3">
                    &quot;Vectra understood our unique requirements and
                    delivered exceptional candidates who made an impact from day
                    one.&quot;
                  </p>
                  <p className="text-sm font-semibold">Head of Engineering,</p>
                  <p className="text-xs text-foreground-muted">
                    Aerospace Company
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Industry Strip */}
        <div className="border-y border-border">
          <IndustryStrip />
        </div>

        {/* AI Matching Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6 py-20"
        >
          <div className="glass rounded-3xl p-12">
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-3 uppercase tracking-wide text-foreground-muted">
              AI-Powered Matching. Human-Led Recruitment.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-8 border border-border hover:border-accent transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Image Grid Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6 py-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1606986628253-05620e9b0a80?w=500&h=400&fit=crop",
                alt: "Optics & Precision Engineering",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=400&fit=crop",
                alt: "Space & Aerospace",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=400&fit=crop",
                alt: "Advanced Engineering",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden aspect-video group cursor-pointer"
              >
                <Img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Spacing */}
        <div className="h-20" />
      </main>
    </>
  );
}
