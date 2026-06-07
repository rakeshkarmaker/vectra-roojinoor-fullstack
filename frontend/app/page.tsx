"use client";
import FeaturesSection from "@/components/features/homepage/FeaturesSection";
import { IndustryStrip } from "@/components/features/homepage/industry-strip";
import { motion } from "motion/react";
import Hero from "@/components/features/homepage/Hero";
import ImageGrid from "@/components/features/homepage/ImageGrid";
import TargetAudienceSection from "@/components/features/homepage/TargetAudienceSection";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section with Sidebar */}
      <Hero />

      {/* Industry Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="border-y border-border"
      >
        <IndustryStrip />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <FeaturesSection />
      </motion.div>

      {/* Target Audience Section (Candidates / Companies) */}
      <TargetAudienceSection />

      {/* Image Grid Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
      >
        <ImageGrid />
      </motion.div>
    </main>
  );
}
