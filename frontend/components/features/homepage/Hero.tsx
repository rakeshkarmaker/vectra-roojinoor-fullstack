"use client";

import { Button } from "@/components/ui/button";
import { Upload, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-135 flex items-start overflow-hidden pt-28 lg:pt-32">
      {/* Dark space background with subtle gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#060d18] via-[#080f1e] to-[#06111f]" />

      {/* Satellite / space image placeholder – right side glow */}
      <div className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="section-label mb-4">Specialist Talent Solutions</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Engineering Talent.
            <br />
            Powering <span className="text-[#1ec8a0]">Innovation.</span>
          </h1>
          <p className="text-white/65 text-base md:text-lg mb-8 max-w-md leading-relaxed">
            Specialist recruitment for advanced engineering, aerospace, optics,
            photonics and space.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <Button
              size="lg"
              className="bg-[#1ec8a0] text-[#060d18] font-semibold hover:bg-[#17b08c] flex items-center gap-2 h-12 px-7 text-sm"
            >
              <Upload size={16} />
              Upload Your CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border border-white/40 text-white bg-transparent hover:bg-white/5 flex items-center gap-2 h-12 px-7 text-sm"
            >
              <Users size={16} />
              Hire Talent
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
