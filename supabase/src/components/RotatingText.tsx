import { useState, useEffect } from 'react';

interface RotatingTextProps {
  phrases: string[];
  className?: string;
  interval?: number;
}

const RotatingText = ({ phrases, className = '', interval = 4000 }: RotatingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsAnimating(false);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [phrases, interval]);

  return (
    <p className={`${className} transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
      {phrases[currentIndex]}
    </p>
  );
};

export default RotatingText;
