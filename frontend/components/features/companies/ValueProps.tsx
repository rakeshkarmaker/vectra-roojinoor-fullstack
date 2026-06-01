import { CloudCog, UserCog, Network, Timer } from "lucide-react";
import { Card } from "@/components/ui/card";

const propsList = [
  {
    icon: CloudCog,
    title: "AI Shortlisting",
    description: "Our AI matches talent to your specific needs, accelerating your screening process.",
  },
  {
    icon: UserCog,
    title: "Expert Consultants",
    description: "Direct access to our industry-leading technical advisors and talent acquisition specialists.",
  },
  {
    icon: Network,
    title: "Quality Talent",
    description: "A rigorous multi-stage vetting process ensures only pre-screened, top-tier engineering professionals are presented.",
  },
  {
    icon: Timer,
    title: "Faster Hiring",
    description: "Reduce time-to-hire with curated talent pools and direct communication tools.",
  },
];

export function ValueProps() {
  return (
    <Card className="bg-card border-border overflow-hidden shadow-sm relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border/50">
        {propsList.map((prop, idx) => (
          <div key={idx} className="p-8 lg:p-10 flex flex-col items-center text-center gap-4 hover:bg-white/5 transition-colors group">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform">
              <prop.icon className="w-8 h-8 opacity-90" strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-medium">{prop.title}</h3>
            <p className="text-sm text-foreground-soft leading-relaxed">
              {prop.description}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
