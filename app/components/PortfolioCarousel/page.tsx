"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  TrendingUp,
  Users,
  DollarSign,
  MapPin,
  Star,
  Clock10,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    id: 1,
    slug: "sustainable-fashion-hydrogen",
    title: "Sustainable Fashion Hydrogen Storefront",
    time: "4 months",
    type: "Shopify Hydrogen",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop&crop=center",
    stats: {
      revenue: "+180%",
      performance: "100/100",
      conversion: "6.8%",
    },
    description:
      "High-performance Shopify Hydrogen storefront for sustainable fashion brand with custom React components and optimized checkout flow.",
    tags: ["Shopify Hydrogen", "React", "Sustainable Fashion"],
    rating: 4.9,
  },
  {
    id: 2,
    slug: "tech-accessories-headless",
    title: "Tech Accessories Headless Store",
    time: "4 months",
    type: "Headless Shopify + Next.js",
    image:
      "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&h=400&fit=crop&crop=center",
    stats: {
      pageSpeed: "0.8s",
      mobile_score: "95/100",
      seo_boost: "+75%",
    },
    description:
      "Headless Shopify store built with Next.js for tech accessories brand, featuring advanced product filtering and AR try-on capabilities.",
    tags: ["Headless Shopify", "Next.js", "AR Integration"],
    rating: 4.8,
  },
  {
    id: 3,
    slug: "artisan-jewelry-hydrogen",
    title: "Artisan Jewelry Hydrogen Experience",
    time: "4 months",
    type: "Shopify Hydrogen",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop&crop=center",
    stats: {
      engagement: "+120%",
      bounce_rate: "-45%",
      cart_value: "+$85",
    },
    description:
      "Immersive Shopify Hydrogen storefront for artisan jewelry with 360° product views, custom configurator, and storytelling features.",
    tags: ["Shopify Hydrogen", "3D Visualization", "Custom Design"],
    rating: 4.9,
  },
  {
    id: 4,
    slug: "fitness-supplement-pwa",
    title: "Fitness Supplement PWA Store",
    time: "4 months",
    type: "Shopify PWA",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
    stats: {
      mobile_sales: "+250%",
      app_installs: "25K+",
      offline_orders: "15%",
    },
    description:
      "Progressive Web App built on Shopify with offline capabilities, push notifications, and personalized nutrition recommendations.",
    tags: ["Shopify PWA", "Offline Support", "Personalization"],
    rating: 4.7,
  },
  {
    id: 5,
    slug: "home-decor-hydrogen-plus",
    title: "Luxury Home Decor Hydrogen Store",
    time: "4 months",
    type: "Shopify Plus + Hydrogen",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&crop=center",
    stats: {
      revenue: "+300%",
      b2b_orders: "40%",
      automation: "85%",
    },
    description:
      "Enterprise Shopify Plus store with Hydrogen frontend for luxury home decor, featuring B2B portal, bulk ordering, and automated workflows.",
    tags: ["Shopify Plus", "Hydrogen", "B2B Portal"],
    rating: 4.8,
  },
  {
    id: 6,
    slug: "outdoor-gear-headless",
    title: "Outdoor Gear Headless Commerce",
    time: "4 months",
    type: "Headless Shopify + Remix",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop&crop=center",
    stats: {
      performance: "98/100",
      inventory_sync: "Real-time",
      integrations: "12+",
    },
    description:
      "Multi-channel headless commerce solution built with Shopify and Remix, integrating POS, marketplace, and inventory management systems.",
    tags: ["Headless Commerce", "Remix", "Multi-channel"],
    rating: 4.9,
  },
  {
    id: 7,
    slug: "beauty-subscription-hydrogen",
    title: "Beauty Subscription Hydrogen App",
    time: "4 months",
    type: "Shopify Hydrogen + Subscriptions",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop&crop=center",
    stats: {
      subscribers: "50K+",
      retention: "78%",
      customization: "99%",
    },
    description:
      "Subscription-based beauty box platform built with Shopify Hydrogen, featuring AI-powered product recommendations and flexible billing cycles.",
    tags: ["Shopify Hydrogen", "Subscriptions", "AI Recommendations"],
    rating: 4.8,
  },
  {
    id: 8,
    slug: "sneaker-marketplace-headless",
    title: "Sneaker Marketplace Headless Platform",
    time: "4 months",
    type: "Shopify Multi-Store + GraphQL",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop&crop=center",
    stats: {
      vendors: "200+",
      transactions: "5K/day",
      authentication: "99.8%",
    },
    description:
      "Multi-vendor sneaker marketplace with authentication system, built using headless Shopify architecture and custom GraphQL APIs.",
    tags: ["Multi-vendor", "GraphQL", "Authentication"],
    rating: 4.7,
  },
];

export default function PortfolioCarousel() {
  const [translateX, setTranslateX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false); // Add client state
  const [containerWidth, setContainerWidth] = useState(800); // Default fallback
  const animationRef = useRef<number | undefined>(undefined);
  const lastTimeRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize client-side rendering
  useEffect(() => {
    setIsClient(true);

    // Set initial container width
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

    // Handle resize
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Create extended array for seamless looping
  const extendedItems = [
    ...portfolioItems,
    ...portfolioItems,
    ...portfolioItems,
  ];
  const cardWidth = 380; // Card width + gap
  const totalWidth = portfolioItems.length * cardWidth;

  const animate = (currentTime: number) => {
    if (lastTimeRef.current === 0) {
      lastTimeRef.current = currentTime;
    }

    const deltaTime = currentTime - lastTimeRef.current;
    const speed = isHovered ? 0.02 : 0.04; // Slower when hovered, like water flow

    setTranslateX((prevX) => {
      let newX = prevX + deltaTime * speed;
      // Reset position when we've moved one full set width
      if (newX >= totalWidth) {
        newX = newX - totalWidth;
      }
      return newX;
    });

    lastTimeRef.current = currentTime;
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isClient) {
      animationRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, isClient]);

  const getTypeColor = (type: string) => {
    const colors = {
      "Shopify Hydrogen": "bg-gradient-to-r from-green-500 to-emerald-600",
      "Headless Shopify + Next.js":
        "bg-gradient-to-r from-blue-500 to-cyan-600",
      "Shopify PWA": "bg-gradient-to-r from-indigo-500 to-violet-600",
      "Shopify Plus + Hydrogen":
        "bg-gradient-to-r from-orange-500 to-amber-600",
      "Headless Shopify + Remix": "bg-gradient-to-r from-teal-500 to-cyan-600",
      "Shopify Hydrogen + Subscriptions":
        "bg-gradient-to-r from-pink-500 to-rose-600",
      "Shopify Multi-Store + GraphQL":
        "bg-gradient-to-r from-indigo-500 to-indigo-600",
    };
    return (
      colors[type as keyof typeof colors] ||
      "bg-gradient-to-r from-gray-500 to-gray-600"
    );
  };

  // Calculate dynamic styles only on client side
  const getCardStyles = (index: number) => {
    if (!isClient) {
      // Return static styles for server-side rendering
      return {
        transform: "scale(1)",
        opacity: 1,
      };
    }

    // Client-side dynamic calculations
    const containerCenter = containerWidth / 2;
    const cardCenter = index * cardWidth - translateX + 190; // 190 is half card width
    const distanceFromCenter = Math.abs(containerCenter - cardCenter);
    const maxDistance = 400;
    const scale = Math.max(0.85, 1 - (distanceFromCenter / maxDistance) * 0.15);
    const opacity = Math.max(0.7, 1 - (distanceFromCenter / maxDistance) * 0.3);

    return {
      transform: `scale(${scale}) ${
        hoveredCard === portfolioItems[index % portfolioItems.length]?.id
          ? "translateY(-8px) rotate(1deg)"
          : ""
      }`,
      opacity,
    };
  };

  // Show loading state during hydration
  if (!isClient) {
    return (
      <div className="relative py-8 overflow-hidden">
        <div className="flex gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="w-[360px] h-[520px] bg-gray-200 animate-pulse rounded-2xl flex-shrink-0"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative py-8 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Flowing Cards Container */}
      <div
        className="flex gap-6 transition-all duration-300 ease-linear"
        style={{
          transform: `translateX(-${translateX}px)`,
          width: `${extendedItems.length * cardWidth}px`,
        }}
      >
        {extendedItems.map((item, index) => {
          const cardStyles = getCardStyles(index);
          const originalItem = portfolioItems[index % portfolioItems.length];

          return (
            <Link
              key={`${item.id}-${Math.floor(index / portfolioItems.length)}`}
              href={`/case-studies/${item.slug}`}
              className="block flex-shrink-0"
            >
              <Card
                className={`
                  bg-white rounded-2xl border-0 shadow-xl overflow-hidden 
                  transition-all duration-500 ease-out cursor-pointer
                  hover:shadow-2xl hover:-translate-y-3 hover:rotate-1
                  w-[360px] h-[520px]
                  ${
                    hoveredCard === originalItem?.id
                      ? "shadow-2xl -translate-y-2 rotate-1"
                      : ""
                  }
                `}
                style={cardStyles}
                onMouseEnter={() => setHoveredCard(originalItem?.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image Section with Flowing Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />

                  {/* Flowing Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Animated Water-like Shimmer */}
                  <div className="absolute inset-0 opacity-30">
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      style={{
                        animation: "shimmer 3s ease-in-out infinite",
                        transform: `translateX(${
                          -100 + ((translateX * 0.5) % 200)
                        }%)`,
                      }}
                    />
                  </div>

                  {/* Type Badge with Flow Effect */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`${getTypeColor(
                        item.type
                      )} text-white rounded-full px-4 py-2 font-semibold shadow-lg border-0 backdrop-blur-sm`}
                    >
                      {item.type}
                    </Badge>
                  </div>

                  {/* Action Button with Ripple */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300 hover:bg-white hover:scale-110 group">
                    <ArrowRight className="w-5 h-5 text-gray-700 transition-transform group-hover:translate-x-1" />
                  </div>

                  {/* Floating Rating */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 text-yellow-400 fill-current animate-pulse" />
                    <span className="text-sm font-semibold text-gray-700">
                      {item.rating}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  {/* Title and Client */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 transition-colors hover:text-brand-blue">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <Clock10 className="w-4 h-4 mr-1 text-brand-blue" />
                      <span className="text-sm font-medium">{item.time}</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100">
                    <div className="text-center group">
                      <div className="flex items-center justify-center mb-2">
                        <div className="p-2 rounded-full bg-green-50 group-hover:bg-green-100 transition-all duration-300 group-hover:scale-110">
                          <TrendingUp className="w-5 h-5 text-green-600" />
                        </div>
                      </div>
                      <div className="text-lg font-bold text-gray-900 transition-all group-hover:text-green-600">
                        {Object.values(item.stats)[0]}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        Growth
                      </div>
                    </div>
                    <div className="text-center group">
                      <div className="flex items-center justify-center mb-2">
                        <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-all duration-300 group-hover:scale-110">
                          <Users className="w-5 h-5 text-blue-600" />
                        </div>
                      </div>
                      <div className="text-lg font-bold text-gray-900 transition-all group-hover:text-blue-600">
                        {Object.values(item.stats)[1]}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        Performance
                      </div>
                    </div>
                    <div className="text-center group">
                      <div className="flex items-center justify-center mb-2">
                        <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-all duration-300 group-hover:scale-110">
                          <DollarSign className="w-5 h-5 text-brand-blue" />
                        </div>
                      </div>
                      <div className="text-lg font-bold text-gray-900 transition-all group-hover:text-brand-blue">
                        {Object.values(item.stats)[2]}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        Conversion
                      </div>
                    </div>
                  </div>

                  {/* Floating Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs rounded-full border-gray-200 text-gray-600 hover:border-blue-300 hover:bg-blue-50 hover:text-brand-blue transition-all duration-300 px-3 py-1 hover:scale-105"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Flowing Progress Indicator */}
      <div className="mt-8 mx-auto w-96 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            background:
              "linear-gradient(90deg, #8B5CF6, #EC4899, #06B6D4, #8B5CF6)",
            backgroundSize: "300% 100%",
            animation: "flow 4s ease-in-out infinite",
            width: "40%",
            transform: `translateX(${(translateX / totalWidth) * 250}%)`,
          }}
        />
      </div>

      {/* Subtle Water Ripple Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20"
          style={{
            backgroundSize: "200% 100%",
            animation: "ripple 6s ease-in-out infinite",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          50% {
            transform: translateX(100%) skewX(-12deg);
          }
          100% {
            transform: translateX(-100%) skewX(-12deg);
          }
        }

        @keyframes flow {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes ripple {
          0%,
          100% {
            background-position: 0% 50%;
            opacity: 0.05;
          }
          50% {
            background-position: 100% 50%;
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  );
}
