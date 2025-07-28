"use client";

import { useState } from "react";
import { ArrowRight, Mail, CheckCircle, Star, TrendingUp } from "lucide-react";

export function MinimalNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  // Google Form configuration for direct submission
  const GOOGLE_FORM_CONFIG = {
    // Replace viewform with formResponse for direct submission
    submitUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdQ9znVolBL7B1qNDswxP-Rq4tGVl9KyGBq6mdsa95oOt-IDQ/formResponse",
    emailFieldId: "entry.270096879", // Email field ID from your URL
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setStatus("submitting");

    try {
      // Create FormData for Google Forms submission
      const formData = new FormData();
      formData.append(GOOGLE_FORM_CONFIG.emailFieldId, email);

      // Submit to Google Forms
      await fetch(GOOGLE_FORM_CONFIG.submitUrl, {
        method: "POST",
        mode: "no-cors", // Required for Google Forms
        body: formData,
      });

      // Since we're using no-cors, we can't read the response
      // But if we reach here without throwing, the submission likely succeeded
      setStatus("success");

      // Reset form after successful submission
      setEmail("");

      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setStatus("error");

      // Reset error status after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-8">
          Get weekly insights delivered to your inbox.
        </p>

        {/* Success Message */}
        {status === "success" && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center justify-center gap-2 text-green-800">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">
                Successfully subscribed! Welcome aboard! 🎉
              </span>
            </div>
          </div>
        )}

        {/* Error Message */}
        {status === "error" && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center justify-center gap-2 text-red-800">
              <Mail className="w-5 h-5" />
              <span className="font-medium">
                Something went wrong. Please try again.
              </span>
            </div>
          </div>
        )}

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            required
            disabled={status === "submitting"}
          />
          <button
            type="submit"
            disabled={status === "submitting" || !email}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-black/80 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {status === "submitting" ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Subscribing...
              </>
            ) : (
              <>
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4">
          Join 10K+ readers. No spam ever. Unsubscribe anytime.
        </p>

        {/* Trust indicators */}
        <div className="flex items-center justify-center gap-6 mt-6 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            <span>Weekly insights</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            <span>Industry trends</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            <span>No spam</span>
          </div>
        </div>
      </div>
    </section>
  );
}
