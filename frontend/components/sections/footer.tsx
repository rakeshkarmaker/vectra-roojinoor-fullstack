"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { FooterColumn } from "../common/footer-column";
import { SocialButton } from "../common/social-button";
import Img from "next/image";

export function Footer() {
  const navigationLinks = [
    { label: "Candidates", href: "/candidates" },
    { label: "Companies", href: "/companies" },
    { label: "Jobs", href: "/jobs" },
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
    { label: "contact@vectratalent.com", type: "email" },
    { label: "+44 20 1234 5678", type: "phone" },
  ];

  return (
    <footer className="relative">
      {/* Main Footer */}
      <div className="footer-surface pt-24 pb-8 rounded-t-3xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* 4-Column Layout (Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
            {/* Column 1: Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:pr-4"
            >
              <div className="flex mb-6 items-center justify-between">
                {/* Logo */}
                <Link
                  href="/"
                  className="flex items-center gap-2 group shrink-0"
                >
                  <div className="flex items-center gap-1">
                    <Img
                      src="/logo_cropped.png"
                      alt=" Vectra Talent Logo"
                      width={200}
                      height={50}
                      className="h-auto w-auto"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                </Link>
              </div>
              <p className="text-sm text-on-dark mb-8 leading-relaxed font-light">
                Specialist engineering recruitment for aerospace, optics,
                photonics, advanced engineering and emerging technologies.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 brand-gradient text-primary-foreground font-semibold rounded-xl brand-glow-button transition-all duration-300 group text-sm"
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
              <h3 className="text-sm font-semibold text-foreground mb-6 tracking-wide">
                Contact
              </h3>
              <div className="space-y-3 mb-10">
                {contactInfo.map((info, index) => (
                  <p
                    key={index}
                    className="text-sm text-on-dark-muted font-light"
                  >
                    {info.label}
                  </p>
                ))}
              </div>
              <h4 className="text-xs font-semibold text-foreground mb-4 tracking-widest opacity-70">
                FOLLOW
              </h4>
              <div className="flex gap-3">
                <SocialButton
                  icon={FaLinkedin}
                  href="https://linkedin.com/company/vectra-talent"
                  label="LinkedIn"
                />
                <SocialButton
                  icon={FaTwitter}
                  href="https://twitter.com/vectratalent"
                  label="Twitter"
                />
                <SocialButton
                  icon={FaInstagram}
                  href="https://instagram.com/vectratalent"
                  label="Instagram"
                />
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px footer-divider" />

          {/* Copyright Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8"
          >
            <p className="text-xs text-on-dark-soft font-light">
              © 2026 Vectra Talent. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link
                href="/"
                className="text-xs text-on-dark-soft hover:text-primary transition-colors duration-300 font-light"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-xs text-on-dark-soft hover:text-primary transition-colors duration-300 font-light"
              >
                Terms
              </Link>
              <Link
                href="/"
                className="text-xs text-on-dark-soft hover:text-primary transition-colors duration-300 font-light"
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
