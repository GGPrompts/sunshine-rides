"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedItem } from "@/components/animated-section";

const serviceAreas = [
  "Grand Junction",
  "Montrose",
  "Telluride",
  "Vail",
  "Denver",
  "Aspen",
];

const serviceTypes = [
  { value: "local", label: "Local Rides" },
  { value: "medical", label: "Medical Transport" },
  { value: "airport", label: "Airport Shuttle" },
  { value: "long-distance", label: "Long-Distance Travel" },
  { value: "wheelchair", label: "Wheelchair Accessible" },
  { value: "medicaid", label: "Medicaid Transport" },
  { value: "other", label: "Other / General Inquiry" },
];

const businessHours = [
  { day: "Monday - Friday", hours: "6:00 AM - 10:00 PM" },
  { day: "Saturday", hours: "7:00 AM - 9:00 PM" },
  { day: "Sunday", hours: "8:00 AM - 8:00 PM" },
  { day: "Medical Transport", hours: "24/7 Available" },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Phone CTA */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Get in Touch
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Contact{" "}
              <span className="text-primary">Sunshine Rides</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
              Sunshine Rides of Colorado - Your trusted transportation partner.
            </p>
            <p className="text-xl sm:text-2xl text-foreground font-medium mb-8">
              &ldquo;Our Car is Your Car&rdquo;
            </p>

            {/* Prominent Phone CTA */}
            <div className="flex flex-col items-center gap-4 mb-8">
              <Button
                size="lg"
                className="text-xl sm:text-2xl px-10 py-8 font-bold gap-3 shadow-lg hover:shadow-xl transition-shadow"
                asChild
              >
                <a href="tel:970-777-7777">
                  <Phone className="size-7" />
                  970-777-7777
                </a>
              </Button>
              <p className="text-muted-foreground">
                Call now for immediate assistance
              </p>
            </div>
          </AnimatedSection>

          {/* Quick Contact Stats */}
          <AnimatedSection className="mt-12" animation="fade-in" delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="text-center p-4 rounded-lg bg-card border">
                <Phone className="size-6 text-primary mx-auto mb-2" />
                <div className="font-semibold text-foreground">Call Us</div>
                <a
                  href="tel:970-777-7777"
                  className="text-primary hover:underline"
                >
                  970-777-7777
                </a>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border">
                <Mail className="size-6 text-primary mx-auto mb-2" />
                <div className="font-semibold text-foreground">Email Us</div>
                <a
                  href="mailto:rides@sunshinerides.co"
                  className="text-primary hover:underline"
                >
                  rides@sunshinerides.co
                </a>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border">
                <Clock className="size-6 text-primary mx-auto mb-2" />
                <div className="font-semibold text-foreground">Available</div>
                <span className="text-muted-foreground">24/7 for Medical</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <AnimatedItem index={0} animation="slide-in-left">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as
                    soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for contacting Sunshine Rides. We&apos;ll be
                        in touch shortly.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(970) 555-0123"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Type</Label>
                        <Select name="service">
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Select a service type" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your transportation needs..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="size-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="size-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </AnimatedItem>

            {/* Contact Info & Business Hours */}
            <div className="space-y-6">
              <AnimatedItem index={1} animation="slide-in-right">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Clock className="size-5 text-primary" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {businessHours.map((schedule) => (
                        <div
                          key={schedule.day}
                          className="flex justify-between items-center py-2 border-b last:border-0"
                        >
                          <span className="font-medium text-foreground">
                            {schedule.day}
                          </span>
                          <span
                            className={
                              schedule.day === "Medical Transport"
                                ? "text-primary font-semibold"
                                : "text-muted-foreground"
                            }
                          >
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedItem>

              <AnimatedItem index={2} animation="slide-in-right">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <MapPin className="size-5 text-primary" />
                      Service Areas
                    </CardTitle>
                    <CardDescription>
                      Proudly serving communities across Colorado
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {serviceAreas.map((area) => (
                        <Badge
                          key={area}
                          variant="secondary"
                          className="px-3 py-1.5"
                        >
                          <MapPin className="size-3 mr-1.5" />
                          {area}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Don&apos;t see your area? Call us - we may still be able
                      to serve you!
                    </p>
                  </CardContent>
                </Card>
              </AnimatedItem>

              {/* Quick Call Card */}
              <AnimatedItem index={3} animation="slide-in-right">
                <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Phone className="size-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Prefer to Call?
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Our friendly team is ready to help you book your ride.
                    </p>
                    <Button size="lg" className="gap-2" asChild>
                      <a href="tel:970-777-7777">
                        <Phone className="size-5" />
                        970-777-7777
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedItem>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder / Additional Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Serving All of Colorado
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From the Western Slope to the Front Range, Sunshine Rides provides
              reliable transportation throughout the Centennial State.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={100}>
            <Card className="max-w-4xl mx-auto overflow-hidden">
              <div className="bg-gradient-to-br from-muted/50 to-muted h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="size-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Interactive map coming soon
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {serviceAreas.map((area) => (
                      <Badge key={area} variant="outline">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ready to Book Your Ride?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Call us today or fill out the form above. Sunshine Rides of
                Colorado is here to serve you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="gap-2 px-8" asChild>
                  <a href="tel:970-777-7777">
                    <Phone className="size-5" />
                    970-777-7777
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/services">View All Services</a>
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                <span className="font-medium">Our Car is Your Car</span> •
                Serving Colorado since day one
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
