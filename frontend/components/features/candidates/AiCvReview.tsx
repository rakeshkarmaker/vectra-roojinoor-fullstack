"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  "Skills Match",
  "Experience",
  "Education",
  "Certifications",
  "Suggestions"
];

export function AiCvReview() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Card className="p-8 md:p-10 bg-card border-border flex flex-col gap-8">
      <h3 className="text-base font-medium">AI CV Review</h3>
      
      <div className="flex flex-col md:flex-row gap-10">
        
        {/* Left Tabs */}
        <div className="w-full md:w-56 flex flex-col shrink-0 border-l border-border/50">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`text-left px-5 py-4 text-sm transition-all border-l-2 -ml-[1px] ${
                activeTab === idx 
                  ? "border-primary bg-primary/5 text-foreground font-medium" 
                  : "border-transparent text-foreground-muted hover:text-foreground-soft hover:bg-foreground/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col gap-6 pt-2">
          <p className="text-sm text-foreground-soft leading-relaxed max-w-2xl">
            Based on our advanced semantic analysis against Optical Engineering roles, your CV highlights strong technical skills and relevant industry experience. However, tailoring it further can increase your match probability.
          </p>

          <h4 className="text-sm font-medium mt-4">Suggestions to improve your CV</h4>
          
          <ul className="flex flex-col gap-4">
            {[
              "Add more metrics to achievements",
              "Highlight cross-functional experience",
              "Include relevant certifications",
              "Tailor skills to job description"
            ].map((sug, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground-soft">
                <Check className="w-4 h-4 text-foreground-muted mt-0.5 shrink-0" />
                <span>{sug}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
