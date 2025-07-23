import ScrollReveal from "./scroll-reveal";
import SplitText from "./split-text";
import TestimonialCarousel from "./testimonial-carousel";
import { useInView } from "react-intersection-observer";

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Leroy Lawson",
      role: "CEO",
      company: "L&L",
      content: "RiteFit.AI transformed our hiring process with their AI-powered workforce solutions. We found top talent at a fraction of traditional costs while maintaining excellent quality standards.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "HR Director",
      company: "TechCorp",
      content: "RiteFit.AI transformed our HR processes completely. Their AI-powered solutions helped us reduce hiring time by 60% and improved our employee satisfaction scores significantly.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "InnovateCorp",
      content: "Excellent staff augmentation services. The team they provided was highly skilled and integrated seamlessly with our existing workforce. Highly recommended!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 neural-network-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <SplitText text="What Our Clients Say" trigger={inView} />
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-xl text-gray-600">
              Trusted by businesses worldwide for exceptional results
            </p>
          </ScrollReveal>
        </div>

        <div ref={ref}>
          <ScrollReveal delay={0.5}>
            <TestimonialCarousel testimonials={testimonials} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
