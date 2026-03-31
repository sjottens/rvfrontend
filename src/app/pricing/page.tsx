import Link from "next/link";
import { Check, Sparkles } from "lucide-react";

import pricingData from "@/data/pricing.json";
import { AnimatedSection } from "@/components/animated-section";

export const metadata = {
  title: "Pricing",
  description:
    "Transparante prijzen voor UI implementatie en front-end support. Start vanaf EUR 75 per uur, met project- en dedicated opties."
};

export default function PricingPage() {
  return (
    <div className="container-shell py-16 md:py-20">
      <AnimatedSection>
        <p className="kicker">Pricing</p>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">Transparant, schaalbaar en vanaf EUR 80,-</h1>
        <p className="mt-6 max-w-3xl text-lg text-white/70">
          Kies een samenwerkingsvorm die past bij jouw fase: losse ondersteuning, een afgebakend project of structurele
          capaciteit binnen je team.
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
                <p className="mt-4 text-4xl font-semibold text-white">Op aanvraag</p>
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
                Plan intake
              </Link>
            </article>
          );
        })}
      </AnimatedSection>

      <AnimatedSection className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-7" delay={0.2}>
        <h3 className="text-2xl font-semibold text-white">Wat je altijd krijgt</h3>
        <div className="mt-4 grid gap-3 text-sm text-white/75 md:grid-cols-2">
          <p>Pixel-perfect implementatie met oog voor detail.</p>
          <p>Code die past bij jouw bestaande architectuur.</p>
          <p>Responsieve layouts die werken op alle schermformaten.</p>
          <p>Heldere communicatie, korte feedbackloops en remote samenwerking.</p>
        </div>
      </AnimatedSection>
    </div>
  );
}
