"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  MapPin,
  Building,
  Target,
  CheckCircle,
  BarChart3,
  Clock,
  Code,
  Zap,
  Star,
  Award,
  Sparkles,
  Globe,
  Layers,
  Rocket,
  Shield,
  Eye,
  Heart,
  Monitor,
  Smartphone,
  Database,
  Cloud,
  ShoppingCart,
  Palette,
  Settings,
} from "lucide-react";
import Link from "next/link";
import Footer from "@/app/components/Footer/page";
import { MinimalNewsletter } from "@/app/components/Newsletter/page";
import { useParams } from "next/navigation";

// Case studies data with expanded details
const caseStudies = [
  {
    id: 1,
    slug: "bohme",
    title: "Boheme Sustainable Fashion Store",
    client: "Boheme",
    industry: "Sustainable Fashion",
    location: "Los Angeles, CA",
    duration: "3 weeks",
    team: "3 developers",
    featured: false,
    images: [
      "/work/a-1.png",
      "/work/a-2.png",
      "/work/a-3.png",
      "/work/a-4.png",
    ],
    shortDescription:
      "High-performance Shopify Hydrogen storefront for sustainable fashion brand with custom components and optimized checkout flow.",
    challenge:
      "Boheme needed a lightning-fast e-commerce platform that could showcase their sustainable fashion collections while maintaining exceptional performance. Their existing platform was slow, had poor mobile experience, and couldn't effectively communicate their sustainability mission to customers.",
    solution:
      "We built a cutting-edge Shopify Hydrogen storefront with React components optimized for performance and sustainability storytelling. The solution included custom product configurators, detailed sustainability metrics for each item, and an intuitive checkout flow that increased conversions significantly.",
    keyMetrics: {
      primary: "+180%",
      primaryLabel: "Revenue Increase",
      secondary: "100/100",
      secondaryLabel: "Performance Score",
    },
    technologies: [
      "Shopify Hydrogen",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Sustainable Fashion APIs",
    ],
    rating: 4.9,
    testimonialSnippet: "The performance improvements have been incredible.",
    testimonial: {
      quote:
        "The new Hydrogen storefront not only increased our sales by 180% but perfectly represents our sustainability mission. The performance improvements have been incredible, and our customers love the new experience.",
      author: "Emma Rodriguez",
      position: "Founder & CEO, Boheme",
    },
    results: {
      revenue: "+180% increase in online revenue",
      performance: "100/100 Lighthouse performance score",
      conversion: "7.2% conversion rate (up from 2.8%)",
      pageSpeed: "89% page load time reduced from 3.8s to 0.9s",
      mobileTraffic: "+240% increase in mobile conversions",
      sustainabilityScore:
        "95% customer satisfaction with sustainability features",
    },
    keyFeatures: [
      "Sustainability impact calculator for each product",
      "Custom size guide with fit recommendations",
      "Real-time inventory management",
      "Advanced product filtering by sustainability metrics",
      "Progressive Web App capabilities",
      "Optimized checkout flow with one-click purchasing",
    ],
    category: "E-commerce",
    size: "large",
  },
  {
    id: 2,
    slug: "deadstock",
    title: "Deadstock Clothing Store",
    client: "Deadstock",
    industry: "Fashion",
    location: "New York, NY",
    duration: "2 weeks",
    team: "2 developers",
    featured: false,
    images: [
      "/work/b-1.png",
      "/work/b-2.png",
      "/work/b-3.png",
      "/work/b-4.png",
    ],
    shortDescription:
      "Headless Shopify store built with React for deadstock clothing brand, featuring advanced product filtering.",
    challenge:
      "Deadstock needed a modern e-commerce platform that could handle their unique inventory model of limited deadstock items. They required advanced filtering capabilities to help customers find specific pieces and a system that could effectively communicate scarcity and exclusivity.",
    solution:
      "We developed a headless Shopify store using React with sophisticated product filtering and search capabilities. The solution featured real-time inventory updates, scarcity indicators, and an intuitive interface that made browsing deadstock items effortless for customers.",
    keyMetrics: {
      primary: "+155%",
      primaryLabel: "Revenue Increase",
      secondary: "100/100",
      secondaryLabel: "Performance Score",
    },
    technologies: [
      "Headless Shopify",
      "React",
      "Next.js",
      "GraphQL",
      "Algolia Search",
    ],
    rating: 4.8,
    testimonialSnippet: "The filtering system transformed our user experience.",
    testimonial: {
      quote:
        "The filtering system transformed our user experience completely. Customers can now easily find exactly what they're looking for in our deadstock inventory, and our sales have increased by 155% as a result.",
      author: "Marcus Thompson",
      position: "Creative Director, Deadstock",
    },
    results: {
      revenue: "+155% increase in online revenue",
      performance: "100/100 Lighthouse performance score",
      conversion: "6.1% conversion rate (up from 2.4%)",
      pageSpeed: "72% fast page load time reduced from 4.1s to 1.2s",
      searchAccuracy: "92% search result accuracy",
      customerSatisfaction: "4.8/5 average customer rating",
    },
    keyFeatures: [
      "Advanced multi-filter product search",
      "Real-time inventory scarcity indicators",
      "Wishlist and favorites functionality",
      "Size and fit recommendation engine",
      "Social sharing for unique finds",
      "Mobile-optimized browsing experience",
    ],
    category: "E-commerce",
    size: "medium",
  },

];

export default function CaseStudyPage() {
  const params = useParams();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find the case study based on the slug
  const caseStudy =
    caseStudies.find((study) => study.slug === params.slug) || caseStudies[0];

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = (currentScrollY / (documentHeight - windowHeight)) * 100;

      setScrollProgress(progress);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % caseStudy.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [caseStudy.images.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-x-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-gray-200/30">
        <div
          className="h-full bg-gradient-to-r from-black to-brand-blue transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Content */}
      <main
        className={`w-full px-6 lg:px-8 py-20 pt-32 relative transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Back Navigation */}
          <div className="mb-16">
            <Link
              href="/work"
              className="group inline-flex items-center text-gray-600 hover:text-gray-900 transition-all duration-500 hover:-translate-x-2"
            >
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 mr-4 border border-gray-200/50 shadow-lg hover:shadow-xl group-hover:bg-gray-900 group-hover:border-gray-700 transition-all duration-500 hover:scale-110">
                <ArrowLeft className="w-5 h-5 group-hover:text-white transition-all duration-500" />
              </div>
              <span className="font-bold text-lg tracking-tight">
                Back to Work
              </span>
            </Link>
          </div>

          {/* Hero Section */}
          <div className="mb-24 relative">
            {/* Industry & Category Badges */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Badge className="bg-brand-blue text-white rounded-full px-8 py-4 text-base font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 border-0">
                <Sparkles className="w-5 h-5 mr-3" />
                {caseStudy.industry}
              </Badge>
              <Badge className="bg-white/90 backdrop-blur-xl border-2 border-gray-200/50 text-gray-700 rounded-full px-6 py-4 shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-gray-50 transition-all duration-500">
                <Globe className="w-5 h-5 mr-3" />
                {caseStudy.category}
              </Badge>
              <Badge className="bg-white/90 backdrop-blur-xl border-2 border-gray-200/50 text-gray-700 rounded-full px-6 py-4 shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-gray-50 transition-all duration-500">
                <Layers className="w-5 h-5 mr-3" />
                {caseStudy.size.charAt(0).toUpperCase() +
                  caseStudy.size.slice(1)}{" "}
                Project
              </Badge>
            </div>

            {/* Main Title */}
            <div className="relative mb-16">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black text-transparent bg-brand-blue bg-clip-text mb-8 leading-none tracking-tight">
                {caseStudy.title}
              </h1>
              <div className="absolute -bottom-4 left-0 w-32 h-2 bg-gradient-to-r from-indigo-600 to-brand-blue rounded-full shadow-lg" />
            </div>

            {/* Project Details Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Building,
                  label: "Client",
                  value: caseStudy.client,
                },
                {
                  icon: Calendar,
                  label: "Duration",
                  value: caseStudy.duration,
                },
                {
                  icon: Users,
                  label: "Team Size",
                  value: caseStudy.team,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group bg-white/90 backdrop-blur-xl rounded-3xl p-4 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 cursor-pointer relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-center space-x-6">
                    <div
                      className={`bg-brand-blue rounded-2xl p-4 shadow-lg transition-all duration-500 ${
                        hoveredCard === index ? "scale-110 rotate-3" : ""
                      }`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-bold mb-1 uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="text-md font-black text-gray-900">
                        {item.value}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image Gallery with Stats Overlay */}
          <div className="relative mb-16 group">
            <div className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50 transition-all duration-700 group-hover:shadow-3xl">
              {/* Image Gallery */}
              <div className="relative w-full h-full">
                {caseStudy.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${caseStudy.title} - Image ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                      index === currentImageIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                  />
                ))}
              </div>

              {/* Image Indicators */}
              <div className="absolute top-6 right-6 flex space-x-2">
                {caseStudy.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-white"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />

              {/* Floating Stats */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {Object.entries(caseStudy.results)
                    .slice(0, 4)
                    .map(([key, value], index) => (
                      <div
                        key={index}
                        className="bg-white/70 backdrop-blur-xl rounded-2xl p-4 text-center shadow-xl border border-white/20 hover:scale-105 transition-all duration-500 group/stat"
                      >
                        <div className="text-xl font-black text-gray-900 mb-2 group-hover/stat:text-brand-blue transition-colors duration-300">
                          {value.split(" ")[0]}
                        </div>
                        <div className="text-xs text-gray-600 font-bold uppercase tracking-wider">
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics Showcase */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              {
                icon: TrendingUp,
                value: caseStudy.keyMetrics.primary,
                label: caseStudy.keyMetrics.primaryLabel,
                pattern: "emerald",
              },
              {
                icon: Zap,
                value: caseStudy.keyMetrics.secondary,
                label: caseStudy.keyMetrics.secondaryLabel,
                pattern: "yellow",
              },
              {
                icon: Star,
                value: `${caseStudy.rating}/5`,
                label: "Client Rating",
                pattern: "blue",
              },
              {
                icon: Code,
                value: `${caseStudy.technologies.length}+`,
                label: "Technologies",
                pattern: "purple",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`bg-brand-blue rounded-3xl p-10 text-center border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 group relative overflow-hidden cursor-pointer`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full w-28 h-28 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-xl">
                    <item.icon className="w-14 h-14 text-white" />
                  </div>
                  <div className="text-4xl font-black text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.value}
                  </div>
                  <div className="text-white/90 font-bold text-sm uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Three Column Content Layout */}
          <div className="grid lg:grid-cols-3 gap-10 mb-28">
            {[
              {
                icon: Target,
                title: "The Challenge",
                content: caseStudy.challenge,
              },
              {
                icon: Layers,
                title: "Our Solution",
                content: caseStudy.solution,
              },
              {
                icon: CheckCircle,
                title: "Key Features",
                content: null,
              },
            ].map((section, index) => (
              <Card
                key={index}
                className={`bg-white/90 rounded-3xl p-10 border border-gray-200/30 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 relative overflow-hidden group`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="flex items-center mb-10">
                    <div
                      className={`bg-brand-blue rounded-2xl p-5 mr-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                    >
                      <section.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 mb-2">
                        {section.title}
                      </h3>
                      <div className={`w-16 h-1 bg-brand-blue rounded-full`} />
                    </div>
                  </div>
                  {section.content ? (
                    <p className="text-gray-700 leading-relaxed text-md font-medium">
                      {section.content}
                    </p>
                  ) : (
                    <ul className="space-y-6">
                      {caseStudy.keyFeatures.slice(0, 6).map((feature, idx) => (
                        <li key={idx} className="flex items-start group/item">
                          <div
                            className={`bg-brand-blue rounded-full p-2 mr-4 mt-1 shadow-lg group-hover/item:scale-110 transition-all duration-300`}
                          >
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700 leading-relaxed font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Technologies Used */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
                Technologies Used
              </h3>
              <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full" />
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {caseStudy.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  className="bg-white/90 backdrop-blur-xl border-2 border-gray-200/50 text-gray-700 rounded-full px-6 py-3 shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-500"
                >
                  <Code className="w-4 h-4 mr-2" />
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Premium Testimonial Section */}
          <div className="mb-24">
            <Card className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-16 lg:p-20 border border-gray-200/50 shadow-2xl relative overflow-hidden hover:shadow-3xl transition-all duration-700">
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full opacity-50 -translate-y-24 translate-x-24 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full opacity-50 translate-y-20 -translate-x-20 blur-3xl" />

              <div className="text-center relative">
                {/* Premium 5-Star Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="relative mx-1">
                      <Star
                        className="w-6 h-6 text-yellow-400 fill-current hover:scale-125 transition-transform duration-300 cursor-pointer"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                      <div className="absolute inset-0 w-10 h-10 bg-yellow-400/20 rounded-full blur-lg" />
                    </div>
                  ))}
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-xl lg:text-2xl text-gray-700 mb-12 italic leading-relaxed max-w-6xl mx-auto font-light relative">
                  <span className="relative z-10">
                    "{caseStudy.testimonial.quote}"
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-50/30 to-transparent blur-3xl" />
                </blockquote>

                {/* Author Section */}
                <div className="flex items-center justify-center space-x-8">
                  <div className="relative group">
                    <div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-500">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-indigo-400/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg lg:text-xl font-black text-gray-900 mb-2">
                      {caseStudy.testimonial.author}
                    </div>
                    <div className="text-gray-600 font-bold text-sm mb-2">
                      {caseStudy.testimonial.position}
                    </div>
                    <div className="w-16 h-1 bg-brand-blue rounded-full" />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Call to Action Section */}
          <div className="text-center">
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
                    className="bg-white text-brand-blue hover:bg-black hover:text-white px-12 w-full sm:w-auto flex justify-center items-center py-6 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 group/btn"
                  >
                    <span className="mr-3">Start Your Project</span>
                    <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>

                  <Link
                    href="/work"
                    className="bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white hover:text-white hover:bg-white/20 px-12 w-full sm:w-auto flex justify-center items-center py-6 rounded-2xl text-lg font-bold transition-all duration-500 hover:scale-105"
                  >
                    <span className="mr-3">View More Work</span>
                    <Eye className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <MinimalNewsletter />
      <Footer />
    </div>
  );
}
