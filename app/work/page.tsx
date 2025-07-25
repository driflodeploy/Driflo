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
    featured: false,
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
    slug: "artisan-jewelry-hydrogen",
    title: "Artisan Jewelry Hydrogen Experience",
    client: "Luna Crafts",
    industry: "Luxury Jewelry",
    location: "Brooklyn, NY",
    duration: "5 months",
    team: "6 developers",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop&crop=center",
    shortDescription:
      "Immersive jewelry experience with 360° product photography and virtual try-on capabilities.",
    keyMetrics: {
      primary: "+120%",
      primaryLabel: "Time on Site",
      secondary: "+$85",
      secondaryLabel: "Avg Order Value",
    },
    technologies: ["Shopify Hydrogen", "Three.js", "WebGL", "React Spring"],
    rating: 5,
    testimonialSnippet:
      "The platform beautifully showcases our artisans' work and stories.",
    category: "E-commerce",
    size: "small",
  },
  {
    id: 4,
    slug: "fitness-supplement-pwa",
    title: "Fitness Supplement PWA Store",
    client: "PowerFuel Nutrition",
    industry: "Health & Fitness",
    location: "Miami, FL",
    duration: "7 months",
    team: "4 developers",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop&crop=center",
    shortDescription:
      "Progressive Web App with offline capabilities and AI-powered nutrition recommendations.",
    keyMetrics: {
      primary: "+250%",
      primaryLabel: "Mobile Sales",
      secondary: "25K+",
      secondaryLabel: "PWA Installs",
    },
    technologies: ["Shopify PWA", "Service Workers", "IndexedDB", "Push API"],
    rating: 4,
    testimonialSnippet:
      "The PWA works perfectly even in areas with poor signal.",
    category: "E-commerce",
    size: "small",
  },
  {
    id: 5,
    slug: "home-decor-hydrogen-plus",
    title: "Luxury Home Decor Hydrogen Store",
    client: "Artisan Home",
    industry: "Luxury Home Furnishing",
    location: "Nashville, TN",
    duration: "8 months",
    team: "7 developers",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop&crop=center",
    shortDescription:
      "Comprehensive B2B/B2C platform with 3D room visualization and automated workflows.",
    keyMetrics: {
      primary: "+300%",
      primaryLabel: "Revenue Increase",
      secondary: "40%",
      secondaryLabel: "B2B Revenue",
    },
    technologies: [
      "Shopify Plus",
      "Shopify Hydrogen",
      "Three.js",
      "AutoCAD API",
    ],
    rating: 5,
    testimonialSnippet: "The B2B portal has transformed our business.",
    category: "B2B",
    size: "medium",
  },
  {
    id: 6,
    slug: "outdoor-gear-headless",
    title: "Outdoor Gear Headless Commerce",
    client: "Mountain Peak Co.",
    industry: "Outdoor Recreation",
    location: "Denver, CO",
    duration: "9 months",
    team: "8 developers",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=500&fit=crop&crop=center",
    shortDescription:
      "Unified omnichannel platform with real-time inventory synchronization across all touchpoints.",
    keyMetrics: {
      primary: "98/100",
      primaryLabel: "Lighthouse Score",
      secondary: "99.2%",
      secondaryLabel: "Inventory Accuracy",
    },
    technologies: [
      "Shopify Plus",
      "Remix",
      "Shopify POS",
      "GraphQL Federation",
    ],
    rating: 5,
    testimonialSnippet:
      "Finally, we have one source of truth for inventory and customer data.",
    category: "Omnichannel",
    size: "large",
  },
  {
    id: 7,
    slug: "beauty-subscription-hydrogen",
    title: "Beauty Subscription Hydrogen App",
    client: "GlowBox Beauty",
    industry: "Beauty & Cosmetics",
    location: "Chicago, IL",
    duration: "6 months",
    team: "5 developers",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=500&fit=crop&crop=center",
    shortDescription:
      "AI-powered subscription platform with virtual try-on and predictive inventory management.",
    keyMetrics: {
      primary: "50K+",
      primaryLabel: "Active Subscribers",
      secondary: "78%",
      secondaryLabel: "Retention Rate",
    },
    technologies: [
      "Shopify Hydrogen",
      "TensorFlow.js",
      "OpenCV.js",
      "Recharge API",
    ],
    rating: 5,
    testimonialSnippet: "The AI recommendations are incredibly accurate.",
    category: "Subscription",
    size: "medium",
  },
  {
    id: 8,
    slug: "sneaker-marketplace-headless",
    title: "Sneaker Marketplace Headless Platform",
    client: "SoleConnect",
    industry: "Footwear & Fashion",
    location: "Atlanta, GA",
    duration: "10 months",
    team: "9 developers",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=500&fit=crop&crop=center",
    shortDescription:
      "Trusted sneaker marketplace with blockchain authentication and real-time bidding system.",
    keyMetrics: {
      primary: "200+",
      primaryLabel: "Verified Sellers",
      secondary: "99.8%",
      secondaryLabel: "Auth Accuracy",
    },
    technologies: ["Shopify Plus", "GraphQL", "Socket.io", "Blockchain"],
    rating: 5,
    testimonialSnippet:
      "The authentication system gives buyers complete confidence.",
    category: "Marketplace",
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
                      ? "bg-slate-900 text-white shadow-lg border-0"
                      : "bg-white/80 backdrop-blur-sm border-2 border-slate-200 text-slate-700 hover:border-slate-400 hover:text-slate-900"
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

          {/* Featured Cases - Large Cards */}
          {featuredStudies.length > 0 && (
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {featuredStudies.map((study) => (
                <Card
                  key={study.id}
                  className="group bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden relative"
                >
                  {/* Featured Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <Badge className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-full px-4 py-2 font-bold shadow-lg">
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
                      <Badge className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 border border-slate-300 rounded-full px-3 py-1">
                        {study.industry}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="rounded-full border-slate-300 text-slate-600"
                      >
                        {study.category}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-black text-slate-800 mb-3 group-hover:text-slate-700 transition-colors duration-300">
                      {study.title}
                    </h3>

                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {study.shortDescription}
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-full p-2">
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
                            className="w-5 h-5 text-slate-800 fill-current"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
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
                    <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-4 mb-6 border-l-4 border-slate-400">
                      <p className="text-slate-700 italic">
                        "{study.testimonialSnippet}"
                      </p>
                    </div>

                    {/* Action Button */}
                    <Link href={`/case-studies/${study.slug}`}>
                      <Button className="w-full bg-slate-900 text-white rounded-2xl py-6 font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-800">
                        View Full Case Study
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Regular Cases - Grid */}
          {regularStudies.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularStudies.map((study) => (
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
                      <Badge className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 border border-slate-300 rounded-full px-3 py-1">
                        {study.industry}
                      </Badge>
                      <div className="flex">
                        {[...Array(study.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-slate-800 fill-current"
                          />
                        ))}
                      </div>
                    </div>

                    <h3 className="text-xl font-black text-slate-800 mb-2 group-hover:text-slate-700 transition-colors duration-300 line-clamp-2">
                      {study.title}
                    </h3>

                    <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-2">
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
                      {study.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
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
                        className="w-full border-2 border-slate-200 hover:border-slate-400 hover:text-slate-900 rounded-xl py-3 font-semibold transition-all duration-300"
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
      </main>
      <Footer />
    </div>
  );
}
