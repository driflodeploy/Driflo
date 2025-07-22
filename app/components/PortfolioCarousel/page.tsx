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
    slug: "luxury-downtown-apartments",
    title: "Luxury Downtown Apartments",
    location: "Manhattan, NY",
    type: "Residential Complex",
    image: "/placeholder.svg?height=400&width=600&text=Luxury+Apartments",
    stats: {
      revenue: "+45%",
      occupancy: "98%",
      units: "120",
    },
    description:
      "Complete renovation and management of a 120-unit luxury apartment complex in downtown Manhattan.",
    tags: ["Luxury", "Residential", "Urban"],
    rating: 4.8,
  },
  {
    id: 2,
    slug: "commercial-office-plaza",
    title: "Commercial Office Plaza",
    location: "Austin, TX",
    type: "Commercial Property",
    image: "/placeholder.svg?height=400&width=600&text=Office+Plaza",
    stats: {
      revenue: "+32%",
      occupancy: "95%",
      units: "50",
    },
    description:
      "Strategic repositioning of a commercial office plaza resulting in increased tenant satisfaction and revenue.",
    tags: ["Commercial", "Office", "Strategic"],
    rating: 4.6,
  },
  {
    id: 3,
    slug: "student-housing-complex",
    title: "Student Housing Complex",
    location: "Boston, MA",
    type: "Student Housing",
    image: "/placeholder.svg?height=400&width=600&text=Student+Housing",
    stats: {
      revenue: "+28%",
      occupancy: "100%",
      units: "200",
    },
    description:
      "Modern student housing facility with state-of-the-art amenities and technology integration.",
    tags: ["Student", "Modern", "Technology"],
    rating: 4.9,
  },
  {
    id: 4,
    slug: "mixed-use-development",
    title: "Mixed-Use Development",
    location: "Seattle, WA",
    type: "Mixed-Use",
    image: "/placeholder.svg?height=400&width=600&text=Mixed+Use",
    stats: {
      revenue: "+52%",
      occupancy: "92%",
      units: "85",
    },
    description:
      "Innovative mixed-use development combining retail, office, and residential spaces.",
    tags: ["Mixed-Use", "Innovation", "Multi-Purpose"],
    rating: 4.7,
  },
  {
    id: 5,
    slug: "suburban-family-homes",
    title: "Suburban Family Homes",
    location: "Phoenix, AZ",
    type: "Single Family",
    image: "/placeholder.svg?height=400&width=600&text=Family+Homes",
    stats: {
      revenue: "+38%",
      occupancy: "96%",
      units: "75",
    },
    description:
      "Portfolio of single-family homes optimized for modern families with smart home technology.",
    tags: ["Family", "Suburban", "Smart Home"],
    rating: 4.5,
  },
  {
    id: 6,
    slug: "waterfront-condominiums",
    title: "Waterfront Condominiums",
    location: "Miami, FL",
    type: "Luxury Condos",
    image: "/placeholder.svg?height=400&width=600&text=Waterfront+Condos",
    stats: {
      revenue: "+65%",
      occupancy: "94%",
      units: "40",
    },
    description:
      "Premium waterfront condominiums with panoramic ocean views and luxury amenities.",
    tags: ["Luxury", "Waterfront", "Premium"],
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
                      <div className="text-lg font-bold text-gray-900 transition-all group-hover:text-blue-600">
                        {item.stats.occupancy}
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
                      <div className="text-lg font-bold text-gray-900 transition-all group-hover:text-purple-600">
                        {item.stats.units}
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
