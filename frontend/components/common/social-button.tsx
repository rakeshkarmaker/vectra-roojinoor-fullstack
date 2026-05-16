"use client";

import Link from "next/link";
import { ComponentType } from "react";
import { motion } from "motion/react";

interface SocialButtonProps {
  icon: ComponentType<{
    size?: number;
    className?: string;
  }>;
  href: string;
  label: string;
}

export function SocialButton({ icon: Icon, href, label }: SocialButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="brand-icon-button flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300"
      >
        <Icon size={18} />
      </Link>
    </motion.div>
  );
}
