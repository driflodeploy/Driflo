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
    slug: "bohme",
    title: "Boheme",
    time: "3 weeks",
    type: "Shopify Hydrogen",
    image: "/work/a-1.png",
    stats: {
      revenue: "+180%",
      performance: "100/100",
      conversion: "6.8%",
    },
    description:
      "High-performance Shopify Hydrogen storefront for sustainable fashion brand with custom components and optimized checkout flow.",
    tags: ["Shopify Hydrogen", "React", "Sustainable Fashion"],
    rating: 4.9,
  },
  {
    id: 2,
    slug: "deadstock",
    title: "Deadstock",
    time: "2 weeks",
    type: "Headless Shopify",
    image: "/work/b-1.png",
    stats: {
      revenue: "+155%",
      performance: "100/100",
      conversion: "7.2%",
    },
    description:
      "Headless Shopify store built with React for deadstock clothing brand, featuring advanced product filtering.",
    tags: ["Headless Shopify", "React"],
    rating: 4.8,
  },
  {
    id: 3,
    slug: "thenimetyou",
    title: "Then I Met You",
    time: "4 weeks",
    type: "Shopify Hydrogen",
    image: "/work/c-1.png",
    stats: {
      engagement: "+120%",
      bounce_rate: "-45%",
      cart_value: "+$185",
    },
    description:
      "Immersive Shopify Hydrogen storefront for thenimetyou with custom configurator, and storytelling features.",
    tags: ["Shopify Hydrogen", "lab Reports", "Custom Design"],
    rating: 4.9,
  },
  {
    id: 4,
    slug: "velasca",
    title: "Velasca",
    time: "4 weeks",
    type: "Shopify Hydrogen",
    image: "/work/d-1.png",
    stats: {
      engagement: "+220%",
      conversion: "8.4%",
      cart_value: "+$310",
    },
    description:
      "Progressive Web App built on Shopify with men/women different websites, and personalized outfit recommendations.",
    tags: ["Shopify", "Custom Design", "Personalization"],
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
    const speed = isHovered ? 0.02 : 0.06; // Slower when hovered, like water flow

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
      "Shopify Hydrogen": "bg-black",
      "Headless Shopify + Next.js": "bg-black",
      "Shopify PWA": "bg-black",
      "Shopify Plus + Hydrogen": "bg-black",
      "Headless Shopify + Remix": "bg-black",
      "Shopify Hydrogen + Subscriptions": "bg-black",
      "Shopify Multi-Store + GraphQL": "bg-black",
    };
    return colors[type as keyof typeof colors] || "bg-black";
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
                  w-[360px] h-full
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 transition-colors hover:text-black">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <Clock10 className="w-4 h-4 mr-1 text-black" />
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
                          <DollarSign className="w-5 h-5 text-black" />
                        </div>
                      </div>
                      <div className="text-lg font-bold text-gray-900 transition-all group-hover:text-black">
                        {Object.values(item.stats)[2]}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        Conversion
                      </div>
                    </div>
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
            background: "black",
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
