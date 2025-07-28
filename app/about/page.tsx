"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "../components/Footer/page";
import { MinimalNewsletter } from "../components/Newsletter/page";
import ProcessSection from "../components/ProcessSection/page";
import { Rocket, ArrowRight, Eye } from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Founder & Lead Developer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },

    {
      name: "Marcus Johnson",
      role: "Senior Full-Stack Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] mx-6 mt-8 mb-16 rounded-2xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
          alt="About Driftlo team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight">
            About Driflo
          </h2>
          <p className="text-white/90 text-xl max-w-3xl leading-relaxed">
            We're a team of passionate developers specializing in headless
            commerce solutions that drive real business results
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 leading-tight">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded in 2020, Driftlo emerged from a simple belief:
                e-commerce should be fast, flexible, and future-proof. We saw
                businesses struggling with traditional platforms that couldn't
                keep up with modern user expectations.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Today, we're proud to be at the forefront of the headless
                commerce revolution, helping brands deliver exceptional digital
                experiences using Shopify's powerful backend and cutting-edge
                frontend technologies like Hydrogen.
              </p>

              <Link
                href="/work"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-black rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/30 "
              >
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 skew-x-12"></div>

                {/* Button text */}
                <span className="relative z-10 flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  View Our Work
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
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
                alt="Driflo development process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 leading-tight">
              Our Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide our approach to every project and client
              relationship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-light text-black mb-4">
                Performance First
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every line of code we write is optimized for speed and
                performance. We believe fast websites drive better business
                results.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-light text-black mb-4">
                Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We stay ahead of the curve, constantly exploring new
                technologies and methodologies to deliver cutting-edge
                solutions.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-light text-black mb-4">
                Partnership
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We don't just build websites; we build lasting relationships.
                Your success is our success, and we're committed to your
                long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="mx-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-black mb-6">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The talented individuals behind every successful headless commerce
              project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-light text-black mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Technologies */}
      <section className="mx-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 leading-tight">
              Our Tech Stack
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We work with the latest technologies to deliver exceptional
              results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Shopify",
              "Hydrogen",
              "React",
              "Next.js",
              "TypeScript",
              "GraphQL",
              "Tailwind CSS",
              "Node.js",
              "Vercel",
              "AWS",
              "MongoDB",
              "PostgreSQL",
            ].map((tech, index) => (
              <div
                key={index}
                className="text-center p-4 bg-gray-50 rounded-xl"
              >
                <span className="text-gray-800 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProcessSection />
      {/* Call to Action Section */}
      <div className="text-center max-w-2xl lg:max-w-4xl mx-8 md:mx-auto my-24">
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-14 lg:p-16 shadow-2xl relative overflow-hidden group">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-brand-blue opacity-50" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

          <div className="relative">
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-full p-6 shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                <Rocket className="w-12 h-12 text-brand-blue" />
              </div>
            </div>

            <h3 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto font-medium">
              Let's create something extraordinary together. Schedule a
              consultation to discuss your next project.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact"
                className="bg-white text-brand-blue hover:bg-black hover:text-white px-12 w-full flex justify-center items-center py-6 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 group/btn"
              >
                <span className="mr-3">Start Your Project</span>
                <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                href="/work"
                className="bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white hover:text-white hover:bg-white/20 px-12 w-full flex justify-center items-center py-6 rounded-2xl text-lg font-bold transition-all duration-500 hover:scale-105"
              >
                <span className="mr-3">View More Work</span>
                <Eye className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
