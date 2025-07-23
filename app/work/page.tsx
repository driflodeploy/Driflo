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
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Extended case studies data
const caseStudies = [
  {
    id: 1,
    slug: "sustainable-fashion-hydrogen",
    title: "Sustainable Fashion Hydrogen Storefront",
    client: "EcoThreads",
    industry: "Sustainable Fashion",
    location: "Portland, OR",
    duration: "4 months",
    team: "4 developers",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=500&fit=crop&crop=center",
    shortDescription:
      "Revolutionary e-commerce platform with carbon footprint tracking and sustainability storytelling.",
    keyMetrics: {
      primary: "+180%",
      primaryLabel: "Revenue Increase",
      secondary: "100/100",
      secondaryLabel: "Lighthouse Score",
    },
    technologies: [
      "Shopify Hydrogen",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
    ],
    rating: 5,
    testimonialSnippet: "The performance improvements have been incredible.",
    category: "E-commerce",
    size: "large",
  },
  {
    id: 2,
    slug: "tech-accessories-headless",
    title: "Tech Accessories Headless Store",
    client: "TechFlow",
    industry: "Consumer Electronics",
    location: "San Jose, CA",
    duration: "6 months",
    team: "5 developers",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800&h=500&fit=crop&crop=center",
    shortDescription:
      "Advanced headless architecture with AR visualization and AI-powered recommendations.",
    keyMetrics: {
      primary: "0.8s",
      primaryLabel: "Page Load Time",
      secondary: "+85%",
      secondaryLabel: "Mobile Conversions",
    },
    technologies: ["Next.js 14", "WebAR", "Algolia", "Stripe"],
    rating: 5,
    testimonialSnippet: "The AR try-on feature has been a game-changer.",
    category: "E-commerce",
    size: "medium",
  },
  {
    id: 3,
    slug: "luxury-watch-marketplace",
    title: "Luxury Watch Marketplace",
    client: "TimeElite",
    industry: "Luxury Goods",
    location: "New York, NY",
    duration: "8 months",
    team: "6 developers",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=500&fit=crop&crop=center",
    shortDescription:
      "Premium marketplace for authenticated luxury timepieces with blockchain verification.",
    keyMetrics: {
      primary: "$2.4M",
      primaryLabel: "Monthly GMV",
      secondary: "99.8%",
      secondaryLabel: "Authentication Rate",
    },
    technologies: ["Shopify Plus", "Blockchain", "AI Authentication"],
    rating: 5,
    testimonialSnippet: "Transformed our entire authentication process.",
    category: "Marketplace",
    size: "medium",
  },
  {
    id: 4,
    slug: "fitness-nutrition-platform",
    title: "Fitness & Nutrition Platform",
    client: "FitLife Pro",
    industry: "Health & Wellness",
    location: "Los Angeles, CA",
    duration: "5 months",
    team: "4 developers",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop&crop=center",
    shortDescription:
      "Comprehensive wellness platform with personalized nutrition plans and workout tracking.",
    keyMetrics: {
      primary: "250K+",
      primaryLabel: "Active Users",
      secondary: "92%",
      secondaryLabel: "Retention Rate",
    },
    technologies: ["React Native", "Node.js", "ML Analytics"],
    rating: 4,
    testimonialSnippet: "Our user engagement has skyrocketed.",
    category: "SaaS",
    size: "small",
  },
  {
    id: 5,
    slug: "artisan-marketplace",
    title: "Artisan Craft Marketplace",
    client: "CraftWorld",
    industry: "Arts & Crafts",
    location: "Austin, TX",
    duration: "3 months",
    team: "3 developers",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&h=500&fit=crop&crop=center",
    shortDescription:
      "Global marketplace connecting artisans with craft enthusiasts worldwide.",
    keyMetrics: {
      primary: "15K+",
      primaryLabel: "Artisan Partners",
      secondary: "4.9/5",
      secondaryLabel: "Average Rating",
    },
    technologies: ["WooCommerce", "Multi-vendor", "Payment APIs"],
    rating: 5,
    testimonialSnippet: "Expanded our reach to global markets effortlessly.",
    category: "Marketplace",
    size: "small",
  },
  {
    id: 6,
    slug: "enterprise-b2b-portal",
    title: "Enterprise B2B Portal",
    client: "IndustrialSupply Co",
    industry: "Manufacturing",
    location: "Chicago, IL",
    duration: "12 months",
    team: "8 developers",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop&crop=center",
    shortDescription:
      "Complex B2B platform with custom pricing, bulk ordering, and supply chain integration.",
    keyMetrics: {
      primary: "500%",
      primaryLabel: "Order Processing Speed",
      secondary: "$50M+",
      secondaryLabel: "Annual Revenue",
    },
    technologies: ["Shopify Plus", "ERP Integration", "Custom APIs"],
    rating: 5,
    testimonialSnippet: "Revolutionized our entire ordering process.",
    category: "B2B",
    size: "large",
  },
];

const categories = ["All", "E-commerce", "Marketplace", "SaaS", "B2B"];

export default function CaseStudiesPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/15 to-cyan-200/15 rounded-full blur-3xl"></div>
      </div>

      <main
        className={`w-full px-4 lg:px-6 py-16 pt-24 relative transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-3 mb-6 border border-purple-200/50">
              <Award className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-purple-700 font-semibold">
                Our Success Stories
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight">
              Case Studies
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Discover how we've transformed businesses across industries with
              innovative e-commerce solutions, delivering measurable results
              that drive growth and success.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg border-0"
                      : "bg-white/80 backdrop-blur-sm border-2 border-slate-200 text-slate-700 hover:border-purple-300 hover:text-purple-700"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>

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
          <div className="space-y-8">
            {/* Featured Cases - Large Cards */}
            {featuredStudies.length > 0 && (
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredStudies.map((study) => (
                  <Card
                    key={study.id}
                    className="group bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden relative"
                  >
                    {/* Featured Badge */}
                    <div className="absolute top-6 left-6 z-10">
                      <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full px-4 py-2 font-bold shadow-lg">
                        <Sparkles className="w-4 h-4 mr-1" />
                        Featured
                      </Badge>
                    </div>

                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      {/* Overlay Stats */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 text-center">
                            <div className="text-2xl font-black text-slate-800">
                              {study.keyMetrics.primary}
                            </div>
                            <div className="text-xs text-slate-600 font-semibold">
                              {study.keyMetrics.primaryLabel}
                            </div>
                          </div>
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 text-center">
                            <div className="text-2xl font-black text-slate-800">
                              {study.keyMetrics.secondary}
                            </div>
                            <div className="text-xs text-slate-600 font-semibold">
                              {study.keyMetrics.secondaryLabel}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border border-purple-200 rounded-full px-3 py-1">
                          {study.industry}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="rounded-full border-slate-300 text-slate-600"
                        >
                          {study.category}
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-black text-slate-800 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                        {study.title}
                      </h3>

                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {study.shortDescription}
                      </p>

                      {/* Client Info */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-2">
                            <Building className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-bold text-slate-800">
                              {study.client}
                            </div>
                            <div className="text-sm text-slate-500">
                              {study.location}
                            </div>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(study.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-amber-400 fill-current"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.technologies.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="bg-slate-100 text-slate-700 rounded-full px-3 py-1 text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {study.technologies.length > 3 && (
                          <span className="bg-slate-100 text-slate-700 rounded-full px-3 py-1 text-sm font-medium">
                            +{study.technologies.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Testimonial */}
                      <div className="bg-gradient-to-r from-slate-50 to-purple-50 rounded-2xl p-4 mb-6 border-l-4 border-purple-400">
                        <p className="text-slate-700 italic">
                          "{study.testimonialSnippet}"
                        </p>
                      </div>

                      {/* Action Button */}
                      <Link href={`/case-studies/${study.slug}`}>
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl py-6 font-bold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                          View Full Case Study
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* Regular Cases - Bento Grid */}
            {regularStudies.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularStudies.map((study, index) => (
                  <Card
                    key={study.id}
                    className={`group bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                      study.size === "large"
                        ? "lg:col-span-2 lg:row-span-2"
                        : study.size === "medium"
                        ? "lg:col-span-2"
                        : ""
                    }`}
                  >
                    {/* Image Section */}
                    <div
                      className={`relative overflow-hidden ${
                        study.size === "large" ? "h-80" : "h-48"
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
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border border-purple-200 rounded-full px-3 py-1">
                          {study.industry}
                        </Badge>
                        <div className="flex">
                          {[...Array(study.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-amber-400 fill-current"
                            />
                          ))}
                        </div>
                      </div>

                      <h3 className="text-xl font-black text-slate-800 mb-2 group-hover:text-purple-700 transition-colors duration-300 line-clamp-2">
                        {study.title}
                      </h3>

                      <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-2">
                        {study.shortDescription}
                      </p>

                      {/* Client */}
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-1.5">
                          <Building className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-semibold text-slate-800 text-sm">
                          {study.client}
                        </span>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {study.technologies.slice(0, 2).map((tech, index) => (
                          <span
                            key={index}
                            className="bg-slate-100 text-slate-600 rounded-full px-2 py-1 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {study.technologies.length > 2 && (
                          <span className="bg-slate-100 text-slate-600 rounded-full px-2 py-1 text-xs font-medium">
                            +{study.technologies.length - 2}
                          </span>
                        )}
                      </div>

                      {/* Action */}
                      <Link href={`/case-studies/${study.slug}`}>
                        <Button
                          variant="outline"
                          className="w-full border-2 border-slate-200 hover:border-purple-300 hover:text-purple-700 rounded-xl py-3 font-semibold transition-all duration-300"
                        >
                          View Details
                          <Eye className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-20">
            <Card className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 rounded-3xl p-16 text-white relative overflow-hidden border-0 shadow-2xl">
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20 blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16 blur-xl"></div>

              <div className="text-center relative">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
                  <Target className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-4xl font-black mb-6">
                  Ready to Become Our Next
                  <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Success Story?
                  </span>
                </h3>

                <p className="text-purple-100 mb-10 text-xl max-w-2xl mx-auto leading-relaxed">
                  Let's discuss your project and explore how we can deliver
                  exceptional results for your business.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button className="bg-white text-purple-700 hover:bg-gray-50 rounded-full px-10 py-6 text-lg font-black shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-10 py-6 text-lg font-black backdrop-blur-sm"
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
