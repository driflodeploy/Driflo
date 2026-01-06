import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-28 bg-white relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, gray 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left - Text Content (7 columns) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full mb-8">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-emerald-700">
                Available for Q1 2026
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
              We build Shopify
              <br className="hidden sm:block" />
              {" "}stores that don't{" "}
              <br className="hidden sm:block" />
              <span className="relative inline-block">
                <span className="relative z-10 text-gray-900">
                  look like Shopify.
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-yellow-300"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,8 Q50,0 100,8 T200,8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
              Headless storefronts built with Hydrogen. Faster than themes,
              completely custom, designed to make your brand stand out.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-12">
              <Link
                href="https://calendly.com/todriflo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white font-semibold rounded-full transition-all duration-300 hover:bg-gray-800 hover:shadow-2xl hover:shadow-gray-900/25 hover:-translate-y-0.5"
              >
                Book a Free Call
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/work"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-gray-700 font-semibold rounded-full transition-all duration-300 hover:text-gray-900 hover:bg-gray-100"
              >
                <Play className="w-4 h-4 fill-current" />
                See Our Work
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6">
              <div className="flex items-center gap-4">
                {/* Stats */}
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-bold text-gray-900">$5k+</span>
                  <span className="text-gray-500">starting</span>
                </div>
                <div className="w-px h-4 bg-gray-200" />
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-bold text-gray-900">6-10</span>
                  <span className="text-gray-500">weeks</span>
                </div>
                <div className="w-px h-4 bg-gray-200" />
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-bold text-gray-900">100%</span>
                  <span className="text-gray-500">custom</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Visual Element (5 columns) */}
          <div className="lg:col-span-5 relative">
            {/* Main Card Stack */}
            <div className="relative">
              {/* Background Card (decorative) */}
              <div className="absolute top-4 left-4 right-0 bottom-0 bg-gray-200 rounded-3xl -z-10" />

              {/* Main Card */}
              <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl shadow-gray-200/50 overflow-hidden">
                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-100 rounded-full px-4 py-1.5 text-xs text-gray-400 text-center">
                      yourstore.com
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Services List */}
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                      What We Build
                    </p>

                    {[
                      {
                        title: "Headless Shopify",
                        desc: "Hydrogen + Shopify API",
                        highlight: true,
                      },
                      {
                        title: "Custom Websites",
                        desc: "Marketing & landing pages",
                        highlight: false,
                      },
                      {
                        title: "Theme Migrations",
                        desc: "Move to headless",
                        highlight: false,
                      },
                    ].map((service, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                          service.highlight
                            ? "bg-gray-900 text-white"
                            : "bg-gray-50 hover:bg-gray-100"
                        }`}
                      >
                        <div>
                          <p
                            className={`font-semibold ${
                              service.highlight ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {service.title}
                          </p>
                          <p
                            className={`text-sm ${
                              service.highlight
                                ? "text-gray-400"
                                : "text-gray-500"
                            }`}
                          >
                            {service.desc}
                          </p>
                        </div>
                        {service.highlight && (
                          <span className="px-2.5 py-1 bg-white/10 text-xs font-medium rounded-full">
                            Core
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Performance Preview */}
                  <div className="mt-6 p-4 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-100">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-emerald-900">
                        Performance Score
                      </span>
                      <span className="text-xs text-emerald-600 font-medium">
                        Lighthouse
                      </span>
                    </div>
                    <div className="flex items-end gap-4">
                      <div className="text-4xl font-bold text-emerald-600">
                        98
                      </div>
                      <div className="flex-1 mb-2">
                        <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500 rounded-full"
                            style={{ width: "98%" }}
                          />
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-emerald-700 mt-2">
                      vs. ~45 average for Shopify themes
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-4 bg-gray-900 text-white rounded-2xl px-5 py-3 shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <span className="text-lg">⚡</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Load time</p>
                  <p className="font-bold">&lt;1 second</p>
                </div>
              </div>

              {/* Small Floating Card - Right */}
              <div className="absolute -top-3 -right-3 bg-white rounded-xl px-4 py-2 shadow-lg border border-gray-100 hidden lg:block">
                <p className="text-xs text-gray-500">Global CDN</p>
                <p className="text-sm font-semibold text-gray-900">
                  Edge deployed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Location */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>Based in India · Working with clients globally</p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Currently accepting 2 new projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}