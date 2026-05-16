"use client";

import Link from "next/link";
import { FooterColumn } from "./footer-column";
import { SocialButton } from "./social-button";
import { motion } from "motion/react";
import { ArrowRight, Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
  const navigationLinks = [
    { label: "Candidates", href: "/" },
    { label: "Companies", href: "/" },
    { label: "Jobs", href: "/" },
    { label: "Industries", href: "/industries" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const industryLinks = [
    { label: "Optics & Photonics", href: "/industries" },
    { label: "Space & Aerospace", href: "/industries" },
    { label: "Advanced Engineering", href: "/industries" },
    { label: "Defence & Emerging Tech", href: "/industries" },
    { label: "Consultancy & Projects", href: "/" },
  ];

  const contactInfo = [
    { label: "London, UK", type: "location" },
    { label: "hello@vectraaerospace.com", type: "email" },
    { label: "+44 20 1234 5678", type: "phone" },
  ];

  return (
    <footer className="relative">
      {/* Main Footer */}
      <div
        className="bg-linear-to-b from-[#020817] to-[#031225] border-t border-[rgba(255,255,255,0.08)] pt-24 pb-8 rounded-t-3xl"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0, 213, 199, 0.05) 0%, transparent 50%)`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* 4-Column Layout (Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
            {/* Column 1: Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:pr-4"
            >
              <div className="mb-6">
                <Link
                  href="/"
                  className="text-white font-bold text-xl tracking-tight"
                >
                  <span className="text-[#00d5c7]">V</span>ECTRA
                  <br />
                  <span className="text-sm font-light text-[rgba(255,255,255,0.6)]">
                    AEROSPACE
                  </span>
                </Link>
              </div>
              <p className="text-sm text-[rgba(255,255,255,0.55)] mb-8 leading-relaxed font-light">
                Specialist engineering recruitment for aerospace, optics,
                photonics, advanced engineering and emerging technologies.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#00d5c7] to-[#00b8d4] text-black font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(0,213,199,0.5)] transition-all duration-300 group text-sm"
              >
                Upload CV
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>

            {/* Column 2: Navigation */}
            <FooterColumn title="Navigation" links={navigationLinks} />

            {/* Column 3: Industries */}
            <FooterColumn title="Industries" links={industryLinks} />

            {/* Column 4: Contact & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-sm font-semibold text-white mb-6 tracking-wide">
                Contact
              </h3>
              <div className="space-y-3 mb-10">
                {contactInfo.map((info, index) => (
                  <p
                    key={index}
                    className="text-sm text-[rgba(255,255,255,0.55)] font-light"
                  >
                    {info.label}
                  </p>
                ))}
              </div>
              <h4 className="text-xs font-semibold text-white mb-4 tracking-widest opacity-70">
                FOLLOW
              </h4>
              <div className="flex gap-3">
                <SocialButton
                  icon={Linkedin}
                  href="https://linkedin.com/company/vectra-aerospace"
                  label="LinkedIn"
                />
                <SocialButton
                  icon={Twitter}
                  href="https://twitter.com/vectraaero"
                  label="Twitter"
                />
                <SocialButton
                  icon={Instagram}
                  href="https://instagram.com/vectraaerospace"
                  label="Instagram"
                />
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.12)] to-transparent" />

          {/* Copyright Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8"
          >
            <p className="text-xs text-[rgba(255,255,255,0.45)] font-light">
              © 2026 Vectra Aerospace. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link
                href="/"
                className="text-xs text-[rgba(255,255,255,0.45)] hover:text-[#00d5c7] transition-colors duration-300 font-light"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-xs text-[rgba(255,255,255,0.45)] hover:text-[#00d5c7] transition-colors duration-300 font-light"
              >
                Terms
              </Link>
              <Link
                href="/"
                className="text-xs text-[rgba(255,255,255,0.45)] hover:text-[#00d5c7] transition-colors duration-300 font-light"
              >
                Cookies
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
