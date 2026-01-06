"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer/page";
import {
  Rocket,
  ArrowRight,
  Eye,
  MessageCircle,
  Lightbulb,
  Code,
  Palette,
  TestTube,
  Zap,
  Heart,
  Target,
} from "lucide-react";

export default function AboutPage() {
  const processSteps = [
    {
      id: 1,
      icon: MessageCircle,
      title: "Discovery Call",
      description: "We hop on a call to understand your vision, goals, and challenges.",
      duration: "1 week",
    },
    {
      id: 2,
      icon: Lightbulb,
      title: "Strategy & Planning",
      description: "We map out the technical approach and create a clear roadmap.",
      duration: "1 week",
    },
    {
      id: 3,
      icon: Palette,
      title: "Design",
      description: "Clean, conversion-focused designs that reflect your brand.",
      duration: "2-3 weeks",
    },
    {
      id: 4,
      icon: Code,
      title: "Development",
      description: "We build your store with clean, performant code.",
      duration: "4-8 weeks",
    },
    {
      id: 5,
      icon: TestTube,
      title: "Testing",
      description: "Rigorous testing across all devices and browsers.",
      duration: "1 week",
    },
    {
      id: 6,
      icon: Rocket,
      title: "Launch",
      description: "Smooth deployment with ongoing support.",
      duration: "1 week",
    },
  ];

  const techStack = [
    "Shopify",
    "Hydrogen",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Simpler, more honest */}
      <section className="px-6 pt-24 pb-16 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm text-gray-600">Building the future of e-commerce</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight tracking-tight">
          We're Driflo
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          A small team obsessed with building fast, beautiful Shopify stores 
          using headless commerce technology.
        </p>
      </section>

      {/* Our Story - Authentic startup narrative */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 tracking-tight">
              Why we started
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                We got tired of seeing e-commerce stores that load slowly, 
                look generic, and fail to convert visitors into customers.
              </p>
              <p>
                So we decided to focus on one thing and do it really well: 
                building headless Shopify stores that are blazing fast 
                and designed to sell.
              </p>
              <p className="text-black font-medium">
                We're not an agency trying to do everything. We're specialists.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 text-black font-semibold hover:gap-3 transition-all duration-300"
            >
              Let's work together
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl p-8 lg:p-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Speed obsessed</h3>
                    <p className="text-gray-600 text-sm">Sub-second load times aren't optional for us.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Conversion focused</h3>
                    <p className="text-gray-600 text-sm">Every design decision is made to drive sales.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">We actually care</h3>
                    <p className="text-gray-600 text-sm">Your project isn't just another ticket to us.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe - Simple values */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12 tracking-tight">
            What we believe
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-left">
              <div className="text-4xl font-bold text-black mb-3">01</div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Speed matters
              </h3>
              <p className="text-gray-600">
                Every 100ms delay costs you conversions. We build stores that load instantly.
              </p>
            </div>
            <div className="text-left">
              <div className="text-4xl font-bold text-black mb-3">02</div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Less is more
              </h3>
              <p className="text-gray-600">
                Clean design, clear messaging, focused user journeys. No clutter.
              </p>
            </div>
            <div className="text-left">
              <div className="text-4xl font-bold text-black mb-3">03</div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Honesty wins
              </h3>
              <p className="text-gray-600">
                We'll tell you what you need, not what makes us the most money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack - Clean and simple */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 tracking-tight">
            Our stack
          </h2>
          <p className="text-gray-600">
            Modern tools for modern e-commerce
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="px-5 py-3 bg-gray-100 rounded-full text-gray-800 font-medium hover:bg-black hover:text-white transition-colors duration-300 cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Process - Streamlined timeline */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 tracking-tight">
              How we work
            </h2>
            <p className="text-gray-600">
              Simple, transparent process from start to finish
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>
            
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={step.id} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-semibold text-black">
                        {step.title}
                      </h3>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Clean and direct */}
      <section className="px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 tracking-tight">
            Got a project in mind?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We'd love to hear about it. No pressure, no hard sell — 
            just a conversation about what you're building.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              Start a conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 bg-gray-100 text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-300"
            >
              See our work
              <Eye className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}