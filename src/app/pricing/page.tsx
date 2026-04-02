import Link from "next/link";
import { cookies } from "next/headers";
import { Check, Sparkles } from "lucide-react";

import pricingData from "@/data/pricing.json";
import { getMessages } from "@/data/i18n";
import { AnimatedSection } from "@/components/animated-section";
import { LANG_COOKIE, normalizeLanguage } from "@/lib/language";

export const metadata = {
  title: "Pricing",
  description:
    "Transparante prijzen voor UI implementatie en front-end support. Start vanaf EUR 75 per uur, met project- en dedicated opties."
};

export default async function PricingPage() {
  const cookieStore = await cookies();
  const language = normalizeLanguage(cookieStore.get(LANG_COOKIE)?.value);
  const t = getMessages(language);

  return (
    <div className="container-shell py-16 md:py-20">
      <AnimatedSection>
        <p className="kicker">{t.pricing.kicker}</p>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">{t.pricing.title}</h1>
        <p className="mt-6 max-w-3xl text-lg text-white/70">
          {t.pricing.description}
        </p>
      </AnimatedSection>

      <AnimatedSection className="mt-10 grid gap-6 lg:grid-cols-3" delay={0.1}>
        {pricingData.map((tier, index) => {
          const featured = index === 1;
          return (
            <article
              key={tier.name}
              className={`rounded-3xl border p-7 ${
                featured
                  ? "border-electric/60 bg-gradient-to-b from-electric/25 to-electric/5 shadow-glow"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <p className="inline-flex items-center gap-2 text-sm text-cyan">
                <Sparkles size={14} />
                {tier.bestFor}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white">{tier.name}</h2>
              {tier.priceFrom !== null ? (
                <p className="mt-4 text-4xl font-semibold text-white">EUR {tier.priceFrom}</p>
              ) : (
                <p className="mt-4 text-4xl font-semibold text-white">{t.pricing.onRequest}</p>
              )}
              <p className="mt-1 text-sm text-white/65">{tier.unit}</p>
              {"hours" in tier && tier.hours ? (
                <p className="mt-2 inline-block rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
                  {tier.hours}
                </p>
              ) : null}

              <ul className="mt-6 space-y-3 text-sm text-white/80">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check size={16} className="text-cyan" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/45"
              >
                {t.pricing.cta}
              </Link>
            </article>
          );
        })}
      </AnimatedSection>

      <AnimatedSection className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-7" delay={0.2}>
        <h3 className="text-2xl font-semibold text-white">{t.pricing.alwaysIncludedTitle}</h3>
        <div className="mt-4 grid gap-3 text-sm text-white/75 md:grid-cols-2">
          {t.pricing.alwaysIncluded.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
