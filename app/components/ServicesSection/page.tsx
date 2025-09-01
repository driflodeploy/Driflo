import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Globe, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full px-4 lg:px-8 py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative"
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-50 px-6 py-3 rounded-full border border-blue-100 mb-8">
            <span className="text-sm font-semibold text-gray-700">
              Our Expertise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 leading-tight">
            What We Craft
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Premium digital experiences that elevate your brand and drive
            results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Headless Storefronts */}
          <Card className="group relative bg-white border border-gray-200 rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-xl will-change-transform transition-all duration-300 hover:-translate-y-2 cursor-pointer before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[radial-gradient(circle_at_100%_150%,rgba(133,193,255,0.1),transparent_50%)]">
            <CardContent className="p-0">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div>
                    <Badge className="bg-blue-100 text-black border-blue-200 rounded-full text-sm px-4 py-2 font-semibold mb-4">
                      E-Commerce
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      Headless Storefronts
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                      Lightning-fast e-commerce experiences with modern headless
                      architecture and seamless integrations.
                    </p>
                  </div>

                  <div className="space-y-4 pt-4">
                    {[
                      "Shopify Plus Integration",
                      "Custom Design Systems",
                      "Sub-second Load Times",
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 text-gray-700"
                      >
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Custom Websites */}
          <Card className="group relative bg-white border border-gray-200 rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-xl will-change-transform transition-all duration-300 hover:-translate-y-2 cursor-pointer before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[radial-gradient(circle_at_100%_150%,rgba(133,193,255,0.1),transparent_50%)]">
            <CardContent className="p-0">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div>
                    <Badge className="bg-blue-100 text-black border-blue-200 rounded-full text-sm px-4 py-2 font-semibold mb-4">
                      Web Development
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      Custom Websites
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                      Stunning, responsive websites built with Next.js and
                      modern frameworks for optimal performance.
                    </p>
                  </div>

                  <div className="space-y-4 pt-4">
                    {[
                      "SEO Optimized",
                      "Mobile-First Design",
                      "CMS Integration",
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 text-gray-700"
                      >
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mobile Apps */}
          <Card className="group relative bg-white border border-gray-200 rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-xl will-change-transform transition-all duration-300 hover:-translate-y-2 cursor-pointer md:col-span-2 lg:col-span-1 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[radial-gradient(circle_at_100%_150%,rgba(133,193,255,0.1),transparent_50%)]">
            <CardContent className="p-0">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div>
                    <Badge className="bg-blue-100 text-black border-blue-200 rounded-full text-sm px-4 py-2 font-semibold mb-4">
                      Mobile Development
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      Mobile Apps
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                      Native iOS & Android apps with React Native for
                      cross-platform excellence and native performance.
                    </p>
                  </div>

                  <div className="space-y-4 pt-4">
                    {[
                      "Cross-Platform",
                      "Native Performance",
                      "App Store Ready",
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 text-gray-700"
                      >
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
