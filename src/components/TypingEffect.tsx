"use client";

import { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string;
  typingSpeed?: number;
  className?: string;
}

export default function TypingEffect({
  text,
  typingSpeed = 100,
  className = "",
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length && isTyping) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, typingSpeed, isTyping]);

  return <span className={className}>{displayText}</span>;
}
