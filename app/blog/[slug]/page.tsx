import { notFound } from "next/navigation";
import { Calendar, User, Clock, Share2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Footer from "@/app/components/Footer/page";

// ✅ Sync with your blog listing page.tsx
const blogPosts = [
  {
    slug: "headless-commerce-future-ecommerce",
    title: "Why Headless Commerce is the Future of E-commerce",
    excerpt:
      "Discover how headless architecture is revolutionizing online stores with faster performance, better SEO, and unlimited customization possibilities.",
    content: `
      <p>Headless commerce architecture separates the frontend display from the backend logic of an e-commerce platform...</p>
      <h2>Benefits of Headless Architecture</h2>
      <ul>
        <li>Speed & performance via static generation and caching</li>
        <li>API-driven integrations (Shopify Plus, Stripe, CMS)</li>
        <li>Custom frontend experiences that boost conversion</li>
      </ul>
      <h2>When Should You Go Headless?</h2>
      <p>If you want sub-second load times, advanced design systems, or robust integrations — headless is likely a great fit.</p>
    `,
    author: "Sarah Johnson",
    date: "2024-12-15",
    readTime: "8 min read",
    category: "Headless Commerce",
    imageUrl:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=2070&q=80",
  },
  {
    slug: "nextjs-performance-optimization-guide",
    title: "Next.js Performance Optimization: A Complete Guide",
    excerpt:
      "Learn advanced techniques to make your Next.js applications lightning-fast with code splitting, image optimization, and caching strategies.",
    content: `<p>Performance is revenue. In this guide, we’ll show how to tune your Next.js app for SEO & UX wins using built-in features like <code>Image</code>, ISR and dynamic loading.</p>`,
    author: "Mike Chen",
    date: "2024-12-10",
    readTime: "12 min read",
    category: "Web Development",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2070&q=80",
  },
  {
    slug: "react-native-vs-flutter-2024",
    title: "React Native vs Flutter: Which to Choose in 2024?",
    excerpt:
      "A comprehensive comparison of the two leading cross-platform mobile development frameworks, helping you make the right choice for your project.",
    content: `<p>We break down performance, development experience, UI capabilities and community support between the two giants of mobile dev.</p>`,
    author: "Alex Rivera",
    date: "2024-12-05",
    readTime: "10 min read",
    category: "Mobile Development",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=2070&q=80",
  },
  {
    slug: "shopify-plus-headless-implementation",
    title: "Shopify Plus Headless Implementation: Best Practices",
    excerpt:
      "Step-by-step guide to implementing a headless Shopify Plus store that delivers exceptional performance and user experience.",
    content: `<p>Take Shopify to the next level using custom storefronts powered by Shopify Storefront API + Next.js. Learn how major brands scale.</p>`,
    author: "Emma Thompson",
    date: "2024-11-28",
    readTime: "15 min read",
    category: "Headless Commerce",
    imageUrl:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2070&q=80",
  },
  {
    slug: "mobile-app-ux-design-principles",
    title: "Mobile App UX Design Principles That Drive Engagement",
    excerpt:
      "Essential UX principles every mobile app should follow to create intuitive, engaging experiences that keep users coming back.",
    content: `<ul><li>Simplified navigation and gestures</li><li>Dark mode support</li><li>Fast onboarding & contextual UI</li></ul>`,
    author: "David Park",
    date: "2024-11-22",
    readTime: "7 min read",
    category: "Mobile Development",
    imageUrl:
      "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=2070&q=80",
  },
  {
    slug: "seo-optimization-headless-websites",
    title: "SEO Optimization for Headless Websites: A Technical Guide",
    excerpt:
      "Master SEO for headless architectures with server-side rendering, structured data, and performance optimization techniques.",
    content: `<p>We cover everything you need — metadata, structured data, sitemap generation, title rendering, and performance tips.</p>`,
    author: "Lisa Wong",
    date: "2024-11-18",
    readTime: "11 min read",
    category: "Web Development",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2070&q=80",
  },
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Back Nav & Metadata */}
      <section className="max-w-4xl px-6 mx-auto pt-32 pb-12">
        <Link
          href="/blog"
          className="inline-flex items-center text-brand-blue hover:text-brand-blueHover text-sm mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Blog
        </Link>

        <h1 className="text-4xl lg:text-5xl font-bold text-black tracking-tight mb-4 leading-tight">
          {post.title}
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl">{post.excerpt}</p>

        <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {post.author}
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-gray-300 ml-auto"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
      </section>

      {/* Featured Image */}
      <div className="relative w-full max-w-6xl mx-auto h-72 lg:h-96 rounded-3xl overflow-hidden mb-14 px-6">
        <Image
          src={post.imageUrl}
          alt={post.title}
          className="object-cover"
          fill
          priority
        />
      </div>

      {/* Post Content */}
      <section className="prose prose-lg prose-headings:text-black prose-p:text-gray-700 prose-a:text-brand-blue hover:prose-a:text-brand-blueHover prose-li:marker:text-brand-blue px-6 max-w-4xl mx-auto">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </section>

      {/* Contact CTA */}
      <section className="mt-20 mb-20 px-6 max-w-4xl mx-auto">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Ready to build fast, modern digital experiences?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            From custom storefronts to high-performance apps, Driflo builds
            products that perform.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link href="/contact">
              <Button className="bg-black text-white px-6 py-3 rounded-full hover:bg-brand-blueHover">
                Contact Us
              </Button>
            </Link>
            <Link href="/work">
              <Button
                variant="outline"
                className="rounded-full px-6 py-3 text-gray-800"
              >
                See Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
