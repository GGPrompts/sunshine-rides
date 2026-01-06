"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/lib/use-in-view";

type AnimationType =
  | "fade-in-up"
  | "fade-in"
  | "slide-in-left"
  | "slide-in-right"
  | "scale-in";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-in-up",
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  const animationClass = {
    "fade-in-up": "animate-fade-in-up",
    "fade-in": "animate-fade-in",
    "slide-in-left": "animate-slide-in-left",
    "slide-in-right": "animate-slide-in-right",
    "scale-in": "animate-scale-in",
  }[animation];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-opacity",
        isInView ? animationClass : "opacity-0",
        className
      )}
      style={{ animationDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}

interface AnimatedItemProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  index?: number;
  staggerDelay?: number;
}

export function AnimatedItem({
  children,
  className,
  animation = "fade-in-up",
  index = 0,
  staggerDelay = 100,
}: AnimatedItemProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  const animationClass = {
    "fade-in-up": "animate-fade-in-up",
    "fade-in": "animate-fade-in",
    "slide-in-left": "animate-slide-in-left",
    "slide-in-right": "animate-slide-in-right",
    "scale-in": "animate-scale-in",
  }[animation];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-opacity",
        isInView ? animationClass : "opacity-0",
        className
      )}
      style={{ animationDelay: `${index * staggerDelay}ms` }}
    >
      {children}
    </div>
  );
}
