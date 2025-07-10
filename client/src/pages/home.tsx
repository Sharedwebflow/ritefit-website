import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import TestimonialsSection from "@/components/testimonials-section";
import CtaSection from "@/components/cta-section";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import FloatingElements from "@/components/floating-elements";

export default function Home() {
  return (
    <div className="min-h-screen">
      <FloatingElements />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <CtaSection />
      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your business? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-8">
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
