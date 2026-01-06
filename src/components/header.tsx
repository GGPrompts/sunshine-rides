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

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#fleet", label: "Fleet" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo/Brand */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-full bg-primary transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none">
            <Sun className="size-5 text-primary-foreground transition-transform duration-500 group-hover:rotate-45 motion-reduce:transform-none" />
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
              className="relative text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full motion-reduce:after:transition-none"
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
          <Button asChild>
            <Link href="#book">Book a Ride</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 md:hidden">
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
