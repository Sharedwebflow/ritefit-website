import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import ContactForm from "@/components/contact-form";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar />
      <div className="pt-20">
      {/* Header Section */}
      <ScrollReveal>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Get In Touch
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to transform your business? Let's discuss how we can help you achieve your goals.
            </motion.p>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact Form Section */}
      <ScrollReveal>
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact Info Section */}
      <ScrollReveal>
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Info</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phone Numbers */}
              <motion.div
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-gray-500 text-sm mb-2">Phone</p>
                <a
                  href="tel:+918008256789"
                  className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                >
                  +91 8008256789
                </a>
              </motion.div>

              <motion.div
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-gray-500 text-sm mb-2">Mobile</p>
                <a
                  href="tel:+919176690330"
                  className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                >
                  +91 9176690330
                </a>
              </motion.div>

              {/* Email */}
              <motion.div
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-gray-500 text-sm mb-2">Email</p>
                <a
                  href="mailto:rameshyb@ritefit.ai"
                  className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                >
                  rameshyb@ritefit.ai
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Call to Action */}
      <ScrollReveal>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Don't wait - take the first step towards transforming your business today.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="tel:+918008256789"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a
                href="mailto:rameshyb@ritefit.ai"
                className="inline-flex items-center px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>
      </div>
      <Footer />
    </div>
  );
}