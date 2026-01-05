import React from "react";
import { ArrowRight, MessageSquare, Palette, Code, Rocket } from "lucide-react";

const HowWeWork = () => {
  const processSteps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Discovery",
      description:
        "We start with a conversation. Understanding your goals, audience, and vision helps us craft the right solution.",
      duration: "1-2 days",
    },
    {
      number: "02",
      icon: Palette,
      title: "Design",
      description:
        "We create wireframes and visual designs you'll approve before any code is written. No surprises.",
      duration: "1-2 weeks",
    },
    {
      number: "03",
      icon: Code,
      title: "Development",
      description:
        "We build with modern tech—Next.js, React, Shopify APIs. You'll see progress weekly with working demos.",
      duration: "3-6 weeks",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch & Support",
      description:
        "We handle deployment, testing, and handoff. Then we stick around for 30 days to squash any bugs.",
      duration: "Ongoing",
    },
  ];

  return (
    <section className="bg-gray-950 py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            A clear process.
            <br />
            <span className="text-gray-500">No mystery, no drama.</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            We've refined our process to be straightforward and transparent.
            You'll always know what's happening, what's next, and when to expect
            it.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 mb-16">
          {processSteps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Connector Line - hidden on mobile, shown on lg */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-gray-700 to-transparent z-0" />
              )}

              <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 h-full transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/80">
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold text-gray-600 tracking-wider">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center transition-colors group-hover:bg-white group-hover:text-gray-900">
                    <step.icon className="w-5 h-5 text-gray-400 group-hover:text-gray-900" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Duration Tag */}
                <div className="inline-flex items-center px-3 py-1 bg-gray-800 rounded-full">
                  <span className="text-xs font-medium text-gray-300">
                    {step.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section - Tech & CTA */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tech Stack Card */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
              Built With Modern Tech
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Shopify",
                "Node.js",
                "PostgreSQL",
                "Vercel",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-800 text-gray-300 text-sm font-medium rounded-lg border border-gray-700 transition-colors hover:border-gray-600 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-gray-500 text-sm mt-6">
              We choose tools based on your project needs—not trends. The result
              is always fast, maintainable, and scalable.
            </p>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Have a project in mind?
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Let's talk about what you're building. We'll give you honest
                feedback on timeline, budget, and whether we're the right fit.
              </p>
            </div>

            <a
              href="https://calendly.com/todriflo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-gray-900 font-semibold rounded-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:shadow-white/10 w-full sm:w-auto"
            >
              Book a Free Consultation
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;