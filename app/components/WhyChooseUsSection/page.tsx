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
          src="/placeholder.svg?height=800&width=1400"
          alt="Modern loft interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Content Card */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 max-w-lg">
            <Badge
              variant="outline"
              className="mb-6 rounded-full px-4 py-2 border-gray-300"
            >
              Why choose us
            </Badge>

            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight">
              Discover why we're your top choice for real estate services.
            </h2>

            <div className="flex items-center space-x-3">
              <Link
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-purple-400 hover:bg-purple-500 text-white rounded-full px-8 py-3 font-medium">
                  Book a Call
                </Button>
              </Link>
              <Button
                size="icon"
                className="bg-purple-400 hover:bg-purple-500 text-white rounded-full w-12 h-12"
              >
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Floating Badges */}
          <div className="relative lg:block hidden">
            {/* Top Experience */}
            <div className="absolute top-0 left-0 bg-white rounded-full px-6 py-3 flex items-center space-x-3 shadow-lg">
              <span className="font-semibold text-black">Top Experience</span>
              <ArrowRight className="w-4 h-4 text-gray-600" />
            </div>

            {/* 24/7 Support */}
            <div className="absolute top-0 right-0 bg-white rounded-full px-6 py-3 flex items-center space-x-3 shadow-lg">
              <span className="font-semibold text-black">24/7 Support</span>
              <ArrowRight className="w-4 h-4 text-gray-600" />
            </div>

            {/* Advanced Technology */}
            <div className="absolute bottom-32 right-0 bg-white rounded-full px-6 py-3 flex items-center space-x-3 shadow-lg">
              <span className="font-semibold text-black">
                Advanced Technology
              </span>
              <ArrowRight className="w-4 h-4 text-gray-600" />
            </div>

            {/* Transparent Reporting */}
            <div className="absolute bottom-0 right-12 bg-white rounded-full px-6 py-3 flex items-center space-x-3 shadow-lg">
              <span className="font-semibold text-black">
                Transparent Reporting
              </span>
              <ArrowRight className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
