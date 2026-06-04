import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { Sora, Space_Grotesk } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { BackgroundAudio } from "@/components/background-audio";
import { CookieConsentBanner } from "@/components/cookie-consent-banner";
import { LanguageProvider } from "@/components/language-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/data/site";
import { LANG_COOKIE, normalizeLanguage } from "@/lib/language";

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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" }
    ],
    shortcut: ["/favicon-32x32.png"],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }]
  },
  manifest: "/site.webmanifest",
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
        url: "/og/rvfrontend-social-card.png",
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
    images: ["/og/rvfrontend-social-card.png"]
  },
  robots: {
    index: true,
    follow: true
  },
  other: {
    "google-site-verification": "78WaYCfOrCveJZcxkOFgF8JGAgG3oFG9mVgMUiLQFlQ",
    "google-adsense-account": "ca-pub-5016673566357322"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060910"
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const language = normalizeLanguage(cookieStore.get(LANG_COOKIE)?.value);

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
    <html lang={language} className={`${spaceGrotesk.variable} ${sora.variable}`}>
      <head>
        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://region1.google-analytics.com" />
        <link rel="dns-prefetch" href="https://ep1.adtrafficquality.google" />
        <link rel="dns-prefetch" href="https://ep2.adtrafficquality.google" />

        {/* Google Consent Mode v2 initialization - load after interactive to avoid hydration mismatch */}
        <Script id="consent-mode-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'analytics_storage': 'granted',
              'ad_storage': 'granted',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });
          `}
        </Script>

        {/* Google tag (gtag.js) - load after interactive to avoid hydration mismatch */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-P9YQNQTHT7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P9YQNQTHT7');
          `}
        </Script>

        {/* Google AdSense - use beforeInteractive for proper AdSense detection */}
        {/* This avoids the data-nscript attribute warning AdSense doesn't support */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5016673566357322"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body className="min-h-screen bg-noise text-mist antialiased">
        <LanguageProvider initialLanguage={language}>
          <BackgroundAudio />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <CookieConsentBanner />
        </LanguageProvider>

        {/* Organization Schema */}
        <Script id="org-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(orgSchema)}
        </Script>
      </body>
    </html>
  );
}
