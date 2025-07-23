"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

// Social Icon Component
const SocialIcon = ({
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
      className="w-9 h-9 bg-gray-800/80 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group backdrop-blur-sm"
      aria-label={label}
    >
      <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
    </Link>
  );
};

// Footer Section Component - Fixed alignment and hover issues
const FooterSection = ({
  links,
}: {
  links: Array<{ href: string; label: string }>;
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-end gap-4 sm:gap-6">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300 text-right whitespace-nowrap"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

// Call to Action Button Component
const CallToActionButton = () => {
  return (
    <Link href="https://calendly.com" target="_blank" rel="noopener noreferrer">
      <Button className="group relative bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-700 hover:via-purple-600 hover:to-indigo-700 text-white rounded-full px-6 py-2.5 text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out overflow-hidden">
        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
        <span className="relative flex items-center space-x-2">
          <span>Start Project</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
        </span>
      </Button>
    </Link>
  );
};

// Optimized Animated Wave Component with CSS-in-JS removed
const AnimatedWaves = () => {
  return (
    <>
      {/* Wave animations defined in Tailwind-compatible way */}
      <style jsx>{`
        .wave1 {
          animation: wave1 15s ease-in-out infinite;
        }
        .wave2 {
          animation: wave2 20s ease-in-out infinite;
        }
        .wave3 {
          animation: wave3 25s ease-in-out infinite;
        }

        @keyframes wave1 {
          0%,
          100% {
            transform: translateX(-100%) scaleY(1);
          }
          50% {
            transform: translateX(-50%) scaleY(0.8);
          }
        }
        @keyframes wave2 {
          0%,
          100% {
            transform: translateX(-100%) scaleY(0.8);
          }
          50% {
            transform: translateX(-50%) scaleY(1.2);
          }
        }
        @keyframes wave3 {
          0%,
          100% {
            transform: translateX(-100%) scaleY(1.1);
          }
          50% {
            transform: translateX(-50%) scaleY(0.9);
          }
        }
      `}</style>

      {/* Wave Layers */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="wave1 relative block w-[calc(100%+1.3px)] h-[35px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,96L30,101.3C60,107,120,117,180,112C240,107,300,85,360,80C420,75,480,85,540,90.7C600,96,660,96,720,85.3C780,75,840,53,900,58.7C960,64,1020,96,1080,101.3C1140,107,1200,85,1230,74.7L1260,64L1260,120L1230,120C1200,120,1140,120,1080,120C1020,120,960,120,900,120C840,120,780,120,720,120C660,120,600,120,540,120C480,120,420,120,360,120C300,120,240,120,180,120C120,120,60,120,30,120L0,120Z"
            fill="rgba(99, 102, 241, 0.12)"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="wave2 relative block w-[calc(100%+1.3px)] h-[45px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L34.3,69.3C68.6,75,137,85,206,80C274.3,75,343,53,411,48C480,43,549,53,617,64C685.7,75,754,85,823,85.3C891.4,85,960,75,1029,69.3C1097.1,64,1166,64,1200,64L1234.3,64L1234.3,120L1200,120C1165.7,120,1097,120,1029,120C960,120,891,120,823,120C754.3,120,686,120,617,120C548.6,120,480,120,411,120C342.9,120,274,120,206,120C137.1,120,69,120,34,120L0,120Z"
            fill="rgba(147, 51, 234, 0.08)"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="wave3 relative block w-[calc(100%+1.3px)] h-[55px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32L40,37.3C80,43,160,53,240,56C320,59,400,53,480,53.3C560,53,640,59,720,58.7C800,59,880,53,960,48C1040,43,1120,37,1160,34.7L1200,32L1200,120L1160,120C1120,120,1040,120,960,120C880,120,800,120,720,120C640,120,560,120,480,120C400,120,320,120,240,120C160,120,80,120,40,120L0,120Z"
            fill="rgba(79, 70, 229, 0.06)"
          />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[10%] w-2 h-2 bg-purple-400/20 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-[15%] w-1.5 h-1.5 bg-indigo-400/30 rounded-full animate-bounce [animation-delay:1s]" />
        <div className="absolute bottom-1/4 left-[25%] w-2.5 h-2.5 bg-blue-400/15 rounded-full animate-ping [animation-delay:2s]" />
        <div className="absolute bottom-1/3 right-[30%] w-1.5 h-1.5 bg-purple-300/25 rounded-full animate-pulse [animation-delay:0.5s]" />
      </div>
    </>
  );
};

export default function Footer() {
  // Links data
  const companyLinks = [
    { href: "#about", label: "About Us" },
    { href: "#portfolio", label: "Our Work" },
    { href: "#process", label: "Process" },
    { href: "#pricing", label: "Pricing" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://github.com/youragency", icon: Github, label: "GitHub" },

    { href: "https://twitter.com/youragency", icon: Twitter, label: "Twitter" },
    { href: "mailto:hello@youragency.com", icon: Mail, label: "Email" },
  ];

  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-indigo-900/10" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl" />

      {/* Animated Wave Background */}
      <AnimatedWaves />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Footer Content - Fixed layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mb-8">
          {/* Logo and Description */}
          <div className="flex-1 lg:max-w-md">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Driflo
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Transforming businesses with cutting-edge development solutions.
              We specialize in headless Shopify stores, custom applications, and
              scalable web platforms.
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
          <div className="flex-shrink-0 w-full lg:w-auto">
            <FooterSection links={companyLinks} />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800/50 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} DevCraft Agency. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-xs">
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
            <Link
              href="/cookies"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 whitespace-nowrap"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
