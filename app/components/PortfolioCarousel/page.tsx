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
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    id: 1,
    slug: "luxury-ecommerce-platform",
    title: "Luxury Fashion E-commerce Platform",
    location: "New York, NY",
    type: "Headless Shopify Store",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=center",
    stats: {
      revenue: "+150%",
      performance: "98%",
      conversion: "4.2%",
    },
    description:
      "Headless Shopify store for luxury fashion brand with custom React frontend, resulting in superior performance and user experience.",
    tags: ["Headless Shopify", "React", "E-commerce"],
    rating: 4.9,
  },
  {
    id: 2,
    slug: "fintech-web-application",
    title: "FinTech Dashboard Application",
    location: "San Francisco, CA",
    type: "Custom Web App",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    stats: {
      users: "50K+",
      uptime: "99.9%",
      speed: "1.2s",
    },
    description:
      "Custom web application for financial data visualization with real-time analytics and secure user authentication.",
    tags: ["FinTech", "Dashboard", "Real-time"],
    rating: 4.8,
  },
  {
    id: 3,
    slug: "healthcare-mobile-app",
    title: "Healthcare Management App",
    location: "Boston, MA",
    type: "Mobile Application",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
    stats: {
      downloads: "100K+",
      rating: "4.8/5",
      retention: "85%",
    },
    description:
      "React Native mobile application for healthcare management with patient portal and appointment scheduling.",
    tags: ["Healthcare", "React Native", "Mobile"],
    rating: 4.9,
  },
  {
    id: 4,
    slug: "food-delivery-platform",
    title: "Multi-Vendor Food Delivery Platform",
    location: "Austin, TX",
    type: "Full-Stack Platform",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop&crop=center",
    stats: {
      vendors: "500+",
      orders: "10K/day",
      coverage: "3 cities",
    },
    description:
      "Complete food delivery ecosystem with vendor management, real-time tracking, and payment integration.",
    tags: ["Food Delivery", "Multi-Vendor", "Real-time"],
    rating: 4.7,
  },
  {
    id: 5,
    slug: "beauty-brand-shopify",
    title: "Beauty Brand Shopify Store",
    location: "Los Angeles, CA",
    type: "Shopify Plus Store",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop&crop=center",
    stats: {
      revenue: "+200%",
      conversion: "5.1%",
      products: "500+",
    },
    description:
      "Custom Shopify Plus store for beauty brand with advanced product configurator and subscription features.",
    tags: ["Shopify Plus", "Beauty", "Subscriptions"],
    rating: 4.8,
  },
  {
    id: 6,
    slug: "saas-analytics-dashboard",
    title: "SaaS Analytics Dashboard",
    location: "Seattle, WA",
    type: "SaaS Platform",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    stats: {
      clients: "1000+",
      data_points: "1M+",
      accuracy: "99.5%",
    },
    description:
      "Enterprise-grade SaaS analytics platform with machine learning insights and customizable reporting.",
    tags: ["SaaS", "Analytics", "Machine Learning"],
    rating: 4.9,
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
      "Residential Complex": "bg-gradient-to-r from-blue-500 to-blue-600",
      "Commercial Property": "bg-gradient-to-r from-green-500 to-green-600",
      "Student Housing": "bg-gradient-to-r from-purple-500 to-purple-600",
      "Mixed-Use": "bg-gradient-to-r from-orange-500 to-orange-600",
      "Single Family": "bg-gradient-to-r from-teal-500 to-teal-600",
      "Luxury Condos": "bg-gradient-to-r from-pink-500 to-pink-600",
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
                  {/* Title and Location */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 transition-colors hover:text-purple-600">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-1 text-purple-500" />
                      <span className="text-sm font-medium">
                        {item.location}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Flowing Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100">
                    <div className="text-center group">
                      <div className="flex items-center justify-center mb-2">
                        <div className="p-2 rounded-full bg-green-50 group-hover:bg-green-100 transition-all duration-300 group-hover:scale-110">
                          <TrendingUp className="w-5 h-5 text-green-600" />
                        </div>
                      </div>
                      <div className="text-lg font-bold text-gray-900 transition-all group-hover:text-green-600">
                        {item.stats.revenue}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        Revenue
                      </div>
                    </div>
                    <div className="text-center group">
                      <div className="flex items-center justify-center mb-2">
                        <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-all duration-300 group-hover:scale-110">
                          <Users className="w-5 h-5 text-blue-600" />
                        </div>
                      </div>

                      <div className="text-xs text-gray-500 font-medium">
                        Occupancy
                      </div>
                    </div>
                    <div className="text-center group">
                      <div className="flex items-center justify-center mb-2">
                        <div className="p-2 rounded-full bg-purple-50 group-hover:bg-purple-100 transition-all duration-300 group-hover:scale-110">
                          <DollarSign className="w-5 h-5 text-purple-600" />
                        </div>
                      </div>

                      <div className="text-xs text-gray-500 font-medium">
                        Units
                      </div>
                    </div>
                  </div>

                  {/* Floating Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs rounded-full border-gray-200 text-gray-600 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700 transition-all duration-300 px-3 py-1 hover:scale-105"
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
