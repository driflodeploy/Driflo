"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "../components/Footer/page";

export default function ContactPage() {
  const CallToActionButtons = () => (
    <div className="flex items-center justify-center md:justify-start">
      <Link
        href="https://calendly.com"
        rel="noopener noreferrer"
        target="_blank"
        className="group relative inline-flex items-center justify-center px-6 py-4 text-sm font-semibold text-black bg-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black hover:text-white "
      >
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Shine effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 skew-x-12"></div>

        {/* Button text */}
        <span className="relative z-10 flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
          Book Free Consultation
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>

        {/* Border glow */}
        <div className="absolute inset-0 rounded-xl bg-brand-blue opacity-75 blur-sm group-hover:blur-md transition-all duration-300 -z-10"></div>
      </Link>
    </div>
  );

  const Letsconnect = () => (
    <div className="flex items-center justify-center md:justify-start">
      <Link
        href="https://calendly.com"
        rel="noopener noreferrer"
        target="_blank"
        className="group relative inline-flex items-center justify-center px-6 py-4 text-sm font-semibold text-white bg-black rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black "
      >
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Shine effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 skew-x-12"></div>

        {/* Button text */}
        <span className="relative z-10 flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
          Let's Connect
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>

        {/* Border glow */}
        <div className="absolute inset-0 rounded-xl bg-brand-blue opacity-75 blur-sm group-hover:blur-md transition-all duration-300 -z-10"></div>
      </Link>
    </div>
  );
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] mx-6 mt-8 mb-16 rounded-2xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
          alt="Contact our development team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight">
            Let's Build Together
          </h2>
          <p className="text-white/90 text-xl max-w-2xl leading-relaxed">
            Ready to transform your business with a custom headless solution?
            Let's discuss your project or book a free consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <CallToActionButtons />
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="mx-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-light text-black mb-8">
                Start Your Project
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Your first name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@company.com"
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your company name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project requirements, timeline, and goals..."
                    rows={6}
                    className="w-full"
                  />
                </div>
                <Letsconnect />
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-light text-black mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-black mb-4">
                    Schedule a Consultation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Book a free 30-minute consultation to discuss your project
                    requirements and explore how we can help.
                    <br />
                    <br />
                    Available Monday - Friday
                    <br />
                    9:00 AM - 6:00 PM EST
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-black mb-4">
                    Contact Information
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Email: todriflo@gmail.com
                    <br />
                    Response time: Within 24 hours
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-black mb-4">
                    Follow Our Work
                  </h3>
                  <div className="flex space-x-4">
                    <a href="https://github.com/driflodeploy" target="_blank">
                      <Button variant="outline" size="sm">
                        GitHub
                      </Button>
                    </a>
                    <a href="https://instagram.com/driflo.team" target="_blank">
                      <Button variant="outline" size="sm">
                        Instagram
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
