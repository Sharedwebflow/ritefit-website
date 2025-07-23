import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingElements from "@/components/floating-elements";
import ScrollReveal from "@/components/scroll-reveal";
import SplitText from "@/components/split-text";
import ProgressBar from "@/components/progress-bar";
import AnimatedCounter from "@/components/animated-counter";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Target, Award, Globe } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const expertise = [
    { title: "Staff Augmentation", value: 85 },
    { title: "HCM Implementation & Consulting", value: 95 },
    { title: "Managed Services (AMS)", value: 80 },
    { title: "AI-Powered Workforce Solutions", value: 90 },
  ];

  const stats = [
    { value: 150, label: "Projects Completed", suffix: "+", icon: Target },
    { value: 95, label: "Happy Clients", suffix: "+", icon: Users },
    { value: 500, label: "Consultations", suffix: "+", icon: Award },
    { value: 15, label: "Countries Served", suffix: "+", icon: Globe },
  ];

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
                text="About RiteFit.AI" 
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
              Empowering organizations with innovative, AI-driven solutions and comprehensive 
              human capital management services since our inception.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 section-ai-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  To position ourselves as the leading Talent and Technology Enablement firm, 
                  dedicated to empowering organizations with innovative, AI-driven solutions 
                  and comprehensive human capital management services that drive sustainable growth.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl">
                    <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  To be the global leader in AI-powered workforce solutions, transforming how 
                  organizations manage, develop, and optimize their human capital in the digital age.
                </p>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Team collaboration and innovation"
                  className="rounded-2xl shadow-lg w-full h-80 object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Meet Our Founders & Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry experts leading the way in AI-powered workforce solutions
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Venkata Gannamaneni */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden">
                  <img 
                    src="/venkata.png" 
                    alt="Venkata Gannamaneni" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Venkata Gannamaneni</h3>
                <p className="text-blue-600 font-medium mb-4">President</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  20+ years in enterprise staffing, HR technology, and talent solutions. Expert in scaling organizations and driving strategic growth.
                </p>
              </div>
            </ScrollReveal>

            {/* Krishna Bendapudi */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden">
                  <img 
                    src="/krishna.png" 
                    alt="Krishna Bendapudi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Krishna Bendapudi</h3>
                <p className="text-purple-600 font-medium mb-4">Founder & Principal Director</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  CEO of Rite Software with 25+ years in consulting and technology. Oracle specialist with deep expertise in business solutions architecture.
                </p>
              </div>
            </ScrollReveal>

            {/* Sarveshwar Rao Murari */}
            <ScrollReveal delay={0.3}>
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Sarveshwar Rao Murari</h3>
                <p className="text-green-600 font-medium mb-4">CPO</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Creative professional with passion for building the right talent to meet organizational needs. Expert in strategic workforce planning.
                </p>
              </div>
            </ScrollReveal>

            {/* Ramesh B.Y */}
            <ScrollReveal delay={0.4}>
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden">
                  <img 
                    src="/ramesh.jpg" 
                    alt="Ramesh B.Y" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Ramesh B.Y</h3>
                <p className="text-orange-600 font-medium mb-4">COO</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Specialist in global operations, compliance, and business scalability. Expert in streamlining processes and driving operational excellence.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 neural-network-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-xl text-gray-600">
                Trusted by businesses worldwide for exceptional results
              </p>
            </ScrollReveal>
          </div>
          
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <motion.div 
                  className="text-center bg-white p-8 rounded-2xl shadow-lg"
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    trigger={inView}
                    className="text-4xl font-bold text-gray-800 mb-2"
                  />
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 section-ai-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                <SplitText text="Our Expertise" trigger={inView} />
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                When you change the way you look at things, the things you look at change
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <ProgressBar
                  title={item.title}
                  value={item.value}
                  delay={index * 0.3}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 neural-network-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We continuously explore cutting-edge technologies and methodologies to deliver solutions that drive real business value.",
                icon: "🚀"
              },
              {
                title: "Excellence",
                description: "We maintain the highest standards in everything we do, from service delivery to client relationships.",
                icon: "⭐"
              },
              {
                title: "Partnership",
                description: "We work closely with our clients as trusted partners, understanding their unique challenges and goals.",
                icon: "🤝"
              }
            ].map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <motion.div 
                  className="bg-white p-8 rounded-2xl shadow-lg text-center"
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
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