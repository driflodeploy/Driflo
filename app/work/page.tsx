"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer/page";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    slug: "bohme",
    title: "Boheme",
    category: "E-commerce",
    description: "Headless Shopify storefront for sustainable fashion brand",
    image: "/work/a-1.png",
    services: ["Hydrogen", "UI/UX", "Development"],
  },
  {
    id: 2,
    slug: "deadstock",
    title: "Deadstock",
    category: "E-commerce",
    description: "High-performance store for streetwear brand",
    image: "/work/b-1.png",
    services: ["Shopify", "React", "GraphQL"],
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="px-6 pt-24 pb-20 max-w-4xl mx-auto text-center">
        <p className="text-gray-400 text-sm font-medium tracking-widest uppercase mb-4">
          Portfolio
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
          Our work
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
          Clean, fast, conversion-focused e-commerce experiences.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/case-studies/${project.slug}`}
              className="group"
            >
              <article className="h-full">
                {/* Image Container */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-black" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-medium tracking-widest uppercase">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      {project.services.slice(0, 2).map((service) => (
                        <span
                          key={service}
                          className="text-xs text-gray-400 font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-semibold text-black group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h2>
                  
                  <p className="text-gray-500 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gray-100"></div>
      </div>

      {/* Capabilities */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-gray-400 text-sm font-medium tracking-widest uppercase mb-4">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
              What we do best
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-black mb-2">Headless Commerce</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Shopify Hydrogen stores built for speed and scalability.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-2">Custom Development</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Tailored solutions using React, Next.js, and modern tools.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-2">UI/UX Design</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Clean interfaces designed for conversion.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-2">Performance</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Optimized for Core Web Vitals and fast load times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gray-100"></div>
      </div>

      {/* CTA */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-400 text-sm font-medium tracking-widest uppercase mb-4">
              Start a project
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight mb-4">
              Have something in mind?
            </h2>
            <p className="text-gray-500 leading-relaxed">
              We're currently taking on new projects. Let's discuss how we can help bring your vision to life.
            </p>
          </div>
          
          <div className="flex lg:justify-end">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 text-black"
            >
              <span className="text-lg font-medium">Get in touch</span>
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 group-hover:text-white transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}