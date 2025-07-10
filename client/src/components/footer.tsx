import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, Phone, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="ml-2 text-xl font-bold">RiteFit.AI</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Dynamic Talent and Technology Enablement firm dedicated to empowering 
              organizations with innovative, AI-driven solutions.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/ritefit.ai/"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/ritefit-ai/"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:info@ritefit.ai"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Staff Augmentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">HCM Consulting</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Managed Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">AI Solutions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 9176690330</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@ritefit.ai</span>
              </li>
              <li className="flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                <span>ritefit.ai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 RiteFit.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
