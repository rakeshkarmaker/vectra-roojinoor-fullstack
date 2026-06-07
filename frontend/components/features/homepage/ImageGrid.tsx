"use client";

import Img from "next/image";
import { motion } from "motion/react";

const imageCards = [
  {
    label: "Optics & Photonics",
    gradient: "from-[#0a2040] to-[#051525]",
    image:
      "https://images.unsplash.com/photo-1627817471035-3333a9ece240?q=80&w=1418&auto=format&fit=crop",
    detail: "Precision lens systems and photonic components",
  },
  {
    label: "Space & Aerospace",
    gradient: "from-[#06182e] to-[#030e1a]",
    image:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop",
    detail: "Satellite systems and launch vehicle engineering",
  },
  {
    label: "Advanced Engineering",
    gradient: "from-[#0a1e35] to-[#05101f]",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop",
    detail: "Complex mechanical and systems engineering roles",
  },
];

export default function ImageGrid() {
  return (
    <section className="pb-0">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {imageCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-lg overflow-hidden h-52 group cursor-pointer border border-border/50 hover:border-primary/40 transition-all`}
            >
              {/* Background Image */}
              <Img
                src={card.image}
                alt={card.label}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Dark overlay */}
              <div className={`absolute inset-0 ${card.gradient} opacity-70`} />

              {/* Grid pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    radial-gradient(rgba(30,200,160,0.3) 1px, transparent 1px),
                    radial-gradient(90deg, rgba(30,200,160,0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Bottom content */}
              {/* <div className="absolute bottom-0 left-0 right-0 px-4 py-4 bg-linear-to-t from-black/80 via-black/40 to-transparent z-10">
                <p className="text-white text-sm font-semibold">{card.label}</p>
                <p className="text-white/60 text-xs mt-1">{card.detail}</p>
              </div> */}
              {/* Sliding content */}
              <div className="absolute left-0 right-0 bottom-0 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out px-4 py-4 bg-black/80 backdrop-blur-sm">
                <p className="text-white text-sm font-semibold">{card.label}</p>

                <p className="text-white/60 text-xs mt-1">{card.detail}</p>
              </div>
              {/* Hover glow */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
