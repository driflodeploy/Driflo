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
              className="px-6 py-3 bg-brand-blue text-white rounded-lg hover:bg-brand-blueHover transition-colors font-medium"
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
