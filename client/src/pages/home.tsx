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
      <ContactForm />
      <Footer />
    </div>
  );
}
