// app/work/page.tsx

import { ArrowRight, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Our Work
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              What we've
              <br />
              <span className="text-gray-400">been building.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              A mix of concept rebuilds and client projects that demonstrate our
              approach to headless Shopify development.
            </p>
          </div>
        </div>
      </section>

      {/* Concept Projects Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Honest Context Banner */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 mb-10 flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-amber-900 font-medium text-sm mb-1">
                About these projects
              </p>
              <p className="text-amber-700 text-sm leading-relaxed">
                The projects below are concept rebuilds—we recreated sections of
                these brands' stores to demonstrate our capabilities. We're not
                affiliated with these companies. When we complete client
                projects, they'll be clearly labeled as such.
              </p>
            </div>
          </div>

          {/* Section Label */}
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-lg font-bold text-gray-900">Concept Rebuilds</h2>
            <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
              {conceptProjects.length} projects
            </span>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {conceptProjects.map((project) => (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                className="group bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-gray-200"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

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

                  {/* What We Built */}
                  <div className="space-y-2 mb-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Features demonstrated:
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

                  {/* View Project Link */}
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-all group-hover:gap-3 pt-4 border-t border-gray-100">
                    View project details
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Client Projects Section (Empty State) */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-lg font-bold text-gray-900">Client Projects</h2>
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Coming soon
              </span>
            </div>

            <div className="bg-gray-50 border border-gray-100 border-dashed rounded-2xl p-10 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Real client work coming soon
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                We're currently working on our first client projects. Case
                studies with real metrics and results will appear here once they
                launch.
              </p>
              <Link
                href="https://calendly.com/todriflo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all"
              >
                Be our next case study
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}