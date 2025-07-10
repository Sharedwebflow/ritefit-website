import ScrollReveal from "./scroll-reveal";
import AnimatedCounter from "./animated-counter";
import { useInView } from "react-intersection-observer";

export default function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: 150, label: "Projects", suffix: "+" },
    { value: 95, label: "Happy Clients", suffix: "+" },
    { value: 500, label: "Consultations", suffix: "+" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <div className="text-center">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  trigger={inView}
                  className="text-5xl font-bold text-blue-600 mb-2"
                />
                <p className="text-xl text-gray-600 font-medium">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
