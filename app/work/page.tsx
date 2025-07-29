"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Building,
  Calendar,
  MapPin,
  Star,
  Award,
  Sparkles,
  Globe,
  Code,
  Zap,
  BarChart3,
  Eye,
  Clock,
  Target,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer/page";

// Case studies data
const caseStudies = [
  {
    id: 1,
    slug: "bohme",
    title: "Boheme Sustainable Fashion Store",
    client: "Boheme",
    industry: "Sustainable Fashion",
    location: "Unknown",
    duration: "3 weeks",
    team: "Unknown",
    featured: false,
    image: "/work/a-1.png",
    shortDescription:
      "High-performance Shopify Hydrogen storefront for sustainable fashion brand with custom components and optimized checkout flow.",
    keyMetrics: {
      primary: "+180%",
      primaryLabel: "Revenue Increase",
      secondary: "100/100",
      secondaryLabel: "Performance Score",
    },
    technologies: ["Shopify Hydrogen", "React", "Sustainable Fashion"],
    rating: 4.9,
    testimonialSnippet: "The performance improvements have been incredible.",
    category: "E-commerce",
    size: "large",
  },
  {
    id: 2,
    slug: "deadstock",
    title: "Deadstock Clothing Store",
    client: "Deadstock",
    industry: "Fashion",
    location: "Unknown",
    duration: "2 weeks",
    team: "Unknown",
    featured: false,
    image: "/work/b-1.png",
    shortDescription:
      "Headless Shopify store built with React for deadstock clothing brand, featuring advanced product filtering.",
    keyMetrics: {
      primary: "+155%",
      primaryLabel: "Revenue Increase",
      secondary: "100/100",
      secondaryLabel: "Performance Score",
    },
    technologies: ["Headless Shopify", "React"],
    rating: 4.8,
    testimonialSnippet: "The filtering system transformed our user experience.",
    category: "E-commerce",
    size: "medium",
  },
  {
    id: 3,
    slug: "thenimetyou",
    title: "Then I Met You Beauty Store",
    client: "Then I Met You",
    industry: "Beauty & Cosmetics",
    location: "Unknown",
    duration: "4 weeks",
    team: "Unknown",
    featured: false,
    image: "/work/c-1.png",
    shortDescription:
      "Immersive Shopify Hydrogen storefront for thenimetyou with custom configurator, and storytelling features.",
    keyMetrics: {
      primary: "+120%",
      primaryLabel: "Engagement Increase",
      secondary: "-45%",
      secondaryLabel: "Bounce Rate",
    },
    technologies: ["Shopify Hydrogen", "Lab Reports", "Custom Design"],
    rating: 4.9,
    testimonialSnippet:
      "The storytelling features beautifully showcase our brand values.",
    category: "E-commerce",
    size: "small",
  },
  {
    id: 4,
    slug: "velasca",
    title: "Velasca Fashion PWA",
    client: "Velasca",
    industry: "Fashion",
    location: "Unknown",
    duration: "4 weeks",
    team: "Unknown",
    featured: false,
    image: "/work/d-1.png",
    shortDescription:
      "Progressive Web App built on Shopify with men/women different websites, and personalized outfit recommendations.",
    keyMetrics: {
      primary: "+220%",
      primaryLabel: "Engagement Increase",
      secondary: "8.4%",
      secondaryLabel: "Conversion Rate",
    },
    technologies: ["Shopify", "Custom Design", "Personalization"],
    rating: 4.7,
    testimonialSnippet:
      "The personalized recommendations have significantly boosted our sales.",
    category: "E-commerce",
    size: "small",
  },
];

const categories = [
  "All",
  "E-commerce",
  "Marketplace",
  "B2B",
  "Subscription",
  "Omnichannel",
];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredCaseStudies =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.category === selectedCategory);

  const featuredStudies = filteredCaseStudies.filter((study) => study.featured);
  const regularStudies = filteredCaseStudies.filter((study) => !study.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-slate-200/30 to-slate-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-slate-300/20 to-slate-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-br from-slate-200/25 to-slate-300/15 rounded-full blur-3xl"></div>
      </div>

      <main
        className={`w-full px-4 lg:px-6 py-16 pt-32 relative transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 px-6 py-3 rounded-full border border-blue-100 mb-8">
              <Award className="w-5 h-5 text-slate-700 mr-2" />
              <span className="text-sm font-semibold text-gray-700">
                Our Success Stories
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-6 leading-tight">
              Case Studies
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Discover how we've transformed businesses across industries with
              innovative e-commerce solutions, delivering measurable results
              that drive growth and success.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg">
                <div className="text-3xl font-black text-slate-800 mb-2">
                  {filteredCaseStudies.length}
                </div>
                <div className="text-sm text-slate-600 font-semibold">
                  Projects Showcased
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg">
                <div className="text-3xl font-black text-slate-800 mb-2">
                  100%
                </div>
                <div className="text-sm text-slate-600 font-semibold">
                  Client Satisfaction
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg">
                <div className="text-3xl font-black text-slate-800 mb-2">
                  $50M+
                </div>
                <div className="text-sm text-slate-600 font-semibold">
                  Revenue Generated
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg">
                <div className="text-3xl font-black text-slate-800 mb-2">
                  4.9★
                </div>
                <div className="text-sm text-slate-600 font-semibold">
                  Average Rating
                </div>
              </div>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
            {filteredCaseStudies.map((study, index) => (
              <Card
                key={study.id}
                className={`group bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                  // First card spans 2 columns on large screens
                  index === 0
                    ? "lg:col-span-2"
                    : // Second card spans 2 columns on large screens
                    index === 1
                    ? "lg:col-span-2"
                    : // Third and fourth cards span 2 columns each on large screens
                      "lg:col-span-2"
                }`}
              >
                {/* Image Section */}
                <div
                  className={`relative overflow-hidden ${
                    index === 0
                      ? "h-64 md:h-80"
                      : index === 1
                      ? "h-64 md:h-80"
                      : "h-48 md:h-56"
                  }`}
                >
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Quick Stats */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-2 text-center">
                      <div className="text-lg font-black text-slate-800">
                        {study.keyMetrics.primary}
                      </div>
                      <div className="text-xs text-slate-600 font-semibold">
                        {study.keyMetrics.primaryLabel}
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-white/95 backdrop-blur-sm text-slate-700 border border-slate-200">
                      {study.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-6 ${index < 2 ? "lg:p-8" : ""}`}>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 border border-slate-300 rounded-full px-3 py-1">
                      {study.industry}
                    </Badge>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(study.rating)
                              ? "text-slate-800 fill-current"
                              : "text-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <h3
                    className={`font-black text-slate-800 mb-3 group-hover:text-slate-700 transition-colors duration-300 line-clamp-2 ${
                      index < 2 ? "text-2xl lg:text-3xl" : "text-xl"
                    }`}
                  >
                    {study.title}
                  </h3>

                  <p
                    className={`text-slate-600 mb-4 leading-relaxed line-clamp-2 ${
                      index < 2 ? "text-base" : "text-sm"
                    }`}
                  >
                    {study.shortDescription}
                  </p>

                  {/* Client */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-full p-1.5">
                      <Building className="w-3 h-3 text-white" />
                    </div>
                    <span className="font-semibold text-slate-800 text-sm">
                      {study.client}
                    </span>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {study.technologies
                      .slice(0, index < 2 ? 3 : 2)
                      .map((tech) => (
                        <span
                          key={tech}
                          className="bg-slate-100 text-slate-600 rounded-full px-2 py-1 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    {study.technologies.length > (index < 2 ? 3 : 2) && (
                      <span className="bg-slate-100 text-slate-600 rounded-full px-2 py-1 text-xs font-medium">
                        +{study.technologies.length - (index < 2 ? 3 : 2)}
                      </span>
                    )}
                  </div>

                  {/* Testimonial for larger cards */}
                  {index < 2 && (
                    <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-4 mb-6 border-l-4 border-slate-400">
                      <p className="text-slate-700 italic text-sm">
                        "{study.testimonialSnippet}"
                      </p>
                    </div>
                  )}

                  {/* Action */}
                  <Link href={`/case-studies/${study.slug}`}>
                    <Button
                      className={`w-full font-semibold transition-all duration-300 ${
                        index < 2
                          ? "bg-slate-900 text-white rounded-2xl py-4 shadow-lg hover:shadow-xl hover:bg-slate-800"
                          : "border-2 border-slate-200 hover:border-slate-400 hover:text-slate-900 rounded-xl py-3 bg-white"
                      }`}
                      variant={index < 2 ? "default" : "outline"}
                    >
                      {index < 2 ? "View Full Case Study" : "View Details"}
                      {index < 2 ? (
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      ) : (
                        <Eye className="w-4 h-4 ml-2" />
                      )}
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
