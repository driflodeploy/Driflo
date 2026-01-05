"use client";

import { useState } from "react";
import { ArrowRight, ExternalLink, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Be honest about what these are
const conceptProjects = [
  {
    id: 1,
    slug: "bohme-concept",
    title: "Bohme",
    subtitle: "Concept Rebuild",
    type: "Headless Shopify",
    image: "/work/a-1.png",
    description:
      "A concept rebuild exploring how Bohme's store could perform as a headless Shopify site with Next.js.",
    tags: ["Next.js", "Shopify Storefront API", "Tailwind"],
    // Don't claim fake metrics - show what you demonstrated instead
    highlights: [
      "Sub-second page loads",
      "Custom product filtering",
      "Optimized checkout flow",
    ],
  },
  {
    id: 2,
    slug: "deadstock-concept",
    title: "Deadstock",
    subtitle: "Concept Rebuild",
    type: "Headless Shopify",
    image: "/work/b-1.png",
    description:
      "Exploring headless architecture for a streetwear brand with advanced filtering and quick-view features.",
    tags: ["React", "Shopify API", "Framer Motion"],
    highlights: [
      "Advanced product filters",
      "Quick-view modals",
      "Mobile-first design",
    ],
  },
  
];

export default function ConceptWorkSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="work" className="w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-6">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            What we can build.
          </h2>
        </div>

        {/* Honest Context Banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 mb-10 flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-amber-900 font-medium text-sm mb-1">
              These are concept rebuilds, not client projects.
            </p>
            <p className="text-amber-700 text-sm leading-relaxed">
              We rebuilt sections of these brands' stores to demonstrate our
              capabilities. We're not affiliated with these companies—we just
              admire their brands and wanted to show what's possible with
              headless architecture.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {conceptProjects.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
              className="group bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-gray-200"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className={`absolute inset-0 bg-gray-900/60 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredId === project.id ? "opacity-100" : "opacity-0"
                }`}>
                  <span className="px-4 py-2 bg-white text-gray-900 font-semibold rounded-lg flex items-center gap-2">
                    View Project
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded-full">
                    {project.type}
                  </span>
                </div>

                {/* Concept Label */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-600 text-xs font-medium rounded-full">
                    Concept
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">{project.subtitle}</p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* What We Demonstrated */}
                <div className="space-y-2 mb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    What we built:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 bg-white text-gray-600 text-xs font-medium rounded-md border border-gray-200"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-gray-500 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 rounded-2xl p-8 sm:p-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Want to be our first real case study?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                These concepts show what we can build. Now we're looking for
                clients who want real results. Early partners get our full
                attention and competitive pricing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:justify-end">
              <Link
                href="https://calendly.com/todriflo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-gray-900 font-semibold rounded-xl transition-all duration-300 hover:bg-gray-100"
              >
                Book a Call
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-transparent text-white font-semibold rounded-xl border border-gray-700 transition-all duration-300 hover:border-gray-500"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}