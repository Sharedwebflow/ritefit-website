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
  GraduationCap, 
  Users, 
  Target, 
  Clock,
  Shield,
  CheckCircle,
  BookOpen,
  Code,
  Brain,
  Settings,
  Award,
  Laptop,
  Calendar,
  DollarSign,
  Star
} from "lucide-react";

export default function Academy() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const academyFeatures = [
    {
      icon: Clock,
      title: "8-10 Week Program",
      description: "Hybrid program combining virtual learning with intensive in-person workshops"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Led by senior trainers with 15+ years of industry implementation experience"
    },
    {
      icon: Laptop,
      title: "Practical Experience",
      description: "Hands-on practice with sandbox environments and simulated client implementations"
    },
    {
      icon: Brain,
      title: "Soft Skills",
      description: "Comprehensive training in client communication, project management, and deployment readiness"
    }
  ];

  const oracleCurriculum = [
    "Oracle Integration Cloud (OIC): The #1 skill in demand for ERP integrations",
    "Oracle Redwood UX Design & Development",
    "REST/SOAP APIs: Consuming and building integrations with external platforms",
    "Oracle Visual Builder (VB Studio): For custom app extensions and user experiences",
    "RPA Tools (e.g., UiPath) to automate repetitive ERP tasks",
    "HDL/FBDI, HCM Extracts, OTBI, Fast Formulas, business rules configuration",
    "Event-Driven Architecture & Webhooks knowledge"
  ];

  const talentTechCurriculum = [
    "API Integration (REST/SOAP) - For ATS, HCM, calendar, and background check system integrations",
    "Data Mapping & Transformation - Aligning candidate data fields across systems",
    "SSO & Authentication Setup - Implementing secure access via SAML/OAuth",
    "Career Site Customization - Basic HTML/CSS/JavaScript for branded pages",
    "Workflow Automation - Configuring alerts, triggers, and smart nudges",
    "Resume Parsing & Matching Logic - Understanding AI-based skill inference",
    "Sandbox & Configuration Management - Testing and validating platform settings"
  ];

  const functionalSkills = [
    "Talent Acquisition Lifecycle - Sourcing to hiring process flow understanding",
    "Talent Management and Career Paths",
    "Candidate Experience Design - Personalization, chatbot flows, engagement tactics",
    "ATS & CRM Familiarity - Workflow design within systems like Workday, Greenhouse",
    "Reporting & Insights - Key recruiting metrics and dashboard interpretation",
    "Process Mapping & Requirements Gathering - Running discovery workshops with HR teams"
  ];

  const marketChallenges = [
    {
      title: "Market Gap",
      description: "Significant skill shortage in Oracle Cloud and Talent Tech implementations creating bottlenecks for enterprise clients"
    },
    {
      title: "Extended Ramp-Up",
      description: "Enterprises facing lengthy onboarding periods of 3-6 months before consultants become fully productive"
    },
    {
      title: "Cost Burden",
      description: "High premium rates for niche talent driving up implementation costs by 30-40%"
    }
  ];

  const buildingCohorts = [
    {
      title: "University Partnerships",
      description: "Establish relationships with top technical universities. Create nomination process for high-potential graduates. Develop campus ambassador program to identify talent. Offer faculty engagement opportunities to strengthen pipeline."
    },
    {
      title: "Digital Marketing Outreach",
      description: "Launch targeted social media campaigns on LinkedIn and other platforms. Create specialized landing pages highlighting program benefits."
    }
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
            <div className="flex justify-center mb-6">
              <GraduationCap className="w-16 h-16 text-blue-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              <SplitText 
                text="RiteFit Academy" 
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
              Vision & Intent: A strategic initiative by RiteFit AI designed to address critical talent shortages in specialized technology domains.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <Button className="gradient-bg text-white hover:scale-105 transform transition-all duration-300 px-8 py-3">
                <Calendar className="mr-2 w-5 h-5" />
                Enroll Now
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                <BookOpen className="mr-2 w-5 h-5" />
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 section-ai-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our mission is to create project-ready professionals through targeted, immersive training experiences. 
                The academy will initially focus on developing expertise in Oracle on-demand and Next Gen Tools and 
                leading Talent Tech platforms including Eightfold and Phenom.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mb-12">
              <div className="text-center">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Training Goals</h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our inaugural cohort aims to train and support 20-25 early-career professionals, providing them 
                  with the skills and confidence needed for immediate project deployment. By bridging the existing 
                  skill gap through practical, real-world training, RiteFit Academy will serve as both a talent 
                  pipeline and a competitive differentiator in the market.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Market Challenges */}
      <section className="py-20 neural-network-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Why RiteFit Academy?</h2>
              <p className="text-xl text-gray-600">Addressing critical market challenges</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {marketChallenges.map((challenge, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-red-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      {challenge.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.6}>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">RiteFit Solution</h3>
              <p className="text-lg text-gray-600">
                Market-aligned training providing deployment-ready talent for both consulting engagements 
                and direct client placements. Our academy addresses these challenges by creating a reliable 
                pipeline of specialized talent, reducing dependency on scarce market resources while maintaining quality standards.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-20 section-ai-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Program Structure & Highlights</h2>
              <p className="text-xl text-gray-600">Comprehensive training designed for real-world success</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {academyFeatures.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.8}>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Capstone Project</h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  The curriculum balances technical depth with practical application, ensuring graduates can 
                  immediately contribute to client projects. Each trainee will complete a capstone implementation 
                  project that mirrors real-world challenges they'll face in their roles.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Curriculum Sections */}
      <section className="py-20 neural-network-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Curriculum Overview</h2>
              <p className="text-xl text-gray-600">Specialized tracks for high-demand technologies</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Oracle Curriculum */}
            <ScrollReveal delay={0.2}>
              <Card className="h-full border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-t-lg">
                  <div className="flex items-center">
                    <Code className="w-8 h-8 mr-3" />
                    <div>
                      <CardTitle className="text-2xl">Oracle Next Gen Tools</CardTitle>
                      <CardDescription className="text-blue-100 mt-2">₹30,000 INR</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {oracleCurriculum.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Talent Tech Curriculum */}
            <ScrollReveal delay={0.4}>
              <Card className="h-full border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
                  <div className="flex items-center">
                    <Brain className="w-8 h-8 mr-3" />
                    <div>
                      <CardTitle className="text-2xl">Talent Tech</CardTitle>
                      <CardDescription className="text-purple-100 mt-2">₹25,000 INR</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Platform Agnostic Technical Skills</h4>
                    <ul className="space-y-2">
                      {talentTechCurriculum.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Platform Agnostic Functional Skills</h4>
                    <ul className="space-y-2">
                      {functionalSkills.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Training Includes */}
      <section className="py-20 section-ai-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Training Price Includes</h2>
              <p className="text-xl text-gray-600">Comprehensive support for your learning journey</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Settings,
                title: "Dedicated Training Environment",
                description: "Available for both offline and online participants"
              },
              {
                icon: Code,
                title: "Development Access",
                description: "Access to development/sandbox systems for hands-on practice"
              },
              {
                icon: Laptop,
                title: "Laptop Provided",
                description: "Laptop provided for in-person attendees during the program"
              },
              {
                icon: BookOpen,
                title: "Curated Materials",
                description: "Curated reference materials and platform-specific documentation"
              },
              {
                icon: Users,
                title: "Expert Training",
                description: "Training led by experienced professionals with real-world project exposure"
              },
              {
                icon: Target,
                title: "Real-time Case Studies",
                description: "Real-time case studies and guided practice assignments"
              },
              {
                icon: Shield,
                title: "Post-training Support",
                description: "Post-training support for resume building and interview readiness"
              }
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Building Cohorts */}
      <section className="py-20 neural-network-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Building Our Training Cohorts</h2>
              <p className="text-xl text-gray-600">Strategic partnerships and outreach initiatives</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {buildingCohorts.map((cohort, index) => (
              <ScrollReveal key={index} delay={index * 0.3}>
                <Card className="border-0 shadow-xl h-full">
                  <CardHeader>
                    <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-800">{cohort.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-lg leading-relaxed">
                      {cohort.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.6}>
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
              <Star className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Quality Assurance</h3>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                Our dual-channel approach ensures diverse, high-quality candidates while building sustainable 
                talent relationships. Each cohort will undergo a rigorous selection process including technical 
                assessments and cultural fit interviews to maintain program excellence.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20 section-ai-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <GraduationCap className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Bridging Campus to Career: Market-Ready Training
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                At RiteFit AI, our expert team has conducted in-depth market research to identify the top 
                in-demand skills across the Oracle Cloud and Talent Tech landscapes. Our training programs 
                are purpose-built to align with real-world job requirements, ensuring graduates are ready 
                to contribute from day one.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                {[
                  { title: "Focus on High-Growth Areas", number: "1" },
                  { title: "Oracle Redwood UX", number: "2" },
                  { title: "Oracle Integration Cloud (OIC)", number: "3" },
                  { title: "AI-Driven Talent Tech Platforms", number: "4" }
                ].map((focus, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{focus.number}</span>
                    </div>
                    <h3 className="font-semibold text-gray-800">{focus.title}</h3>
                  </div>
                ))}
              </div>
              
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
                By mastering skills in these high-growth domains, our trainees gain expertise that is immediately 
                relevant and highly sought after by employers. The curriculum blends theoretical foundations, 
                hands-on development, and live project simulations - empowering graduates to confidently 
                transition into the workforce.
              </p>
              
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
                Our goal is to equip the next generation of tech professionals with the tools to accelerate 
                hiring, support digital transformation, and lead implementation projects.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="gradient-bg text-white hover:scale-105 transform transition-all duration-300 px-8 py-3">
                  <Calendar className="mr-2 w-5 h-5" />
                  Start Your Journey
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  <DollarSign className="mr-2 w-5 h-5" />
                  View Pricing
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}