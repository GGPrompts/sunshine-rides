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

  // Subtle transform-based animations that don't use opacity-0 initial state
  const baseStyles = "transition-all duration-700 ease-out";

  const animationStyles = {
    "fade-in-up": isInView
      ? "opacity-100 translate-y-0"
      : "opacity-90 translate-y-4",
    "fade-in": isInView
      ? "opacity-100"
      : "opacity-90",
    "slide-in-left": isInView
      ? "opacity-100 translate-x-0"
      : "opacity-90 -translate-x-4",
    "slide-in-right": isInView
      ? "opacity-100 translate-x-0"
      : "opacity-90 translate-x-4",
    "scale-in": isInView
      ? "opacity-100 scale-100"
      : "opacity-90 scale-[0.98]",
  }[animation];

  return (
    <div
      ref={ref}
      className={cn(baseStyles, animationStyles, className)}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
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

  const baseStyles = "transition-all duration-500 ease-out";

  const animationStyles = {
    "fade-in-up": isInView
      ? "opacity-100 translate-y-0"
      : "opacity-90 translate-y-4",
    "fade-in": isInView
      ? "opacity-100"
      : "opacity-90",
    "slide-in-left": isInView
      ? "opacity-100 translate-x-0"
      : "opacity-90 -translate-x-4",
    "slide-in-right": isInView
      ? "opacity-100 translate-x-0"
      : "opacity-90 translate-x-4",
    "scale-in": isInView
      ? "opacity-100 scale-100"
      : "opacity-90 scale-[0.98]",
  }[animation];

  return (
    <div
      ref={ref}
      className={cn(baseStyles, animationStyles, className)}
      style={{ transitionDelay: `${index * staggerDelay}ms` }}
    >
      {children}
    </div>
  );
}
