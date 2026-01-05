import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 overflow-hidden bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center lg:justify-start mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full">
            <Sparkles className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">
              Now accepting new projects
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
              We build digital
              <br />
              products that
              <br />
              <span className="relative">
                <span className="relative z-10">actually work.</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-200 -z-0 -rotate-1"></span>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              A small studio focused on headless commerce, custom websites, and
              mobile apps. We partner with ambitious brands ready to launch
              something exceptional.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-10">
              <Link
                href="/work"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:shadow-gray-900/20 hover:-translate-y-0.5"
              >
                See Our Work
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="https://calendly.com/todriflo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 transition-all duration-300 hover:border-gray-900 hover:shadow-lg"
              >
                Book a Call
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Simple Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for Q1 2026</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <span>Based in India, working globally</span>
              </div>
            </div>
          </div>

          {/* Right - Visual Element */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-10 border border-gray-200">
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>

              {/* Services List */}
              <div className="space-y-4 mt-4">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                  What We Build
                </h3>

                {[
                  {
                    title: "Headless Commerce",
                    desc: "Shopify + Next.js storefronts",
                  },
                  {
                    title: "Custom Websites",
                    desc: "Designed & developed from scratch",
                  },
                  {
                    title: "Mobile Apps",
                    desc: "iOS & Android experiences",
                  },
                  {
                    title: "Web Applications",
                    desc: "Complex tools & dashboards",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="group flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-gray-200 hover:-translate-y-0.5 cursor-default"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-500">{service.desc}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 transition-all group-hover:text-gray-600 group-hover:translate-x-1" />
                  </div>
                ))}
              </div>

              {/* Bottom Note */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center">
                  Every project gets our full attention.
                  <br />
                  <span className="text-gray-900 font-medium">
                    Quality over quantity, always.
                  </span>
                </p>
              </div>
            </div>

            {/* Floating Accent Card */}
            <div className="absolute -bottom-6 -left-6 bg-gray-900 text-white rounded-2xl px-6 py-4 shadow-2xl hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Starting from</p>
                  <p className="font-semibold">$3,000 USD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}