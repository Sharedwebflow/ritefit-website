import { motion } from "framer-motion";
import ScrollReveal from "./scroll-reveal";
import SplitText from "./split-text";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useLocation } from "wouter";

export default function CtaSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [, setLocation] = useLocation();

  const handleGetInTouch = () => {
    setLocation("/contact");
  };

  return (
    <section className="py-20 gradient-bg text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
          alt="Professional consultation environment"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-4">
              <SplitText text="We'd Love To Help. Call Us Today" trigger={inView} />
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-xl mb-8">
              Ready to transform your business? Let's discuss your needs.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="tel:+919176690330"
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="mr-3 w-5 h-5" />
                +91 9176690330
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleGetInTouch}
                  className="bg-white text-blue-600 border-2 border-white px-8 py-4 text-lg font-semibold hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 shadow-lg"
                >
                  Get In Touch
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
