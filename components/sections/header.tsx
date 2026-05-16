"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import Img from "next/image";

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { label: "Candidates", href: "/" },
    { label: "Companies", href: "/companies" },
    { label: "Jobs", href: "/jobs" },
    { label: "Industries", href: "/industries" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-6 px-6 lg:px-8">
      <nav className="max-w-7xl mx-auto glass-navbar nav-shadow rounded-full px-8 py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="flex items-center gap-1">
              <Img
                src="/Upscaled_nobg_logo.png"
                alt="Vectra Logo"
                width={200}
                height={50}
              />
            </div>
          </Link>

          {/* Center Navigation - Hidden on mobile, flex on larger screens */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group px-4 py-2"
              >
                <span
                  className={`text-sm transition-colors duration-300 ${
                    isActive(item.href)
                      ? "text-primary font-medium"
                      : "text-on-dark-strong group-hover:text-primary"
                  }`}
                >
                  {item.label}
                </span>
                {isActive(item.href) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-4 right-4 h-0.5 brand-gradient rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 40 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right CTA Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-block px-6 py-2 text-sm font-semibold text-primary-foreground brand-gradient brand-glow-button rounded-full transition-all duration-300 hover:scale-105"
            >
              Upload CV
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
