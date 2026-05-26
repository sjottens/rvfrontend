import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for RV Frontend - how we handle and protect your personal data.",
  alternates: {
    canonical: "/privacy-policy"
  }
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 2025";

  return (
    <div className="container-shell py-16 md:py-20">
      <AnimatedSection>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-white/65">Last updated: {lastUpdated}</p>
      </AnimatedSection>

      <AnimatedSection className="prose prose-invert mt-10 max-w-4xl" delay={0.1}>
        <div className="space-y-8 text-white/80">
          <section>
            <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
            <p>
              {siteConfig.name} ("{siteConfig.name}", "we", "us", "our") operates the website{" "}
              <a href={siteConfig.domain} className="text-cyan hover:text-cyan/80">
                {siteConfig.domain}
              </a>
              . This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website, including any other media form, media channel,
              mobile website, or mobile application related or connected thereto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the site includes:</p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>
                <strong>Personal Data:</strong> Name, email address, company name, phone number, and any other information you voluntarily provide through our contact form or inquiries.
              </li>
              <li>
                <strong>Automatically Collected Data:</strong> IP address, browser type, operating system,
                pages visited, time and date of visit, and referral source.
              </li>
              <li>
                <strong>Cookie Data:</strong> Information collected through cookies, web beacons, and similar technologies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">3. Use of Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Analyze website usage and improve our services</li>
              <li>Display personalized content and advertisements</li>
              <li>Prevent fraudulent transactions and enhance security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">4. Third-Party Services</h2>
            <p>
              Our website uses third-party services including Google AdSense for advertising. Google may
              use cookies and other tracking technologies to serve ads based on your prior visits. You can
              opt out of personalized advertising through Google's Ads Settings.
            </p>
            <p className="mt-4">
              We also use nodemailer for email delivery. Your email information is used solely for contact purposes and will not be shared with third parties without your consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">5. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website. This includes:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>
                <strong>Essential Cookies:</strong> Necessary for the website to function properly
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember your language and settings choices
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how you use our website
              </li>
              <li>
                <strong>Advertising Cookies:</strong> Used by Google AdSense to serve relevant ads
              </li>
            </ul>
            <p className="mt-4">
              You can control cookies through your browser settings. However, disabling certain cookies may affect functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">6. GDPR and Your Rights</h2>
            <p>If you are located in the European Union or EEA, you have the following rights:</p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Right to access your personal data</li>
              <li>Right to correct inaccurate information</li>
              <li>Right to delete your information (right to be forgotten)</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-cyan hover:text-cyan/80">
                {siteConfig.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">7. Data Retention</h2>
            <p>
              We retain your personal data for as long as necessary to fulfill the purposes outlined in
              this Privacy Policy. For contact form inquiries, we typically retain your information for 12
              months unless a longer retention period is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">8. Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data
              against unauthorized access, alteration, disclosure, or destruction. However, no method of
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">9. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-4 space-y-2">
              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-cyan hover:text-cyan/80">
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href={`tel:${siteConfig.phone}`} className="text-cyan hover:text-cyan/80">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <strong>Location:</strong> {siteConfig.location}
              </p>
            </div>
          </section>

          <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-white/60">
              This Privacy Policy is provided as-is and may be updated from time to time. We will notify
              you of any material changes by updating the "Last Updated" date at the top of this page.
            </p>
          </section>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-12 flex gap-4" delay={0.2}>
        <Link href="/cookie-policy" className="text-sm text-cyan hover:text-cyan/80">
          ← Cookie Policy
        </Link>
        <Link href="/terms" className="text-sm text-cyan hover:text-cyan/80">
          Terms of Service →
        </Link>
      </AnimatedSection>
    </div>
  );
}
