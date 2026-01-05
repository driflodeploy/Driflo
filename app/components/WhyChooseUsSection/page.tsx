import { ArrowRight, Clock, MessageSquare, Heart, Shield } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUsSection() {
  const values = [
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      description:
        "No disappearing acts. You'll get weekly updates, quick responses, and honest timelines—even when the news isn't great.",
    },
    {
      icon: Clock,
      title: "Respect for Your Time",
      description:
        "We keep meetings short and async-friendly. Based in India, we often deliver progress while you sleep.",
    },
    {
      icon: Heart,
      title: "We Actually Care",
      description:
        "Your success is our success. We're not just shipping code—we want your store to thrive after launch.",
    },
    {
      icon: Shield,
      title: "No Surprises",
      description:
        "Fixed project pricing, clear scope, and a 30-day support period included. You'll know what you're paying for.",
    },
  ];

  return (
    <section
      id="why-us"
      className="w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Why Us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Small team.
            <br />
            <span className="text-gray-400">Big commitment.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We're not a large agency with layers of account managers. When you
            work with us, you work directly with the people building your
            project. That means faster decisions, clearer communication, and
            work we're personally proud of.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:border-gray-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Positioning */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Honest Take */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                We're not right for everyone
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you need a quick template setup or the cheapest option,
                that's not us. But if you want a custom-built store that
                performs exceptionally and a team that treats your project like
                their own—let's talk.
              </p>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-gray-900">
                  Good fit:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Established brands",
                    "Quality over speed",
                    "Long-term thinking",
                    "Clear communication",
                  ].map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-lg border border-emerald-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - CTA */}
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 text-center lg:text-left">
              <p className="text-gray-500 text-sm mb-2">Ready to start?</p>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Let's see if we're a match.
              </p>
              <p className="text-gray-600 mb-6">
                Book a free 30-minute call. No pitch deck, no pressure—just a
                conversation about what you're building.
              </p>
              <Link
                href="https://calendly.com/todriflo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-gray-800 hover:shadow-xl"
              >
                Book a Call
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}