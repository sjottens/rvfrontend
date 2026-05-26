import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for RV Frontend - information about cookies and tracking technologies used on our website.",
  alternates: {
    canonical: "/cookie-policy"
  }
};

export default function CookiePolicyPage() {
  const lastUpdated = "January 2025";

  return (
    <div className="container-shell py-16 md:py-20">
      <AnimatedSection>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">Cookie Policy</h1>
        <p className="mt-4 text-white/65">Last updated: {lastUpdated}</p>
      </AnimatedSection>

      <AnimatedSection className="prose prose-invert mt-10 max-w-4xl" delay={0.1}>
        <div className="space-y-8 text-white/80">
          <section>
            <h2 className="text-2xl font-semibold text-white">1. What Are Cookies?</h2>
            <p>
              Cookies are small data files that are placed on your device (computer, tablet, or mobile
              phone) when you visit our website. They are widely used to make websites work, or work more
              efficiently, as well as to provide information to the owners of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">2. Types of Cookies We Use</h2>

            <h3 className="mt-6 text-xl font-semibold text-white">Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly and cannot be disabled. They
              include:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Language preference (LANG_COOKIE)</li>
              <li>Consent preferences</li>
              <li>Session management</li>
            </ul>

            <h3 className="mt-6 text-xl font-semibold text-white">Preference Cookies</h3>
            <p>
              These cookies remember your choices to provide a personalized experience:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Language selection (Dutch/English)</li>
              <li>Audio preference settings</li>
              <li>Display preferences</li>
            </ul>

            <h3 className="mt-6 text-xl font-semibold text-white">Analytics Cookies</h3>
            <p>
              These cookies help us understand how visitors interact with our website, which pages are
              visited most, and whether errors occur:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Google Analytics (if implemented)</li>
              <li>Page view tracking</li>
              <li>User behavior analysis</li>
            </ul>

            <h3 className="mt-6 text-xl font-semibold text-white">Advertising Cookies</h3>
            <p>
              These cookies are used to serve you with advertisements that are relevant to you and your
              interests:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Google AdSense cookies</li>
              <li>Advertising ID tracking</li>
              <li>Remarketing tags</li>
              <li>Conversion tracking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">3. How We Use Cookies</h2>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>To enable essential features of the website</li>
              <li>To remember your language preference</li>
              <li>To analyze website performance and usage</li>
              <li>To serve targeted advertising through Google AdSense</li>
              <li>To understand user interests for content improvement</li>
              <li>To comply with legal and regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">4. Google Consent Mode v2</h2>
            <p>
              For users in the European Economic Area (EEA), we implement Google Consent Mode v2, which
              allows Google services to operate in a privacy-compliant manner:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>
                <strong>Analytics Consent:</strong> Controls whether Google Analytics can collect data
              </li>
              <li>
                <strong>Ad Consent:</strong> Controls whether Google AdSense can personalize ads
              </li>
              <li>
                <strong>Functionality Consent:</strong> Controls necessary website features
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">5. Third-Party Cookies</h2>
            <p>
              Our website uses cookies from third-party services. The main third-party cookie provider is:
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <strong>Google AdSense:</strong> Serves advertisements and tracks ad performance. View{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan hover:text-cyan/80"
                >
                  Google's Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>Google Fonts:</strong> Used for typography. Processed on our behalf for design purposes.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">6. Managing Your Cookie Preferences</h2>
            <p>You have the right to accept or reject cookies (except essential ones). You can:</p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Use our cookie consent banner to manage your preferences</li>
              <li>Change your browser cookie settings</li>
              <li>Clear cookies from your browser at any time</li>
              <li>Opt out of personalized advertising through Google Ads Settings</li>
            </ul>

            <p className="mt-6 p-4 bg-white/[0.05] rounded-lg border border-white/10">
              <strong>Note:</strong> Disabling essential cookies may affect the functionality of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">7. Browser Controls</h2>
            <p>Most modern browsers allow you to:</p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Block all cookies</li>
              <li>Allow only certain types of cookies</li>
              <li>Delete cookies when you exit the browser</li>
              <li>Set preferences for specific websites</li>
            </ul>
            <p className="mt-4">
              Visit your browser's help section for more information on managing cookies. You can also
              visit{" "}
              <a href="https://allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-cyan hover:text-cyan/80">
                allaboutcookies.org
              </a>{" "}
              for guidance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">8. GDPR Compliance</h2>
            <p>
              For users in the EEA, we collect your explicit consent before placing non-essential cookies
              on your device. Your consent is:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Freely given and informed</li>
              <li>Specific and unambiguous</li>
              <li>Easily withdrawn at any time</li>
              <li>Managed through our cookie banner</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">9. Data Retention</h2>
            <p>
              Cookies are retained for different periods depending on their type:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Essential cookies: Duration of session or as needed</li>
              <li>Preference cookies: Up to 1 year</li>
              <li>Analytics cookies: Up to 24 months</li>
              <li>Advertising cookies: According to Google's policy (typically 13 months)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">10. Contact Us</h2>
            <p>
              If you have questions about our cookie practices, please contact us at:
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
            </div>
          </section>

          <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-white/60">
              This Cookie Policy may be updated periodically. We will notify you of any material changes by updating the
              "Last Updated" date above.
            </p>
          </section>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-12 flex gap-4" delay={0.2}>
        <Link href="/privacy-policy" className="text-sm text-cyan hover:text-cyan/80">
          ← Privacy Policy
        </Link>
        <Link href="/terms" className="text-sm text-cyan hover:text-cyan/80">
          Terms of Service →
        </Link>
      </AnimatedSection>
    </div>
  );
}
