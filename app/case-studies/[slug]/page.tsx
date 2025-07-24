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
import Footer from "@/app/components/Footer/page";

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
  {
    id: 3,
    slug: "artisan-jewelry-hydrogen",
    title: "Artisan Jewelry Hydrogen Experience",
    client: "Luna Crafts",
    industry: "Luxury Jewelry",
    location: "Brooklyn, NY",
    duration: "5 months",
    team: "6 developers",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop&crop=center",
    challenge:
      "Luna Crafts creates handmade jewelry with unique stories behind each piece. Their Squarespace site couldn't showcase the intricate details and craftsmanship stories effectively. They needed a platform that could handle custom orders, size variations, and tell the artisan's story compellingly.",
    solution:
      "We developed an immersive Shopify Hydrogen experience with 360° product photography, interactive storytelling components, and a custom jewelry configurator. The platform includes artisan profiles, making-of videos, and a virtual try-on feature using the device camera.",
    technologies: [
      "Shopify Hydrogen",
      "Three.js",
      "WebGL",
      "React Spring",
      "Shopify Functions",
      "Cloudinary",
      "Stripe Connect",
    ],
    results: {
      engagement: "+120% increase in time on site",
      bounceRate: "45% reduction in bounce rate",
      cartValue: "+$85 average order value increase",
      customOrders: "30% of sales now custom orders",
      socialShares: "+200% increase in social media shares",
      artisanBookings: "150+ artisan consultation bookings/month",
    },
    testimonial: {
      quote:
        "The platform beautifully showcases our artisans' work and stories. Customers now understand the value and craftsmanship behind each piece.",
      author: "Isabella Rodriguez",
      position: "Creative Director, Luna Crafts",
    },
    keyFeatures: [
      "360° jewelry photography viewer",
      "Virtual try-on using device camera",
      "Custom jewelry configurator",
      "Artisan story integration",
      "Time-lapse making videos",
      "Personalized engraving preview",
    ],
    metrics: {
      beforeAfter: {
        timeOnSite: { before: "2m 15s", after: "4m 42s" },
        bounceRate: { before: "72%", after: "39%" },
        avgOrderValue: { before: "$145", after: "$230" },
        customOrderRate: { before: "8%", after: "30%" },
      },
    },
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
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop&crop=center",
    challenge:
      "PowerFuel's customers are primarily mobile users who shop on-the-go between workouts. Their existing site had poor mobile performance and no offline capabilities. They needed personalized nutrition recommendations and the ability to handle orders even with poor connectivity at gyms.",
    solution:
      "We built a Progressive Web App on Shopify with extensive offline capabilities, push notifications for reorder reminders, and AI-powered nutrition recommendations based on user fitness goals and dietary restrictions.",
    technologies: [
      "Shopify PWA",
      "Service Workers",
      "IndexedDB",
      "Push API",
      "TensorFlow.js",
      "Shopify GraphQL",
      "Workbox",
    ],
    results: {
      mobileSales: "+250% increase in mobile sales",
      appInstalls: "25,000+ PWA installations",
      offlineOrders: "15% of orders completed offline",
      pushEngagement: "68% push notification click rate",
      reorderRate: "+180% increase in repeat purchases",
      loadTime: "90% faster on slow 3G connections",
    },
    testimonial: {
      quote:
        "The PWA works perfectly even in areas with poor signal. Our customers love the personalized recommendations and offline ordering capability.",
      author: "Jake Thompson",
      position: "VP of Digital, PowerFuel Nutrition",
    },
    keyFeatures: [
      "Offline product browsing and ordering",
      "Push notifications for reorder reminders",
      "AI-powered nutrition recommendations",
      "Workout integration with fitness apps",
      "Supplement stack builder",
      "Progress tracking dashboard",
    ],
    metrics: {
      beforeAfter: {
        mobileConversion: { before: "1.8%", after: "4.5%" },
        loadTime3G: { before: "8.2s", after: "2.1s" },
        reorderRate: { before: "25%", after: "70%" },
        appEngagement: { before: "N/A", after: "4.2 sessions/week" },
      },
    },
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
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop&crop=center",
    challenge:
      "Artisan Home serves both B2C customers and interior designers with different pricing, catalogs, and ordering workflows. Their WooCommerce site couldn't handle the complex B2B requirements, bulk ordering, or automated design consultant workflows they needed for scalability.",
    solution:
      "We implemented Shopify Plus with a custom Hydrogen frontend, featuring separate B2B and B2C experiences, automated workflows for design consultations, 3D room visualization, and integration with major design software used by interior designers.",
    technologies: [
      "Shopify Plus",
      "Shopify Hydrogen",
      "Shopify Flow",
      "Three.js",
      "AutoCAD API",
      "Sketch API",
      "LaunchDarkly",
    ],
    results: {
      revenue: "+300% total revenue increase",
      b2bOrders: "40% of revenue from B2B channel",
      automation: "85% of workflows automated",
      designerSignups: "500+ interior designers onboarded",
      bulkOrders: "+150% increase in large orders",
      consultationBookings: "200% increase in design consultations",
    },
    testimonial: {
      quote:
        "The B2B portal has transformed our business. Interior designers can now place orders efficiently, and our automated workflows have saved us countless hours.",
      author: "Victoria Sterling",
      position: "COO, Artisan Home",
    },
    keyFeatures: [
      "Separate B2B and B2C storefronts",
      "3D room visualization tool",
      "Automated design consultation booking",
      "Integration with design software",
      "Bulk ordering with tiered pricing",
      "Real-time inventory across showrooms",
    ],
    metrics: {
      beforeAfter: {
        totalRevenue: { before: "$2.1M", after: "$8.4M" },
        b2bRevenue: { before: "$0", after: "$3.36M" },
        orderProcessing: { before: "45 min", after: "8 min" },
        designerRetention: { before: "N/A", after: "78%" },
      },
    },
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
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=500&fit=crop&crop=center",
    challenge:
      "Mountain Peak Co. operates retail stores, online shop, Amazon marketplace, and seasonal pop-ups. Their disconnected systems led to inventory issues, pricing inconsistencies, and poor customer experience across channels. They needed unified commerce with real-time synchronization.",
    solution:
      "We built a headless commerce platform using Shopify with Remix frontend, integrating POS systems, marketplace APIs, inventory management, and creating a unified customer profile across all touchpoints.",
    technologies: [
      "Shopify Plus",
      "Remix",
      "Shopify POS",
      "Amazon SP-API",
      "GraphQL Federation",
      "Redis",
      "Webhook.site",
    ],
    results: {
      performance: "98/100 average Lighthouse score",
      inventorySync: "Real-time sync across 12 locations",
      integrations: "12+ system integrations completed",
      unifiedCustomers: "95% customer profile unification",
      channelGrowth: "+120% omnichannel revenue",
      inventoryAccuracy: "99.2% inventory accuracy",
    },
    testimonial: {
      quote:
        "Finally, we have one source of truth for inventory and customer data. The unified experience has significantly improved our operations and customer satisfaction.",
      author: "David Park",
      position: "CTO, Mountain Peak Co.",
    },
    keyFeatures: [
      "Real-time inventory across all channels",
      "Unified customer profiles",
      "Cross-channel order management",
      "Marketplace listing automation",
      "POS integration for retail stores",
      "Advanced analytics dashboard",
    ],
    metrics: {
      beforeAfter: {
        inventoryAccuracy: { before: "87%", after: "99.2%" },
        orderFulfillment: { before: "48 hours", after: "12 hours" },
        channelRevenue: { before: "$5.2M", after: "$11.4M" },
        customerSatisfaction: { before: "3.2/5", after: "4.7/5" },
      },
    },
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
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=500&fit=crop&crop=center",
    challenge:
      "GlowBox needed a subscription platform that could handle complex personalization, flexible billing cycles, and inventory prediction for their beauty box service. Their existing platform couldn't handle the AI recommendations or flexible subscription management customers demanded.",
    solution:
      "We developed a Shopify Hydrogen application with AI-powered product recommendations, flexible subscription management, virtual try-on features, and predictive inventory management to optimize box contents and reduce waste.",
    technologies: [
      "Shopify Hydrogen",
      "Shopify Subscriptions",
      "TensorFlow.js",
      "OpenCV.js",
      "Recharge API",
      "Klaviyo",
      "BigQuery",
    ],
    results: {
      subscribers: "50,000+ active subscribers",
      retention: "78% 12-month retention rate",
      customization: "99% personalization accuracy",
      churnReduction: "65% reduction in subscription churn",
      inventoryOptimization: "30% reduction in overstock",
      customerSatisfaction: "4.8/5 average box rating",
    },
    testimonial: {
      quote:
        "The AI recommendations are incredibly accurate. Customers are amazed by how well each box matches their preferences and skin type.",
      author: "Emma Chen",
      position: "Founder, GlowBox Beauty",
    },
    keyFeatures: [
      "AI-powered beauty recommendations",
      "Virtual makeup try-on",
      "Flexible subscription management",
      "Skin analysis using device camera",
      "Predictive inventory optimization",
      "Community rating and reviews",
    ],
    metrics: {
      beforeAfter: {
        subscriptionRetention: { before: "45%", after: "78%" },
        recommendationAccuracy: { before: "72%", after: "99%" },
        inventoryWaste: { before: "25%", after: "8%" },
        customerLTV: { before: "$185", after: "$420" },
      },
    },
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
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=500&fit=crop&crop=center",
    challenge:
      "SoleConnect needed a trusted marketplace for rare sneakers with authentication services, real-time bidding, and protection against counterfeits. The platform required complex vendor management, escrow services, and integration with authentication partners.",
    solution:
      "We built a multi-vendor marketplace using headless Shopify architecture with custom GraphQL APIs, blockchain-based authentication certificates, real-time bidding system, and integration with professional sneaker authentication services.",
    technologies: [
      "Shopify Plus",
      "GraphQL",
      "Socket.io",
      "Blockchain",
      "Computer Vision API",
      "Stripe Connect",
      "AWS Lambda",
    ],
    results: {
      vendors: "200+ verified sellers",
      transactions: "5,000+ daily transactions",
      authentication: "99.8% authentication accuracy",
      fraud: "95% reduction in fraudulent listings",
      marketGrowth: "+400% marketplace volume",
      userTrust: "4.9/5 trust rating",
    },
    testimonial: {
      quote:
        "The authentication system gives buyers complete confidence. We've become the go-to platform for serious sneaker collectors and sellers.",
      author: "Anthony Williams",
      position: "CEO, SoleConnect",
    },
    keyFeatures: [
      "AI-powered sneaker authentication",
      "Real-time bidding system",
      "Blockchain certificates of authenticity",
      "Vendor reputation system",
      "Escrow payment protection",
      "Market price tracking and alerts",
    ],
    metrics: {
      beforeAfter: {
        monthlyVolume: { before: "$500K", after: "$2.5M" },
        authenticationAccuracy: { before: "92%", after: "99.8%" },
        disputeRate: { before: "15%", after: "2%" },
        sellerRetention: { before: "60%", after: "88%" },
      },
    },
  },
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
      <Footer />
    </div>
  );
}
