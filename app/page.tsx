"use client";

import Footer from "./components/Footer/page";
import Navbar from "./components/Navbar/page";
import HeroSection from "./components/HeroSection/page";
import PortfolioSection from "./components/PortfolioSection/page";
import ProcessSection from "./components/ProcessSection/page";
import ServicesSection from "./components/ServicesSection/page";
import TestimonialsSection from "./components/TestimonialsSection/page";
import WhyChooseUsSection from "./components/WhyChooseUsSection/page";
import { MinimalNewsletter } from "./components/Newsletter/page";
import HowWeWork from "./components/HowWeWork/page";
import FAQSection from "./components/FAQ/page";
import BlogSection from "./components/Blogs/page";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <HowWeWork />
      <PortfolioSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />
      <MinimalNewsletter />
      <Footer />
    </div>
  );
}
