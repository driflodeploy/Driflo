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
          <div className="inline-flex items-center bg-blue-50 px-6 py-3 rounded-full border border-blue-100 mb-8">
            <span className="text-sm font-semibold text-gray-700">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 leading-tight">
            What our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by businesses worldwide for digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Testimonial 1 - Large */}
          <Card className="md:col-span-2 bg-brand-blue text-white rounded-3xl p-8 border-0">
            <CardContent className="p-0">
              <div className="flex items-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-6">
                "Their custom headless storefront solution increased our online
                sales by 180%. The performance and user experience are
                outstanding."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">SM</span>
                </div>
                <div>
                  <div className="font-semibold">Sarah Mitchell</div>
                  <div className="text-blue-100">E-commerce Director</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 2 */}
          <Card className="bg-white rounded-3xl p-6 border-0 shadow-sm">
            <CardContent className="p-0">
              <Clock className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="font-bold text-black mb-2">Rapid Delivery</h3>
              <p className="text-gray-600 text-sm">
                "They delivered our mobile app in record time without
                compromising quality."
              </p>
              <div className="mt-4 text-sm font-medium text-black">
                - Mike Johnson
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 3 */}
          <Card className="bg-white rounded-3xl p-6 border-0 shadow-sm">
            <CardContent className="p-0">
              <TrendingUp className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="font-bold text-black mb-2">Revenue Growth</h3>
              <p className="text-gray-600 text-sm">
                "Our new website generated 250% more leads within the first
                month."
              </p>
              <div className="mt-4 text-sm font-medium text-black">
                - Lisa Chen
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 4 */}
          <Card className="bg-white rounded-3xl p-6 border-0 shadow-sm">
            <CardContent className="p-0">
              <Shield className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="font-bold text-black mb-2">Secure Solutions</h3>
              <p className="text-gray-600 text-sm">
                "Their development practices ensure our customer data is always
                protected."
              </p>
              <div className="mt-4 text-sm font-medium text-black">
                - David Park
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 5 */}
          <Card className="bg-white rounded-3xl p-6 border-0 shadow-sm">
            <CardContent className="p-0">
              <CheckCircle className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="font-bold text-black mb-2">
                Seamless Integration
              </h3>
              <p className="text-gray-600 text-sm">
                "The headless storefront integrated perfectly with our existing
                systems."
              </p>
              <div className="mt-4 text-sm font-medium text-black">
                - Emma Wilson
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 6 - Large */}
          <Card className="md:col-span-2 bg-black text-white rounded-3xl p-8 border-0">
            <CardContent className="p-0">
              <Award className="w-10 h-10 text-brand-lightBlue mb-6" />
              <p className="text-xl mb-6">
                "Best web development agency we've worked with. Their custom app
                helped us scale from 1,000 to 50,000 users in 6 months."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">RT</span>
                </div>
                <div>
                  <div className="font-semibold">Robert Taylor</div>
                  <div className="text-gray-300">Startup Founder</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 7 */}
          <Card className="bg-white rounded-3xl p-6 border-0 shadow-sm">
            <CardContent className="p-0">
              <MessageSquare className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="font-bold text-black mb-2">
                Excellent Communication
              </h3>
              <p className="text-gray-600 text-sm">
                "They kept us informed throughout the entire development
                process."
              </p>
              <div className="mt-4 text-sm font-medium text-black">
                - Anna Rodriguez
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 8 */}
          <Card className="bg-white rounded-3xl p-6 border-0 shadow-sm">
            <CardContent className="p-0">
              <Heart className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="font-bold text-black mb-2">Love the Design</h3>
              <p className="text-gray-600 text-sm">
                "Our customers love the beautiful, intuitive interface they
                created."
              </p>
              <div className="mt-4 text-sm font-medium text-black">
                - Tom Anderson
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 9 */}
          <Card className="bg-white rounded-3xl p-6 border-0 shadow-sm">
            <CardContent className="p-0">
              <Zap className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="font-bold text-black mb-2">
                Lightning Performance
              </h3>
              <p className="text-gray-600 text-sm">
                "Our website loads 3x faster after their optimization work."
              </p>
              <div className="mt-4 text-sm font-medium text-black">
                - Jessica Lee
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 10 */}
          <Card className="bg-white rounded-3xl p-6 border-0 shadow-sm">
            <CardContent className="p-0">
              <Target className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="font-bold text-black mb-2">Perfect Match</h3>
              <p className="text-gray-600 text-sm">
                "Their custom solution was exactly what our business needed to
                grow."
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
