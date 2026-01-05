"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "What exactly is a headless Shopify store?",
      answer:
        "Think of it this way: Shopify handles everything behind the scenes—products, inventory, checkout, payments—while we build a completely custom frontend that your customers actually see. The result? A store that loads faster, looks exactly how you want, and isn't limited by Shopify themes. You still manage everything through Shopify's admin—we just replace what customers interact with.",
    },
    {
      question: "How much does a headless store cost?",
      answer:
        "Our headless Shopify projects typically start at $5,000 and range up to $15,000+ depending on complexity, number of pages, and custom features. We provide a fixed quote after our discovery call—no hourly billing surprises. For context, you're paying for a custom-built storefront that can outperform competitors still using templates.",
    },
    {
      question: "How long will my project take?",
      answer:
        "A headless Shopify store typically takes 6-10 weeks from kickoff to launch. Custom websites without e-commerce are usually 4-6 weeks. We'll give you a specific timeline during our first call based on your requirements. We build in buffer time for revisions, so the date we give you is the date we hit.",
    },
    {
      question: "What if something breaks after launch?",
      answer:
        "Every project includes 30 days of post-launch support at no extra cost. If something breaks or needs adjustment, we fix it. After that, we offer optional monthly retainers for ongoing maintenance, or you can reach out for one-off fixes. We also document everything and write clean code, so any developer can maintain it if you prefer to go elsewhere.",
    },
    {
      question: "I'm not technical—will I understand what's happening?",
      answer:
        "Absolutely. We send weekly updates with screenshots and working links you can click through. No jargon, no assumptions. We'll explain decisions in plain English and make sure you're comfortable before moving forward. If you've ever felt lost working with developers before, we're the opposite of that.",
    },
    {
      question: "Why should I work with a new studio instead of an established agency?",
      answer:
        "Honest answer: you'll get more attention. We're not juggling 50 clients—we take on a handful of projects at a time and give each one real focus. You'll work directly with the people building your store, not account managers. And because we're building our reputation, we're highly motivated to make your project exceptional.",
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                FAQ
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Questions
                <br />
                <span className="text-gray-400">we get asked.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                If your question isn't here, just ask. We're happy to explain
                anything about our process, pricing, or technology.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 pt-4">
              <Link
                href="https://calendly.com/todriflo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-gray-800"
              >
                Ask Us Anything
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-gray-900 font-semibold rounded-xl border border-gray-200 transition-all duration-300 hover:border-gray-900"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Right Content - FAQ List */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`${
                    index !== faqData.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-start justify-between text-left transition-colors duration-200 hover:bg-gray-50"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4 leading-snug">
                      {faq.question}
                    </h3>
                    <div
                      className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 mt-0.5 ${
                        openIndex === index
                          ? "bg-gray-900 text-white rotate-0"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <span
                        className={`text-sm font-medium transition-transform duration-300 ${
                          openIndex === index ? "rotate-45" : "rotate-0"
                        }`}
                      >
                        +
                      </span>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 sm:px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Help */}
            <div className="mt-6 flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600">
                  Still have questions?{" "}
                  <Link
                    href="https://calendly.com/todriflo/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 font-semibold hover:underline"
                  >
                    Book a free call
                  </Link>{" "}
                  and we'll answer everything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;