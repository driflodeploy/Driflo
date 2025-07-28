import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Footer from "../components/Footer/page";
import Image from "next/image";
import { MinimalNewsletter } from "../components/Newsletter/page";

const blogPosts = [
  {
    id: 1,
    slug: "headless-commerce-future-ecommerce",
    title: "Why Headless Commerce is the Future of E-commerce",
    excerpt:
      "Discover how headless architecture is revolutionizing online stores with faster performance, better SEO, and unlimited customization possibilities.",
    content:
      "Explore the benefits of decoupled frontend and backend systems for modern e-commerce solutions.",
    author: "Sarah Johnson",
    date: "2024-12-15",
    readTime: "8 min read",
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
    content:
      "Master the art of building high-performance web applications with Next.js best practices.",
    author: "Mike Chen",
    date: "2024-12-10",
    readTime: "12 min read",
    category: "Web Development",
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 3,
    slug: "react-native-vs-flutter-2024",
    title: "React Native vs Flutter: Which to Choose in 2024?",
    excerpt:
      "A comprehensive comparison of the two leading cross-platform mobile development frameworks, helping you make the right choice for your project.",
    content:
      "Compare performance, development experience, and ecosystem to choose the best framework.",
    author: "Alex Rivera",
    date: "2024-12-05",
    readTime: "10 min read",
    category: "Mobile Development",
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 4,
    slug: "shopify-plus-headless-implementation",
    title: "Shopify Plus Headless Implementation: Best Practices",
    excerpt:
      "Step-by-step guide to implementing a headless Shopify Plus store that delivers exceptional performance and user experience.",
    content:
      "Learn how to leverage Shopify's powerful backend with a custom frontend for maximum flexibility.",
    author: "Emma Thompson",
    date: "2024-11-28",
    readTime: "15 min read",
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
      "Essential UX principles every mobile app should follow to create intuitive, engaging experiences that keep users coming back.",
    content:
      "Master the fundamentals of mobile UX design for better user retention and satisfaction.",
    author: "David Park",
    date: "2024-11-22",
    readTime: "7 min read",
    category: "Mobile Development",
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 6,
    slug: "seo-optimization-headless-websites",
    title: "SEO Optimization for Headless Websites: A Technical Guide",
    excerpt:
      "Master SEO for headless architectures with server-side rendering, structured data, and performance optimization techniques.",
    content:
      "Ensure your headless website ranks well in search engines with these proven strategies.",
    author: "Lisa Wong",
    date: "2024-11-18",
    readTime: "11 min read",
    category: "Web Development",
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
];

const categories = [
  "All",
  "Headless Commerce",
  "Web Development",
  "Mobile Development",
];

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-32 pb-24 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-50 px-6 py-3 rounded-full border border-blue-100 mb-8">
              <span className="text-sm font-semibold text-blue-700">
                Development Insights
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Driflo <span className="text-brand-blue">Development</span> Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay ahead with the latest insights on headless commerce, modern
              web development, and mobile app innovation from our team of
              experts.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="px-4 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-brand-blue rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-900">
                Featured Article
              </h2>
            </div>

            <Link href={`/blog/${featuredPost.slug}`}>
              <Card className="group relative bg-white border-0 shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-full min-h-[400px]">
                    <Image
                      src={featuredPost.imageUrl}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge className="bg-brand-blue text-white rounded-full px-4 py-2 mb-6 w-fit">
                      {featuredPost.category}
                    </Badge>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-brand-blue transition-colors duration-300">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-brand-blue group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="px-4 lg:px-8 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1 h-8 bg-brand-blue rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-900">
              Latest Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <Card className="group bg-white border-0 shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <Badge className="bg-blue-50 text-brand-blue border-blue-200 rounded-full px-3 py-1 mb-4 w-fit text-xs font-semibold">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-brand-blue transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-brand-blue group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MinimalNewsletter />

      <Footer />
    </div>
  );
}
