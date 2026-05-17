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
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="group rounded-2xl overflow-hidden border border-on-dark-700 bg-linear-to-b from-transparent to-on-dark-900/20"
    >
      <div className="relative h-44 sm:h-52 lg:h-48">
        {image ? (
          <>
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-on-dark-800 via-on-dark-700 to-on-dark-900" />
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start gap-3 mb-3">
          {Icon && (
            <div className="p-2 rounded-full bg-on-dark-800 text-primary w-10 h-10 flex items-center justify-center">
              <Icon size={18} />
            </div>
          )}
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>
        <p className="text-sm text-on-dark-muted mb-6 leading-relaxed">
          {description}
        </p>

        <Link
          href={href}
          className="inline-flex items-center gap-2 text-primary font-medium"
        >
          <span className="text-sm">Learn more</span>
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  );
}
