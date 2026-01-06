import Link from "next/link";
import React from "react";
import { ArrowRight, ArrowUpRight, FileText, Lightbulb, BookOpen } from "lucide-react";

const BlogSection = () => {
  const hasBlogPosts = false;

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

  // Version when no blog posts yet
  if (!hasBlogPosts) {
    return (
      <section className="px-6 lg:px-8 py-24 sm:py-32 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium text-gray-400 tracking-wider uppercase mb-4">
              Resources
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight mb-6">
              Learn before you commit
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              We believe in informed decisions. Here are some resources to help
              you understand headless commerce.
            </p>
          </div>

          {/* Resource Cards */}
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {/* Resource 1 - Free Guide (Featured) */}
            <Link
              href="https://calendly.com/todriflo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group lg:col-span-2 bg-black rounded-3xl p-8 sm:p-10 relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-sm font-medium text-emerald-400 tracking-wider uppercase mb-4">
                  Free Guide
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 max-w-md">
                  Is Headless Right for Your Store?
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8 max-w-lg">
                  A simple checklist to help you decide if your store is ready
                  for headless—or if a theme is actually the better choice for now.
                </p>

                <span className="inline-flex items-center gap-2 text-white font-semibold">
                  Get it free on our call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            {/* Right Column - Stacked Cards */}
            <div className="flex flex-col gap-6">
              {/* Resource 2 - Quick Read */}
              <div className="group bg-white rounded-3xl p-8 flex-1 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium text-gray-300 bg-gray-100 px-3 py-1 rounded-full">
                    Soon
                  </span>
                </div>

                <p className="text-xs font-medium text-blue-600 tracking-wider uppercase mb-2">
                  Quick Read
                </p>

                <h3 className="text-lg font-bold text-black mb-2">
                  Headless in 2 Minutes
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  No jargon explanation of what headless commerce actually means.
                </p>
              </div>

              {/* Resource 3 - Case Study */}
              <div className="group bg-white rounded-3xl p-8 flex-1 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-violet-600" />
                  </div>
                  <span className="text-xs font-medium text-gray-300 bg-gray-100 px-3 py-1 rounded-full">
                    Soon
                  </span>
                </div>

                <p className="text-xs font-medium text-violet-600 tracking-wider uppercase mb-2">
                  Case Study
                </p>

                <h3 className="text-lg font-bold text-black mb-2">
                  Real Project Breakdown
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  Timeline, decisions, challenges, and results from a real build.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">
                  Have questions about headless?
                </h3>
                <p className="text-gray-500">
                  We're happy to explain anything—even if you're not ready to start.
                </p>
              </div>
              <Link
                href="https://calendly.com/todriflo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap"
              >
                Book a free call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Version with actual blog posts
  return (
    <section className="px-6 lg:px-8 py-24 sm:py-32 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm font-medium text-gray-400 tracking-wider uppercase mb-4">
              From the Blog
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight">
              Thoughts on building
              <br />
              better stores
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-500 font-medium hover:text-black transition-colors"
          >
            View all posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blog Grid - Featured + List */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured Post */}
          <Link
            href={`/blog/${blogPosts[0].slug}`}
            className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300"
          >
            {/* Image Placeholder */}
            <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-100" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-medium text-gray-600 bg-white px-3 py-1.5 rounded-full">
                  {blogPosts[0].category}
                </span>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm text-gray-400">{blogPosts[0].readTime} read</span>
              </div>

              <h3 className="text-2xl font-bold text-black mb-4 leading-tight group-hover:text-gray-600 transition-colors">
                {blogPosts[0].title}
              </h3>

              <p className="text-gray-500 leading-relaxed mb-6">
                {blogPosts[0].excerpt}
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-semibold text-black">
                Read article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

          {/* Post List */}
          <div className="flex flex-col gap-4">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 flex-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-black mb-2 leading-snug group-hover:text-gray-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:border-black transition-all">
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </Link>
            ))}

            {/* CTA Card */}
            <div className="bg-black rounded-2xl p-6 mt-2">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    Have a question?
                  </h4>
                  <p className="text-sm text-gray-400">
                    Let's chat about your project
                  </p>
                </div>
                <Link
                  href="https://calendly.com/todriflo/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors flex-shrink-0"
                >
                  <ArrowUpRight className="w-5 h-5 text-black" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;