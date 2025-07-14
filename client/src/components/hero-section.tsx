import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SplitText from "./split-text";
import { Quote } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              <SplitText 
                text="Software Solutions" 
                className="block mb-2" 
                delay={500}
              />
              <SplitText 
                text="For Your Business" 
                className="block gradient-text" 
                delay={1000}
              />
            </h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              Ritefit AI is a dynamic Talent and Technology Enablement firm dedicated to empowering 
              organizations with innovative, AI-driven solutions and comprehensive human capital 
              management (HCM) services.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
            >
              <Button
                onClick={() => scrollToSection("services")}
                className="gradient-bg text-white px-8 py-4 text-lg font-medium hover:scale-105 transform transition-all duration-300 shadow-lg"
              >
                Get Started Now
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("about")}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 text-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Learn More
              </Button>
            </motion.div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <motion.img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional business team collaborating"
              className="rounded-2xl shadow-2xl w-full h-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />

            {/* Floating Quote Card */}
            <motion.div
              className="absolute -bottom-6 -left-6 glass-effect rounded-xl p-6 max-w-xs border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3 }}
            >
              <div className="flex items-center mb-3">
                <Quote className="text-blue-600 w-8 h-8" />
              </div>
              <p className="text-sm text-gray-700">
                "Ritefit AI Pvt. Ltd. will position itself to win a good deal of that emerging business."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
