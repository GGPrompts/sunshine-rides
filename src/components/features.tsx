"use client";

import {
  Accessibility,
  Stethoscope,
  Plane,
  MapPin,
  Clock,
  UserCheck,
} from "lucide-react";
import { AnimatedSection, AnimatedItem } from "@/components/animated-section";

const features = [
  {
    icon: Accessibility,
    title: "Wheelchair Accessible",
    description:
      "Fully equipped vehicles with ramps and lifts for comfortable, dignified transportation for all mobility needs.",
  },
  {
    icon: Stethoscope,
    title: "Medical Transport",
    description:
      "Reliable non-emergency medical transportation. Medicaid accepted. Get to appointments on time, every time.",
  },
  {
    icon: Plane,
    title: "Airport Shuttles",
    description:
      "Stress-free airport transfers to Denver, Grand Junction, and regional airports. Flight tracking included.",
  },
  {
    icon: MapPin,
    title: "Long Distance Travel",
    description:
      "Comfortable rides across Colorado. From Telluride to Denver, Vail to Aspen—we go where you need.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Round-the-clock service for early flights, late appointments, or emergencies. We're always here for you.",
  },
  {
    icon: UserCheck,
    title: "Professional Drivers",
    description:
      "Background-checked, trained, and courteous drivers committed to your safety and comfort.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Mountain Express?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Colorado's trusted transportation partner. Professional service,
            accessible vehicles, and a commitment to getting you there safely.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedItem
              key={feature.title}
              index={index}
              staggerDelay={100}
              animation="fade-in-up"
            >
              <div className="group bg-card rounded-xl border p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 motion-reduce:transform-none h-full">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
}
