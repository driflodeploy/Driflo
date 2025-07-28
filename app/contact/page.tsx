"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "../components/Footer/page";
import { useState } from "react";

export default function ContactPage() {
  // Form state
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

  // Google Form configuration for direct submission
  const GOOGLE_FORM_CONFIG = {
    // Replace viewform with formResponse for direct submission
    submitUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSeZJbHBk5MLc0ULSkEWMb_41oVtcR6-1S8gB-i3T8KLdY6nDw/formResponse",
    fields: {
      name: "entry.1716835002", // Name field
      email: "entry.1417272213", // Email field
      company: "entry.390834792", // Company field
      message: "entry.401935254", // Message field
    },
  };

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Reset submit status when user starts typing again
    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields (Name, Email, and Message)");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create FormData for submission
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

      // Submit to Google Forms
      const response = await fetch(GOOGLE_FORM_CONFIG.submitUrl, {
        method: "POST",
        mode: "no-cors", // Required for Google Forms
        body: formDataToSubmit,
      });

      // Since we're using no-cors, we can't read the response
      // But if we reach here without throwing, the submission likely succeeded
      setSubmitStatus("success");

      // Reset form after successful submission
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

  const CallToActionButtons = () => (
    <div className="flex items-center justify-center md:justify-start">
      <Link
        href="https://calendly.com/todriflo/30min"
        target="_blank"
        className="group relative inline-flex items-center justify-center px-6 py-4 text-sm font-semibold text-black bg-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black hover:text-white "
      >
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Shine effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 skew-x-12"></div>

        {/* Button text */}
        <span className="relative z-10 flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
          Book Free Consultation
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>

        {/* Border glow */}
        <div className="absolute inset-0 rounded-xl bg-brand-blue opacity-75 blur-sm group-hover:blur-md transition-all duration-300 -z-10"></div>
      </Link>
    </div>
  );

  const SubmitButton = () => (
    <div className="flex items-center justify-center md:justify-start">
      <button
        type="submit"
        disabled={
          !formData.name || !formData.email || !formData.message || isSubmitting
        }
        className="group relative inline-flex items-center justify-center px-6 py-4 text-sm font-semibold text-white bg-black rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Shine effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 skew-x-12"></div>

        {/* Button text */}
        <span className="relative z-10 flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
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
              Sending...
            </>
          ) : (
            <>
              Send Message
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </>
          )}
        </span>

        {/* Border glow */}
        <div className="absolute inset-0 rounded-xl bg-black opacity-75 blur-sm group-hover:blur-md transition-all duration-300 -z-10"></div>
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] mx-6 mt-8 mb-16 rounded-2xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
          alt="Contact our development team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight">
            Let's Build Together
          </h2>
          <p className="text-white/90 text-xl max-w-2xl leading-relaxed">
            Ready to transform your business with a custom headless solution?
            Let's discuss your project or book a free consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <CallToActionButtons />
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="mx-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-light text-black mb-8">
                Start Your Project
              </h2>

              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p className="text-sm text-green-800">
                      <strong>Message sent successfully!</strong> We'll get back
                      to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-red-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-sm text-red-800">
                      <strong>Something went wrong.</strong> Please try again or
                      contact us directly at todriflo@gmail.com
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@company.com"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements, timeline, and goals..."
                    rows={6}
                    className="w-full"
                    required
                  />
                </div>

                <SubmitButton />
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-light text-black mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-black mb-4">
                    Schedule a Consultation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Book a free 30-minute consultation to discuss your project
                    requirements and explore how we can help.
                    <br />
                    <br />
                    Available Monday - Friday
                    <br />
                    9:00 AM - 6:00 PM EST
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-black mb-4">
                    Contact Information
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Email: todriflo@gmail.com
                    <br />
                    Response time: Within 24 hours
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-black mb-4">
                    Follow Our Work
                  </h3>
                  <div className="flex space-x-4">
                    <a href="https://github.com/driflodeploy" target="_blank">
                      <Button variant="outline" size="sm">
                        GitHub
                      </Button>
                    </a>
                    <a href="https://instagram.com/driflo.team" target="_blank">
                      <Button variant="outline" size="sm">
                        Instagram
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
