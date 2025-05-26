import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  isVisible?: boolean;
}

export default function TypewriterText({ 
  text, 
  speed = 50, 
  delay = 0, 
  className = "",
  isVisible = false 
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        const timer = setTimeout(() => {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, speed);
        return () => clearTimeout(timer);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed, delay, isVisible]);

  return (
    <span className={`${className} ${currentIndex < text.length ? 'border-r-2 border-construction-orange animate-pulse' : ''}`}>
      {displayText}
    </span>
  );
}
