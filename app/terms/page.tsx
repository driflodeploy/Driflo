"use client";
import React from "react";
import {
  ArrowLeft,
  FileCheck,
  Users,
  AlertTriangle,
  Scale,
  Gavel,
  Building,
} from "lucide-react";
import Link from "next/link";

export default function TermsAndConditions() {
  const handleBackToHome = () => {
    // In a real app, this would use router navigation
    console.log("Navigate back to home");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mt-10 mx-auto">
        {/* Header with Back Button */}
        <div className="mb-8">
          <Link
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-6 group"
            href={"/"}
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Home
          </Link>

          <div className="flex items-center mb-4">
            <FileCheck className="w-8 h-8 text-purple-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">
              Terms and Conditions
            </h1>
          </div>

          <p className="text-gray-600">Last updated: July 25, 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 space-y-8">
          {/* Introduction */}
          <section>
            <div className="flex items-center mb-4">
              <Scale className="w-5 h-5 text-purple-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">
                Agreement to Terms
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using our real estate platform, you accept and
              agree to be bound by the terms and provision of this agreement. If
              you do not agree to abide by the above, please do not use this
              service.
            </p>
          </section>

          {/* Use License */}
          <section>
            <div className="flex items-center mb-4">
              <Building className="w-5 h-5 text-purple-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">
                Use License
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Permission is granted to temporarily access our platform for
                personal, non-commercial transitory viewing only. This includes
                the license to:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Browse and search property listings
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Contact property managers and agents
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Save properties to your favorites list
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Schedule property viewings and consultations
                </li>
              </ul>
            </div>
          </section>

          {/* User Responsibilities */}
          <section>
            <div className="flex items-center mb-4">
              <Users className="w-5 h-5 text-purple-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">
                User Responsibilities
              </h2>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-4">
              <p className="text-blue-800 font-medium">
                As a user of our platform, you agree to:
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    Provide accurate information
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    Respect other users and agents
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    Use the platform lawfully
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    Maintain account security
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    Report suspicious activity
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    Honor scheduled appointments
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Prohibited Uses */}
          <section>
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">
                Prohibited Uses
              </h2>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 font-medium mb-3">
                You may not use our platform to:
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-red-700">
                    Engage in fraudulent or deceptive practices
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-red-700">
                    Spam or harass other users
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-red-700">
                    Scrape or automatically collect data
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-red-700">
                    Violate any applicable laws or regulations
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Property Listings */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Property Listings Disclaimer
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <p className="text-yellow-800 leading-relaxed">
                <strong>Important:</strong> Property listings are provided by
                third-party agents and property managers. We do not guarantee
                the accuracy, completeness, or availability of any listing. All
                property details, prices, and availability are subject to change
                without notice.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <div className="flex items-center mb-4">
              <Gavel className="w-5 h-5 text-purple-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">
                Limitation of Liability
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              In no event shall our company or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use our platform.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">
                This limitation applies to:
              </h3>
              <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                <div>• Direct damages</div>
                <div>• Indirect damages</div>
                <div>• Incidental damages</div>
                <div>• Consequential damages</div>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Account Termination
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may terminate or suspend your account immediately, without
              prior notice or liability, for any reason, including without
              limitation if you breach the Terms. Upon termination, your right
              to use the platform will cease immediately.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material, we will try to
              provide at least 30 days notice prior to any new terms taking
              effect.
            </p>
          </section>

          {/* Contact Information */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Questions About Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms and Conditions, please
              contact us:
            </p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> legal@realestateapp.com
                <br />
                <strong>Phone:</strong> (555) 123-4567
                <br />
                <strong>Address:</strong> 123 Terms Street, Legal City, LC 12345
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          By continuing to access or use our platform after those revisions
          become effective, you agree to be bound by the revised terms.
        </div>
      </div>
    </div>
  );
}
