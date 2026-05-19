"use client";

import { Button } from "@/components/ui/button";
import UploadCvModal from "@/components/ui/upload-cv-modal";
import { Upload, Users } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-135 flex items-start overflow-hidden pt-28 lg:pt-32">
      {/* Dark space background with subtle gradient */}
      <div className="absolute inset-0 z-0 bg-linear-to-br from-[#060d18] via-[#080f1e] to-[#06111f]" />
      {/* Media Layer */}
      <div className="absolute inset-0 z-10">
        {/* Video */}
        {/* Overlay appears late always, instead of overlay, Directly reduced the video brightness to acheieve the same output. less rendering and less loading issues now. */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/homepage/Banner.png"
          className="absolute inset-0 z-10 h-full w-full object-cover brightness-[0.35]"
        >
          <source src="/homepage/EarthCorner.webm" type="video/webm" />
          <source src="/homepage/EarthCorner.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/70 pointer-events-none" /> */}
      </div>

      {/* Content */}
      <div className="relative z-30 mx-auto w-full max-w-7xl px-6 lg:px-8">
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
              onClick={() => setOpen(true)}
              size="lg"
              className="bg-[#1ec8a0] text-[#060d18] font-semibold hover:bg-[#17b08c] flex items-center gap-2 h-12 px-7 text-sm"
            >
              <Upload size={16} />
              Upload Your CV
            </Button>
            <UploadCvModal open={open} onClose={() => setOpen(false)} />

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
