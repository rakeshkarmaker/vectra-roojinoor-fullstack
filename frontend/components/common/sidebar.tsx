import { Link } from "lucide-react";
import { motion } from "motion/react";

export default function Sidebar() {
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
  return (
    <div className="fixed top-0 left-0 w-16 h-screen bg-surface-deep-start flex flex-col items-center py-4 gap-6 z-50">
      {/* Placeholder for future sidebar content */}
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
            <h4 className="font-semibold mb-4 text-sm">Recommended for you</h4>
            <div className="space-y-3">
              {featuredJobs.map((job, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg bg-glass-bg border border-border hover:border-primary transition-colors duration-300"
                >
                  <p className="font-semibold text-sm mb-1">{job.title}</p>
                  <p className="text-xs text-foreground-muted mb-2">
                    📍 {job.location}
                  </p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="px-2 py-1 rounded bg-(--accent)/20 text-accent font-medium">
                      {job.type}
                    </span>
                    <span className="text-accent">{job.matchScore}% match</span>
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
              &quot;Vectra understood our unique requirements and delivered
              exceptional candidates who made an impact from day one.&quot;
            </p>
            <p className="text-sm font-semibold">Head of Engineering,</p>
            <p className="text-xs text-foreground-muted">Aerospace Company</p>
          </div>
        </div>
      </motion.div>
      ;
    </div>
  );
}
