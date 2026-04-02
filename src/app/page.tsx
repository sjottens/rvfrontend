import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import { ArrowRight, CheckCircle2, Code2, Layers3, Rocket, Workflow } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { HeroBackgroundVideo } from "@/components/hero-background-video";
import { getMessages } from "@/data/i18n";
import { siteConfig } from "@/data/site";
import { LANG_COOKIE, normalizeLanguage } from "@/lib/language";

export default async function HomePage() {
  const cookieStore = await cookies();
  const language = normalizeLanguage(cookieStore.get(LANG_COOKIE)?.value);
  const t = getMessages(language);

  return (
    <>
      <section className="hero-grid relative overflow-hidden pb-24 pt-16">
        <HeroBackgroundVideo
          src="/media/breaking-wave.mp4"
          className="wave-motion-video absolute inset-0 h-full w-full object-cover"
          ariaLabel="Brekende golf video"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050812]/86 via-[#050812]/58 to-[#050812]/66" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050812]/85 via-[#050812]/25 to-[#050812]/55" />

        <div className="container-shell relative z-10 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimatedSection>
            <div className="rounded-[2rem] border border-white/15 bg-[#050812]/45 p-6 shadow-[0_25px_70px_-35px_rgba(0,0,0,0.8)] backdrop-blur-md md:p-8">
              <p className="kicker">{t.home.heroKicker}</p>
              <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                {t.home.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/80">{t.home.heroDescription}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-base transition hover:bg-white/90"
                >
                  {t.home.primaryCta}
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 font-semibold text-white transition hover:border-white/45"
                >
                  {t.home.secondaryCta}
                </Link>
              </div>
              <div className="mt-10 grid gap-4 text-sm text-white/75 sm:grid-cols-3">
                {t.home.highlights.map((item) => (
                  <p key={item} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="relative" delay={0.2}>
            <div className="shine-border rounded-[2rem] bg-white/[0.03] p-4 backdrop-blur">
              <div className="rounded-[1.6rem] border border-white/10 bg-surface p-5">
                <Image
                  src="/logos/rvfrontend-white-v2.png"
                  alt={siteConfig.name}
                  width={1200}
                  height={546}
                  className="h-auto w-full rounded-xl"
                  priority
                />
                <div className="mt-5 grid gap-3 text-sm">
                  {t.home.sideBullets.map((item) => (
                    <p key={item} className="rounded-xl border border-white/10 bg-base px-3 py-2 text-white/80">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="container-shell py-20">
        <p className="kicker">{t.home.workKicker}</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-white md:text-5xl">
          {t.home.workTitle}
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {t.home.capabilities.map((capability) => (
            <article key={capability} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <CheckCircle2 className="mb-3 text-cyan" size={18} />
              <p className="text-white/85">{capability}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell py-16">
        <p className="kicker">{t.home.processKicker}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {t.home.process.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs text-cyan">0{index + 1}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-white/65">{step.text}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell pb-24 pt-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-surface via-base to-surface px-8 py-10 md:px-12">
          <p className="kicker">{t.home.techKicker}</p>
          <h2 className="mt-3 text-2xl font-semibold text-white md:text-4xl">{t.home.techTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <Code2 className="text-cyan" />
              <p className="mt-3 font-medium text-white">{t.home.techItems[0]}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <Layers3 className="text-cyan" />
              <p className="mt-3 font-medium text-white">{t.home.techItems[1]}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <Workflow className="text-cyan" />
              <p className="mt-3 font-medium text-white">{t.home.techItems[2]}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <Rocket className="text-cyan" />
              <p className="mt-3 font-medium text-white">{t.home.techItems[3]}</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
