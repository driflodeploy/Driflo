"use client";

import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Lightbulb,
  Palette,
  Code,
  TestTube,
  Rocket,
} from "lucide-react";

const processSteps = [
  {
    id: 1,
    icon: MessageCircle,
    title: "Discovery & Consultation",
    subtitle: "Understanding Your Vision",
    description:
      "We start with in-depth discussions to understand your business goals, target audience, and project requirements.",
    duration: "1-2 weeks",
    deliverables: ["Project Brief", "User Research", "Competitive Analysis"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Strategy & Planning",
    subtitle: "Crafting the Blueprint",
    description:
      "We develop a comprehensive strategy and project roadmap including architecture planning and technology selection.",
    duration: "1-2 weeks",
    deliverables: ["Project Roadmap", "Technical Architecture", "Wireframes"],
    color: "from-indigo-500 to-pink-600",
  },
  {
    id: 3,
    icon: Palette,
    title: "Design & Prototyping",
    subtitle: "Bringing Ideas to Life",
    description:
      "Our design team creates stunning visual concepts and interactive prototypes focused on user experience.",
    duration: "2-3 weeks",
    deliverables: ["UI/UX Design", "Interactive Prototypes", "Design System"],
    color: "from-pink-500 to-rose-600",
  },
  {
    id: 4,
    icon: Code,
    title: "Development & Integration",
    subtitle: "Building Your Solution",
    description:
      "Using cutting-edge technologies, we develop your project with clean, scalable code and high performance.",
    duration: "4-8 weeks",
    deliverables: [
      "Frontend Development",
      "Backend Systems",
      "API Integration",
    ],
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 5,
    icon: TestTube,
    title: "Testing & Optimization",
    subtitle: "Ensuring Excellence",
    description:
      "Comprehensive testing across all devices and browsers with performance optimization and bug fixes.",
    duration: "1-2 weeks",
    deliverables: [
      "Quality Assurance",
      "Performance Testing",
      "Security Audit",
    ],
    color: "from-orange-500 to-amber-600",
  },
  {
    id: 6,
    icon: Rocket,
    title: "Launch & Deployment",
    subtitle: "Going Live",
    description:
      "We handle the complete deployment process and ensure a smooth launch with post-launch support.",
    duration: "1 week",
    deliverables: ["Production Deployment", "SSL Setup", "Analytics"],
    color: "from-green-500 to-emerald-600",
  },
];

// Throttle function for performance optimization
const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return function (this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Easing function for smooth animations
const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Memoized calculations for responsive design
  const responsiveConfig = useMemo(() => {
    if (typeof window === "undefined")
      return { cardWidth: 320, spacing: 32, padding: 64 };

    const width = windowWidth || window.innerWidth;

    if (width < 640) {
      // Mobile
      return { cardWidth: 280, spacing: 16, padding: 16 };
    } else if (width < 1024) {
      // Tablet
      return { cardWidth: 300, spacing: 24, padding: 32 };
    } else {
      // Desktop
      return { cardWidth: 320, spacing: 32, padding: 64 };
    }
  }, [windowWidth]);

  // Optimized scroll handler with throttling and RAF
  const handleScroll = useCallback(
    throttle(() => {
      const container = containerRef.current;
      if (!container) return;

      const scrollSpeed = 0.5;

      requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if section is visible
        const visible = rect.top <= windowHeight && rect.bottom >= 0;
        setIsVisible(visible);

        if (visible) {
          const sectionHeight = Math.max(rect.height - windowHeight, 1);
          const scrolled = Math.max(0, -rect.top);
          const rawProgress = Math.min(scrolled / sectionHeight, 1);

          // Apply easing for smoother animation
          const easedProgress = easeOutCubic(rawProgress);
          setScrollProgress(easedProgress);

          // Optimized horizontal scroll calculation
          const horizontalContainer = horizontalContainerRef.current;
          if (horizontalContainer) {
            const maxScroll = Math.max(
              horizontalContainer.scrollWidth - horizontalContainer.clientWidth,
              0
            );
            horizontalContainer.scrollLeft = Math.min(
              easedProgress * maxScroll,
              maxScroll
            );
          }
        }
      });
    }, 16),
    []
  );

  // Window resize handler for responsive design
  const handleResize = useCallback(
    throttle(() => {
      setWindowWidth(window.innerWidth);
    }, 250),
    []
  );

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  // Memoized container width calculation
  const containerWidth = useMemo(() => {
    const { cardWidth, spacing } = responsiveConfig;
    return processSteps.length * (cardWidth + spacing) - spacing;
  }, [responsiveConfig]);

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative bg-gradient-to-b from-slate-50 to-white"
      style={{
        height: windowWidth < 640 ? "250vh" : "300vh", // Responsive height
        willChange: isVisible ? "transform" : "auto", // Optimize rendering
      }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Header - Responsive */}
          <div className="flex-shrink-0 text-center pt-4 sm:pt-6 lg:pt-8 pb-2 sm:pb-4 px-4">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-blue-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-blue-100 mb-3 sm:mb-4">
              <span className="text-xs sm:text-sm font-semibold text-gray-700">
                Our Process
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-2 sm:mb-4 leading-tight px-2">
              From Idea To Launch
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Our proven 6-step process ensures your project success
            </p>
          </div>

          {/* Progress Bar - Responsive */}
          <div className="flex-shrink-0 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-2 sm:mb-4">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-indigo-800 to-emerald-500 rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${scrollProgress * 100}%`,
                  transform: `translateZ(0)`, // Force GPU acceleration
                }}
              />
            </div>
            <div className="text-center mt-1 sm:mt-2">
              <span className="text-xs sm:text-sm font-medium text-gray-600">
                Progress: {Math.round(scrollProgress * 100)}%
              </span>
            </div>
          </div>

          {/* Cards Container - Responsive */}
          <div
            className="flex-1 min-h-0"
            style={{ padding: `0 ${responsiveConfig.padding}px` }}
          >
            <div
              ref={horizontalContainerRef}
              className="overflow-x-hidden h-full"
              style={{
                transform: `translateZ(0)`, // Force GPU acceleration
                backfaceVisibility: "hidden", // Prevent flickering
              }}
            >
              <div
                className="flex h-full items-center"
                style={{
                  width: `${containerWidth}px`,
                  gap: `${responsiveConfig.spacing}px`,
                  willChange: isVisible ? "transform" : "auto",
                }}
              >
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  const progress = scrollProgress * (processSteps.length - 1);
                  const isActive =
                    progress >= index - 0.3 && progress <= index + 0.3;
                  const isCompleted = progress > index + 0.3;
                  const isPending = progress < index - 0.3;

                  // Calculate individual card animation progress
                  const cardProgress = Math.max(
                    0,
                    Math.min(1, (progress - index + 0.5) * 2)
                  );
                  const translateY = isPending
                    ? 30
                    : isActive
                    ? 0
                    : isCompleted
                    ? -10
                    : 15;
                  const scale = isPending
                    ? 0.95
                    : isActive
                    ? 1.02
                    : isCompleted
                    ? 0.98
                    : 0.95;
                  const opacity = isPending ? 0.6 : isActive ? 1 : 0.8;

                  return (
                    <Card
                      key={step.id}
                      className="relative bg-white border border-gray-200 rounded-2xl sm:rounded-3xl shadow-lg flex-shrink-0 overflow-hidden"
                      style={{
                        width: `${responsiveConfig.cardWidth}px`,
                        height:
                          windowWidth < 640
                            ? "320px"
                            : windowWidth < 1024
                            ? "360px"
                            : "384px",
                        transform: `translateY(${translateY}px) scale(${scale}) translateZ(0)`,
                        opacity,
                        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                        willChange: isVisible ? "transform, opacity" : "auto",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div
                              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-md bg-brand-blue transition-transform duration-500"
                              style={{
                                transform: `scale(${
                                  isActive ? 1.1 : 1
                                }) translateZ(0)`,
                                backfaceVisibility: "hidden",
                              }}
                            >
                              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-gray-500">
                                Step {step.id}
                              </div>
                              <Badge className="bg-gray-100 text-gray-700 text-xs px-2 py-1 mt-1">
                                {step.duration}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col">
                          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 leading-tight">
                            {step.title}
                          </h3>
                          <p className="text-sm font-medium text-gray-600 mb-2 sm:mb-3">
                            {step.subtitle}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4 flex-1">
                            {step.description}
                          </p>

                          {/* Deliverables */}
                          <div className="mt-auto">
                            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-2">
                              Key Deliverables
                            </h4>
                            <div className="space-y-1">
                              {step.deliverables.map((deliverable, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center space-x-2"
                                >
                                  <div className="w-1 h-1 rounded-full bg-brand-blue flex-shrink-0" />
                                  <span className="text-xs font-medium text-gray-700 leading-tight">
                                    {deliverable}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-3 sm:mt-4 pt-3 border-t border-gray-100">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-500">
                              {step.id} of {processSteps.length}
                            </span>
                            <div className="flex space-x-1">
                              {processSteps.map((_, stepIndex) => (
                                <div
                                  key={stepIndex}
                                  className="w-1 h-1 rounded-full transition-colors duration-500"
                                  style={{
                                    backgroundColor:
                                      stepIndex <= index
                                        ? "#2563eb"
                                        : "#e5e7eb",
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
