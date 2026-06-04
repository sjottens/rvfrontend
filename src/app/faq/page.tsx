import { cookies } from "next/headers";
import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { getMessages } from "@/data/i18n";
import { LANG_COOKIE, normalizeLanguage } from "@/lib/language";

export const metadata: Metadata = {
  title: "FAQ | RV Frontend",
  description: "Frequently asked questions about frontend services, pricing, and collaboration.",
  keywords: ["faq", "questions", "frontend services", "pricing"],
  alternates: {
    canonical: "/faq"
  },
  openGraph: {
    title: "FAQ | RV Frontend",
    description: "Frequently asked questions",
    url: "/faq",
    siteName: "RV Frontend"
  }
};

const faqNl = [
  { q: "Hoe lang duurt een typisch project?", a: "Dit hangt af van de scope. Kleine UI-aanpassingen: 1-2 weken. Volledige website-rebuild: 4-12 weken. Complete custom applicaties: 3-6 maanden. We bepalen dit samen in de planning fase." },
  { q: "Werk je full-time of part-time?", a: "Ik ben beschikbaar voor beide. Ik kan deel-time in je team werken of volledige projecten oppakken. We spreken af wat het beste past." },
  { q: "Welke technologieën gebruik je?", a: "Vooral React, Next.js, TypeScript en Tailwind CSS. Ik werk ook met Vue, Angular en legacy stacks als dat beter past bij jouw project." },
  { q: "Wat is je ervaring?", a: "Meer dan 10 jaar front-end development. Ik heb gewerkt aan e-commerce platforms, B2B systemen, design-heavy applicaties en performance-kritieke projecten." },
  { q: "Hoe zit het met ondersteuning na launch?", a: "Dit bespreken we per project. Ik bied bug fixes, performance optimalisatie en kleine features na launch. Of je kiest een retainer voor structurele ondersteuning." },
  { q: "Kan je meewerken aan bestaande projecten?", a: "Ja, absoluut. Ik sluit aan bij bestaande teams, ken je codebase in, en werk samen met je developers en designers." },
  { q: "Hoe zit het met SEO en performance?", a: "SEO en Core Web Vitals zijn onderdeel van mijn standard proces. Next.js, Server Components en optimalisatie zitten ingebakken." },
  { q: "Werk je met Figma designs?", a: "Ja, ik werk graag met Figma. Ik vertaal designs nauwkeurig en hou rekening met responsive behavior en animaties." },
  { q: "Kan je legacy code moderniseren?", a: "Ja, ik help met migratie van jQuery naar React, refactoring van Angular apps, en code quality verbetering." },
  { q: "Hoeveel kost een website-redesign?", a: "Afhankelijk van scope: kleine redesigns €5-15k, complete rebuilds €20-50k+. We geven een quote na de intake." }
];

const faqEn = [
  { q: "How long does a typical project take?", a: "Depends on scope. Small UI updates: 1-2 weeks. Full website rebuild: 4-12 weeks. Custom applications: 3-6 months. We determine this together in planning." },
  { q: "Do you work full-time or part-time?", a: "Both. I can work part-time in your team or take on complete projects. We decide what works best." },
  { q: "What technologies do you use?", a: "Primarily React, Next.js, TypeScript, and Tailwind CSS. I also work with Vue, Angular, and legacy stacks if that fits your project better." },
  { q: "What's your experience?", a: "Over 10 years of front-end development. I've worked on e-commerce platforms, B2B systems, design-heavy applications, and performance-critical projects." },
  { q: "What about support after launch?", a: "We discuss this per project. I offer bug fixes, performance optimization, and small features post-launch. Or you choose a retainer for ongoing support." },
  { q: "Can you work on existing projects?", a: "Yes, absolutely. I join existing teams, ramp up on your codebase, and collaborate with your developers and designers." },
  { q: "What about SEO and performance?", a: "SEO and Core Web Vitals are part of my standard process. Next.js, Server Components, and optimization are built in." },
  { q: "Do you work with Figma designs?", a: "Yes, I love working with Figma. I translate designs precisely and account for responsive behavior and animations." },
  { q: "Can you modernize legacy code?", a: "Yes, I help with jQuery to React migration, Angular app refactoring, and code quality improvements." },
  { q: "How much does a website redesign cost?", a: "Depends on scope: small redesigns €5-15k, complete rebuilds €20-50k+. We give a quote after intake." }
];

export default async function FAQPage() {
  const cookieStore = await cookies();
  const language = normalizeLanguage(cookieStore.get(LANG_COOKIE)?.value);
  const t = getMessages(language);

  const faqs = language === "nl" ? faqNl : faqEn;

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-[#050812]/95 via-[#050812]/85 to-[#050812]/75 py-16 md:py-24">
        <div className="container-shell">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="kicker">{t.faq.kicker}</p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-6xl">
                {t.faq.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/80">
                {t.faq.description}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-shell">
          <div className="max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan/50 hover:bg-white/5">
                  <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="text-lg font-semibold text-white group-hover:text-cyan transition">
                      {faq.q}
                    </h2>
                    <span className="text-cyan transition group-open:rotate-180">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-white/70">
                    {faq.a}
                  </p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-gradient-to-b from-[#050812]/50 to-[#050812]/75 py-16 md:py-24">
        <div className="container-shell text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-semibold text-white">
              {t.faq.stillHaveQuestions}
            </h2>
            <p className="mt-4 text-white/75">
              {language === "nl" ? "Stuur me een bericht en ik help je graag verder." : "Send me a message and I'll be happy to help."}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-base transition hover:bg-white/90"
            >
              {t.faq.contactUs}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}