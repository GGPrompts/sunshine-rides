"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, ArrowRight } from "lucide-react";

const serviceAreas = [
  "Grand Junction",
  "Montrose",
  "Telluride",
  "Vail",
  "Denver",
  "Aspen",
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Colorado mountain landscape"
          fill
          priority
          className="object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>

      {/* Content - No scroll animations for above-the-fold content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Tagline badge */}
          <Badge
            variant="outline"
            className="mb-6 border-primary/50 bg-primary/20 text-white backdrop-blur-sm"
          >
            <MapPin className="mr-1 size-3" />
            Colorado&apos;s Premier Transportation Service
          </Badge>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Your Ride,{" "}
            <span className="text-primary">Your Way</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed">
            Safe, reliable transportation across Colorado&apos;s most beautiful destinations.
            From medical appointments to mountain adventures — we&apos;ve got you covered.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="text-base font-semibold px-8 py-6 group">
              Book Now
              <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base font-semibold px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm"
            >
              <Phone className="mr-2 size-5" />
              970-555-0199
            </Button>
          </div>

          {/* Service Areas */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-300 uppercase tracking-wider">
              Serving Colorado
            </p>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <Badge
                  key={area}
                  variant="secondary"
                  className="bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-200 motion-reduce:transform-none"
                >
                  <MapPin className="mr-1 size-3" />
                  {area}
                </Badge>
              ))}
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 pt-8 border-t border-white/20 flex flex-wrap gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-400" />
              Wheelchair Accessible
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-400" />
              Medical Transport
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-400" />
              Medicaid Accepted
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
