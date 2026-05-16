"use client";
import { Zap, Rocket, Cpu, Shield } from "lucide-react";
import { motion } from "motion/react";

interface IndustryItem {
  icon: React.ReactNode;
  label: string;
}

const industries: IndustryItem[] = [
  { icon: <Zap className="w-8 h-8" />, label: "Optics & Photonics" },
  { icon: <Rocket className="w-8 h-8" />, label: "Space & Aerospace" },
  { icon: <Cpu className="w-8 h-8" />, label: "Advanced Engineering" },
  { icon: <Shield className="w-8 h-8" />, label: "Defence & Emerging Tech" },
];

export function IndustryStrip() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-wrap justify-around items-center gap-8 md:gap-12">
        {industries.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center gap-3 group cursor-pointer hover:text-accent transition-colors duration-300"
          >
            <div className="text-accent group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <span className="text-sm font-medium text-center whitespace-nowrap text-[var(--accent)]">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
