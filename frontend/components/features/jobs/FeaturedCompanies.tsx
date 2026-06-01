import { Command, Hexagon, Triangle, Box, Circle, Pyramid } from "lucide-react";

export function FeaturedCompanies() {
  const companies = [
    { name: "Acme Corp", icon: Command },
    { name: "NexusTech", icon: Hexagon },
    { name: "AeroDynamics", icon: Triangle },
    { name: "QuantumSys", icon: Box },
    { name: "DriveAI", icon: Circle },
    { name: "VisionSpace", icon: Pyramid },
  ];

  return (
    <div className="w-full py-10 border-y border-border/50 bg-card/30 mt-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-xs text-foreground-muted text-center mb-6 font-semibold uppercase tracking-widest">
          Trusted by Top Engineering Teams Worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70">
          {companies.map((Company, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-foreground hover:text-primary transition-colors duration-300 cursor-default hover:opacity-100 opacity-80 grayscale hover:grayscale-0">
              <Company.icon className="w-6 h-6" strokeWidth={2.5} />
              <span className="text-lg font-bold tracking-tight">{Company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
