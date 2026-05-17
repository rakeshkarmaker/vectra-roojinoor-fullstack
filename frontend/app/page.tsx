"use client";
import FeaturesSection from "@/components/features/homepage/FeaturesSection";
import { IndustryStrip } from "@/components/features/homepage/industry-strip";
import { motion } from "motion/react";
import Hero from "@/components/features/homepage/Hero";
import ImageGrid from "@/components/features/homepage/ImageGrid";

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

      {/* Image Grid Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <ImageGrid />
      </motion.div>
    </main>
  );
}
