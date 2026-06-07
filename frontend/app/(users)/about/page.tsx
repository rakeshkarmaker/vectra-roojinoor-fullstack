"use client";

import { Users, ShieldCheck, Target, Rocket, ArrowRight, Building2, MapPin, Briefcase } from "lucide-react";
import Image from "next/image";
import { ConsultantCTA } from "@/components/features/candidates/ConsultantCTA";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  const features = [
    {
      icon: Users,
      title: "Industry Experts",
      description: "Our team of engineers and recruiters understand your world because we've worked in it. We have first-hand experience with the technical challenges you face.",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-1",
      style: "bg-card border-border",
      iconColor: "text-primary",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Partnerships",
      description: "Long-term relationships built on results, discretion, and absolute integrity in everything we do.",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-2",
      style: "bg-linear-to-b from-primary/10 to-primary/5 border-primary/20 relative overflow-hidden",
      iconColor: "text-primary",
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "Custom recruitment strategies designed specifically for your unique organizational needs and culture.",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
      style: "bg-card border-border",
      iconColor: "text-primary",
    },
    {
      icon: Rocket,
      title: "Innovation Focused",
      description: "Supporting the pioneers who are building the technologies of tomorrow, today.",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
      style: "bg-card border-border",
      iconColor: "text-primary",
    },
  ];

  return (
    <main className="bg-background text-foreground min-h-screen">

      {/* Premium Hero Section */}
      <section className="relative isolate pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-border/50">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Executive Search & Recruitment
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight">
              Engineering Talent. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-cyan-400">
                Powering Innovation.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground-soft leading-relaxed max-w-2xl font-light">
              We connect ambitious engineers with innovative companies building the future.
              Vectra Talent is a specialist recruitment firm focused on advanced engineering,
              aerospace, photonics, and emerging technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are & Stats */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="order-2 lg:order-1 space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">Built by Engineers, <br />For Engineers</h2>
                <p className="text-lg text-foreground-soft leading-relaxed">
                  We aren't just recruiters; we are industry insiders. Our team has hands-on experience in the very sectors we recruit for. This means we actually understand the nuance between systems engineering and embedded software development.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border/50">
                <div>
                  <div className="text-4xl font-extrabold text-primary mb-2">500+</div>
                  <div className="text-sm font-medium text-foreground-muted uppercase tracking-wider">Placements Made</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-primary mb-2">98%</div>
                  <div className="text-sm font-medium text-foreground-muted uppercase tracking-wider">Retention Rate</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
                  alt="Engineering Team"
                  width={900}
                  height={600}
                  className="object-cover w-full h-full aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-xl z-20 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold">Global Reach</div>
                  <div className="text-xs text-foreground-muted">UK, EU & North America</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Bento Grid */}
      <section className="py-24 bg-surface-deep-start relative border-y border-border/50">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Our Core Values</h2>
            <p className="text-foreground-soft text-lg">
              The principles that drive our methodology and ensure we consistently deliver exceptional talent to our partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
            {features.map((f, i) => (
              <Card
                key={i}
                className={`p-8 flex flex-col ${f.colSpan} ${f.rowSpan} ${f.style} hover:border-primary/50 transition-all duration-300 group`}
              >
                {/* Decorative element for the tall card */}
                {f.rowSpan === "md:row-span-2" && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] pointer-events-none group-hover:bg-primary/30 transition-colors" />
                )}

                <div className={`w-12 h-12 rounded-xl bg-background/50 border border-border flex items-center justify-center mb-6 shrink-0 group-hover:scale-110 transition-transform ${f.rowSpan === "md:row-span-2" ? "bg-primary/20 border-primary/30" : ""}`}>
                  <f.icon className={`w-6 h-6 ${f.iconColor}`} />
                </div>

                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-foreground-soft leading-relaxed text-sm sm:text-base">
                  {f.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 tracking-tight">Global Presence</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-border bg-card flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-surface-deep-mid border border-border flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-foreground-muted" />
              </div>
              <h3 className="text-xl font-bold mb-2">London, UK</h3>
              <p className="text-foreground-soft text-sm">EMEA Headquarters</p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-card flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-surface-deep-mid border border-border flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-foreground-muted" />
              </div>
              <h3 className="text-xl font-bold mb-2">Bristol, UK</h3>
              <p className="text-foreground-soft text-sm">Engineering Hub</p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-card flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-surface-deep-mid border border-border flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-foreground-muted" />
              </div>
              <h3 className="text-xl font-bold mb-2">Remote</h3>
              <p className="text-foreground-soft text-sm">Worldwide Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Unified CTA */}
      <div className="pb-16 lg:pb-24">
        <ConsultantCTA />
      </div>

    </main>
  );
}
