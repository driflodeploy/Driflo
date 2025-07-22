"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock blog data - in a real app, this would come from a CMS or database
const blogPosts = {
  "future-of-real-estate-management-technology": {
    id: 1,
    title: "The Future of Real Estate Management Technology",
    excerpt:
      "Discover how AI and automation are revolutionizing property management and what it means for your business.",
    content: `
      <p>The real estate industry is experiencing a technological revolution that's transforming how properties are managed, marketed, and maintained. From artificial intelligence to blockchain technology, these innovations are not just changing the game—they're rewriting the rules entirely.</p>

      <h2>AI-Powered Property Management</h2>
      <p>Artificial intelligence is becoming the backbone of modern property management systems. AI algorithms can now predict maintenance needs before issues arise, optimize rental pricing based on market conditions, and even screen potential tenants more effectively than traditional methods.</p>

      <p>Machine learning models analyze vast amounts of data to identify patterns that humans might miss. For instance, they can predict when an HVAC system is likely to fail based on usage patterns, weather data, and historical maintenance records.</p>

      <h2>Automation in Daily Operations</h2>
      <p>Automation is streamlining routine tasks that once consumed hours of manual work. Automated rent collection, maintenance request routing, and tenant communication systems are freeing up property managers to focus on strategic decisions rather than administrative tasks.</p>

      <p>Smart building technologies are also playing a crucial role. IoT sensors can monitor everything from energy usage to security, providing real-time insights that help optimize building performance and reduce operational costs.</p>

      <h2>The Impact on Property Owners</h2>
      <p>For property owners, these technological advances translate to higher efficiency, reduced costs, and improved tenant satisfaction. Properties equipped with smart technology often command higher rents and experience lower vacancy rates.</p>

      <p>The data-driven insights provided by modern property management platforms enable owners to make informed decisions about renovations, pricing strategies, and market positioning.</p>

      <h2>Looking Ahead</h2>
      <p>As we look to the future, we can expect even more sophisticated technologies to emerge. Virtual and augmented reality will revolutionize property tours, while blockchain technology may transform how property transactions are conducted.</p>

      <p>The key for property managers and owners is to stay informed about these developments and be ready to adapt. Those who embrace technology early will have a significant competitive advantage in the evolving real estate landscape.</p>
    `,
    author: "Sarah Mitchell",
    date: "January 15, 2024",
    readTime: "5 min read",
    category: "Technology",
    image: "/placeholder.svg?height=400&width=800&text=Real+Estate+Tech",
  },
  "essential-tips-first-time-property-investors": {
    id: 2,
    title: "10 Essential Tips for First-Time Property Investors",
    excerpt:
      "A comprehensive guide to getting started in real estate investment, from financing to finding the right properties.",
    content: `
      <p>Real estate investment can be one of the most rewarding paths to building wealth, but it's crucial to approach it with the right knowledge and strategy. Here are ten essential tips for first-time property investors.</p>

      <h2>1. Start with Your Financial Foundation</h2>
      <p>Before diving into property investment, ensure your personal finances are in order. This means having a good credit score, stable income, and an emergency fund. Most lenders require a credit score of at least 620 for investment properties.</p>

      <h2>2. Understand the Different Types of Real Estate Investments</h2>
      <p>From single-family rentals to commercial properties, each type of investment has its own risk profile and return potential. Start with what you understand and can manage effectively.</p>

      <h2>3. Location is Everything</h2>
      <p>The old adage "location, location, location" remains true. Research neighborhoods thoroughly, looking at factors like job growth, school districts, crime rates, and future development plans.</p>

      <h2>4. Calculate All Costs</h2>
      <p>Don't just consider the purchase price. Factor in closing costs, repairs, ongoing maintenance, property management fees, insurance, taxes, and vacancy periods.</p>

      <h2>5. The 1% Rule</h2>
      <p>A general guideline is that monthly rent should be at least 1% of the purchase price. While this rule doesn't work in all markets, it's a good starting point for evaluation.</p>

      <h2>6. Get Pre-Approved for Financing</h2>
      <p>Investment property loans typically require larger down payments (20-25%) and have higher interest rates than primary residence loans. Shop around for the best terms.</p>

      <h2>7. Build a Reliable Team</h2>
      <p>Assemble a team of professionals including a real estate agent, accountant, attorney, contractor, and property manager. These relationships will be invaluable as you grow your portfolio.</p>

      <h2>8. Start Small and Local</h2>
      <p>Begin with one property in an area you know well. This allows you to learn the ropes without overextending yourself financially or geographically.</p>

      <h2>9. Understand Landlord-Tenant Laws</h2>
      <p>Each state and locality has different laws governing rental properties. Familiarize yourself with these regulations to avoid costly legal issues.</p>

      <h2>10. Plan for the Long Term</h2>
      <p>Real estate investment is typically a long-term strategy. Don't expect immediate returns, and be prepared to hold properties for several years to realize their full potential.</p>

      <p>Remember, successful real estate investing requires patience, research, and continuous learning. Start with solid fundamentals, and you'll be well on your way to building a profitable property portfolio.</p>
    `,
    author: "Mike Johnson",
    date: "January 12, 2024",
    readTime: "8 min read",
    category: "Investment",
    image: "/placeholder.svg?height=400&width=800&text=Property+Investment",
  },
  "maximizing-rental-income-strategies": {
    id: 3,
    title: "Maximizing Rental Income: Strategies That Work",
    excerpt:
      "Learn proven strategies to increase your rental income while maintaining happy tenants and property value.",
    content: `
      <p>Maximizing rental income is about more than just raising rent. It requires a strategic approach that balances profitability with tenant satisfaction and property maintenance. Here are proven strategies that successful landlords use to optimize their rental income.</p>

      <h2>Strategic Property Improvements</h2>
      <p>Not all improvements are created equal when it comes to rental returns. Focus on upgrades that tenants value most: updated kitchens and bathrooms, fresh paint, quality flooring, and modern fixtures. These improvements often justify higher rents and attract quality tenants.</p>

      <p>Energy-efficient upgrades like LED lighting, programmable thermostats, and efficient appliances can reduce utility costs and appeal to environmentally conscious renters willing to pay premium rents.</p>

      <h2>Optimize Your Rental Pricing</h2>
      <p>Regular market analysis is crucial. Use online tools and local market data to ensure your rent is competitive but not underpriced. Consider seasonal adjustments and be aware of local rent control laws.</p>

      <p>Implement annual rent increases within legal limits. Small, consistent increases are better than large jumps that might drive away good tenants.</p>

      <h2>Reduce Vacancy Periods</h2>
      <p>Every day a property sits vacant costs you money. Start marketing before your current tenant moves out, maintain the property well to minimize turnover time, and consider offering lease renewal incentives to keep good tenants.</p>

      <h2>Add Revenue Streams</h2>
      <p>Look for opportunities to generate additional income from your property:</p>
      <ul>
        <li>Charge for parking spaces in urban areas</li>
        <li>Offer storage solutions</li>
        <li>Install coin-operated laundry facilities</li>
        <li>Rent out additional spaces like basements or garages</li>
      </ul>

      <h2>Screen Tenants Thoroughly</h2>
      <p>Quality tenants pay rent on time, take care of the property, and stay longer. Implement a comprehensive screening process that includes credit checks, employment verification, and references from previous landlords.</p>

      <h2>Maintain Strong Tenant Relationships</h2>
      <p>Happy tenants are more likely to renew leases, reducing turnover costs. Respond promptly to maintenance requests, communicate clearly, and treat tenants with respect. Consider small gestures like holiday cards or move-in gifts.</p>

      <h2>Leverage Technology</h2>
      <p>Use property management software to streamline operations, online rent collection to improve cash flow, and digital marketing to reach more potential tenants quickly.</p>

      <h2>Tax Optimization</h2>
      <p>Work with a tax professional to ensure you're taking advantage of all available deductions, including depreciation, repairs, maintenance, and professional services.</p>

      <h2>Regular Property Maintenance</h2>
      <p>Preventive maintenance is cheaper than emergency repairs and helps maintain property value. Create a maintenance schedule and budget for regular upkeep.</p>

      <p>Remember, maximizing rental income is a long-term strategy that requires balancing multiple factors. Focus on providing value to your tenants while maintaining your property, and the income optimization will follow naturally.</p>
    `,
    author: "Lisa Chen",
    date: "January 10, 2024",
    readTime: "6 min read",
    category: "Management",
    image: "/placeholder.svg?height=400&width=800&text=Rental+Income",
  },
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setShowNavbar(true)
      } else {
        setShowNavbar(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full px-4 lg:px-6 h-16 flex items-center justify-between border-b border-gray-100 bg-white/95 backdrop-blur-sm transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <span className="text-xl font-bold text-black">Bayt</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#home" className="text-gray-700 hover:text-black font-medium">
            Home
          </Link>
          <Link href="/#services" className="text-gray-700 hover:text-black font-medium">
            Services
          </Link>
          <Link href="/#why-us" className="text-gray-700 hover:text-black font-medium">
            Why Us
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-black font-medium">
            Blog
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Link href="https://calendly.com" target="_blank" rel="noopener noreferrer">
            <Button className="bg-purple-400 hover:bg-purple-500 text-white rounded-full px-6 py-2 font-medium">
              Book a Call
            </Button>
          </Link>
          <Button size="icon" className="bg-purple-400 hover:bg-purple-500 text-white rounded-full w-10 h-10">
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </header>

      {/* Article Content */}
      <article className="w-full px-4 lg:px-6 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <Link href="/blog" className="inline-flex items-center text-purple-400 hover:text-purple-500 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <Badge className="bg-purple-400 text-white rounded-full px-4 py-2 mb-4">{post.category}</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">{post.title}</h1>
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative h-64 lg:h-96 rounded-3xl overflow-hidden mb-8">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-black prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-500 prose-ul:text-gray-700 prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-gray-50 rounded-3xl text-center">
            <h3 className="text-2xl font-bold text-black mb-4">Ready to Transform Your Property Management?</h3>
            <p className="text-gray-600 mb-6">
              Schedule a call with our experts to see how Bayt can help you implement these strategies.
            </p>
            <div className="flex items-center justify-center space-x-3">
              <Link href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                <Button className="bg-purple-400 hover:bg-purple-500 text-white rounded-full px-8 py-3 font-medium">
                  Book a Call
                </Button>
              </Link>
              <Button size="icon" className="bg-purple-400 hover:bg-purple-500 text-white rounded-full w-12 h-12">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="w-full px-4 lg:px-6 py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded-sm"></div>
                </div>
                <span className="text-2xl font-bold">Bayt</span>
              </Link>
              <p className="text-gray-400 text-lg mb-6 max-w-md">
                The premier choice in real estate services. Managing, leasing, and selling properties with comprehensive
                solutions.
              </p>
              <div className="flex items-center space-x-3">
                <Link href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-purple-400 hover:bg-purple-500 text-white rounded-full px-6 py-2">
                    Book a Call
                  </Button>
                </Link>
                <Button size="icon" className="bg-purple-400 hover:bg-purple-500 text-white rounded-full w-10 h-10">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Property Listings
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Financial Reporting
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Service Requests
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Tenant Management
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/#home" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#why-us" className="hover:text-white transition-colors">
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Bayt. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
