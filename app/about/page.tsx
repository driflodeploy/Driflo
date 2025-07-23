"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "../components/Footer/page";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Founder & Lead Developer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },

    {
      name: "Marcus Johnson",
      role: "Senior Full-Stack Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] mx-6 mt-8 mb-16 rounded-2xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
          alt="About Driftlo team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-12">
          <h1 className="text-6xl font-light text-white mb-6 tracking-wide">
            About Driftlo
          </h1>
          <p className="text-white/90 text-xl max-w-3xl leading-relaxed">
            We're a team of passionate developers specializing in headless
            commerce solutions that drive real business results
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light text-black mb-8">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded in 2020, Driftlo emerged from a simple belief:
                e-commerce should be fast, flexible, and future-proof. We saw
                businesses struggling with traditional platforms that couldn't
                keep up with modern user expectations.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Today, we're proud to be at the forefront of the headless
                commerce revolution, helping brands deliver exceptional digital
                experiences using Shopify's powerful backend and cutting-edge
                frontend technologies like Hydrogen.
              </p>
              <Button
                className="bg-black text-white hover:bg-gray-800 px-8 py-3"
                asChild
              >
                <Link href="/case-studies">View Our Work</Link>
              </Button>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
                alt="Driftlo development process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-black mb-6">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide our approach to every project and client
              relationship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-light text-black mb-4">
                Performance First
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every line of code we write is optimized for speed and
                performance. We believe fast websites drive better business
                results.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-light text-black mb-4">
                Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We stay ahead of the curve, constantly exploring new
                technologies and methodologies to deliver cutting-edge
                solutions.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-light text-black mb-4">
                Partnership
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We don't just build websites; we build lasting relationships.
                Your success is our success, and we're committed to your
                long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="mx-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-black mb-6">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The talented individuals behind every successful headless commerce
              project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-light text-black mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Technologies */}
      <section className="mx-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-black mb-6">
              Our Tech Stack
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We work with the latest technologies to deliver exceptional
              results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Shopify",
              "Hydrogen",
              "React",
              "Next.js",
              "TypeScript",
              "GraphQL",
              "Tailwind CSS",
              "Node.js",
              "Vercel",
              "AWS",
              "MongoDB",
              "PostgreSQL",
            ].map((tech, index) => (
              <div
                key={index}
                className="text-center p-4 bg-gray-50 rounded-xl"
              >
                <span className="text-gray-800 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-6 mb-16">
        <div className="max-w-7xl mx-auto bg-black text-white rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-light mb-6">Ready to Work Together?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how our expertise can help bring
            your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
