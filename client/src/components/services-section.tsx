import { motion } from "framer-motion";
import ScrollReveal from "./scroll-reveal";
import SplitText from "./split-text";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Staff Augmentation",
      description: "Our Staff augmentation services provide businesses with flexible access to skilled professionals for temporary or project-based needs. Whether you're looking to fill skill gaps, scale your team, or tap into specialized expertise, our staff augmentation solutions deliver the talent you need, when you need it.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Staff augmentation and team collaboration",
      linkId: "staff-augmentation"
    },
    {
      title: "HCM Implementation & Consulting",
      description: "Our HCM (Human Capital Management) Implementation & Consulting services help businesses streamline HR processes, improve employee management, and optimize workforce performance. From seamless software integration to strategic consulting, we provide expert guidance to ensure the successful deployment of HCM solutions tailored to your company's needs.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "HCM implementation and consulting services",
      linkId: "hcm-consulting"
    },
    {
      title: "Managed Services (AMS)",
      description: "Our Managed Services (AMS) offer 24/7 technical and functional support for seamless HR technology maintenance. Ensure continuous system performance, faster issue resolution, and optimized HR operations with our expert AMS solutions.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Managed services and application maintenance",
      linkId: "managed-services"
    },
    {
      title: "AI-Powered Workforce Solutions",
      description: "Our AI-Powered Workforce Solutions offer smart hiring tools that use machine learning to streamline recruitment and boost hiring efficiency. Find top talent faster and make data-driven HR decisions with our intelligent solutions.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "AI-powered workforce solutions and automation",
      linkId: "ai-solutions"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 neural-network-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <SplitText text="Software Consulting Services" trigger={inView} />
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to transform your business operations
            </p>
          </ScrollReveal>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 h-full flex flex-col"
                whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <Button
                  variant="ghost"
                  onClick={() => window.location.href = `/services#${service.linkId}`}
                  className="text-blue-600 hover:text-cyan-600 font-semibold p-0 h-auto mt-auto"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
