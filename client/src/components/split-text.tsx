import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  trigger?: boolean;
}

export default function SplitText({ 
  text, 
  className = "", 
  delay = 0, 
  duration = 0.5, 
  trigger = true 
}: SplitTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (trigger) {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }
  }, [trigger, delay]);

  const words = text.split(" ");

  return (
    <div className={`inline-block ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              initial={{ y: 100, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{
                duration: duration,
                delay: (wordIndex * 0.1) + (charIndex * 0.05),
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  );
}
