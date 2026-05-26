import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for RV Frontend - the conditions for using our website and services.",
  alternates: {
    canonical: "/terms"
  }
};

export default function TermsPage() {
  const lastUpdated = "January 2025";

  return (
    <div className="container-shell py-16 md:py-20">
      <AnimatedSection>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-white/65">Last updated: {lastUpdated}</p>
      </AnimatedSection>

      <AnimatedSection className="prose prose-invert mt-10 max-w-4xl" delay={0.1}>
        <div className="space-y-8 text-white/80">
          <section>
            <h2 className="text-2xl font-semibold text-white">1. Agreement to Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to abide by the above, please do not use
              this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or
              software) on {siteConfig.name}'s website for personal, non-commercial transitory viewing only.
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">3. Disclaimer of Warranties</h2>
            <p>
              The materials on {siteConfig.name}'s website are provided on an "as-is" basis. {siteConfig.name} makes
              no warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of merchantability, fitness for a particular
              purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">4. Limitations of Liability</h2>
            <p>
              In no event shall {siteConfig.name} or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out of the
              use or inability to use the materials on {siteConfig.name}'s website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on {siteConfig.name}'s website could include technical, typographical, or
              photographic errors. {siteConfig.name} does not warrant that any of the materials on its website are
              accurate, complete, or current. {siteConfig.name} may make changes to the materials contained on its
              website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">6. Materials and Content</h2>
            <p>
              The materials on {siteConfig.name}'s website are protected by copyright law. Unless otherwise stated,
              {siteConfig.name} owns the copyright to all text, graphics, images, and information on this website.
            </p>
            <p className="mt-4">
              Portfolio projects shown are for demonstration purposes and represent work completed in collaboration
              with various clients. Some case details are confidential and available on request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">7. Links and External Websites</h2>
            <p>
              {siteConfig.name} has not reviewed all of the sites linked to its website and is not responsible for
              the contents of any such linked site. The inclusion of any link does not imply endorsement by
              {siteConfig.name} of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">8. Modifications to Terms</h2>
            <p>
              {siteConfig.name} may revise these terms of service for its website at any time without notice. By
              using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">9. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the
              Netherlands, and you irrevocably submit to the exclusive jurisdiction of the courts located in
              the Netherlands.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">10. Contact Form and Communications</h2>
            <p>
              By submitting a contact form on this website, you agree that:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>The information you provide is accurate and complete</li>
              <li>You consent to be contacted at the email or phone number provided</li>
              <li>We may use your information to respond to your inquiry</li>
              <li>We will respect your privacy as outlined in our Privacy Policy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">11. Service Availability</h2>
            <p>
              While {siteConfig.name} strives to keep the website operational at all times, we do not guarantee
              uninterrupted access. The website may be unavailable due to maintenance, updates, or technical issues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">12. User Conduct</h2>
            <p>You agree not to:</p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
              <li>Post or transmit any unlawful, threatening, abusive, defamatory, obscene, or otherwise objectionable material</li>
              <li>Interrupt the normal flow of dialogue within our website</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Engage in spam or other malicious activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">13. Advertising and Google AdSense</h2>
            <p>
              This website displays advertisements through Google AdSense. By using this website, you acknowledge
              and agree to Google's use of cookies and other tracking technologies for advertising purposes. You can
              manage your advertising preferences through Google Ads Settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">14. Limitation of Remedies</h2>
            <p>
              Your exclusive remedy, and {siteConfig.name}'s maximum liability, shall be limited to the amount paid
              by you for any services or products purchased from the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">15. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
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
              These Terms of Service are provided as-is and may be updated from time to time. The "Last Updated"
              date at the top of this page indicates when these terms were last revised.
            </p>
          </section>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-12 flex gap-4" delay={0.2}>
        <Link href="/privacy-policy" className="text-sm text-cyan hover:text-cyan/80">
          ← Privacy Policy
        </Link>
        <Link href="/cookie-policy" className="text-sm text-cyan hover:text-cyan/80">
          Cookie Policy →
        </Link>
      </AnimatedSection>
    </div>
  );
}
