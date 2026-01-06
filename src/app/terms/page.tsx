import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Sunshine Rides of Colorado transportation services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">
            Effective Date: January 1, 2025
          </p>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="lead text-lg text-muted-foreground mb-8">
            Welcome to Sunshine Rides of Colorado. By using our transportation services,
            you agree to these Terms of Service. Please read them carefully.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Service Description
            </h2>
            <p className="text-muted-foreground mb-4">
              Sunshine Rides of Colorado provides non-emergency transportation services
              throughout Colorado, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Local and long-distance passenger transportation</li>
              <li>Medical and healthcare appointment transportation (NEMT)</li>
              <li>Wheelchair-accessible transportation</li>
              <li>Airport shuttle services</li>
              <li>Medicaid-covered transportation for eligible recipients</li>
            </ul>
            <p className="text-muted-foreground">
              Our services are available 24 hours a day, 7 days a week, subject to
              vehicle and driver availability.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Booking and Reservations
            </h2>
            <p className="text-muted-foreground mb-4">
              Reservations can be made by calling 970-777-7777 or through our online
              booking system. When booking a ride, you agree to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Provide accurate pickup and drop-off locations</li>
              <li>Specify any special requirements (wheelchair, medical equipment, etc.)</li>
              <li>Provide accurate contact information</li>
              <li>Be ready at the designated pickup time</li>
              <li>Inform us of any changes to your booking as soon as possible</li>
            </ul>
            <p className="text-muted-foreground">
              We recommend booking at least 24 hours in advance for standard rides
              and 48 hours for medical appointments or special accommodation needs.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Cancellation Policy
            </h2>
            <p className="text-muted-foreground mb-4">
              We understand that plans change. Our cancellation policy is as follows:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>
                <strong>24+ hours notice:</strong> No cancellation fee
              </li>
              <li>
                <strong>2-24 hours notice:</strong> 25% of the estimated fare may apply
              </li>
              <li>
                <strong>Less than 2 hours notice:</strong> 50% of the estimated fare may apply
              </li>
              <li>
                <strong>No-show:</strong> Full fare may be charged
              </li>
            </ul>
            <p className="text-muted-foreground">
              Cancellation fees may be waived for documented emergencies or medical
              situations at our discretion.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Payment Terms
            </h2>
            <p className="text-muted-foreground mb-4">
              Payment is due at the time of service unless prior arrangements have
              been made. We accept:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Cash</li>
              <li>Major credit and debit cards</li>
              <li>Approved Medicaid billing (for eligible services)</li>
              <li>Pre-approved corporate accounts</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Fares are calculated based on distance, time, and service type. Wait
              times exceeding 15 minutes may incur additional charges. Toll fees and
              parking charges, when applicable, will be added to your fare.
            </p>
            <p className="text-muted-foreground">
              For Medicaid-covered transportation, coverage is subject to your plan's
              terms and prior authorization requirements.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Liability Limitations
            </h2>
            <p className="text-muted-foreground mb-4">
              Sunshine Rides of Colorado maintains comprehensive insurance coverage
              for all vehicles and passengers. However:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>
                We are not liable for delays caused by traffic, weather, road
                conditions, or other circumstances beyond our control
              </li>
              <li>
                We are not responsible for missed appointments, flights, or other
                time-sensitive obligations due to unforeseen delays
              </li>
              <li>
                Liability for lost or damaged personal property left in our vehicles
                is limited to $500 per incident
              </li>
              <li>
                We are not liable for any consequential, incidental, or indirect
                damages arising from our services
              </li>
            </ul>
            <p className="text-muted-foreground">
              Passengers must wear seatbelts at all times. Wheelchair passengers
              must use provided securement systems.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. User Responsibilities
            </h2>
            <p className="text-muted-foreground mb-4">
              As a passenger, you agree to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Treat drivers and other passengers with respect and courtesy</li>
              <li>Wear seatbelts and follow all safety instructions</li>
              <li>Keep the vehicle clean and report any damage or cleanliness issues</li>
              <li>Not smoke, vape, or consume alcohol in our vehicles</li>
              <li>Supervise any minors or dependents traveling with you</li>
              <li>Disclose any medical conditions that may affect your transport</li>
              <li>Ensure mobility equipment is in safe working condition</li>
              <li>Provide accurate information for billing and contact purposes</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Prohibited Uses
            </h2>
            <p className="text-muted-foreground mb-4">
              The following are strictly prohibited:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                Transporting illegal substances, weapons, or hazardous materials
              </li>
              <li>
                Engaging in illegal activity during transport
              </li>
              <li>
                Verbal or physical harassment of drivers or other passengers
              </li>
              <li>
                Damaging or defacing our vehicles
              </li>
              <li>
                Refusing to pay for services rendered
              </li>
              <li>
                Providing false information for booking or billing
              </li>
              <li>
                Traveling with contagious illnesses without prior disclosure
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Violation of these prohibitions may result in immediate termination of
              service, denial of future bookings, and potential legal action.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Service Modifications
            </h2>
            <p className="text-muted-foreground mb-4">
              Sunshine Rides reserves the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>
                Modify, suspend, or discontinue any service at any time
              </li>
              <li>
                Adjust pricing with reasonable notice to customers
              </li>
              <li>
                Refuse service to any individual who violates these terms
              </li>
              <li>
                Update these Terms of Service as necessary
              </li>
            </ul>
            <p className="text-muted-foreground">
              We will make reasonable efforts to notify regular customers of
              significant changes to our services or terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. Privacy
            </h2>
            <p className="text-muted-foreground">
              Your privacy is important to us. Please review our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>{" "}
              to understand how we collect, use, and protect your personal information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              10. Governing Law
            </h2>
            <p className="text-muted-foreground mb-4">
              These Terms of Service shall be governed by and construed in accordance
              with the laws of the State of Colorado, without regard to its conflict
              of law provisions.
            </p>
            <p className="text-muted-foreground">
              Any disputes arising from these terms or our services shall be resolved
              in the state or federal courts located in Mesa County, Colorado. You
              agree to submit to the personal jurisdiction of these courts.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              11. Contact Information
            </h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about these Terms of Service or our transportation
              services, please contact us:
            </p>
            <address className="not-italic text-muted-foreground">
              <strong className="text-foreground">Sunshine Rides of Colorado</strong>
              <br />
              Phone:{" "}
              <a href="tel:970-777-7777" className="text-primary hover:underline">
                970-777-7777
              </a>
              <br />
              Email:{" "}
              <a href="mailto:info@sunshinerides.com" className="text-primary hover:underline">
                info@sunshinerides.com
              </a>
            </address>
          </section>

          <hr className="border-border my-10" />

          <p className="text-sm text-muted-foreground">
            By using Sunshine Rides services, you acknowledge that you have read,
            understood, and agree to be bound by these Terms of Service.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/"
            className="text-primary hover:underline inline-flex items-center gap-2"
          >
            <svg
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
