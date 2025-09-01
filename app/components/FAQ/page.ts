"use client";
import Link from "next/link";
import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First question open by default

  const faqData = [
    {
      question:
        "What is a headless Shopify store and why should I consider it?",
      answer:
        "A headless Shopify store separates the frontend (what customers see) from the backend (Shopify's commerce engine). This allows for complete design freedom, faster loading times, better SEO, and the ability to create unique customer experiences while still leveraging Shopify's powerful e-commerce features and payment processing.",
    },
    {
      question:
        "How long does it take to develop a custom web application or Shopify store?",
      answer:
        "Development timelines vary based on complexity. A custom Shopify headless store typically takes 8-16 weeks, while complex web applications can take 12-24 weeks. Simple websites usually take 4-8 weeks. We provide detailed project timelines during our discovery phase based on your specific requirements.",
    },
    {
      question: "Do you provide ongoing support and maintenance after launch?",
      answer:
        "Yes, we offer comprehensive post-launch support including bug fixes, security updates, performance monitoring, and feature enhancements. We provide different support packages ranging from basic maintenance to full-service ongoing development partnerships to meet your business needs.",
    },
    {
      question: "What technologies do you use for web and app development?",
      answer:
        "We specialize in modern tech stacks including React, Next.js, Node.js, and TypeScript for web applications. For Shopify headless stores, we use Shopify's Storefront API with frameworks like Hydrogen or custom React implementations. We also work with databases like PostgreSQL, MongoDB, and cloud platforms like Vercel and AWS.",
    },
  ];

  const toggleQuestion = (index: React.SetStateAction<number>) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              FAQs
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              As a specialized development agency, we create custom websites,
              web applications, and headless Shopify stores. Here are answers to
              common questions about our development process and services.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href={"/work"}>
                <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-900 hover:text-white transition-colors duration-200">
                  View Portfolio
                </button>
              </Link>
              <Link href={"https://calendly.com/todriflo/30min?month=2025-08"}>
                <button className="text-gray-900 px-8 py-3 text-lg font-medium hover:underline">
                  Start Project
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content - FAQ List */}
          <div className="space-y-0">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    {openIndex === index ? (
                      <span className="text-3xl font-light text-gray-900">
                        −
                      </span>
                    ) : (
                      <span className="text-3xl font-light text-gray-900">
                        +
                      </span>
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="pb-6 pr-12 animate-fadeIn">
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
