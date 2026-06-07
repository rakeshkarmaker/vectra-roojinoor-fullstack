"use client";

import Link from "next/link";
import { useState } from "react";
import UploadCvModal from "../ui/upload-cv-modal";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import Img from "next/image";
import MobileDropdown, { NAV_ITEMS } from "./dropdown";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 sm:px-6 lg:px-8"
    >
      <nav 
        aria-label="Main Navigation"
        className="max-w-5xl mx-auto glass-navbar nav-shadow rounded-full px-4 lg:px-6 py-3 lg:py-4"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            <div className="flex items-center gap-1">
              <Img
                src="/logo_cropped.png"
                alt="Vectra Talent Logo"
                width={120}
                height={50}
                priority
                className="w-[100px] lg:w-[120px] h-auto object-contain"
              />
            </div>
          </Link>

          {/* Center Navigation - Hidden on mobile, flex on larger screens */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full"
                >
                  <span
                    className={cn(
                      "text-sm font-medium transition-colors duration-300",
                      active
                        ? "text-primary"
                        : "text-on-dark-strong group-hover:text-primary"
                    )}
                  >
                    {item.label}
                  </span>
                  {active && (
                    <motion.div
                      layoutId="navbar-active-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 brand-gradient rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 40 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right CTA Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <MobileDropdown onUploadCv={() => setOpen(true)} />
            <button
              onClick={() => setOpen(true)}
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-primary-foreground brand-gradient brand-glow-button rounded-full transition-all duration-300 hover:scale-105 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Upload CV
            </button>
            <UploadCvModal open={open} onClose={() => setOpen(false)} />
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
