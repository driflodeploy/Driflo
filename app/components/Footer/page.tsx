"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";
import { memo, useCallback } from "react";

// Social Icon Component - Memoized for performance
const SocialIcon = memo(
  ({
    href,
    icon: Icon,
    label,
  }: {
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    label: string;
  }) => {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-800/80 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group backdrop-blur-sm active:scale-95"
        aria-label={label}
      >
        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
      </Link>
    );
  }
);

// Footer Section Component - Responsive navigation links
const FooterSection = memo(
  ({ links }: { links: Array<{ href: string; label: string }> }) => {
    return (
      <div className="w-full">
        {/* Mobile: Grid layout */}
        <div className="grid grid-cols-2 sm:hidden gap-3 mb-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300 text-center py-1"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Tablet and up: Flex layout */}
        <div className="hidden sm:flex sm:flex-wrap sm:justify-center lg:justify-end gap-4 sm:gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }
);

// Call to Action Button Component - Memoized with responsive sizing
const CallToActionButton = memo(() => {
  const handleClick = useCallback(() => {
    // Add analytics tracking here if needed
  }, []);

  return (
    <Link href="https://calendly.com" target="_blank" rel="noopener noreferrer">
      <Button
        onClick={handleClick}
        className="group relative bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-700 hover:via-purple-600 hover:to-indigo-700 text-white rounded-full px-4 py-2 sm:px-6 sm:py-2.5 text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out overflow-hidden active:scale-95"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
        <span className="relative flex items-center space-x-1.5 sm:space-x-2">
          <span>Start Project</span>
          <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
        </span>
      </Button>
    </Link>
  );
});

// Optimized Animated Wave Component with better performance

export default function Footer() {
  // Links data
  const companyLinks = [
    { href: "/about", label: "About Us" },
    { href: "/work", label: "Our Work" },
    { href: "/#services", label: "Services" },
    { href: "/#process", label: "Process" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://github.com/youragency", icon: Github, label: "GitHub" },
    {
      href: "https://linkedin.com/company/youragency",
      icon: Linkedin,
      label: "LinkedIn",
    },
    { href: "https://twitter.com/youragency", icon: Twitter, label: "Twitter" },
    { href: "mailto:hello@youragency.com", icon: Mail, label: "Email" },
  ];

  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration - Responsive sizing */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-indigo-900/10" />
      <div className="absolute top-0 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-purple-600/5 rounded-full blur-2xl sm:blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-indigo-600/5 rounded-full blur-2xl sm:blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Logo and CTA - Centered on mobile */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Driflo
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed max-w-sm mx-auto">
                Transforming businesses with cutting-edge development solutions.
                We specialize in headless Shopify stores, custom applications,
                and scalable web platforms.
              </p>
              <div className="mb-4">
                <CallToActionButton />
              </div>
            </div>

            {/* Social Links - Centered */}
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-xs text-gray-500 font-medium">
                Follow us:
              </span>
              <div className="flex space-x-2">
                {socialLinks.map((social, index) => (
                  <SocialIcon
                    key={index}
                    href={social.href}
                    icon={social.icon}
                    label={social.label}
                  />
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <FooterSection links={companyLinks} />
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:justify-between lg:items-start">
            {/* Logo and Description */}
            <div className="flex-1 lg:max-w-md">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Driflo
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Transforming businesses with cutting-edge development solutions.
                We specialize in headless Shopify stores, custom applications,
                and scalable web platforms.
              </p>
              <div className="mb-4">
                <CallToActionButton />
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-3">
                <span className="text-xs text-gray-500 font-medium">
                  Follow us:
                </span>
                <div className="flex space-x-2">
                  {socialLinks.map((social, index) => (
                    <SocialIcon
                      key={index}
                      href={social.href}
                      icon={social.icon}
                      label={social.label}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Company Links - Right aligned */}
            <div className="flex-shrink-0">
              <FooterSection links={companyLinks} />
            </div>
          </div>
        </div>

        {/* Bottom Footer - Responsive layout */}
        <div className="border-t border-gray-800/50 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-400 text-xs text-center sm:text-left order-2 sm:order-1">
              © {new Date().getFullYear()} DevCraft Agency. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-4 text-xs order-1 sm:order-2">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 whitespace-nowrap"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 whitespace-nowrap"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
