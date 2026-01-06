"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, AnimatedItem } from "@/components/animated-section";

interface Testimonial {
  quote: string;
  name: string;
  location: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Sunshine Rides has been a lifesaver for getting my mother to her medical appointments. The drivers are always on time, patient, and treat her with such respect. We couldn't ask for better service.",
    name: "Maria Gonzalez",
    location: "Grand Junction, CO",
    rating: 5,
  },
  {
    quote:
      "I rely on Sunshine Rides for my weekly dialysis treatments. Rain or shine, they're always there. The wheelchair accessibility is seamless, and the drivers know exactly how to help without making me feel like a burden.",
    name: "Robert Chen",
    location: "Montrose, CO",
    rating: 5,
  },
  {
    quote:
      "After my car broke down, I thought I'd have to miss work. Sunshine Rides got me there and back every day for two weeks. Their reliability literally saved my job. Can't recommend them enough!",
    name: "Jennifer Williams",
    location: "Telluride, CO",
    rating: 5,
  },
  {
    quote:
      "The peace of mind knowing my elderly father has safe, dependable transportation is priceless. The Sunshine Rides team treats him like family. They even remember his favorite radio station!",
    name: "Michael Torres",
    location: "Denver, CO",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${
            i < rating ? "text-primary" : "text-muted"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What Our Riders Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Trusted by families across Colorado for reliable, compassionate
            transportation.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <AnimatedItem key={index} index={index} staggerDelay={100}>
              <Card className="flex flex-col justify-between h-full">
                <CardContent className="pt-6">
                  <StarRating rating={testimonial.rating} />
                  <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                </CardContent>
                <div className="flex items-center gap-3 border-t px-6 py-4">
                  <Image
                    src="/images/driver.png"
                    alt={`${testimonial.name} avatar`}
                    width={40}
                    height={40}
                    className="rounded-full object-cover transition-transform duration-300 hover:scale-110 motion-reduce:transform-none"
                  />
                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
}
