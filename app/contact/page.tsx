"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "../components/Footer/page";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] mx-6 mt-8 mb-16 rounded-2xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
          alt="Contact our development team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-12">
          <h1 className="text-6xl font-light text-white mb-6 tracking-wide">
            Let's Build Together
          </h1>
          <p className="text-white/90 text-xl max-w-2xl leading-relaxed">
            Ready to transform your business with a custom headless solution?
            Let's discuss your project or book a free consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg">
              Book Free Consultation
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
              asChild
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="mx-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-light text-black mb-8">
                Start Your Project
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Your first name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Your last name"
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@company.com"
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your company name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option>Headless E-commerce</option>
                    <option>Custom Web Application</option>
                    <option>API Integration</option>
                    <option>Performance Optimization</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project requirements, timeline, and goals..."
                    rows={6}
                    className="w-full"
                  />
                </div>
                <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg w-full md:w-auto">
                  Send Project Brief
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-light text-black mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-black mb-4">
                    Schedule a Consultation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Book a free 30-minute consultation to discuss your project
                    requirements and explore how we can help.
                    <br />
                    <br />
                    Available Monday - Friday
                    <br />
                    9:00 AM - 6:00 PM EST
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-black mb-4">
                    Contact Information
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Email: info@Driftlo.dev
                    <br />
                    Phone: +1 (555) 123-4567
                    <br />
                    Response time: Within 24 hours
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-black mb-4">
                    Follow Our Work
                  </h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm">
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm">
                      Twitter
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-12 relative h-[300px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80"
                  alt="Driftlo development workspace"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mx-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-black mb-6">Our Process</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From initial consultation to project delivery, here's how we work
              together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-medium text-black mb-3">Discovery</h3>
              <p className="text-gray-600">
                We understand your business goals and technical requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-medium text-black mb-3">Planning</h3>
              <p className="text-gray-600">
                We create a detailed project roadmap and technical architecture
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-medium text-black mb-3">
                Development
              </h3>
              <p className="text-gray-600">
                We build your solution using best practices and modern
                technologies
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-medium text-black mb-3">Launch</h3>
              <p className="text-gray-600">
                We deploy your project and provide ongoing support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
