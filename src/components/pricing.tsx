"use client";

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { AnimatedSection, AnimatedItem } from "@/components/animated-section"

interface PricingTier {
  name: string
  description: string
  price: string
  priceNote?: string
  features: string[]
  popular?: boolean
  ctaText: string
}

const pricingTiers: PricingTier[] = [
  {
    name: "Local Rides",
    description: "Perfect for trips around town",
    price: "$15",
    priceNote: "starting price",
    features: [
      "Door-to-door service",
      "Grand Junction & Montrose areas",
      "Same-day booking available",
      "Comfortable sedans & SUVs",
    ],
    ctaText: "Book Now",
  },
  {
    name: "Medical Transport",
    description: "Safe, reliable healthcare trips",
    price: "Medicaid",
    priceNote: "rates available",
    features: [
      "Wheelchair accessible vehicles",
      "Trained medical transport drivers",
      "Appointment scheduling",
      "Hospital & clinic partnerships",
      "Insurance billing support",
    ],
    popular: true,
    ctaText: "Get a Quote",
  },
  {
    name: "Airport Shuttle",
    description: "Stress-free airport transfers",
    price: "$75+",
    priceNote: "based on destination",
    features: [
      "Denver, Aspen, Vail airports",
      "Flight tracking included",
      "Luggage assistance",
      "Meet & greet service",
    ],
    ctaText: "Get a Quote",
  },
  {
    name: "Long Distance",
    description: "Colorado & beyond",
    price: "Custom",
    priceNote: "quote",
    features: [
      "Inter-city travel",
      "Multi-stop itineraries",
      "Flexible scheduling",
      "Group rates available",
      "24/7 booking support",
    ],
    ctaText: "Get a Quote",
  },
]

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-4", className)}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <Card
      className={cn(
        "relative flex flex-col",
        tier.popular && "border-primary shadow-lg ring-1 ring-primary/20"
      )}
    >
      {tier.popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
          Most Popular
        </Badge>
      )}
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{tier.name}</CardTitle>
        <CardDescription>{tier.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="mb-6 text-center">
          <span className="text-4xl font-bold text-foreground">
            {tier.price}
          </span>
          {tier.priceNote && (
            <span className="ml-1 text-sm text-muted-foreground">
              {tier.priceNote}
            </span>
          )}
        </div>
        <ul className="space-y-3">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm">
              <CheckIcon className="mt-0.5 shrink-0 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={tier.popular ? "default" : "outline"}
          size="lg"
        >
          {tier.ctaText}
        </Button>
      </CardFooter>
    </Card>
  )
}

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From quick local trips to long-distance travel, we have a ride for
            every need. No hidden fees, just reliable service.
          </p>
        </AnimatedSection>
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingTiers.map((tier, index) => (
            <AnimatedItem key={tier.name} index={index} staggerDelay={100}>
              <PricingCard tier={tier} />
            </AnimatedItem>
          ))}
        </div>
        <AnimatedSection className="mt-12 text-center" delay={500}>
          <p className="text-muted-foreground">
            Need something custom?{" "}
            <a
              href="tel:970-777-7777"
              className="font-medium text-primary hover:underline transition-colors"
            >
              Call us at 970-777-7777
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Pricing
