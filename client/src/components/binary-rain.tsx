import { useEffect, useState } from "react";

interface BinaryDigit {
  id: number;
  x: number;
  value: string;
  delay: number;
  duration: number;
}

export default function BinaryRain() {
  const [digits, setDigits] = useState<BinaryDigit[]>([]);

  useEffect(() => {
    const createBinaryDigits = () => {
      const newDigits: BinaryDigit[] = [];
      
      // Create binary digits across the screen width
      for (let i = 0; i < 30; i++) {
        newDigits.push({
          id: i,
          x: Math.random() * 100, // Random x position (0-100%)
          value: Math.random() > 0.5 ? "1" : "0", // Random binary digit
          delay: Math.random() * 15, // Random delay (0-15s)
          duration: 10 + Math.random() * 5, // Random duration (10-15s)
        });
      }
      
      setDigits(newDigits);
    };

    createBinaryDigits();
    
    // Refresh digits every 20 seconds
    const interval = setInterval(createBinaryDigits, 20000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {digits.map((digit) => (
        <div
          key={digit.id}
          className="absolute text-xs opacity-10 select-none"
          style={{
            left: `${digit.x}%`,
            top: '-20px',
            fontFamily: 'Departure Mono, monospace',
            color: digit.id % 2 === 0 ? "#0087e1" : "#0bbc8c",
            animation: `binaryFall ${digit.duration}s linear ${digit.delay}s infinite`,
          }}
        >
          {digit.value}
        </div>
      ))}
    </div>
  );
}