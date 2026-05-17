"use client";
import { Zap, Link as LinkIcon, Users, Lightbulb } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const features = [
    {
      icon: Zap,
      title: "Industry Experts",
      description: "We understand your technical challenges.",
    },
    {
      icon: LinkIcon,
      title: "Trusted Partnerships",
      description: "Long-term relationships built on results and integrity.",
    },
    {
      icon: Users,
      title: "Tailored Solutions",
      description: "Custom recruitment strategies for your unique needs.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focused",
      description: "Supporting the technologies of tomorrow.",
    },
  ];

  return (
    <main className=" bg-on-dark-100 text-foreground">
      {/* Hero */}
      <section className="relative isolate overflow-hidden rounded-b-3xl pt-28 pb-5">
        {/* Background Image */}
        <Image
          src="/About-bg.png"
          alt="About Us"
          fill
          priority
          className="object-cover"
        />

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
            <div>
              <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 text-white">
                Engineering Talent.
                <br />
                Powering <span className="text-primary">Innovation</span>.
              </h1>

              <p className="text-lg text-white/80 max-w-xl font-light">
                We connect ambitious engineers with innovative companies
                building the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-lg text-on-dark-muted mb-4">
              Vectra Talent is a specialist recruitment company focused on
              advanced engineering, aerospace, photonics, optics and emerging
              technologies.
            </p>
            <p className="text-lg text-on-dark-muted">
              Our team of engineers and recruiters understand your world because
              we&apos;ve worked in it.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-on-dark-700 shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
              alt="Team"
              width={900}
              height={560}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Feature panel */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 mb-20">
        <div className="rounded-2xl border border-on-dark-700 p-6 bg-on-dark-900/40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`p-6 ${i > 0 ? "lg:border-l lg:border-on-dark-700" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-on-dark-800 text-primary flex items-center justify-center">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{f.title}</h4>
                    <p className="text-sm text-on-dark-muted">
                      {f.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-20" />
    </main>
  );
}
