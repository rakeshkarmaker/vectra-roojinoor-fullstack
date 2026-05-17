"use client";
import { motion } from "motion/react";
import { Zap, Link as LinkIcon, Users, Lightbulb } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Industry Experts",
      description:
        "We understand your technical challenges because we&apos;ve worked in it.",
    },
    {
      icon: <LinkIcon className="w-8 h-8" />,
      title: "Trusted Partnerships",
      description: "Long-term relationships built on results and integrity.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Tailored Solutions",
      description: "Custom recruitment strategies for your unique needs.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Focused",
      description: "Supporting the technologies of tomorrow.",
    },
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <div className="min-h-screen bg-background pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-accent text-sm font-semibold tracking-wide mb-4">
              OUR STORY
            </p>
            <h1 className="section-heading mb-8">
              Engineering Talent.
              <br />
              Powering <span className="accent-gradient">Innovation</span>.
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Vectra Talent is a specialist recruitment company focused on
                  connecting ambitious engineers with innovative companies
                  building the future.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our team of engineers and recruiters understand your world
                  because we&apos;ve worked in it. We specialise in advanced
                  engineering, aerospace, photonics, optics and emerging
                  technologies.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe the best recruitment partnerships are built on deep
                  industry knowledge, integrity and a genuine commitment to
                  connecting great people with great opportunities.
                </p>
              </div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl overflow-hidden aspect-square"
              >
                <Image
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                  alt="Team collaboration"
                  //   fill
                  height={600}
                  width={600}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 flex flex-col items-start"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer Spacing */}
      <div className="h-20" />
    </main>
  );
}
