import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Sunshine Rides of Colorado. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Sunshine Rides of Colorado
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <article className="max-w-3xl mx-auto space-y-8">
            <p className="text-sm text-muted-foreground">
              <strong>Effective Date:</strong> January 1, 2026
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              At Sunshine Rides of Colorado, we are committed to protecting your
              privacy and ensuring the security of your personal information.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our transportation
              services.
            </p>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  Information We Collect
                </h2>
                <p className="text-muted-foreground mb-3">
                  We collect information that you provide directly to us when
                  booking rides or using our services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                  <li>
                    <strong className="text-foreground">Contact Information:</strong> Name, phone number, and
                    email address
                  </li>
                  <li>
                    <strong className="text-foreground">Location Data:</strong> Pickup and drop-off addresses
                    for your rides
                  </li>
                  <li>
                    <strong className="text-foreground">Scheduling Information:</strong> Appointment times,
                    recurring ride preferences, and special instructions
                  </li>
                  <li>
                    <strong className="text-foreground">Medical Information:</strong> When applicable for
                    medical transport services, including mobility requirements and
                    Medicaid information
                  </li>
                  <li>
                    <strong className="text-foreground">Payment Information:</strong> Billing details when
                    applicable (processed securely through our payment providers)
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground mb-3">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                  <li>Provide, maintain, and improve our transportation services</li>
                  <li>
                    Schedule and coordinate your rides, including dispatching
                    drivers to your location
                  </li>
                  <li>
                    Communicate with you about your bookings, including
                    confirmations, reminders, and updates
                  </li>
                  <li>
                    Process payments and manage billing for non-Medicaid covered
                    services
                  </li>
                  <li>
                    Coordinate with healthcare providers and Medicaid for covered
                    medical transportation
                  </li>
                  <li>
                    Respond to your questions, comments, and customer service
                    requests
                  </li>
                  <li>
                    Improve our services and develop new features based on customer
                    needs
                  </li>
                  <li>
                    Ensure safety and security for our passengers and drivers
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  Data Protection Measures
                </h2>
                <p className="text-muted-foreground mb-3">
                  We implement appropriate technical and organizational security
                  measures to protect your personal information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                  <li>
                    Secure data storage with encryption for sensitive information
                  </li>
                  <li>
                    Limited access to personal information on a need-to-know basis
                  </li>
                  <li>Regular security assessments and updates to our systems</li>
                  <li>
                    Staff training on privacy and data protection best practices
                  </li>
                  <li>
                    Secure communication channels for transmitting personal data
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  Information Sharing
                </h2>
                <p className="text-muted-foreground mb-3">
                  We do not sell, rent, or trade your personal information. We may
                  share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                  <li>
                    <strong className="text-foreground">With Our Drivers:</strong> To provide your requested
                    transportation services
                  </li>
                  <li>
                    <strong className="text-foreground">Healthcare Providers:</strong> When coordinating medical
                    transportation services with your consent
                  </li>
                  <li>
                    <strong className="text-foreground">Medicaid and Insurance:</strong> For billing and
                    verification of covered services
                  </li>
                  <li>
                    <strong className="text-foreground">Service Providers:</strong> With trusted third parties
                    who assist in operating our business (payment processors,
                    scheduling software)
                  </li>
                  <li>
                    <strong className="text-foreground">Legal Requirements:</strong> When required by law,
                    subpoena, or other legal process
                  </li>
                  <li>
                    <strong className="text-foreground">Safety:</strong> To protect the safety of our
                    passengers, drivers, or the public
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  Your Rights
                </h2>
                <p className="text-muted-foreground mb-3">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                  <li>Access the personal information we hold about you</li>
                  <li>
                    Request correction of inaccurate or incomplete information
                  </li>
                  <li>
                    Request deletion of your personal information, subject to legal
                    retention requirements
                  </li>
                  <li>Opt out of marketing communications at any time</li>
                  <li>
                    Request a copy of your data in a commonly used electronic format
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  Data Retention
                </h2>
                <p className="text-muted-foreground">
                  We retain your personal information for as long as necessary to
                  provide our services and fulfill the purposes described in this
                  policy. We may retain certain information for longer periods as
                  required by law, including Medicaid record-keeping requirements
                  and tax regulations.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  Children&apos;s Privacy
                </h2>
                <p className="text-muted-foreground">
                  Our services may be used to transport minors when accompanied by a
                  parent or guardian, or with explicit parental consent for
                  unaccompanied minor transportation. We do not knowingly collect
                  personal information directly from children under 13.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  Changes to This Policy
                </h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any material changes by posting the new policy on
                  our website and updating the effective date. We encourage you to
                  review this policy periodically.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  Contact Us
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy or our data
                  practices, please contact us:
                </p>
                <div className="bg-muted/50 rounded-lg p-6">
                  <p className="font-semibold text-foreground mb-2">
                    Sunshine Rides of Colorado
                  </p>
                  <p className="text-muted-foreground mb-1">
                    Phone:{" "}
                    <a
                      href="tel:970-777-7777"
                      className="text-primary hover:underline"
                    >
                      970-777-7777
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    Email:{" "}
                    <a
                      href="mailto:privacy@sunshinerides.com"
                      className="text-primary hover:underline"
                    >
                      privacy@sunshinerides.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground pt-8 border-t">
              By using Sunshine Rides services, you acknowledge that you have
              read and understood this Privacy Policy.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
