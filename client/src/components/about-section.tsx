import ScrollReveal from "./scroll-reveal";
import SplitText from "./split-text";
import ProgressBar from "./progress-bar";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
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

  return (
    <section id="about" className="py-20 section-ai-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <SplitText text="OUR EXPERTISE" trigger={inView} />
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you change the way you look at things, the things you look at change
            </p>
          </ScrollReveal>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
  );
}
