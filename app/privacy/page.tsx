"use client";
import React from "react";
import { ArrowLeft, Shield, Eye, Lock, FileText } from "lucide-react";

export default function PrivacyPolicy() {
  const handleBackToHome = () => {
    // In a real app, this would use router navigation
    console.log("Navigate back to home");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header with Back Button */}
        <div className="mb-8">
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-6 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Home
          </button>

          <div className="flex items-center mb-4">
            <Shield className="w-8 h-8 text-purple-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          </div>

          <p className="text-gray-600">Last updated: July 25, 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 space-y-8">
          {/* Introduction */}
          <section>
            <div className="flex items-center mb-4">
              <Eye className="w-5 h-5 text-purple-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">
                Introduction
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We respect your privacy and are committed to protecting your
              personal data. This privacy policy explains how we collect, use,
              and safeguard your information when you use our real estate
              services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <div className="flex items-center mb-4">
              <FileText className="w-5 h-5 text-purple-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">
                Information We Collect
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Personal Information
                </h3>
                <p>
                  Name, email address, phone number, and property preferences
                  when you create an account or contact us.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Usage Data</h3>
                <p>
                  Information about how you interact with our platform,
                  including pages visited and features used.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Location Data
                </h3>
                <p>
                  With your consent, we may collect location data to provide
                  relevant property recommendations.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <div className="flex items-center mb-4">
              <Lock className="w-5 h-5 text-purple-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">
                How We Use Your Information
              </h2>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To provide and maintain our real estate services
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To communicate with you about properties and services
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To improve our platform and user experience
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To comply with legal obligations
              </li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We implement industry-standard security measures to protect your
              personal information. However, no method of transmission over the
              internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-1">Access</h3>
                <p className="text-sm text-gray-600">
                  Request access to your personal data
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-1">Correction</h3>
                <p className="text-sm text-gray-600">
                  Update or correct your information
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-1">Deletion</h3>
                <p className="text-sm text-gray-600">
                  Request deletion of your data
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-1">Portability</h3>
                <p className="text-sm text-gray-600">
                  Request a copy of your data
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@realestateapp.com
                <br />
                <strong>Phone:</strong> (555) 123-4567
                <br />
                <strong>Address:</strong> 123 Privacy Street, Data City, DC
                12345
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          This policy is effective as of July 25, 2025 and will remain in effect
          except with respect to any changes in its provisions in the future.
        </div>
      </div>
    </div>
  );
}
