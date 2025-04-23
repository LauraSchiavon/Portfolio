"use client";

import { useRef, useEffect, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export function AnimatedSection({
  children,
  className,
  id,
  direction = "up",
  delay = 0,
  duration = 500,
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const directionMap = {
      up: "translate-y-10",
      down: "-translate-y-10",
      left: "translate-x-10",
      right: "-translate-x-10",
    };

    section.classList.add("opacity-0", directionMap[direction]);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!once || !animatedRef.current)) {
            setTimeout(() => {
              section.classList.remove("opacity-0", directionMap[direction]);
              section.style.transitionDuration = `${duration}ms`;
            }, delay);
            animatedRef.current = true;
            if (once) observer.disconnect();
          } else if (!entry.isIntersecting && !once) {
            section.classList.add("opacity-0", directionMap[direction]);
            animatedRef.current = false;
          }
        });
      },
      {
        threshold,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [direction, delay, duration, threshold, once]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn(
        "transition-all ease-out",
        className
      )}
    >
      {children}
    </section>
  );
}