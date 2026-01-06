import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer/page";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    slug: "headless-commerce-future-ecommerce",
    title: "Why Headless Commerce is the Future of E-commerce",
    excerpt:
      "Discover how headless architecture is revolutionizing online stores with faster performance, better SEO, and unlimited customization possibilities.",
    author: "Sarah Johnson",
    date: "Dec 15, 2024",
    readTime: "8 min",
    category: "Headless Commerce",
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 2,
    slug: "nextjs-performance-optimization-guide",
    title: "Next.js Performance Optimization: A Complete Guide",
    excerpt:
      "Learn advanced techniques to make your Next.js applications lightning-fast with code splitting, image optimization, and caching strategies.",
    author: "Mike Chen",
    date: "Dec 10, 2024",
    readTime: "12 min",
    category: "Development",
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 3,
    slug: "react-native-vs-flutter-2024",
    title: "React Native vs Flutter: Which to Choose in 2024?",
    excerpt:
      "A comprehensive comparison of the two leading cross-platform mobile development frameworks for your next project.",
    author: "Alex Rivera",
    date: "Dec 5, 2024",
    readTime: "10 min",
    category: "Mobile",
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 4,
    slug: "shopify-plus-headless-implementation",
    title: "Shopify Plus Headless Implementation: Best Practices",
    excerpt:
      "Step-by-step guide to implementing a headless Shopify Plus store that delivers exceptional performance.",
    author: "Emma Thompson",
    date: "Nov 28, 2024",
    readTime: "15 min",
    category: "Headless Commerce",
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 5,
    slug: "mobile-app-ux-design-principles",
    title: "Mobile App UX Design Principles That Drive Engagement",
    excerpt:
      "Essential UX principles every mobile app should follow to create intuitive, engaging experiences.",
    author: "David Park",
    date: "Nov 22, 2024",
    readTime: "7 min",
    category: "Design",
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 6,
    slug: "seo-optimization-headless-websites",
    title: "SEO Optimization for Headless Websites",
    excerpt:
      "Master SEO for headless architectures with server-side rendering, structured data, and performance optimization.",
    author: "Lisa Wong",
    date: "Nov 18, 2024",
    readTime: "11 min",
    category: "Development",
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="px-6 lg:px-8 pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-gray-400 tracking-wider uppercase mb-4">
              Blog
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black tracking-tight mb-6">
              Insights & Ideas
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              Thoughts on headless commerce, modern development, 
              and building better digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="px-6 lg:px-8 pb-20">
          <div className="max-w-[1200px] mx-auto">
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <article className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                  <Image
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="py-4">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-medium text-gray-900 bg-gray-100 px-4 py-1.5 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-gray-400">
                      {featuredPost.readTime} read
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight mb-6 leading-tight group-hover:text-gray-600 transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-lg text-gray-500 leading-relaxed mb-8">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gray-200" />
                      <div>
                        <p className="text-sm font-medium text-black">
                          {featuredPost.author}
                        </p>
                        <p className="text-sm text-gray-400">
                          {featuredPost.date}
                        </p>
                      </div>
                    </div>

                    <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all">
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="h-px bg-gray-100" />
      </div>

      {/* All Articles */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold text-black">Latest Articles</h2>
            <p className="text-sm text-gray-400">
              {regularPosts.length} articles
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {regularPosts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.id}
                className="group"
              >
                <article>
                  {/* Image */}
                  <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-gray-100 mb-6">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-black mb-3 leading-snug group-hover:text-gray-600 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Author & Date */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200" />
                      <span className="text-sm text-gray-600">
                        {post.author}
                      </span>
                    </div>
                    <span className="text-sm text-gray-400">{post.date}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-500 mb-8">
            Get the latest articles and insights delivered to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-full border border-gray-200 bg-white text-black placeholder:text-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-gray-400 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}