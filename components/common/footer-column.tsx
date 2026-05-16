"use client";

import { motion } from "motion/react";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
  className?: string;
}

export function FooterColumn({
  title,
  links,
  className = "",
}: FooterColumnProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <h3 className="text-sm font-semibold text-foreground mb-6 tracking-wide">
        {title}
      </h3>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-sm text-on-dark-muted hover:text-primary transition-all duration-300 relative group font-light"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-px brand-gradient group-hover:w-full transition-all duration-300" />
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
