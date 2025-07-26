"use client";

import { useState, useEffect, use } from "react";
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
} from "lucide-react";
import Link from "next/link";
import Footer from "@/app/components/Footer/page";
import { MinimalNewsletter } from "@/app/components/Newsletter/page";

// Your existing case studies data
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
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=500&fit=crop&crop=center",
    challenge:
      "EcoThreads needed a high-performance e-commerce platform that could handle their growing customer base while maintaining their brand values of sustainability and transparency. Their existing WordPress site was slow, had poor mobile experience, and couldn't support their complex product storytelling needs.",
    solution:
      "We built a custom Shopify Hydrogen storefront with React components optimized for performance and sustainability storytelling. The solution included carbon footprint tracking for each product, detailed supply chain transparency, and a custom size guide with sustainability impact calculations.",
    technologies: [
      "Shopify Hydrogen",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Shopify Admin API",
      "Carbon Tracking API",
    ],
    results: {
      revenue: "+180% increase in online revenue",
      performance: "100/100 Lighthouse performance score",
      conversion: "6.8% conversion rate (up from 2.1%)",
      pageSpeed: "Page load time reduced from 4.2s to 1.1s",
      mobileTraffic: "+220% increase in mobile conversions",
      carbonReduction: "15% reduction in returns due to better sizing",
    },
    testimonial: {
      quote:
        "The new Hydrogen storefront not only increased our sales but perfectly represents our sustainability mission. The performance improvements have been incredible.",
      author: "Sarah Mitchell",
      position: "Founder & CEO, EcoThreads",
    },
    keyFeatures: [
      "Carbon footprint calculator for each product",
      "Interactive supply chain map",
      "Sustainable packaging options",
      "Size recommendation engine",
      "Progressive Web App capabilities",
      "Advanced product filtering by sustainability metrics",
    ],
    metrics: {
      beforeAfter: {
        pageSpeed: { before: "4.2s", after: "1.1s" },
        conversionRate: { before: "2.1%", after: "6.8%" },
        mobileScore: { before: "65/100", after: "98/100" },
        bounceRate: { before: "68%", after: "31%" },
      },
    },
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
    image:
      "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800&h=500&fit=crop&crop=center",
    challenge:
      "TechFlow's legacy Magento store was struggling with poor performance, especially on mobile devices. They needed advanced product visualization features and better SEO to compete with larger electronics retailers. The complex product catalog with thousands of SKUs required sophisticated filtering and search capabilities.",
    solution:
      "We implemented a headless architecture using Shopify as the backend with a custom Next.js frontend. The solution featured AR try-on capabilities for phone cases and earbuds, advanced product comparison tools, and intelligent search with AI-powered recommendations.",
    technologies: [
      "Shopify Storefront API",
      "Next.js 14",
      "React Query",
      "Framer Motion",
      "WebAR",
      "Algolia Search",
      "Stripe",
    ],
    results: {
      pageSpeed: "Page speed improved from 2.1s to 0.8s",
      mobileScore: "95/100 mobile Lighthouse score",
      seoBoost: "+75% increase in organic traffic",
      arEngagement: "AR features used by 45% of visitors",
      conversionLift: "+85% increase in mobile conversions",
      searchAccuracy: "92% search result accuracy",
    },
    testimonial: {
      quote:
        "The AR try-on feature has been a game-changer. Customers can see how our products look before buying, which has significantly reduced returns.",
      author: "Marcus Chen",
      position: "Head of E-commerce, TechFlow",
    },
    keyFeatures: [
      "WebAR product visualization",
      "Advanced product comparison matrix",
      "AI-powered search and recommendations",
      "Real-time inventory across 3 warehouses",
      "One-click product compatibility checker",
      "Dynamic pricing based on bulk orders",
    ],
    metrics: {
      beforeAfter: {
        pageSpeed: { before: "2.1s", after: "0.8s" },
        mobileScore: { before: "72/100", after: "95/100" },
        organicTraffic: { before: "15K/month", after: "26K/month" },
        returnRate: { before: "12%", after: "7%" },
      },
    },
  },
];

export default function CaseStudyPage() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // For demo, we'll use the first case study
  const caseStudy = caseStudies[0];

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
              href="/"
              className="group inline-flex items-center text-gray-600 hover:text-gray-900 transition-all duration-500 hover:-translate-x-2"
            >
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 mr-4 border border-gray-200/50 shadow-lg hover:shadow-xl group-hover:bg-gray-900 group-hover:border-gray-700 transition-all duration-500 hover:scale-110">
                <ArrowLeft className="w-5 h-5 group-hover:text-white transition-all duration-500" />
              </div>
              <span className="font-bold text-lg tracking-tight">
                Back to Portfolio
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
                E-commerce Excellence
              </Badge>
              <Badge className="bg-white/90 backdrop-blur-xl border-2 border-gray-200/50 text-gray-700 rounded-full px-6 py-4 shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-gray-50 transition-all duration-500">
                <Layers className="w-5 h-5 mr-3" />
                Premium Solution
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

            {/* Challenge Highlight */}
            <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-12 border border-gray-200/50 shadow-2xl backdrop-blur-xl relative overflow-hidden hover:shadow-3xl transition-all duration-700 group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-start space-x-8 mb-8">
                  <div className="bg-brand-blue rounded-2xl p-4 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4">
                      The Challenge
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-800 to-brand-blue rounded-full" />
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed pl-20 font-medium">
                  {caseStudy.challenge}
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image with Stats Overlay */}
          <div className="relative mb-16 group">
            <div className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50 transition-all duration-700 group-hover:shadow-3xl">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />

              {/* Floating Stats */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {Object.entries(caseStudy.results)
                    .slice(0, 4)
                    .map(([key, value], index) => (
                      <div
                        key={index}
                        className="bg-white/70 backdrop-blur-xl rounded-2xl p-2 text-center shadow-xl border border-white/20 hover:scale-105 transition-all duration-500 group/stat"
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
                value: Object.values(caseStudy.results)[0],
                label: "Revenue Growth",

                pattern: "emerald",
              },
              {
                icon: Zap,
                value: Object.values(caseStudy.results)[1],
                label: "Performance Score",

                pattern: "yellow",
              },
              {
                icon: Users,
                value: Object.values(caseStudy.results)[2],
                label: "Conversion Rate",

                pattern: "blue",
              },
              {
                icon: Rocket,
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
                      {caseStudy.keyFeatures.slice(0, 4).map((feature, idx) => (
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

          {/* Premium Testimonial Section */}
          <div className="mb-24">
            <Card className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-16 lg:p-20 border border-gray-200/50 shadow-2xl relative overflow-hidden hover:shadow-3xl transition-all duration-700">
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full opacity-50 -translate-y-24 translate-x-24 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full opacity-50 translate-y-20 -translate-x-20 blur-3xl" />
              <div className="absolute center w-32 h-32 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-full blur-2xl" />

              <div className="text-center relative">
                {/* Premium 5-Star Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="relative mx-1">
                      <Star
                        className="w-5 h-5 text-yellow-400 fill-current hover:scale-125 transition-transform duration-300 cursor-pointer"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                      <div className="absolute inset-0 w-10 h-10 bg-yellow-400/20 rounded-full blur-lg" />
                    </div>
                  ))}
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-xl lg:text-2xl text-gray-700 mb-12 italic leading-relaxed max-w-6xl mx-auto font-light relative">
                  <span className="relative z-10">
                    {caseStudy.testimonial.quote}
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
                    <div className="text-md lg:text-xl font-black text-gray-900 mb-2">
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
                  <Button className="bg-white text-brand-blue hover:bg-black hover:text-white px-12 py-6 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 group/btn">
                    <span className="mr-3">Start Your Project</span>
                    <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>

                  <Button
                    variant="outline"
                    className="bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white hover:text-white hover:bg-white/20 px-12 py-6 rounded-2xl text-lg font-bold transition-all duration-500 hover:scale-105"
                  >
                    <span className="mr-3">View More Work</span>
                    <Eye className="w-6 h-6" />
                  </Button>
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
