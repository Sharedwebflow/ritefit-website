import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProgressBarProps {
  value: number;
  title: string;
  className?: string;
  delay?: number;
}

export default function ProgressBar({ value, title, className = "", delay = 0 }: ProgressBarProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`bg-white rounded-xl p-8 shadow-lg card-hover ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <div className="text-2xl font-bold text-blue-600">{value}%</div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : { width: 0 }}
          transition={{
            duration: 1.5,
            delay: delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      </div>
    </div>
  );
}
