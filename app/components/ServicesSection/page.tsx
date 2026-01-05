import { ArrowRight, Zap, ShoppingBag, Globe, Check } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            We build headless
            <br />
            <span className="text-gray-400">Shopify stores.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            One thing, done exceptionally well. We take your Shopify store and
            give it a custom frontend that's faster, more flexible, and designed
            to convert.
          </p>
        </div>

        {/* Primary Service - Headless Shopify */}
        <div className="bg-gray-950 rounded-3xl p-8 sm:p-10 lg:p-12 mb-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-400">
                  Primary Service
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Headless Shopify
                <br />
                Storefronts
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Keep Shopify's powerful backend with products, inventory, checkout,
                payments while we build you a custom Hydrogen.js frontend that loads
                in milliseconds and looks nothing like a template.
              </p>

              {/* Benefits */}
              <div className="space-y-4 mb-8">
                {[
                  "3-5x faster page loads than traditional Shopify themes",
                  "Complete design freedom—no theme limitations",
                  "Better SEO with server-side rendering",
                  "Seamless checkout through Shopify's infrastructure",
                  "Easy product & content management you already know",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link
                href="https://calendly.com/todriflo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-gray-900 font-semibold rounded-xl transition-all duration-300 hover:bg-gray-100"
              >
                Discuss Your Store
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 h-full">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-gray-700" />
                    <div className="w-3 h-3 rounded-full bg-gray-700" />
                    <div className="w-3 h-3 rounded-full bg-gray-700" />
                  </div>
                  <div className="flex-1 bg-gray-800 rounded-lg px-4 py-2 ml-4">
                    <span className="text-xs text-gray-500">
                      yourstore.com
                    </span>
                  </div>
                </div>

                {/* Tech Stack Visual */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#96bf48] rounded-lg flex items-center justify-center">
                        <ShoppingBag className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">
                          Shopify
                        </p>
                        <p className="text-gray-500 text-xs">
                          Backend & Commerce
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                      API
                    </span>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-gradient-to-b from-gray-700 to-gray-800" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-black border border-gray-700 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">H</span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">
                          Hydrogen
                        </p>
                        <p className="text-gray-500 text-xs">
                          Custom Frontend
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                      Fast
                    </span>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-gradient-to-b from-gray-700 to-gray-800" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-black border border-gray-700 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">O</span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">Oxygen</p>
                        <p className="text-gray-500 text-xs">Global Hosting</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                      Edge
                    </span>
                  </div>
                </div>

                {/* Performance Indicator */}
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Lighthouse Score</span>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-white">
                          95+
                        </span>
                      </div>
                      <span className="text-emerald-400 font-medium">
                        Performance
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Service - Custom Websites */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    Custom Websites
                  </h3>
                  <span className="text-xs font-medium text-gray-400 bg-gray-200 px-2 py-1 rounded">
                    Also available
                  </span>
                </div>
                <p className="text-gray-600 max-w-xl leading-relaxed">
                  Need a marketing site, landing page, or company website
                  without e-commerce? We build those too, same modern tech, same
                  attention to detail, just without the Shopify integration.
                </p>
              </div>
            </div>

            <Link
              href="https://calendly.com/todriflo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl border border-gray-200 transition-all duration-300 hover:border-gray-900 hover:shadow-lg whitespace-nowrap"
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Who This Is For */}
        <div className="mt-16 text-center">
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
            This is for you if
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Your current Shopify theme feels slow",
              "You've outgrown template limitations",
              "Design matters to your brand",
              "You want to stand out from competitors",
              "You're ready to invest in quality",
            ].map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full border border-gray-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}