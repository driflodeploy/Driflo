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
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
  // ... (rest of your case studies data remains the same)
];

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Unwrap the params Promise
  const resolvedParams = use(params);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Find case study by slug
  const caseStudy = caseStudies.find((cs) => cs.slug === resolvedParams.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(71, 85, 105, 0.15) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        ></div>
      </div>

      {/* Premium Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900/5 via-transparent to-slate-900/5 pointer-events-none"></div>

      {/* Case Study Content */}
      <main
        className={`w-full px-6 lg:px-8 py-20 pt-32 relative transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Back Navigation */}
          <Link
            href="/work"
            className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-12 group transition-all duration-500 hover:-translate-x-1"
          >
            <div className="bg-white/90 backdrop-blur-md rounded-full p-4 mr-4 border border-slate-200 shadow-lg group-hover:shadow-xl group-hover:bg-slate-900 group-hover:border-slate-700 transition-all duration-500">
              <ArrowLeft className="w-5 h-5 group-hover:text-white group-hover:-translate-x-1 transition-all duration-500" />
            </div>
            <span className="font-semibold text-lg">Back to Portfolio</span>
          </Link>

          {/* Premium Header */}
          <div className="mb-20 relative">
            {/* Floating Excellence Badge */}
            <div className="absolute -top-6 -right-6 lg:right-0 z-10">
              <div className="bg-slate-900 rounded-full p-4 shadow-2xl rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-700 cursor-pointer">
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Badge className="bg-slate-900 text-white rounded-full px-8 py-4 text-base font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500">
                <Sparkles className="w-5 h-5 mr-3" />
                {caseStudy.industry}
              </Badge>
              <Badge className="bg-white/90 backdrop-blur-md border-2 border-slate-300 text-slate-700 rounded-full px-6 py-4 shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-slate-50 transition-all duration-500">
                <Globe className="w-5 h-5 mr-3" />
                E-commerce
              </Badge>
              <Badge className="bg-white/90 backdrop-blur-md border-2 border-slate-300 text-slate-700 rounded-full px-6 py-4 shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-slate-50 transition-all duration-500">
                <Code className="w-5 h-5 mr-3" />
                Shopify Platform
              </Badge>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 mb-12 leading-none tracking-tight">
              {caseStudy.title}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Building, label: "Client", value: caseStudy.client },
                {
                  icon: Calendar,
                  label: "Duration",
                  value: caseStudy.duration,
                },
                { icon: Users, label: "Team Size", value: caseStudy.team },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 group cursor-pointer"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-center space-x-6">
                    <div
                      className={`bg-slate-900 rounded-2xl p-4 transition-all duration-500 ${
                        hoveredCard === index ? "scale-110 rotate-3" : ""
                      }`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 font-semibold mb-1">
                        {item.label}
                      </div>
                      <div className="text-2xl font-bold text-slate-900">
                        {item.value}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Challenge Section */}
            <div className="bg-gradient-to-r from-white via-slate-50 to-white rounded-3xl p-10 border border-slate-200 shadow-2xl backdrop-blur-md relative overflow-hidden hover:shadow-3xl transition-all duration-700">
              <div className="absolute top-0 right-0 w-40 h-40 bg-slate-900/5 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="bg-slate-900 rounded-2xl p-4 shadow-xl">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">
                    The Challenge
                  </h3>
                </div>
                <p className="text-xl text-slate-700 leading-relaxed pl-20">
                  {caseStudy.challenge}
                </p>
              </div>
            </div>
          </div>

          {/* Premium Hero Image */}
          <div className="relative mb-24 group">
            <div className="relative h-96 lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 transition-all duration-700 group-hover:shadow-3xl group-hover:scale-[1.02]">
              <Image
                src={caseStudy.image || "/placeholder.svg"}
                alt={caseStudy.title}
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

              {/* Floating Stats */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {Object.entries(caseStudy.results)
                    .slice(0, 4)
                    .map(([key, value], index) => (
                      <div
                        key={index}
                        className="bg-white/95 backdrop-blur-md rounded-2xl p-6 text-center shadow-xl border border-white/20 hover:scale-105 transition-all duration-500"
                      >
                        <div className="text-2xl font-bold text-slate-900 mb-2">
                          {value.split(" ")[0]}
                        </div>
                        <div className="text-xs text-slate-600 font-semibold uppercase tracking-wide">
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Premium Key Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              {
                icon: TrendingUp,
                value: Object.values(caseStudy.results)[0],
                label: "Primary Achievement",
                gradient: "from-slate-800 to-slate-900",
              },
              {
                icon: Zap,
                value: Object.values(caseStudy.results)[1],
                label: "Performance Boost",
                gradient: "from-slate-700 to-slate-800",
              },
              {
                icon: Users,
                value: Object.values(caseStudy.results)[2],
                label: "User Experience",
                gradient: "from-slate-600 to-slate-700",
              },
              {
                icon: BarChart3,
                value: `${caseStudy.technologies.length}+`,
                label: "Technologies Used",
                gradient: "from-slate-500 to-slate-600",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${item.gradient} rounded-3xl p-10 text-center border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 group relative overflow-hidden cursor-pointer`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                    <item.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-4xl font-black text-white mb-4">
                    {item.value}
                  </div>
                  <div className="text-slate-200 font-bold text-sm uppercase tracking-wide">
                    {item.label}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Three Column Layout: Challenge, Solution, Features */}
          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            {[
              {
                icon: Target,
                title: "Challenge",
                content: caseStudy.challenge,
                bg: "from-white to-slate-50",
              },
              {
                icon: BarChart3,
                title: "Solution",
                content: caseStudy.solution,
                bg: "from-slate-50 to-white",
              },
              {
                icon: CheckCircle,
                title: "Key Features",
                content: null,
                bg: "from-white to-slate-50",
              },
            ].map((section, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${section.bg} rounded-3xl p-10 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 relative overflow-hidden group`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-900/5 rounded-full blur-2xl"></div>
                <div className="relative">
                  <div className="flex items-center mb-8">
                    <div className="bg-slate-900 rounded-2xl p-4 mr-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <section.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900">
                      {section.title}
                    </h3>
                  </div>
                  {section.content ? (
                    <p className="text-slate-700 leading-relaxed text-lg">
                      {section.content}
                    </p>
                  ) : (
                    <ul className="space-y-4">
                      {caseStudy.keyFeatures.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start group/item">
                          <div className="bg-slate-900 rounded-full p-1 mr-4 mt-1 shadow-lg group-hover/item:scale-110 transition-all duration-300">
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-slate-700 leading-relaxed font-medium group-hover/item:text-slate-900 transition-colors duration-300">
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

          {/* Premium Technologies Section */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h3 className="text-5xl font-black text-slate-900 mb-6">
                Technologies Used
              </h3>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Cutting-edge tools and frameworks that power exceptional results
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {caseStudy.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-md rounded-3xl p-8 text-center border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 group relative overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="bg-slate-900 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-lg font-bold text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                      {tech}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Before/After Metrics */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h3 className="text-5xl font-black text-slate-900 mb-6">
                Performance Improvements
              </h3>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Measurable results that speak for themselves
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(caseStudy.metrics.beforeAfter).map(
                ([metric, values], index) => (
                  <Card
                    key={index}
                    className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-slate-900/5 rounded-full blur-xl"></div>
                    <div className="relative">
                      <div className="text-center mb-8">
                        <div className="bg-slate-900 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <BarChart3 className="w-10 h-10 text-white" />
                        </div>
                        <h4 className="font-black text-slate-900 text-xl capitalize">
                          {metric.replace(/([A-Z])/g, " $1").trim()}
                        </h4>
                      </div>

                      <div className="space-y-6">
                        <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200 shadow-lg">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-bold text-slate-600 uppercase tracking-wide">
                              Before:
                            </span>
                            <span className="font-black text-slate-800 text-xl">
                              {values.before}
                            </span>
                          </div>
                        </div>

                        <div className="bg-slate-900 rounded-2xl p-6 shadow-lg">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-bold text-slate-300 uppercase tracking-wide">
                              After:
                            </span>
                            <span className="font-black text-white text-xl">
                              {values.after}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              )}
            </div>
          </div>

          {/* Premium Testimonial */}
          <div className="mb-20">
            <Card className="bg-gradient-to-br from-white via-slate-50 to-white rounded-3xl p-16 border border-slate-200 shadow-2xl relative overflow-hidden hover:shadow-3xl transition-all duration-700">
              <div className="absolute top-0 right-0 w-40 h-40 bg-slate-900/5 rounded-full opacity-50 -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-slate-900/5 rounded-full opacity-50 translate-y-16 -translate-x-16"></div>

              <div className="text-center relative">
                {/* 5-Star Rating */}
                <div className="flex justify-center mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-8 h-8 text-slate-900 fill-current mx-1 hover:scale-110 transition-transform duration-300"
                    />
                  ))}
                </div>

                <div className="text-8xl text-slate-300 mb-8 font-serif leading-none">
                  "
                </div>
                <blockquote className="text-3xl text-slate-700 mb-10 italic leading-relaxed max-w-5xl mx-auto font-light">
                  {caseStudy.testimonial.quote}
                </blockquote>

                <div className="flex items-center justify-center space-x-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center shadow-xl">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-slate-900 rounded-full p-2 shadow-lg">
                      <Star className="w-4 h-4 text-white fill-current" />
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-black text-slate-900 mb-1">
                      {caseStudy.testimonial.author}
                    </div>
                    <div className="text-slate-600 font-bold text-lg">
                      {caseStudy.testimonial.position}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
