"use client";

import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Lightbulb,
  Palette,
  Code,
  TestTube,
  Rocket,
  CheckCircle,
  ArrowRight,
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

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const sectionHeight = rect.height - windowHeight;
        const scrolled = Math.max(0, -rect.top);
        const progress = Math.min(scrolled / sectionHeight, 1);
        setScrollProgress(progress);

        const horizontalContainer = container.querySelector(
          ".horizontal-container"
        ) as HTMLElement;
        if (horizontalContainer) {
          const maxScroll =
            horizontalContainer.scrollWidth - horizontalContainer.clientWidth;
          horizontalContainer.scrollLeft = progress * maxScroll;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative bg-gradient-to-b from-slate-50 to-white"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Header - Fixed height */}
          <div className="flex-shrink-0 text-center pt-8 pb-4">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-blue-50 px-6 py-3 rounded-full border border-blue-100 mb-4">
              <span className="text-sm font-semibold text-gray-700">
                Our Process
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              From Idea to Launch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven 6-step process ensures your project success
            </p>
          </div>

          {/* Progress Bar - Fixed height */}
          <div className="flex-shrink-0 mx-auto max-w-6xl px-8 mb-4">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-indigo-800 to-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${scrollProgress * 100}%` }}
              ></div>
            </div>
            <div className="text-center mt-2">
              <span className="text-sm font-medium text-gray-600">
                Progress: {Math.round(scrollProgress * 100)}%
              </span>
            </div>
          </div>

          {/* Cards Container - Takes remaining space */}
          <div className="flex-1 min-h-0 px-8">
            <div className="horizontal-container overflow-x-hidden h-full">
              <div
                className="flex space-x-8 h-full items-center"
                style={{ width: `${processSteps.length * 50}px` }}
              >
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive =
                    scrollProgress >= index / (processSteps.length - 1);
                  const isCompleted =
                    scrollProgress > (index + 1) / (processSteps.length - 1);

                  return (
                    <Card
                      key={step.id}
                      className={`
                        relative w-80 h-96 bg-white border border-gray-200 rounded-3xl p-6 shadow-lg
                        transition-all duration-500 will-change-transform flex-shrink-0
                        ${
                          isActive
                            ? "scale-105 shadow-xl"
                            : "scale-95 opacity-60"
                        }
                        
                      `}
                    >
                      <CardContent className="p-0 h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`
                              w-12 h-12 rounded-xl flex items-center justify-center shadow-md
                              bg-gradient-to-br ${step.color}
                              ${isActive ? "scale-110" : "scale-100"}
                              transition-transform duration-500
                            `}
                            >
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-gray-500">
                                Step {step.id}
                              </div>
                              <Badge className="bg-gray-100 text-gray-700 text-xs px-2 py-1">
                                {step.duration}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col">
                          <h3 className="text-lg font-bold text-gray-900 mb-1">
                            {step.title}
                          </h3>
                          <p className="text-sm font-medium text-gray-600 mb-3">
                            {step.subtitle}
                          </p>
                          <p className="text-xs text-gray-600 leading-relaxed mb-4">
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
                                  <div
                                    className={`w-1 h-1 rounded-full bg-gradient-to-r ${step.color}`}
                                  ></div>
                                  <span className="text-xs font-medium text-gray-700">
                                    {deliverable}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-4 pt-3 border-t border-gray-100">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-500">
                              {step.id} of {processSteps.length}
                            </span>
                            <div className="flex space-x-1">
                              {processSteps.map((_, stepIndex) => (
                                <div
                                  key={stepIndex}
                                  className={`
                                    w-1 h-1 rounded-full transition-colors duration-300
                                    ${
                                      stepIndex <= index
                                        ? `bg-gradient-to-r ${step.color}`
                                        : "bg-gray-200"
                                    }
                                  `}
                                ></div>
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
