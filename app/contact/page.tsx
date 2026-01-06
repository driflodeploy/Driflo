"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "../components/Footer/page";
import { useState } from "react";
import { Mail, Calendar, ArrowRight, Clock, Send, Github } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const GOOGLE_FORM_CONFIG = {
    submitUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSeZJbHBk5MLc0ULSkEWMb_41oVtcR6-1S8gB-i3T8KLdY6nDw/formResponse",
    fields: {
      name: "entry.1716835002",
      email: "entry.1417272213",
      company: "entry.390834792",
      message: "entry.401935254",
    },
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append(GOOGLE_FORM_CONFIG.fields.name, formData.name);
      formDataToSubmit.append(GOOGLE_FORM_CONFIG.fields.email, formData.email);
      formDataToSubmit.append(
        GOOGLE_FORM_CONFIG.fields.company,
        formData.company
      );
      formDataToSubmit.append(
        GOOGLE_FORM_CONFIG.fields.message,
        formData.message
      );

      await fetch(GOOGLE_FORM_CONFIG.submitUrl, {
        method: "POST",
        mode: "no-cors",
        body: formDataToSubmit,
      });

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Simple and direct */}
      <section className="px-6 pt-24 pb-12 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4 tracking-tight">
          Let's talk
        </h1>
        <p className="text-gray-600 text-lg">
          Have a project in mind? We'd love to hear about it. 
          Send us a message or book a quick call.
        </p>
      </section>

      {/* Quick Actions */}
      <section className="px-6 pb-12 max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="https://calendly.com/todriflo/30min"
            target="_blank"
            className="group flex items-center gap-4 p-5 bg-black text-white rounded-2xl hover:bg-gray-900 transition-colors"
          >
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="font-semibold">Book a call</div>
              <div className="text-sm text-gray-400">Free 30-min consultation</div>
            </div>
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
          </Link>

          <a
            href="mailto:todriflo@gmail.com"
            className="group flex items-center gap-4 p-5 bg-gray-100 text-black rounded-2xl hover:bg-gray-200 transition-colors"
          >
            <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="font-semibold">Email us</div>
              <div className="text-sm text-gray-500">todriflo@gmail.com</div>
            </div>
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 py-12 max-w-2xl mx-auto">
        <div className="bg-gray-50 rounded-3xl p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-black mb-2">
            Send us a message
          </h2>
          <p className="text-gray-600 mb-8">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>

          {/* Success Message */}
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-green-900">Message sent!</p>
                  <p className="text-sm text-green-700">We'll get back to you within 24 hours.</p>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
                <div>
                  <p className="font-semibold text-red-900">Something went wrong</p>
                  <p className="text-sm text-red-700">
                    Please try again or email us directly at todriflo@gmail.com
                  </p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full bg-white border-gray-200 rounded-xl h-12"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@company.com"
                  className="w-full bg-white border-gray-200 rounded-xl h-12"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company <span className="text-gray-400">(optional)</span>
              </label>
              <Input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Your company"
                className="w-full bg-white border-gray-200 rounded-xl h-12"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Tell us about your project <span className="text-red-500">*</span>
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="What are you building? What's your timeline? Any specific requirements?"
                rows={5}
                className="w-full bg-white border-gray-200 rounded-xl resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={!formData.name || !formData.email || !formData.message || isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send message
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Additional Info */}
      <section className="px-6 py-12 max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Clock className="w-5 h-5 text-gray-600" />
            </div>
            <h3 className="font-semibold text-black mb-1">Response time</h3>
            <p className="text-sm text-gray-600">Within 24 hours</p>
          </div>
          <div>
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-5 h-5 text-gray-600" />
            </div>
            <h3 className="font-semibold text-black mb-1">Availability</h3>
            <p className="text-sm text-gray-600">Mon-Fri, 9am-6pm EST</p>
          </div>
          <div>
            <a 
              href="https://github.com/driflodeploy" 
              target="_blank"
              className="block group"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-black group-hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-black mb-1">GitHub</h3>
              <p className="text-sm text-gray-600">See our work</p>
            </a>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="px-6 py-16 max-w-2xl mx-auto text-center">
        <div className="bg-gray-100 rounded-3xl p-10">
          <h2 className="text-2xl font-bold text-black mb-3">
            Prefer to talk first?
          </h2>
          <p className="text-gray-600 mb-6">
            Book a free 30-minute call. No commitment, just a conversation 
            about what you're building.
          </p>
          <Link
            href="https://calendly.com/todriflo/30min"
            target="_blank"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
          >
            Schedule a call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}