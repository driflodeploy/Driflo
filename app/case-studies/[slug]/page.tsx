"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Footer from "@/app/components/Footer/page";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    slug: "bohme",
    title: "Boheme",
    subtitle: "Sustainable Fashion E-commerce",
    description:
      "A high-performance Shopify Hydrogen storefront built for a sustainable fashion brand. Focused on speed, storytelling, and seamless shopping experience.",
    images: [
      "/work/a-1.png",
      "/work/a-2.png",
      "/work/a-3.png",
      "/work/a-4.png",
    ],
    overview: {
      client: "Boheme",
      timeline: "3 weeks",
      role: "Design & Development",
      platform: "Shopify Hydrogen",
    },
    challenge:
      "Boheme needed a fast, modern e-commerce platform that could effectively showcase their sustainable fashion collections. Their existing site was slow on mobile, had poor Core Web Vitals, and didn't communicate their sustainability mission well.",
    solution:
      "We built a headless Shopify store using Hydrogen and React. The focus was on performance optimization, clean product presentation, and integrating sustainability information throughout the shopping journey.",
    results: [
      "100/100 Lighthouse performance score",
      "Sub-second page load times",
      "Improved mobile conversion rate",
      "Seamless checkout experience",
    ],
    features: [
      "Custom product filtering",
      "Sustainability metrics display",
      "Size guide with fit recommendations",
      "Optimized image delivery",
      "Progressive Web App support",
      "One-click checkout",
    ],
    technologies: ["Shopify Hydrogen", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    nextProject: "deadstock",
  },
  {
    id: 2,
    slug: "deadstock",
    title: "Deadstock",
    subtitle: "Streetwear E-commerce Platform",
    description:
      "A headless Shopify store for a streetwear brand specializing in limited deadstock items. Built with advanced filtering and a minimal design aesthetic.",
    images: [
      "/work/b-1.png",
      "/work/b-2.png",
      "/work/b-3.png",
      "/work/b-4.png",
    ],
    overview: {
      client: "Deadstock",
      timeline: "2 weeks",
      role: "Design & Development",
      platform: "Headless Shopify",
    },
    challenge:
      "Deadstock needed an e-commerce platform that could handle their unique inventory model of limited items. They required advanced filtering to help customers find specific pieces and a way to communicate scarcity effectively.",
    solution:
      "We developed a headless Shopify store with React, featuring sophisticated product search and filtering. The design is intentionally minimal to let the products take center stage, with clear inventory indicators.",
    results: [
      "100/100 Lighthouse performance score",
      "Fast, accurate product search",
      "Improved user engagement",
      "Clean mobile experience",
    ],
    features: [
      "Advanced multi-filter search",
      "Real-time inventory indicators",
      "Wishlist functionality",
      "Size recommendations",
      "Social sharing integration",
      "Mobile-first design",
    ],
    technologies: ["Headless Shopify", "React", "Next.js", "GraphQL"],
    liveUrl: "#",
    nextProject: "bohme",
  },
];

export default function CaseStudyPage() {
  const params = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const caseStudy =
    caseStudies.find((study) => study.slug === params.slug) || caseStudies[0];
  const nextStudy = caseStudies.find(
    (study) => study.slug === caseStudy.nextProject
  );

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % caseStudy.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + caseStudy.images.length) % caseStudy.images.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="px-6 lg:px-8 pt-24 pb-6 max-w-[1200px] mx-auto">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to work</span>
        </Link>
      </div>

      {/* Header */}
      <section className="px-6 lg:px-8 pb-16 max-w-[1200px] mx-auto">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-gray-400 tracking-wider uppercase mb-6">
            Case Study
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-[1.1] mb-6">
            {caseStudy.title}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-500 leading-relaxed">
            {caseStudy.subtitle}
          </p>
        </div>
      </section>

      {/* Hero Image Gallery */}
      <section className="px-6 lg:px-8 pb-20 max-w-[1400px] mx-auto">
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-gray-100">
          <Image
            src={caseStudy.images[currentImageIndex]}
            alt={`${caseStudy.title} screenshot ${currentImageIndex + 1}`}
            fill
            className="object-cover"
            priority
          />

          {/* Navigation Arrows */}
          {caseStudy.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
              >
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
              >
                <ArrowRight className="w-5 h-5 text-gray-700" />
              </button>
            </>
          )}

          {/* Image Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
            {caseStudy.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-white w-8"
                    : "bg-white/50 w-2 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="px-6 lg:px-8 pb-20 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 py-10 border-y border-gray-200">
          {Object.entries(caseStudy.overview).map(([key, value]) => (
            <div key={key}>
              <p className="text-xs font-medium text-gray-400 tracking-wider uppercase mb-3">
                {key}
              </p>
              <p className="text-base font-semibold text-black">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Description */}
      <section className="px-6 lg:px-8 pb-20 max-w-[1200px] mx-auto">
        <div className="max-w-3xl">
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            {caseStudy.description}
          </p>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="px-6 lg:px-8 pb-20 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="text-xs font-medium text-gray-400 tracking-wider uppercase mb-6">
              The Challenge
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-[1.8]">
              {caseStudy.challenge}
            </p>
          </div>
          <div>
            <h2 className="text-xs font-medium text-gray-400 tracking-wider uppercase mb-6">
              Our Solution
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-[1.8]">
              {caseStudy.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Image Break */}
      {caseStudy.images[1] && (
        <section className="px-6 lg:px-8 pb-20 max-w-[1400px] mx-auto">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-gray-100">
            <Image
              src={caseStudy.images[1]}
              alt={`${caseStudy.title} detail`}
              fill
              className="object-cover"
            />
          </div>
        </section>
      )}

      {/* Results & Features */}
      <section className="px-6 lg:px-8 pb-20 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Results */}
          <div>
            <h2 className="text-xs font-medium text-gray-400 tracking-wider uppercase mb-8">
              Results
            </h2>
            <ul className="space-y-5">
              {caseStudy.results.map((result, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {result}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Features */}
          <div>
            <h2 className="text-xs font-medium text-gray-400 tracking-wider uppercase mb-8">
              Key Features
            </h2>
            <ul className="space-y-4">
              {caseStudy.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-gray-300 rounded-full flex-shrink-0"></span>
                  <span className="text-base sm:text-lg text-gray-600">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Two Images Grid */}
      {caseStudy.images[2] && (
        <section className="px-6 lg:px-8 pb-20 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
              <Image
                src={caseStudy.images[2]}
                alt={`${caseStudy.title} detail`}
                fill
                className="object-cover"
              />
            </div>
            {caseStudy.images[3] && (
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
                <Image
                  src={caseStudy.images[3]}
                  alt={`${caseStudy.title} detail`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* Technologies */}
      <section className="px-6 lg:px-8 pb-20 max-w-[1200px] mx-auto">
        <h2 className="text-xs font-medium text-gray-400 tracking-wider uppercase mb-8">
          Built With
        </h2>
        <div className="flex flex-wrap gap-3">
          {caseStudy.technologies.map((tech) => (
            <span
              key={tech}
              className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="h-px bg-gray-200"></div>
      </div>

      {/* Next Project */}
      {nextStudy && (
        <section className="px-6 lg:px-8 py-20 max-w-[1200px] mx-auto">
          <Link
            href={`/case-studies/${nextStudy.slug}`}
            className="group block"
          >
            <div className="flex items-center justify-between mb-8">
              <p className="text-xs font-medium text-gray-400 tracking-wider uppercase">
                Next Project
              </p>
              <div className="flex items-center gap-2 text-gray-400 group-hover:text-black transition-colors">
                <span className="text-sm font-medium">View project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black group-hover:text-gray-600 transition-colors tracking-tight">
              {nextStudy.title}
            </h3>
            <p className="text-lg text-gray-500 mt-3">{nextStudy.subtitle}</p>
          </Link>
        </section>
      )}

      {/* CTA */}
      <section className="px-6 lg:px-8 py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-5 tracking-tight">
            Like what you see?
          </h2>
          <p className="text-lg text-gray-500 mb-10 leading-relaxed">
            Let's talk about building something great for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Start a project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium border border-gray-200 hover:border-gray-400 transition-colors"
            >
              View all work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}