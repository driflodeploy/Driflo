import { ArrowRight, Github, Instagram, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "/work", label: "Work" },
    { href: "/#services", label: "Services" },
    { href: "/#why-us", label: "Why Us" },
    { href: "/#faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/driflodeploy",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://instagram.com/driflo.team",
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "mailto:todriflo@gmail.com",
      icon: Mail,
      label: "Email",
    },
  ];

  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
          {/* Left - Brand & CTA */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">Driflo</span>
            </Link>

            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              We build headless Shopify stores that load fast, look custom, and
              help brands stand out from template-based competitors.
            </p>

            <Link
              href="https://calendly.com/todriflo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3 bg-white text-gray-900 font-semibold rounded-xl transition-all duration-300 hover:bg-gray-100"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Middle - Navigation */}
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Navigation
            </p>
            <nav className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right - Contact & Social */}
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Get in Touch
            </p>

            <a
              href="mailto:todriflo@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block mb-6"
            >
              todriflo@gmail.com
            </a>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 rounded-lg flex items-center justify-center transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-gray-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Driflo. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-gray-400 transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-gray-400 transition-colors duration-200"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}