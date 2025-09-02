import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Zap,
  Users,
  Palette,
  RefreshCw,
  Code,
  Smartphone,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WhyChooseUsSection() {
  const stats = [
    {
      number: "10+",
      label: "Projects Delivered",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
    },
    {
      number: "24/7",
      label: "Support Available",
    },
  ];

  const services = [
    {
      icon: Code,
      title: "Custom Development",
      description:
        "Tailored solutions built with modern technologies like Next.js, React, and Node.js",
    },
    {
      icon: ShoppingCart,
      title: "Shopify Expertise",
      description:
        "Headless commerce solutions that deliver exceptional user experiences and conversions",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Responsive designs that look stunning and perform flawlessly across all devices",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative overflow-hidden bg-gray-50"
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-blue-50 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-blue-100 mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm font-semibold text-gray-800">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
            We Transform
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Specializing in cutting-edge websites, mobile apps, and headless
            Shopify storefronts. Every project is crafted with precision,
            optimized for performance, and designed to convert.
          </p>
        </div>

        {/* Responsive Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-md text-center hover:shadow-lg hover:scale-102 transition-all duration-300 group"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm sm:text-base lg:text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Responsive Service Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-all duration-300">
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
