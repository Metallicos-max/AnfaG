import React, { useState, useEffect } from "react";

interface AnimatedHeadingProps {
  text: string;
}

export function AnimatedHeading({ text }: AnimatedHeadingProps) {
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const lines = text.split("\n");
  const charDelay = 30;

  let globalCharIndex = 0;

  return (
    <div className="flex flex-col">
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="flex flex-wrap">
          {line.split("").map((char, charIndex) => {
            const delay = globalCharIndex * charDelay;
            globalCharIndex++;
            
            return (
              <span
                key={charIndex}
                className="inline-block transition-all ease-out"
                style={{
                  transitionDuration: "500ms",
                  transitionDelay: `${delay}ms`,
                  opacity: isReady ? 1 : 0,
                  transform: isReady ? "translateX(0)" : "translateX(-18px)",
                  whiteSpace: char === " " ? "pre" : "normal"
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, duration = 1000, className = "" }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-opacity ease-out ${className} ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
}
