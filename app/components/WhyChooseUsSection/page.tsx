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
      className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20"
    >
      {/* Optimized Background Elements */}
      <div
        className="absolute inset-0 opacity-30 sm:opacity-40"
        aria-hidden="true"
      >
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-blue-50/80 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-blue-100 mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm font-semibold text-gray-700">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 leading-tight">
            We Transform
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Specializing in cutting-edge websites, mobile apps, and headless
            Shopify storefronts. Every project is crafted with precision,
            optimized for performance, and designed to convert.
          </p>
        </div>

        {/* Responsive Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/50 shadow-lg text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 group"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-brand-blue bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm sm:text-base lg:text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Responsive Service Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-blue rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h4 className="font-bold text-lg sm:text-xl text-gray-900 mb-2 sm:mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed px-2 sm:px-0">
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
