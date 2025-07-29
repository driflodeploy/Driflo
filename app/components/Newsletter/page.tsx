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
    <section className="bg-white py-8 sm:py-16 w-full max-w-full overflow-hidden">
      <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Stay Updated
        </h2>
        <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
          Get weekly insights delivered to your inbox.
        </p>

        {/* Success Message */}
        {status === "success" && (
          <div className="mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg mx-auto w-full max-w-md">
            <div className="flex items-center justify-center gap-2 text-green-800 text-sm sm:text-base">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="font-medium text-center">
                Successfully subscribed! Welcome aboard! 🎉
              </span>
            </div>
          </div>
        )}

        {/* Error Message */}
        {status === "error" && (
          <div className="mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg mx-auto w-full max-w-md">
            <div className="flex items-center justify-center gap-2 text-red-800 text-sm sm:text-base">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="font-medium text-center">
                Something went wrong. Please try again.
              </span>
            </div>
          </div>
        )}

        {/* Newsletter Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full px-0"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base min-w-0"
            required
            disabled={status === "submitting"}
          />
          <button
            type="submit"
            disabled={status === "submitting" || !email}
            className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-black text-white rounded-lg hover:bg-black/80 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base min-w-fit"
          >
            {status === "submitting" ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-3 w-3 sm:h-4 sm:w-4 text-white flex-shrink-0"
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
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              </>
            )}
          </button>
        </form>

        <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 px-2">
          Join 10K+ readers. No spam ever. Unsubscribe anytime.
        </p>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-4 sm:mt-6 text-xs text-gray-400 px-2">
          <div className="flex items-center gap-1 whitespace-nowrap">
            <Star className="w-3 h-3 fill-current flex-shrink-0" />
            <span>Weekly insights</span>
          </div>
          <div className="flex items-center gap-1 whitespace-nowrap">
            <TrendingUp className="w-3 h-3 flex-shrink-0" />
            <span>Industry trends</span>
          </div>
          <div className="flex items-center gap-1 whitespace-nowrap">
            <CheckCircle className="w-3 h-3 flex-shrink-0" />
            <span>No spam</span>
          </div>
        </div>
      </div>
    </section>
  );
}
