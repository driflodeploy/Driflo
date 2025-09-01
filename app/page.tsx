"use client";

import Footer from "./components/Footer/page";
import Navbar from "./components/Navbar/page";
import HeroSection from "./components/HeroSection/page";
import PortfolioSection from "./components/PortfolioSection/page";
import ServicesSection from "./components/ServicesSection/page";
import TestimonialsSection from "./components/TestimonialsSection/page";
import WhyChooseUsSection from "./components/WhyChooseUsSection/page";
import { MinimalNewsletter } from "./components/Newsletter/page";
import HowWeWork from "./components/HowWeWork/page";
import FAQSection from "./components/FAQ/page";
import BlogSection from "./components/Blogs/page";
import { ScrollTimeline } from "./components/ProcessSection/page";
import {
  MessageCircle,
  Lightbulb,
  Palette,
  Code,
  TestTube,
  Rocket,
} from "lucide-react";

const processSteps = [
  {
    id: 1,
    icon: MessageCircle,
    title: "Discovery & Consultation",
    subtitle: "Understanding Your Vision",
    description:
      "We start with in-depth discussions to understand your business goals, target audience, and project requirements.",
    duration: "1-2 weeks",
    deliverables: ["Project Brief", "User Research", "Competitive Analysis"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Strategy & Planning",
    subtitle: "Crafting the Blueprint",
    description:
      "We develop a comprehensive strategy and project roadmap including architecture planning and technology selection.",
    duration: "1-2 weeks",
    deliverables: ["Project Roadmap", "Technical Architecture", "Wireframes"],
    color: "from-indigo-500 to-pink-600",
  },
  {
    id: 3,
    icon: Palette,
    title: "Design & Prototyping",
    subtitle: "Bringing Ideas to Life",
    description:
      "Our design team creates stunning visual concepts and interactive prototypes focused on user experience.",
    duration: "2-3 weeks",
    deliverables: ["UI/UX Design", "Interactive Prototypes", "Design System"],
    color: "from-pink-500 to-rose-600",
  },
  {
    id: 4,
    icon: Code,
    title: "Development & Integration",
    subtitle: "Building Your Solution",
    description:
      "Using cutting-edge technologies, we develop your project with clean, scalable code and high performance.",
    duration: "4-8 weeks",
    deliverables: [
      "Frontend Development",
      "Backend Systems",
      "API Integration",
    ],
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 5,
    icon: TestTube,
    title: "Testing & Optimization",
    subtitle: "Ensuring Excellence",
    description:
      "Comprehensive testing across all devices and browsers with performance optimization and bug fixes.",
    duration: "1-2 weeks",
    deliverables: [
      "Quality Assurance",
      "Performance Testing",
      "Security Audit",
    ],
    color: "from-orange-500 to-amber-600",
  },
  {
    id: 6,
    icon: Rocket,
    title: "Launch & Deployment",
    subtitle: "Going Live",
    description:
      "We handle the complete deployment process and ensure a smooth launch with post-launch support.",
    duration: "1 week",
    deliverables: ["Production Deployment", "SSL Setup", "Analytics"],
    color: "from-green-500 to-emerald-600",
  },
];

// Transform process steps to match TimelineEvent interface
const timelineEvents = processSteps.map((step, index) => ({
  id: step.id.toString(),
  year: `Step ${step.id}`,
  title: step.title,
  subtitle: step.subtitle,
  description: `${step.description} Duration: ${
    step.duration
  }. Deliverables: ${step.deliverables.join(", ")}.`,
  icon: <step.icon className="h-4 w-4" />,
  color: "primary",
}));

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowWeWork />
      <PortfolioSection />
      <ServicesSection />
      <ScrollTimeline
        title="Our Development Process"
        subtitle="Discover how we bring your ideas to life through our proven methodology"
        events={timelineEvents}
        cardAlignment="alternating"
        revealAnimation="slide"
        cardVariant="elevated"
        cardEffect="glow"
      />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />
      <MinimalNewsletter />
      <Footer />
    </div>
  );
}
