"use client";

import { Search, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function JobsHero() {
  return (
    <section className="pt-32 lg:pt-40 pb-16 lg:pb-24 w-full flex flex-col items-center text-center relative z-20">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 max-w-4xl tracking-tight">
        Explore Elite <br className="md:hidden" /> Engineering Roles
      </h1>
      <p className="text-lg md:text-xl text-foreground-soft leading-relaxed max-w-2xl mb-12">
        Find your next big opportunity with industry-leading companies, powered by our AI-driven matching engine.
      </p>

      {/* Search & Filter Bar */}
      <Card className="w-full max-w-5xl p-2 bg-card border border-border shadow-2xl rounded-2xl flex flex-col md:flex-row gap-2">
        <div className="flex-1 flex items-center px-4 py-3 md:py-2 border-b md:border-b-0 md:border-r border-border/50">
          <Search className="w-5 h-5 text-primary shrink-0 mr-3" />
          <input 
            type="text" 
            placeholder="Job title, keyword, or company" 
            className="w-full bg-transparent border-none outline-none text-sm text-foreground placeholder:text-foreground-muted focus:ring-0"
          />
        </div>
        
        <div className="flex-1 flex items-center px-4 py-3 md:py-2 border-b md:border-b-0 md:border-r border-border/50">
          <MapPin className="w-5 h-5 text-primary shrink-0 mr-3" />
          <input 
            type="text" 
            placeholder="Location or remote" 
            className="w-full bg-transparent border-none outline-none text-sm text-foreground placeholder:text-foreground-muted focus:ring-0"
          />
        </div>

        <div className="flex-1 flex items-center px-4 py-3 md:py-2">
          <Briefcase className="w-5 h-5 text-primary shrink-0 mr-3" />
          <select className="w-full bg-transparent border-none outline-none text-sm text-foreground cursor-pointer focus:ring-0">
            <option value="" className="bg-card text-foreground">Any Job Type</option>
            <option value="permanent" className="bg-card text-foreground">Permanent</option>
            <option value="contract" className="bg-card text-foreground">Contract</option>
            <option value="remote" className="bg-card text-foreground">Remote Only</option>
          </select>
        </div>

        <Button className="w-full md:w-auto px-8 h-12 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 rounded-xl transition-all font-medium shrink-0 mt-2 md:mt-0">
          Search Jobs
        </Button>
      </Card>
    </section>
  );
}
