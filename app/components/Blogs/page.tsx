import Link from "next/link";
import React from "react";
import { ArrowRight, BookOpen, FileText, Lightbulb } from "lucide-react";

const BlogSection = () => {
  // Set this to true when you actually have blog posts
  const hasBlogPosts = false;

  // For when you DO have real blog posts
  const blogPosts = [
    {
      id: 1,
      slug: "headless-shopify-explained",
      readTime: "5 min",
      category: "Headless Commerce",
      title: "Headless Shopify Explained: Is It Right for Your Store?",
      excerpt:
        "A straightforward breakdown of what headless means, when it makes sense, and when a regular Shopify theme is actually the better choice.",
    },
    {
      id: 2,
      slug: "shopify-theme-vs-headless",
      readTime: "4 min",
      category: "Comparison",
      title: "Shopify Theme vs. Headless: The Real Differences",
      excerpt:
        "We break down the costs, timelines, and tradeoffs so you can make an informed decision for your business.",
    },
    {
      id: 3,
      slug: "what-to-expect-working-with-us",
      readTime: "3 min",
      category: "Process",
      title: "What to Expect When Working With Us",
      excerpt:
        "A transparent look at our process from first call to launch day—no surprises, no hidden steps.",
    },
  ];

  // Show this version when you don't have blog posts yet
  if (!hasBlogPosts) {
    return (
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Resources
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Learn before you
              <br />
              <span className="text-gray-400">commit.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe in informed decisions. Here are some resources to help
              you understand headless commerce and decide if it's right for your
              business.
            </p>
          </div>

          {/* Resource Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Resource 1 - Free Guide */}
            <div className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-white hover:shadow-lg hover:border-gray-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-emerald-600" />
              </div>

              <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                Free Guide
              </span>

              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                Is Headless Right for You?
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                A simple checklist to help you decide if your store is ready for
                headless—or if a theme is actually the better choice.
              </p>

              <Link
                href="https://calendly.com/todriflo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-all group-hover:gap-3"
              >
                Get it free on our call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Resource 2 - Quick Explanation */}
            <div className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-white hover:shadow-lg hover:border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>

              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                Quick Read
              </span>

              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                Headless in 2 Minutes
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                No jargon explanation of what headless commerce actually means
                and why brands are switching to it.
              </p>

              <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-400">
                Coming soon
              </div>
            </div>

            {/* Resource 3 - Case Study Placeholder */}
            <div className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-white hover:shadow-lg hover:border-gray-200 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-violet-600" />
              </div>

              <span className="text-xs font-semibold text-violet-600 uppercase tracking-wider">
                Case Study
              </span>

              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                Real Project Breakdown
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                A detailed look at a headless build—timeline, decisions,
                challenges, and results. Publishing after our next launch.
              </p>

              <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-400">
                Coming soon
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gray-900 rounded-2xl p-8 sm:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Have questions about headless?
                </h3>
                <p className="text-gray-400">
                  We're happy to explain anything—even if you're not ready to
                  start a project.
                </p>
              </div>
              <Link
                href="https://calendly.com/todriflo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-gray-900 font-semibold rounded-xl transition-all duration-300 hover:bg-gray-100 whitespace-nowrap"
              >
                Book a Free Call
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Show this version when you have actual blog posts
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              From Our Blog
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Thoughts on building
              <br />
              <span className="text-gray-400">better stores.</span>
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 font-medium hover:text-gray-900 transition-colors"
          >
            View all posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className={`group bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-white hover:shadow-lg hover:border-gray-200 ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              {/* Meta */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-gray-500 bg-gray-200 px-2 py-1 rounded">
                  {post.category}
                </span>
                <span className="text-xs text-gray-400">{post.readTime}</span>
              </div>

              {/* Title */}
              <h3
                className={`font-bold text-gray-900 mb-3 leading-snug transition-colors group-hover:text-gray-700 ${
                  index === 0 ? "text-2xl lg:text-3xl" : "text-xl"
                }`}
              >
                {post.title}
              </h3>

              {/* Excerpt */}
              <p
                className={`text-gray-600 leading-relaxed mb-6 ${
                  index === 0 ? "text-base lg:text-lg" : "text-sm"
                }`}
              >
                {post.excerpt}
              </p>

              {/* Read More */}
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-all group-hover:gap-3">
                Read article
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;