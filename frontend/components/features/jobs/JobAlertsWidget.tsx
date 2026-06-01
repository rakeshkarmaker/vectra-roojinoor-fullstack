"use client";

import { BellRing } from "lucide-react";
import { Button } from "@/components/ui/button";

export function JobAlertsWidget() {
  return (
    <div className="w-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-6 relative overflow-hidden group shadow-lg">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full pointer-events-none group-hover:bg-primary/30 transition-colors duration-500" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-5 shadow-inner">
          <BellRing className="w-6 h-6" />
        </div>
        
        <h3 className="text-lg font-semibold mb-2 tracking-tight">Never miss a perfect match</h3>
        <p className="text-sm text-foreground-soft mb-6 leading-relaxed">
          Let our AI analyze your profile and instantly notify you the moment your ideal role is posted.
        </p>
        
        <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full bg-background/80 backdrop-blur-sm border border-border/80 rounded-lg px-4 py-3 text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-foreground-muted"
            required
          />
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium h-[42px] rounded-lg">
            Create AI Alert
          </Button>
        </form>
      </div>
    </div>
  );
}
