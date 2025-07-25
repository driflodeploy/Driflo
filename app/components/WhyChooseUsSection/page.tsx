import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WhyChooseUsSection() {
  return (
    <section
      id="funfacts"
      className="w-full px-4 lg:px-6 py-16 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=800&fit=crop&crop=center"
          alt="Modern development office with team collaboration"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Content Card */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 max-w-lg">
            <div className="inline-flex items-center bg-blue-50 px-6 py-3 rounded-full border border-blue-100 mb-8">
              <span className="text-sm font-semibold text-gray-700">
                Why Choose us
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight">
              Discover why we're your top choice for custom development
              solutions.
            </h2>

            <div className="flex items-center space-x-3">
              <Link
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-brand-blue hover:bg-brand-blueHover  text-white rounded-full px-8 py-6 font-medium">
                  Book a Call
                </Button>
              </Link>
            </div>
          </div>

          {/* Floating Badges */}
          <div className="relative lg:block hidden">
            {/* Expert Development */}
            <div className="absolute top-20 left-0 bg-white rounded-full px-6 py-3 flex items-center space-x-3 shadow-lg">
              <span className="font-semibold text-black">
                Expert Development
              </span>
              <ArrowRight className="w-4 h-4 text-gray-600" />
            </div>

            {/* 24/7 Support */}
            <div className="absolute top-0 right-0 bg-white rounded-full px-6 py-3 flex items-center space-x-3 shadow-lg">
              <span className="font-semibold text-black">24/7 Support</span>
              <ArrowRight className="w-4 h-4 text-gray-600" />
            </div>

            {/* Cutting-Edge Tech Stack */}
            <div className="absolute bottom-32 right-0 bg-white rounded-full px-6 py-3 flex items-center space-x-3 shadow-lg">
              <span className="font-semibold text-black">
                Cutting-Edge Tech Stack
              </span>
              <ArrowRight className="w-4 h-4 text-gray-600" />
            </div>

            {/* Agile Development */}
            <div className="absolute bottom-10 right-80 bg-white rounded-full px-6 py-3 flex items-center space-x-3 shadow-lg">
              <span className="font-semibold text-black">
                Agile Development
              </span>
              <ArrowRight className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
