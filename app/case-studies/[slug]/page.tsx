"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  MapPin,
  Building,
  Target,
  CheckCircle,
  BarChart3,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock case study data
const caseStudies = {
  "luxury-downtown-apartments": {
    id: 1,
    title: "Luxury Downtown Apartments",
    location: "Manhattan, NY",
    type: "Residential Complex",
    image: "/placeholder.svg?height=600&width=1200&text=Luxury+Apartments",
    stats: {
      revenue: "+45%",
      occupancy: "98%",
      units: "120",
      duration: "18 months",
      investment: "$2.5M",
    },
    description: "Complete renovation and management of a 120-unit luxury apartment complex in downtown Manhattan.",
    tags: ["Luxury", "Residential", "Urban"],
    challenge:
      "The property was experiencing declining occupancy rates (65%) and outdated amenities that couldn't compete with newer developments in the area. Tenant turnover was high, and rental income was 30% below market rate.",
    solution:
      "We implemented a comprehensive renovation strategy focusing on modern amenities, smart home technology, and premium finishes. Our team also redesigned the marketing approach and implemented dynamic pricing strategies.",
    results: [
      "Increased occupancy from 65% to 98%",
      "Boosted rental income by 45%",
      "Reduced tenant turnover by 60%",
      "Achieved 4.8/5 tenant satisfaction rating",
      "Increased property value by $8.2M",
    ],
    timeline: [
      {
        phase: "Assessment & Planning",
        duration: "2 months",
        description: "Comprehensive property analysis and renovation planning",
      },
      {
        phase: "Renovation Phase 1",
        duration: "6 months",
        description: "Common areas, lobby, and building systems upgrade",
      },
      {
        phase: "Renovation Phase 2",
        duration: "8 months",
        description: "Unit-by-unit renovation and smart home installation",
      },
      {
        phase: "Marketing & Leasing",
        duration: "2 months",
        description: "New marketing strategy and tenant acquisition",
      },
    ],
    images: [
      "/placeholder.svg?height=400&width=600&text=Before+Renovation",
      "/placeholder.svg?height=400&width=600&text=After+Renovation",
      "/placeholder.svg?height=400&width=600&text=Amenities",
      "/placeholder.svg?height=400&width=600&text=Interior+Design",
    ],
  },
  "commercial-office-plaza": {
    id: 2,
    title: "Commercial Office Plaza",
    location: "Austin, TX",
    type: "Commercial Property",
    image: "/placeholder.svg?height=600&width=1200&text=Office+Plaza",
    stats: {
      revenue: "+32%",
      occupancy: "95%",
      units: "50",
      duration: "12 months",
      investment: "$1.8M",
    },
    description:
      "Strategic repositioning of a commercial office plaza resulting in increased tenant satisfaction and revenue.",
    tags: ["Commercial", "Office", "Strategic"],
    challenge:
      "The office plaza was struggling with high vacancy rates (45%) due to outdated facilities and lack of modern amenities that today's businesses require. The property was losing tenants to newer developments.",
    solution:
      "We focused on modernizing the workspace with flexible office solutions, upgraded technology infrastructure, and created collaborative spaces. We also improved the building's energy efficiency and added wellness amenities.",
    results: [
      "Increased occupancy from 45% to 95%",
      "Improved rental rates by 32%",
      "Reduced operating costs by 25%",
      "Achieved LEED Gold certification",
      "100% tenant retention rate",
    ],
    timeline: [
      {
        phase: "Market Analysis",
        duration: "1 month",
        description: "Comprehensive market research and tenant needs assessment",
      },
      {
        phase: "Infrastructure Upgrade",
        duration: "4 months",
        description: "Technology, HVAC, and building systems modernization",
      },
      {
        phase: "Space Redesign",
        duration: "5 months",
        description: "Flexible workspace creation and amenity installation",
      },
      { phase: "Tenant Acquisition", duration: "2 months", description: "Marketing and leasing of renovated spaces" },
    ],
    images: [
      "/placeholder.svg?height=400&width=600&text=Office+Lobby",
      "/placeholder.svg?height=400&width=600&text=Modern+Workspace",
      "/placeholder.svg?height=400&width=600&text=Conference+Rooms",
      "/placeholder.svg?height=400&width=600&text=Wellness+Area",
    ],
  },
  "student-housing-complex": {
    id: 3,
    title: "Student Housing Complex",
    location: "Boston, MA",
    type: "Student Housing",
    image: "/placeholder.svg?height=600&width=1200&text=Student+Housing",
    stats: {
      revenue: "+28%",
      occupancy: "100%",
      units: "200",
      duration: "15 months",
      investment: "$3.2M",
    },
    description: "Modern student housing facility with state-of-the-art amenities and technology integration.",
    tags: ["Student", "Modern", "Technology"],
    challenge:
      "The existing student housing was outdated with poor internet connectivity, limited study spaces, and amenities that didn't meet modern student expectations. Occupancy was at 70% with frequent complaints.",
    solution:
      "We transformed the property into a modern student-focused community with high-speed internet, collaborative study spaces, fitness facilities, and social areas. We also implemented a comprehensive resident engagement program.",
    results: [
      "Achieved 100% occupancy rate",
      "Increased rental income by 28%",
      "Improved student satisfaction to 4.9/5",
      "Reduced maintenance costs by 20%",
      "Won 'Best Student Housing' award",
    ],
    timeline: [
      {
        phase: "Student Needs Research",
        duration: "2 months",
        description: "Surveys and focus groups with target demographic",
      },
      {
        phase: "Technology Infrastructure",
        duration: "3 months",
        description: "High-speed internet and smart building systems",
      },
      {
        phase: "Amenity Development",
        duration: "8 months",
        description: "Study spaces, fitness center, and social areas",
      },
      { phase: "Community Programs", duration: "2 months", description: "Resident engagement and support services" },
    ],
    images: [
      "/placeholder.svg?height=400&width=600&text=Study+Lounge",
      "/placeholder.svg?height=400&width=600&text=Modern+Dorms",
      "/placeholder.svg?height=400&width=600&text=Fitness+Center",
      "/placeholder.svg?height=400&width=600&text=Social+Spaces",
    ],
  },
}

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
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

  const caseStudy = caseStudies[params.slug as keyof typeof caseStudies]

  if (!caseStudy) {
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

      {/* Case Study Content */}
      <main className="w-full px-4 lg:px-6 py-16 pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Back Navigation */}
          <Link href="/#portfolio" className="inline-flex items-center text-purple-400 hover:text-purple-500 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge className="bg-purple-400 text-white rounded-full px-4 py-2">{caseStudy.type}</Badge>
              {caseStudy.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="rounded-full border-gray-300 text-gray-600">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">{caseStudy.title}</h1>

            <div className="flex items-center space-x-6 text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>{caseStudy.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{caseStudy.stats.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building className="w-5 h-5" />
                <span>{caseStudy.stats.units} Units</span>
              </div>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed">{caseStudy.description}</p>
          </div>

          {/* Hero Image */}
          <div className="relative h-64 lg:h-96 rounded-3xl overflow-hidden mb-12">
            <Image src={caseStudy.image || "/placeholder.svg"} alt={caseStudy.title} fill className="object-cover" />
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-5 gap-6 mb-16">
            <Card className="bg-gray-50 rounded-3xl p-6 text-center border-0">
              <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-black mb-1">{caseStudy.stats.revenue}</div>
              <div className="text-sm text-gray-600">Revenue Increase</div>
            </Card>
            <Card className="bg-gray-50 rounded-3xl p-6 text-center border-0">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-black mb-1">{caseStudy.stats.occupancy}</div>
              <div className="text-sm text-gray-600">Occupancy Rate</div>
            </Card>
            <Card className="bg-gray-50 rounded-3xl p-6 text-center border-0">
              <Building className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-black mb-1">{caseStudy.stats.units}</div>
              <div className="text-sm text-gray-600">Total Units</div>
            </Card>
            <Card className="bg-gray-50 rounded-3xl p-6 text-center border-0">
              <Calendar className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-black mb-1">{caseStudy.stats.duration}</div>
              <div className="text-sm text-gray-600">Project Duration</div>
            </Card>
            <Card className="bg-gray-50 rounded-3xl p-6 text-center border-0">
              <DollarSign className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-black mb-1">{caseStudy.stats.investment}</div>
              <div className="text-sm text-gray-600">Investment</div>
            </Card>
          </div>

          {/* Challenge, Solution, Results */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-red-50 rounded-3xl p-8 border-0">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-red-500 mr-3" />
                <h3 className="text-xl font-bold text-black">Challenge</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
            </Card>

            <Card className="bg-blue-50 rounded-3xl p-8 border-0">
              <div className="flex items-center mb-4">
                <BarChart3 className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-xl font-bold text-black">Solution</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{caseStudy.solution}</p>
            </Card>

            <Card className="bg-green-50 rounded-3xl p-8 border-0">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                <h3 className="text-xl font-bold text-black">Results</h3>
              </div>
              <ul className="space-y-2">
                {caseStudy.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{result}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-black mb-8 text-center">Project Timeline</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudy.timeline.map((phase, index) => (
                <Card key={index} className="bg-white rounded-3xl p-6 border border-gray-200 relative">
                  <div className="absolute -top-3 left-6 bg-purple-400 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="pt-4">
                    <h4 className="font-bold text-black mb-2">{phase.phase}</h4>
                    <div className="text-purple-400 font-semibold text-sm mb-3">{phase.duration}</div>
                    <p className="text-gray-600 text-sm">{phase.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-black mb-8 text-center">Project Gallery</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.images.map((image, index) => (
                <div key={index} className="relative h-64 rounded-3xl overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${caseStudy.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-purple-400 text-white rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Property?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can achieve similar results for your real estate portfolio.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Link href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-purple-400 hover:bg-gray-100 rounded-full px-8 py-3 font-medium text-lg">
                  Book a Call
                </Button>
              </Link>
              <Button size="icon" className="bg-white/20 hover:bg-white/30 text-white rounded-full w-12 h-12">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </Card>
        </div>
      </main>

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
