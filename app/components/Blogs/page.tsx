import Link from "next/link";
import React from "react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      readTime: "8 min read",
      color: "bg-blue-500",
      title: "Why Choose Headless Shopify for Your E-commerce Store",
      excerpt:
        "Discover the benefits of headless architecture and how it can transform your Shopify store's performance and user experience....",
      buttonStyle: "bg-gray-900 text-white hover:bg-gray-800",
    },
    {
      id: 2,
      readTime: "6 min read",
      color: "bg-green-500",
      title: "Building Scalable Web Apps with React and Node.js",
      excerpt:
        "Learn our proven approach to creating robust, scalable web applications using modern JavaScript frameworks and best practices...",
      buttonStyle:
        "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
    },
    {
      id: 3,
      readTime: "10 min read",
      color: "bg-purple-500",
      title: "From Design to Deployment: Our Complete Development Process",
      excerpt:
        "Take a behind-the-scenes look at how we transform ideas into fully functional applications through our systematic development workflow...",
      buttonStyle:
        "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          {/* Heading */}
          <div className="flex-1">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Custom Development Solutions That Drive Innovation & Growth
            </h2>
          </div>

          {/* Description and Button */}
          <div className="flex-1 lg:max-w-lg space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              We specialize in building custom web applications, mobile apps,
              and headless e-commerce solutions. Our expert team leverages
              cutting-edge technologies to create scalable, high-performance
              digital experiences.
            </p>
            <Link href="/work">
              <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-900 hover:text-white transition-colors duration-200">
                View Portfolio
              </button>
            </Link>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Color dot and read time */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-4 h-4 rounded-full ${post.color}`}></div>
                <span className="text-gray-500 text-sm">{post.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                {post.excerpt}
              </p>

              {/* Arrow Button */}
              <div className="flex justify-end">
                <button
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 ${post.buttonStyle}`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
