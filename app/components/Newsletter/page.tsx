"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Mail } from "lucide-react";

export function MinimalNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const GOOGLE_FORM_CONFIG = {
    submitUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdQ9znVolBL7B1qNDswxP-Rq4tGVl9KyGBq6mdsa95oOt-IDQ/formResponse",
    emailFieldId: "entry.270096879",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");

    try {
      const formData = new FormData();
      formData.append(GOOGLE_FORM_CONFIG.emailFieldId, email);

      await fetch(GOOGLE_FORM_CONFIG.submitUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-12">
          <div className="max-w-xl mx-auto text-center">
            {/* Icon */}
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-6 h-6 text-gray-600" />
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Get notified when we launch new work
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              We'll send you an email when we publish new projects, case
              studies, or guides. That's it—no weekly newsletters, no spam, just
              occasional updates when we have something worth sharing.
            </p>

            {/* Success Message */}
            {status === "success" && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                <div className="flex items-center justify-center gap-2 text-emerald-800">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">
                    You're on the list. We'll be in touch.
                  </span>
                </div>
              </div>
            )}

            {/* Error Message */}
            {status === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                <div className="flex items-center justify-center gap-2 text-red-800">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">
                    Something went wrong. Please try again.
                  </span>
                </div>
              </div>
            )}

            {/* Form */}
            {status !== "success" && (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-gray-900 placeholder:text-gray-400"
                  required
                  disabled={status === "submitting"}
                />
                <button
                  type="submit"
                  disabled={status === "submitting" || !email}
                  className="px-6 py-3.5 bg-gray-900 text-white rounded-xl font-semibold transition-all duration-200 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {status === "submitting" ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 text-white"
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
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Adding...</span>
                    </>
                  ) : (
                    <>
                      <span>Notify Me</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Honest disclaimer */}
            <p className="text-xs text-gray-400 mt-4">
              Expect maybe 4-6 emails per year. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}