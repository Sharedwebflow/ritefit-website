import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import logoPath from "@assets/image_1752256527444.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (item: { name: string; path: string }) => {
    setIsMobileMenuOpen(false);
    window.location.href = item.path;
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <motion.div
                className="flex items-center cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={logoPath} 
                  alt="RiteFit.AI Logo" 
                  className="h-32 w-auto"
                />
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Academy", path: "/academy" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className="relative text-gray-800 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => handleNavigation({ name: "Contact", path: "/contact" })}
              className="gradient-bg text-white hover:scale-105 transform transition-all duration-300"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden glass-effect"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Academy", path: "/academy" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className="text-gray-800 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-2">
              <Button
                onClick={() => handleNavigation({ name: "Contact", path: "/contact" })}
                className="gradient-bg text-white w-full"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
