import { motion } from "framer-motion";
import { ArrowLeft, Accessibility, Monitor, Keyboard, Eye, Volume2, MessageSquare, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => window.history.back()}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Button>
            <div className="flex items-center space-x-2">
              <Accessibility className="text-blue-600 w-8 h-8" />
              <h1 className="text-2xl font-bold text-gray-900">Accessibility Statement</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">Accessible for Everyone</h2>
            <p className="text-xl text-blue-100 mb-8">
              Our commitment to creating an inclusive digital experience for all users.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <Monitor className="w-12 h-12 mx-auto mb-3 text-blue-200" />
                <h3 className="font-semibold mb-2">WCAG 2.1 Compliant</h3>
                <p className="text-sm text-blue-100">Following web accessibility standards</p>
              </div>
              <div className="text-center">
                <Keyboard className="w-12 h-12 mx-auto mb-3 text-blue-200" />
                <h3 className="font-semibold mb-2">Universal Access</h3>
                <p className="text-sm text-blue-100">Works with all assistive technologies</p>
              </div>
              <div className="text-center">
                <Eye className="w-12 h-12 mx-auto mb-3 text-blue-200" />
                <h3 className="font-semibold mb-2">Responsive Design</h3>
                <p className="text-sm text-blue-100">Optimized for all devices</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h2>
            <p className="text-gray-600 mb-6">
              At RiteFit.AI, we are committed to making our website accessible to everyone, regardless of their abilities. We believe every user deserves an inclusive, engaging, and functional online experience, and we continuously work to ensure all content is accessible.
            </p>
            <p className="text-gray-600 mb-8">
              We strive to meet the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, which provide standards to make web content accessible to individuals with various disabilities, including visual, auditory, cognitive, and motor impairments.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Standards We Follow</h2>
            <p className="text-gray-600 mb-6">
              Our ongoing accessibility effort works towards conforming to the Web Content Accessibility Guidelines (WCAG) version 2.1, level AA criteria. These guidelines not only help make web content accessible to users with sensory, cognitive and mobility disabilities, but ultimately to all users, regardless of ability.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Accessibility Features</h2>
            <p className="text-gray-600 mb-4">Our website includes the following accessibility features:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <Keyboard className="text-blue-600 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Navigation</h3>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li>• Consistent navigation structure</li>
                      <li>• Skip to main content link</li>
                      <li>• Logical tab order</li>
                      <li>• Clear focus indicators</li>
                      <li>• Descriptive page titles</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <Eye className="text-teal-600 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold text-teal-900 mb-2">Content</h3>
                    <ul className="text-teal-800 text-sm space-y-1">
                      <li>• Alternative text for images</li>
                      <li>• Proper heading structure</li>
                      <li>• Descriptive link text</li>
                      <li>• High contrast text</li>
                      <li>• Resizable text support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ongoing Efforts</h2>
            <p className="text-gray-600 mb-6">
              We are constantly reviewing and enhancing our website to ensure it remains user-friendly and accessible. Our team is dedicated to addressing any areas that may require improvements, helping to make sure all users can easily navigate and interact with the site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Assistance?</h2>
            <p className="text-gray-600 mb-4">
              If you face any issues accessing our content or have suggestions for improving accessibility, we welcome your feedback. We're here to help and will do everything possible to provide you with the information, service, or feature you need.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex items-center space-x-4">
                <MessageSquare className="text-blue-600 w-8 h-8" />
                <div>
                  <p className="font-semibold text-gray-900">RiteFit.AI Accessibility Team</p>
                  <p className="text-gray-600">Email: info@ritefit.ai</p>
                  <p className="text-gray-600">Phone: +91 9176690330</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-start space-x-3">
                <HelpCircle className="text-blue-600 w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold text-blue-900 mb-2">Get Support</p>
                  <p className="text-blue-800">
                    Our accessibility team is here to help you navigate our website and address any concerns.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest Improvements</h2>
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">January 2025</h3>
                  <p className="text-gray-600 text-sm">Enhanced keyboard navigation and screen reader support</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Coming Soon</h3>
                  <p className="text-gray-600 text-sm">Advanced accessibility features and user customization options</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 text-center text-gray-500">
          <p className="text-sm">Last updated: January 2025</p>
        </div>
      </div>
    </div>
  );
}