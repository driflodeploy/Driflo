import { Calendar } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Footer from "../components/Footer/page";

const blogPosts = [
  {
    id: 1,
    slug: "future-of-real-estate-management-technology",
    title: "The Future of Real Estate Management Technology",
    date: "2024-01-15",
    content:
      "Explore the transformative trends shaping the real estate industry.",
    imageUrl:
      "https://images.unsplash.com/photo-1606222477440-554c29019c91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 2,
    slug: "essential-tips-first-time-property-investors",
    title: "10 Essential Tips for First-Time Property Investors",
    date: "2024-02-20",
    content:
      "A guide for beginners looking to make smart investment decisions.",
    imageUrl:
      "https://images.unsplash.com/photo-1568605114967-8e653ba434d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 3,
    slug: "maximizing-rental-income-strategies",
    title: "Maximizing Rental Income: Strategies That Work",
    date: "2024-03-10",
    content: "Proven methods to increase your rental property's profitability.",
    imageUrl:
      "https://images.unsplash.com/photo-1512917774028-1cbadc45979d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 4,
    slug: "navigating-real-estate-market-trends",
    title: "Navigating Real Estate Market Trends: A Comprehensive Guide",
    date: "2024-04-05",
    content:
      "Stay ahead of the curve with insights into current market dynamics.",
    imageUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 5,
    slug: "sustainable-home-improvements-increase-value",
    title: "Sustainable Home Improvements That Increase Property Value",
    date: "2024-05-12",
    content: "Eco-friendly upgrades that boost your home's appeal and worth.",
    imageUrl:
      "https://images.unsplash.com/photo-1505843516504-6609c27585c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

export default function BlogPage() {
  return (
    <>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id}>
              <Card className="bg-white rounded-3xl border-0 shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <img
                  src={post.imageUrl || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-t-3xl"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 text-sm mb-4">{post.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-brand-blue hover:text-brand-blueHover p-0"
                    >
                      Read more <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
