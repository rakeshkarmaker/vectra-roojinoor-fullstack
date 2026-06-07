"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RecommendedRoles } from "./RecommendedRoles";

const strengths = [
  "Optical Engineering",
  "Photonics",
  "System Design",
  "Python Computing",
  "Project Leadership"
];

function CircularProgress({ value }: { value: number }) {
  const radius = 80;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90 drop-shadow-md"
      >
        <circle
          stroke="currentColor"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="text-border/50"
        />
        <circle
          stroke="currentColor"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="text-primary transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(30,200,160,0.5)]"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-5xl font-light">{value}<span className="text-2xl">%</span></span>
        <span className="text-xs text-foreground-muted mt-2 uppercase tracking-wider">Strong Match</span>
      </div>
    </div>
  );
}

export function AiMatchScoreCard() {
  return (
    <Card className="p-8 md:p-10 bg-card border-border flex flex-col gap-12">
      {/* Top half: Score & Strengths */}
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-10">
        
        {/* Left: Score */}
        <div className="flex flex-col gap-8">
          <h3 className="text-sm text-foreground-muted tracking-widest font-semibold uppercase">AI CV MATCH SCORE</h3>
          <div className="flex justify-center md:justify-start items-center">
            <CircularProgress value={86} />
          </div>
        </div>

        {/* Right: Strengths */}
        <div className="flex flex-col gap-5 pt-1">
          <h3 className="text-base font-medium">Key Strengths</h3>
          <ul className="flex flex-col gap-3 mt-1">
            {strengths.map((s, i) => (
              <li key={i} className="flex items-center gap-3 text-foreground-soft text-sm">
                <CheckCircle2 className="w-5 h-5 text-primary opacity-80" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <Button className="bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30 rounded-lg px-6 transition-all">
              View Recommendations
            </Button>
          </div>
        </div>

      </div>

      {/* Bottom half: Recommended Roles */}
      <div className="pt-8 border-t border-border/50">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-base font-medium text-foreground-soft">Recommended Roles</h3>
          <a href="#" className="text-sm text-primary hover:underline hover:text-primary/80 transition-colors">View all roles</a>
        </div>
        <RecommendedRoles />
      </div>
    </Card>
  );
}
