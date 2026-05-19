"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Camera,
  Rocket,
  Settings,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";
import BorderGlow from "@/components/common/templetes/BorderGlow";

type Props = {
  title: string;
  description: string;
  image?: string;
  iconName?: string;
  href?: string;
};

export function IndustryCard({
  title,
  description,
  image,
  iconName,
  href = "/",
}: Props) {
  const iconMap: Record<string, LucideIcon> = {
    Camera,
    Rocket,
    Settings,
    ShieldCheck,
    Users,
    Briefcase,
  };

  const Icon = iconName ? iconMap[iconName] : undefined;

  return (
    <div className="relative overflow-hidden rounded-[28px]">
      <BorderGlow
        edgeSensitivity={30}
        glowColor="40 80 80"
        backgroundColor="#120F17"
        borderRadius={28}
        glowRadius={28}
        glowIntensity={1.5}
        coneSpread={25}
        animated
        colors={["#00d5c7", "#00b8d4", "#00d5c7"]}
      >
        <motion.article
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="group relative isolate rounded-[28px] bg-[#120F17]"
        >
          {/* Image */}
          <div className="relative h-44 overflow-hidden rounded-t-[28px] sm:h-52 lg:h-48">
            {image ? (
              <>
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
              </>
            ) : (
              <div className="absolute inset-0 bg-linear-to-br from-on-dark-800 via-on-dark-700 to-on-dark-900" />
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="mb-3 flex items-start gap-3">
              {Icon && (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-on-dark-800 text-primary">
                  <Icon size={18} />
                </div>
              )}

              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            </div>

            <p className="mb-6 text-sm leading-relaxed text-on-dark-muted">
              {description}
            </p>

            <Link
              href={href}
              className="inline-flex items-center gap-2 font-medium text-primary"
            >
              <span className="text-sm">Learn more</span>

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.article>
      </BorderGlow>
    </div>
  );
}
