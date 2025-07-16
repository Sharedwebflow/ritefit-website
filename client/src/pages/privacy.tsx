import { motion } from "framer-motion";
import { ArrowLeft, Shield, Lock, Eye, FileText, MessageSquare, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Privacy() {
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
              <Shield className="text-blue-600 w-8 h-8" />
              <h1 className="text-2xl font-bold text-gray-900">Privacy Policy</h1>
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
            <h2 className="text-4xl font-bold mb-4">Your Privacy is Important to Us</h2>
            <p className="text-xl text-blue-100 mb-8">
              Learn how we protect and manage your personal information.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <Lock className="w-12 h-12 mx-auto mb-3 text-blue-200" />
                <h3 className="font-semibold mb-2">Data Protection</h3>
                <p className="text-sm text-blue-100">Industry-leading security measures</p>
              </div>
              <div className="text-center">
                <Eye className="w-12 h-12 mx-auto mb-3 text-blue-200" />
                <h3 className="font-semibold mb-2">Privacy First</h3>
                <p className="text-sm text-blue-100">Your data privacy is our priority</p>
              </div>
              <div className="text-center">
                <FileText className="w-12 h-12 mx-auto mb-3 text-blue-200" />
                <h3 className="font-semibold mb-2">Compliance</h3>
                <p className="text-sm text-blue-100">Fully compliant with regulations</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-gray-600 mb-6">
              This Privacy Policy explains how RiteFit.AI Pvt. Ltd. ("we", "us", or "our") collects, uses, and protects your personal information when you use our services or visit our website.
            </p>
            <p className="text-gray-600 mb-8">
              We are committed to ensuring that your privacy is protected and maintaining the security of any personal information received from you.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              By providing us with your contact and personal details, you consent to receive messages from RiteFit.AI related to service updates, business communications, or account notifications. Your information will only be used to send you relevant information and will never be shared with a third party without your consent.
            </p>
            <p className="text-gray-600 mb-4">We may collect the following types of information:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Name and contact information</li>
              <li>Company details and business information</li>
              <li>Website usage data and analytics</li>
              <li>Communication preferences</li>
              <li>Technical information about your device and browser</li>
              <li>Mobile phone number (if SMS services are opted into)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use your information to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Provide and improve our services</li>
              <li>Communicate important updates and notifications</li>
              <li>Process transactions and manage your account</li>
              <li>Analyze and enhance our website performance</li>
              <li>Comply with legal obligations</li>
              <li>Detect and prevent fraud</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection</h2>
            <p className="text-gray-600 mb-4">
              We implement robust security measures to protect your personal information, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and monitoring</li>
              <li>Access controls and authentication measures</li>
              <li>Employee training on data protection</li>
              <li>24/7 system monitoring</li>
              <li>Regular backups and disaster recovery planning</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent at any time</li>
              <li>Object to data processing</li>
              <li>Request data portability</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Policy</h2>
            <p className="text-gray-600 mb-6">
              We use cookies and similar technologies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about our Privacy Policy or how we handle your data, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex items-center space-x-4">
                <MessageSquare className="text-blue-600 w-8 h-8" />
                <div>
                  <p className="font-semibold text-gray-900">RiteFit.AI Privacy Team</p>
                  <p className="text-gray-600">Email: info@ritefit.ai</p>
                  <p className="text-gray-600">Phone: +91 9176690330</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-start space-x-3">
                <HelpCircle className="text-blue-600 w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold text-blue-900 mb-2">Need Help?</p>
                  <p className="text-blue-800">
                    Our privacy team is here to help you with any questions or concerns about your data privacy.
                  </p>
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