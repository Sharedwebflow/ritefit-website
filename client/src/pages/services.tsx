import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingElements from "@/components/floating-elements";
import ScrollReveal from "@/components/scroll-reveal";
import SplitText from "@/components/split-text";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from "react-intersection-observer";
import { 
  Users, 
  Settings, 
  HeadphonesIcon, 
  Brain, 
  ArrowRight, 
  CheckCircle,
  Clock,
  Shield,
  Target
} from "lucide-react";

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: "staff-augmentation",
      title: "Staff Augmentation",
      icon: Users,
      description: "Flexible access to skilled professionals for temporary or project-based needs.",
      fullDescription: "Our Staff augmentation services provide businesses with flexible access to skilled professionals for temporary or project-based needs. Whether you're looking to fill skill gaps, scale your team, or tap into specialized expertise, our staff augmentation solutions deliver the talent you need, when you need it.",
      features: [
        "Skilled professionals on-demand",
        "Flexible engagement models",
        "Quick deployment (2-4 weeks)",
        "Pre-screened talent pool",
        "Seamless team integration",
        "Cost-effective scaling"
      ],
      benefits: [
        "Reduce hiring time by 70%",
        "Access to global talent",
        "Lower operational costs",
        "Risk mitigation"
      ],
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "hcm-consulting",
      title: "HCM Implementation & Consulting",
      icon: Settings,
      description: "Streamline HR processes and optimize workforce performance with expert guidance.",
      fullDescription: "Our HCM (Human Capital Management) Implementation & Consulting services help businesses streamline HR processes, improve employee management, and optimize workforce performance. From seamless software integration to strategic consulting, we provide expert guidance to ensure the successful deployment of HCM solutions tailored to your company's needs.",
      features: [
        "Strategic HCM planning",
        "System implementation",
        "Process optimization",
        "Change management",
        "Training and support",
        "Performance analytics"
      ],
      benefits: [
        "Improved HR efficiency",
        "Better employee experience",
        "Data-driven decisions",
        "Compliance assurance"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "managed-services",
      title: "Managed Services (AMS)",
      icon: HeadphonesIcon,
      description: "24/7 technical and functional support for seamless HR technology maintenance.",
      fullDescription: "Our Managed Services (AMS) offer 24/7 technical and functional support for seamless HR technology maintenance. Ensure continuous system performance, faster issue resolution, and optimized HR operations with our expert AMS solutions.",
      features: [
        "24/7 system monitoring",
        "Proactive maintenance",
        "Issue resolution",
        "Performance optimization",
        "Security updates",
        "User support"
      ],
      benefits: [
        "99.9% system uptime",
        "Reduced IT overhead",
        "Faster issue resolution",
        "Enhanced security"
      ],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "ai-solutions",
      title: "AI-Powered Workforce Solutions",
      icon: Brain,
      description: "Smart hiring tools using machine learning to streamline recruitment processes.",
      fullDescription: "Our AI-Powered Workforce Solutions offer smart hiring tools that use machine learning to streamline recruitment and boost hiring efficiency. Find top talent faster and make data-driven HR decisions with our intelligent solutions.",
      features: [
        "AI-driven candidate matching",
        "Automated screening",
        "Predictive analytics",
        "Bias reduction algorithms",
        "Performance forecasting",
        "Intelligent recommendations"
      ],
      benefits: [
        "60% faster hiring",
        "Higher quality matches",
        "Reduced bias",
        "Better retention rates"
      ],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We analyze your current state, challenges, and objectives to create a tailored strategy.",
      icon: Target
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Our experts design a comprehensive solution that aligns with your business goals.",
      icon: Settings
    },
    {
      step: "03",
      title: "Implementation",
      description: "We execute the solution with minimal disruption to your ongoing operations.",
      icon: CheckCircle
    },
    {
      step: "04",
      title: "Support & Optimization",
      description: "Continuous monitoring, support, and optimization to ensure sustained success.",
      icon: Shield
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <FloatingElements />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-bg opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              <SplitText 
                text="Our Services" 
                className="gradient-text" 
                delay={500}
              />
            </h1>
            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              Comprehensive solutions to transform your business operations and drive sustainable growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Software Consulting Services
              </h2>
              <p className="text-xl text-gray-600">
                Expert solutions tailored to your unique business needs
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 0.2}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mr-4">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800">{service.title}</h3>
                        <Badge variant="secondary" className="mt-2">
                          Popular Service
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {service.fullDescription}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, i) => (
                            <li key={i} className="flex items-center text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center text-gray-600">
                              <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Button
                      onClick={() => scrollToSection("contact")}
                      className="gradient-bg text-white hover:scale-105 transform transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <motion.img
                      src={service.image}
                      alt={`${service.title} illustration`}
                      className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-600">
                A proven methodology that delivers results
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <Card className="relative overflow-hidden border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">{step.step}</span>
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Why Choose RiteFit.AI
              </h2>
              <p className="text-xl text-gray-600">
                The advantages that set us apart from the competition
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Rapid Deployment",
                description: "Get started quickly with our streamlined onboarding process and proven methodologies."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Your data is protected with enterprise-grade security measures and compliance standards."
              },
              {
                icon: Target,
                title: "Proven Results",
                description: "Track record of successful implementations and measurable business outcomes."
              }
            ].map((advantage, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <motion.div 
                  className="text-center p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl"
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                    <advantage.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}