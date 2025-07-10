import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex space-x-6"
        animate={{
          x: [0, -100 * testimonials.length],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Duplicate testimonials for seamless loop */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-96 bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center mb-6">
              <Quote className="text-blue-600 w-8 h-8 mr-4" />
              <div className="flex text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-6 text-lg">{testimonial.content}</p>
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={`${testimonial.name} testimonial`}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
