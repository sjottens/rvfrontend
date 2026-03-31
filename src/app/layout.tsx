import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { BackgroundAudio } from "@/components/background-audio";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Preloader } from "@/components/preloader";
import { siteConfig } from "@/data/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "RV Frontend | Pixel-perfect UI implementatie",
    template: "%s | RV Frontend"
  },
  description:
    "RV Frontend helpt bedrijven met custom-built websites en UI implementatie. Geen WordPress, maar moderne stack met React, Vue of Angular, inclusief design-to-code, performance en SEO-focus.",
  keywords: [
    "frontend developer",
    "custom website laten maken",
    "geen wordpress",
    "ui implementatie",
    "design to code",
    "tailwind css",
    "react developer",
    "vue developer",
    "angular developer",
    "remote frontend"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "RV Frontend | Pixel-perfect UI implementatie",
    description:
      "Senior front-end ondersteuning en custom-built websites met moderne stack. Geen WordPress, wel snelle en SEO-sterke code.",
    url: siteConfig.domain,
    siteName: "RV Frontend",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/logos/rvfrontend-white-v2.png",
        width: 1200,
        height: 630,
        alt: "RV Frontend"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "RV Frontend",
    description: "Custom-built websites met moderne stack. Geen WordPress, wel pixel-perfect en SEO-sterk.",
    images: ["/logos/rvfrontend-white-v2.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.domain,
    areaServed: "NL",
    email: siteConfig.email,
    telephone: siteConfig.phone,
    priceRange: "EUR 75+",
    serviceType: "UI implementation and frontend development"
  };

  return (
    <html lang="nl" className={`${spaceGrotesk.variable} ${sora.variable}`}>
      <body className="min-h-screen bg-noise text-mist antialiased">
        <Preloader />
        <BackgroundAudio />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Script id="org-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(orgSchema)}
        </Script>
      </body>
    </html>
  );
}
