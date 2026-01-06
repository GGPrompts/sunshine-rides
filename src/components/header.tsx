"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Phone, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#features", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Reviews" },
];

const dashboardLinks = [
  { href: "/dashboard/fleet", label: "Fleet" },
  { href: "/dashboard/tracking", label: "Tracking" },
  { href: "/dashboard/support", label: "Support" },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-full bg-primary">
            <Sun className="size-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">
            Sunshine <span className="text-primary">Rides</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <span className="text-muted-foreground/50">|</span>
          {dashboardLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:970-777-7777"
            className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            <Phone className="size-4" />
            <span>970-777-7777</span>
          </a>
          <ThemeToggle />
          <Button asChild>
            <Link href="#book">Book a Ride</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <a
            href="tel:970-777-7777"
            className="flex size-9 items-center justify-center rounded-md text-foreground hover:bg-accent"
          >
            <Phone className="size-5" />
            <span className="sr-only">Call 970-777-7777</span>
          </a>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-full bg-primary">
                    <Sun className="size-4 text-primary-foreground" />
                  </div>
                  <span>
                    Sunshine <span className="text-primary">Rides</span>
                  </span>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
                <hr className="my-2" />
                <span className="text-sm font-medium text-muted-foreground">Dashboards</span>
                {dashboardLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
                <hr className="my-2" />
                <a
                  href="tel:970-777-7777"
                  className="flex items-center gap-2 text-lg font-medium text-foreground"
                >
                  <Phone className="size-5" />
                  <span>970-777-7777</span>
                </a>
                <Button asChild className="mt-4 w-full" size="lg">
                  <Link href="#book" onClick={() => setIsOpen(false)}>
                    Book a Ride
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
