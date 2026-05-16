"use client";

import Link from "next/link";
import { Briefcase } from "lucide-react";
import Img from "next/image";
import { IndustryStrip } from "../components/sections/industry-strip";
import { motion } from "motion/react";

export default function Home() {
  const features = [
    {
      icon: "🧠",
      title: "AI Talent Matching",
      description:
        "Our AI scores skills, experience and career goals to match you with the right opportunities.",
    },
    {
      icon: "👥",
      title: "Specialist Consultants",
      description:
        "Our engineers understand your industry and connect you with the right teams.",
    },
    {
      icon: "✈️",
      title: "Proven Results",
      description:
        "We deliver talent that drives innovation and long-term business growth.",
    },
  ];

  return (
    <>
      <main className="pt-28">
        {/* Hero Section with Sidebar */}
        <div className="min-h-[60vh] bg-linear-to-b from-surface-deep-start via-surface-deep-mid to-surface-deep-end flex items-center">
          <div className="max-w-7xl mx-auto w-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="max-w-2xl">
                <p className="text-accent text-sm font-semibold tracking-wide mb-4">
                  SPECIALIST TALENT SOLUTIONS
                </p>
                <h1 className="mb-6 text-5xl font-semibold tracking-tight leading-[0.95] md:text-7xl">
                  Engineering Talent.
                  <br />
                  Powering{" "}
                  <span className="bg-linear-to-r from-brand-start to-brand-end bg-clip-text text-transparent">
                    Innovation
                  </span>
                  .
                </h1>
                <p className="text-lg text-foreground-muted mb-8 leading-relaxed">
                  Specialist recruitment for advanced engineering, aerospace,
                  optics, photonics and space.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mb-16">
                  <Link
                    href="/contact"
                    className="px-8 py-3 rounded-lg brand-gradient brand-glow-button text-primary-foreground text-base font-semibold flex items-center gap-2"
                  >
                    <span>Upload Your CV</span>
                    <span>↓</span>
                  </Link>
                  <Link
                    href="/companies"
                    className="px-8 py-3 rounded-lg glass text-base font-semibold flex items-center gap-2"
                  >
                    <Briefcase className="w-5 h-5" />
                    <span>Hire Talent</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Industry Strip */}
        <div className="border-y border-border">
          <IndustryStrip />
        </div>

        {/* AI Matching Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6 py-20"
        >
          <div className="glass rounded-3xl p-12">
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-3 uppercase tracking-wide text-foreground-muted">
              AI-Powered Matching. Human-Led Recruitment.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-8 border border-border hover:border-accent transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Image Grid Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6 py-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=400&fit=crop",
                alt: "Optics & Precision Engineering",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=400&fit=crop",
                alt: "Space & Aerospace",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=400&fit=crop",
                alt: "Advanced Engineering",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden aspect-video group cursor-pointer"
              >
                <Img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  width={500}
                  height={400}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Spacing */}
        <div className="h-20" />
      </main>
    </>
  );
}
