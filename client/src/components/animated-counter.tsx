import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  trigger?: boolean;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({ 
  value, 
  duration = 2, 
  trigger = false, 
  suffix = "", 
  className = "" 
}: AnimatedCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (trigger) {
      const animation = animate(count, value, {
        duration: duration,
        ease: "easeOut",
      });

      const unsubscribe = rounded.on("change", (latest) => {
        setDisplayValue(latest);
      });

      return () => {
        animation.stop();
        unsubscribe();
      };
    }
  }, [trigger, value, count, rounded, duration]);

  return (
    <motion.div
      className={className}
      initial={{ scale: 0 }}
      animate={trigger ? { scale: 1 } : { scale: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {displayValue}
      {suffix}
    </motion.div>
  );
}
