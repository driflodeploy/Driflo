"use client";

import { useState } from "react";
import { ArrowRight, Mail, CheckCircle, Star, TrendingUp } from "lucide-react";

// 1. Minimal Clean
export function MinimalNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-8">
          Get weekly insights delivered to your inbox.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
            <CheckCircle className="w-5 h-5" />
            Thanks! Check your email.
          </div>
        )}

        <p className="text-sm text-gray-500 mt-4">
          Join 10K+ readers. No spam ever.
        </p>
      </div>
    </section>
  );
}

// 2. Gradient Premium
export function GradientNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16 px-4">
      <div className="max-w-2xl mx-auto text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm mb-6">
          <Star className="w-4 h-4" />
          Premium Insights
        </div>

        <h2 className="text-4xl font-bold mb-4">Unlock Market Intelligence</h2>
        <p className="text-purple-100 mb-8">
          Join elite professionals getting exclusive weekly analysis.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-white/70"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Join
            </button>
          </form>
        ) : (
          <div className="bg-white/20 rounded-lg py-4 px-6">
            <div className="flex items-center justify-center gap-2 text-green-300 font-medium">
              <CheckCircle className="w-5 h-5" />
              Welcome! Confirmation sent.
            </div>
          </div>
        )}

        <div className="flex justify-center items-center gap-6 text-sm text-purple-100 mt-6">
          <span>25K+ Members</span>
          <span>•</span>
          <span>4.9★ Rating</span>
        </div>
      </div>
    </section>
  );
}

// 3. Card Style
export function CardNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Weekly Insights
            </h2>
            <p className="text-gray-600">
              Market trends and expert analysis delivered weekly.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
              >
                Subscribe Free
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="text-center bg-green-50 rounded-lg p-4">
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-green-700 font-medium">
                All set! Check your email.
              </p>
            </div>
          )}

          <p className="text-xs text-gray-500 text-center mt-4">
            Free • No spam • Unsubscribe anytime
          </p>
        </div>
      </div>
    </section>
  );
}

// 4. Dark Modern
export function DarkNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            The Future
          </span>
          <span className="text-white"> Delivered</span>
        </h2>
        <p className="text-gray-400 mb-8">
          Join visionary leaders getting cutting-edge insights.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all font-medium"
            >
              Join
            </button>
          </form>
        ) : (
          <div className="bg-green-500/20 border border-green-500/30 rounded-lg py-4 px-6">
            <div className="flex items-center justify-center gap-2 text-green-400 font-medium">
              <CheckCircle className="w-5 h-5" />
              Welcome to the future!
            </div>
          </div>
        )}

        <div className="flex justify-center items-center gap-6 text-sm text-gray-500 mt-6">
          <span>15K+ Active</span>
          <span>•</span>
          <span>Privacy First</span>
        </div>
      </div>
    </section>
  );
}

// 5. Real Estate Focus
export function RealEstateNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full text-sm font-medium text-blue-800 mb-6">
          <TrendingUp className="w-4 h-4" />
          Market Intelligence
        </div>

        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Master Real Estate with
          <span className="block text-blue-600">Expert Insights</span>
        </h2>
        <p className="text-gray-600 mb-8">
          Join 25K+ professionals getting weekly market analysis and investment
          opportunities.
        </p>

        {!submitted ? (
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your professional email"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
              >
                Get Free Insights
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              Free forever • No spam • Unsubscribe anytime
            </p>
          </div>
        ) : (
          <div className="bg-green-50 rounded-xl p-6 max-w-md mx-auto">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <h4 className="font-bold text-green-800 mb-2">Welcome aboard!</h4>
            <p className="text-green-700 text-sm">
              Check your email to confirm and get your first report.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
