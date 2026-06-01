"use client";

import { motion } from "motion/react";
import { Check, Upload, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const AudienceCard = ({
  title,
  description,
  features,
  buttonText,
  buttonIcon: ButtonIcon,
  imageSrc,
  delay,
}: {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonIcon: any;
  imageSrc: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="relative overflow-hidden rounded-2xl border border-border/50 glass group"
    >
      {/* Background Image with Gradient Fade */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient to make text readable on the left */}
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 p-8 sm:p-10 flex flex-col h-full md:w-3/4 lg:w-2/3">
        <h3 className="text-xl font-semibold tracking-wider text-primary mb-4">
          {title}
        </h3>
        <p className="text-foreground-soft text-lg mb-8 max-w-sm">
          {description}
        </p>

        <ul className="space-y-4 mb-10 grow">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-foreground-muted gap-3">
              <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-primary" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div>
          <Button
            className="brand-glow-button bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 backdrop-blur-md transition-all gap-2 px-6 rounded-xl"
            size="lg"
          >
            {buttonText}
            <ButtonIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default function TargetAudienceSection() {
  return (
    <section className="w-full py-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Optional decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AudienceCard
            title="FOR CANDIDATES"
            description="Upload your CV and let our AI match you with the right roles automatically."
            features={[
              "AI Skill Match",
              "Skill documentation",
              "Career Support",
            ]}
            buttonText="Upload CV"
            buttonIcon={Upload}
            imageSrc="/images/candidates_bg.png"
            delay={0.1}
          />

          <AudienceCard
            title="FOR COMPANIES"
            description="Discover top talent with AI-powered candidate scoring and skill verification."
            features={[
              "AI Candidate Screening",
              "Intuitive Dashboard",
              "Network of Engineers",
            ]}
            buttonText="Hire Talent"
            buttonIcon={Users}
            imageSrc="/images/companies_bg.png"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}
