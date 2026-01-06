import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://sunshinerides.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sunshine Rides | Your Ride, Your Way",
    template: "%s | Sunshine Rides",
  },
  description: "Reliable transportation services in Colorado. Wheelchair accessible, medical transport, Medicaid accepted. Serving Grand Junction, Montrose, Telluride, Vail, Denver, and Aspen. Our car is your car.",
  keywords: ["transportation", "rides", "Colorado", "wheelchair accessible", "medical transport", "Medicaid", "Grand Junction", "Montrose", "Telluride", "Vail", "Denver", "Aspen", "NEMT", "non-emergency medical transport"],
  authors: [{ name: "Sunshine Rides of Colorado" }],
  creator: "Sunshine Rides of Colorado",
  publisher: "Sunshine Rides of Colorado",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "Sunshine Rides | Your Ride, Your Way",
    description: "Reliable transportation services in Colorado. Wheelchair accessible, medical transport, Medicaid accepted. Our car is your car.",
    url: siteUrl,
    siteName: "Sunshine Rides",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Sunshine Rides - Colorado Transportation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunshine Rides | Your Ride, Your Way",
    description: "Reliable transportation services in Colorado. Wheelchair accessible, medical transport, Medicaid accepted.",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add these when available
    // google: "verification-code",
    // yandex: "verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
};

// JSON-LD structured data for local business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#organization`,
  name: "Sunshine Rides",
  description: "Reliable transportation services in Colorado. Wheelchair accessible, medical transport, and Medicaid accepted.",
  url: siteUrl,
  telephone: "+1-970-777-7777",
  email: "info@sunshinerides.com",
  image: `${siteUrl}/images/hero.png`,
  logo: `${siteUrl}/images/hero.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Grand Junction",
    addressRegion: "CO",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.0639,
    longitude: -108.5506,
  },
  areaServed: [
    { "@type": "City", name: "Grand Junction, CO" },
    { "@type": "City", name: "Montrose, CO" },
    { "@type": "City", name: "Telluride, CO" },
    { "@type": "City", name: "Vail, CO" },
    { "@type": "City", name: "Denver, CO" },
    { "@type": "City", name: "Aspen, CO" },
  ],
  sameAs: [
    // Add social media links when available
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Transportation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wheelchair Accessible Transport",
          description: "Fully accessible vehicles for wheelchair users",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Medical Transport",
          description: "Non-emergency medical transportation (NEMT)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Medicaid Transport",
          description: "Medicaid-accepted transportation services",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
