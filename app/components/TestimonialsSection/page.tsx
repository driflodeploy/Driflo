import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  Clock,
  Shield,
  Award,
  TrendingUp,
  CheckCircle,
  MessageSquare,
  Heart,
  Zap,
  Target,
} from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="w-full px-4 lg:px-6 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-50 to-blue-50 px-6 py-3 rounded-full border border-purple-100 mb-4">
            <span className="text-sm font-semibold text-gray-700">
              Fun facts
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by thousands of property owners and managers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Testimonial 1 - Large */}
          <Card className="md:col-span-2 bg-purple-400 text-white rounded-3xl p-8 border-0">
            <CardContent className="p-0">
              <div className="flex items-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-6">
                "Bayt has completely transformed how we manage our property
                portfolio. The platform is intuitive and the support team is
                exceptional."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">SM</span>
                </div>
                <div>
                  <div className="font-semibold">Sarah Mitchell</div>
                  <div className="text-purple-100">Property Manager</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 2 */}
          <Card className="bg-white rounded-3xl p-6 border-0 shadow-sm">
            <CardContent className="p-0">
              <Clock className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-bold text-black mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                "Their support team is always available when we need help."
              </p>
              <div className="mt-4 text-sm font-medium text-black">
                - Mike Johnson
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 3 */}
          <Card className="bg-white rounded-3xl p-6 border-0 shadow-sm">
            <CardContent className="p-0">
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-bold text-black mb-2">Increased Revenue</h3>
              <p className="text-gray-600 text-sm">
                "We've seen a 30% increase in our rental income since using
                Bayt."
              </p>
              <div className="mt-4 text-sm font-medium text-black">
                - Lisa Chen
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 4 */}
          <Card className="bg-white rounded-3xl p-6 border-0 shadow-sm">
            <CardContent className="p-0">
              <Shield className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-bold text-black mb-2">Secure Platform</h3>
              <p className="text-gray-600 text-sm">
                "Security and data protection are top-notch. We feel confident
                using Bayt."
              </p>
              <div className="mt-4 text-sm font-medium text-black">
                - David Park
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 5 */}
          <Card className="bg-white rounded-3xl p-6 border-0 shadow-sm">
            <CardContent className="p-0">
              <CheckCircle className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-bold text-black mb-2">Easy Setup</h3>
              <p className="text-gray-600 text-sm">
                "Got up and running in minutes. The onboarding process is
                seamless."
              </p>
              <div className="mt-4 text-sm font-medium text-black">
                - Emma Wilson
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 6 - Large */}
          <Card className="md:col-span-2 bg-black text-white rounded-3xl p-8 border-0">
            <CardContent className="p-0">
              <Award className="w-10 h-10 text-purple-400 mb-6" />
              <p className="text-xl mb-6">
                "The best real estate management platform we've ever used.
                Highly recommend to any property professional."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">RT</span>
                </div>
                <div>
                  <div className="font-semibold">Robert Taylor</div>
                  <div className="text-gray-300">Real Estate Investor</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 7 */}
          <Card className="bg-white rounded-3xl p-6 border-0 shadow-sm">
            <CardContent className="p-0">
              <MessageSquare className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-bold text-black mb-2">Great Communication</h3>
              <p className="text-gray-600 text-sm">
                "Communication with tenants has never been easier."
              </p>
              <div className="mt-4 text-sm font-medium text-black">
                - Anna Rodriguez
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 8 */}
          <Card className="bg-white rounded-3xl p-6 border-0 shadow-sm">
            <CardContent className="p-0">
              <Heart className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-bold text-black mb-2">Love the UI</h3>
              <p className="text-gray-600 text-sm">
                "Beautiful, clean interface that makes work enjoyable."
              </p>
              <div className="mt-4 text-sm font-medium text-black">
                - Tom Anderson
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 9 */}
          <Card className="bg-white rounded-3xl p-6 border-0 shadow-sm">
            <CardContent className="p-0">
              <Zap className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-bold text-black mb-2">Lightning Fast</h3>
              <p className="text-gray-600 text-sm">
                "The platform is incredibly fast and responsive."
              </p>
              <div className="mt-4 text-sm font-medium text-black">
                - Jessica Lee
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 10 */}
          <Card className="bg-white rounded-3xl p-6 border-0 shadow-sm">
            <CardContent className="p-0">
              <Target className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-bold text-black mb-2">Perfect Solution</h3>
              <p className="text-gray-600 text-sm">
                "Exactly what we needed for our growing property business."
              </p>
              <div className="mt-4 text-sm font-medium text-black">
                - Mark Thompson
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
