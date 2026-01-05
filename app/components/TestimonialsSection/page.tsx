import { ArrowRight, Quote, Sparkles } from "lucide-react";
import Link from "next/link";

export default function TestimonialsSection() {
  // Option 1: If you have ANY real feedback (even from small projects, freelance work, or beta clients)
  // Replace these with actual quotes. Even 1-2 real testimonials beat 10 fake ones.
  
  const hasRealTestimonials = false; // Change to true when you have real ones
  
  // Example structure for when you DO have real testimonials:
  const realTestimonials = [
    {
      quote: "Your actual client quote here. Keep it real and specific.",
      name: "Real Name",
      role: "Their Role",
      company: "Their Company",
      // Optional: Add their photo, logo, or link to their site
    },
  ];

  // For now, show an honest "early stage" version
  if (!hasRealTestimonials) {
    return (
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Our Promise
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              We're building our
              <br />
              <span className="text-gray-400">reputation, one project at a time.</span>
            </h2>
          </div>

          {/* Honest Message Card */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 sm:p-12 mb-12">
            <div className="max-w-3xl">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                We're a new studio—and we're okay saying that.
              </h3>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We don't have pages of testimonials yet. What we do have is a team with 
                years of experience building for companies of all sizes, a genuine passion 
                for our craft, and the hunger that comes with building something new.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our early clients get our full attention, competitive pricing, and the 
                knowledge that we'll work harder for you because we're building our 
                portfolio too. That's a partnership, not just a transaction.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/work"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-gray-800"
                >
                  See Our Work Instead
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="https://calendly.com/todriflo/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-gray-900 font-semibold rounded-xl border border-gray-200 transition-all duration-300 hover:border-gray-900"
                >
                  Let's Talk
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* What You Can Expect */}
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Weekly Updates",
                description: "You'll never wonder what's happening. We share progress every week with working demos.",
              },
              {
                title: "Direct Access",
                description: "Talk to the people doing the work, not account managers. Faster answers, better results.",
              },
              {
                title: "30-Day Support",
                description: "We stick around after launch. If something breaks, we fix it—included in every project.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:border-gray-300"
              >
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // When you DO have real testimonials, use this version:
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Client Feedback
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Don't take our word.
            <br />
            <span className="text-gray-400">Take theirs.</span>
          </h2>
        </div>

        {/* Real Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {realTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:border-gray-200"
            >
              <Quote className="w-8 h-8 text-gray-300 mb-4" />
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gray-900 rounded-2xl p-8 sm:p-10 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Want to be our next success story?
          </h3>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Let's talk about your project and see how we can help you get similar results.
          </p>
          <Link
            href="https://calendly.com/todriflo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-gray-900 font-semibold rounded-xl transition-all duration-300 hover:bg-gray-100"
          >
            Book a Free Call
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}