"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

export function AnimatedText({
  text,
  className,
  once = false,
}: AnimatedTextProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!once || !animatedRef.current)) {
            const letters = elementRef.current?.querySelectorAll(".letter");
            letters?.forEach((letter, index) => {
              setTimeout(() => {
                letter.classList.add("animate-in");
              }, 30 * index);
            });
            animatedRef.current = true;
            if (once) observer.disconnect();
          } else if (!entry.isIntersecting && !once) {
            const letters = elementRef.current?.querySelectorAll(".letter");
            letters?.forEach((letter) => {
              letter.classList.remove("animate-in");
            });
            animatedRef.current = false;
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [once]);

  return (
    <div ref={elementRef} className={cn("inline-block", className)}>
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className="letter inline-block opacity-0 translate-y-4 transition-all duration-300 ease-out"
          style={{
            transitionDelay: `${index * 1000}ms`,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </div>
  );
}
