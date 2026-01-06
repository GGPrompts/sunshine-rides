"use client";

import {
  Accessibility,
  Stethoscope,
  Plane,
  MapPin,
  Car,
  CreditCard,
  Phone,
  ArrowRight,
  CheckCircle2,
  Clock,
  Shield,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedItem } from "@/components/animated-section";

const services = [
  {
    id: "local",
    icon: Car,
    title: "Local Rides",
    tagline: "Your neighborhood, our wheels",
    description:
      "Reliable transportation throughout Grand Junction, Montrose, and surrounding areas. Door-to-door service for shopping, appointments, errands, and more.",
    areas: ["Grand Junction", "Montrose", "Delta", "Fruita", "Clifton"],
    features: [
      "Same-day booking available",
      "Flexible scheduling",
      "Round-trip discounts",
      "Recurring ride options",
    ],
    highlight: "Most Popular",
  },
  {
    id: "medical",
    icon: Stethoscope,
    title: "Medical Transport",
    tagline: "NEMT - Non-Emergency Medical Transportation",
    description:
      "Dependable rides to dialysis, physical therapy, doctor appointments, and medical procedures. We understand healthcare timing is critical.",
    areas: ["All Colorado medical facilities"],
    features: [
      "Medicaid accepted",
      "Door-through-door assistance",
      "Wait-and-return service",
      "Appointment reminders",
    ],
    highlight: "Medicaid Accepted",
  },
  {
    id: "airport",
    icon: Plane,
    title: "Airport Shuttles",
    tagline: "Fly stress-free",
    description:
      "Professional airport transfers to Denver International (DIA), Grand Junction Regional, Montrose Regional, and Eagle County airports.",
    areas: ["DIA", "Grand Junction Regional", "Montrose", "Eagle County"],
    features: [
      "Flight tracking included",
      "Meet & greet service",
      "Luggage assistance",
      "Early morning/late night",
    ],
    highlight: "Flight Tracking",
  },
  {
    id: "long-distance",
    icon: MapPin,
    title: "Long-Distance Travel",
    tagline: "Colorado adventures await",
    description:
      "Comfortable transportation across Colorado's beautiful landscape. From ski resorts to city destinations, we make the journey enjoyable.",
    areas: ["Telluride", "Vail", "Aspen", "Denver", "Breckenridge"],
    features: [
      "Mountain destinations",
      "Scenic route options",
      "Rest stop flexibility",
      "Multi-passenger pricing",
    ],
    highlight: "Ski Season Ready",
  },
  {
    id: "wheelchair",
    icon: Accessibility,
    title: "Wheelchair Accessible",
    tagline: "Dignified transportation for all",
    description:
      "ADA-compliant vehicles equipped with ramps and lifts. Our trained drivers ensure safe, comfortable transport for passengers with mobility needs.",
    areas: ["All service areas"],
    features: [
      "Wheelchair ramps & lifts",
      "Secure tie-downs",
      "Patient assistance",
      "ADA compliant",
    ],
    highlight: "ADA Compliant",
  },
  {
    id: "medicaid",
    icon: CreditCard,
    title: "Medicaid Covered",
    tagline: "Healthcare transportation benefits",
    description:
      "We're an approved Medicaid transportation provider. If you qualify for Medicaid, your medical transportation may be covered at no cost to you.",
    areas: ["Colorado Medicaid service areas"],
    features: [
      "Direct billing available",
      "No out-of-pocket costs",
      "Eligibility verification",
      "Regular scheduling",
    ],
    highlight: "Zero Cost*",
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Background-checked drivers, maintained vehicles, full insurance coverage.",
  },
  {
    icon: Clock,
    title: "Always On Time",
    description: "Real-time tracking, punctual pickups, and reliable scheduling.",
  },
  {
    icon: Heart,
    title: "Care & Compassion",
    description: "Patient, courteous service tailored to each passenger's needs.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Our Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Transportation Services{" "}
              <span className="text-primary">For Everyone</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              From local errands to mountain adventures, medical appointments to
              airport transfers—Mountain Express provides safe, reliable
              transportation across Colorado.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="tel:970-555-0199" className="gap-2">
                  <Phone className="size-5" />
                  Call 970-555-0199
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#services" className="gap-2">
                  Explore Services
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </AnimatedSection>

          {/* Quick Stats */}
          <AnimatedSection className="mt-16" animation="fade-in" delay={200}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { value: "6+", label: "Service Types" },
                { value: "50+", label: "Colorado Cities" },
                { value: "24/7", label: "Availability" },
                { value: "100%", label: "Satisfaction" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center p-4 rounded-lg bg-card border"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Transportation Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional transportation tailored to your needs. Select a
              service to learn more.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <AnimatedItem
                key={service.id}
                index={index}
                staggerDelay={100}
                animation="fade-in-up"
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      {service.highlight && (
                        <Badge variant="secondary" className="text-xs">
                          {service.highlight}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {service.tagline}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Service Areas */}
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-xs text-muted-foreground mb-2">
                        Service Areas:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {service.areas.slice(0, 3).map((area) => (
                          <Badge
                            key={area}
                            variant="outline"
                            className="text-xs"
                          >
                            {area}
                          </Badge>
                        ))}
                        {service.areas.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{service.areas.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full gap-2" asChild>
                      <a href="tel:970-555-0199">
                        <Phone className="size-4" />
                        Book This Service
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Mountain Express?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Colorado's trusted transportation partner since day one.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <AnimatedItem
                key={item.title}
                index={index}
                staggerDelay={150}
                animation="scale-in"
              >
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Card className="max-w-4xl mx-auto border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <CardContent className="p-8 sm:p-12 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Ready to Book Your Ride?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Call us today to schedule your transportation. Our friendly
                  team is available 24/7 to assist you.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" className="text-lg px-8 gap-2" asChild>
                    <a href="tel:970-555-0199">
                      <Phone className="size-5" />
                      970-555-0199
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/#book">
                      Online Booking
                      <ArrowRight className="size-4 ml-2" />
                    </a>
                  </Button>
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
                  <span className="font-medium">Your Journey, Our Priority</span> •
                  Serving all of Colorado
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Medicaid Notice */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold">*Medicaid Coverage:</span>{" "}
                Transportation benefits vary by plan. Contact your Medicaid
                provider or call us at{" "}
                <a
                  href="tel:970-555-0199"
                  className="text-primary hover:underline"
                >
                  970-555-0199
                </a>{" "}
                to verify your eligibility for covered medical transportation.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
