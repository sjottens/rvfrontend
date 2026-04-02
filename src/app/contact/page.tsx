import { cookies } from "next/headers";
import { Clock3, MonitorCog, SendHorizonal } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { ContactBackgroundVideo } from "@/components/contact-background-video";
import { ContactForm } from "@/components/contact-form";
import { getMessages } from "@/data/i18n";
import { LANG_COOKIE, normalizeLanguage } from "@/lib/language";

export const metadata = {
  title: "Contact",
  description:
    "Neem contact op met RV Frontend voor UI implementatie, design-to-code support of tijdelijke front-end capaciteit."
};

export default async function ContactPage() {
  const cookieStore = await cookies();
  const language = normalizeLanguage(cookieStore.get(LANG_COOKIE)?.value);
  const t = getMessages(language);

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <ContactBackgroundVideo src="/media/hightech-contact.mp4" className="video-fade-in absolute inset-0 h-full w-full object-cover" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#04070f]/94 via-[#04070f]/86 to-[#04070f]/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#04070f]/94 via-[#04070f]/62 to-[#04070f]/78" />
      <div className="absolute inset-y-0 right-0 w-full bg-gradient-to-l from-[#02040a]/82 via-[#02040a]/50 to-transparent lg:w-[58%]" />

      <div className="container-shell relative z-10 py-16 md:py-20">
        <AnimatedSection>
          <p className="kicker">{t.contact.kicker}</p>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">{t.contact.title}</h1>
          <p className="mt-6 max-w-3xl text-lg text-white/75">{t.contact.description}</p>
        </AnimatedSection>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          <AnimatedSection className="order-2 space-y-4 lg:order-1" delay={0.1}>
            <article className="rounded-2xl border border-white/15 bg-[#050812]/45 p-5 backdrop-blur-sm">
              <Clock3 className="text-cyan" size={18} />
              <h2 className="mt-3 text-xl font-semibold text-white">{t.contact.cards[0].title}</h2>
              <p className="mt-2 text-sm text-white/75">{t.contact.cards[0].text}</p>
            </article>

            <article className="rounded-2xl border border-white/15 bg-[#050812]/45 p-5 backdrop-blur-sm">
              <MonitorCog className="text-cyan" size={18} />
              <h2 className="mt-3 text-xl font-semibold text-white">{t.contact.cards[1].title}</h2>
              <p className="mt-2 text-sm text-white/75">{t.contact.cards[1].text}</p>
            </article>

            <article className="rounded-2xl border border-white/15 bg-[#050812]/45 p-5 backdrop-blur-sm">
              <SendHorizonal className="text-cyan" size={18} />
              <h2 className="mt-3 text-xl font-semibold text-white">{t.contact.cards[2].title}</h2>
              <p className="mt-2 text-sm text-white/75">{t.contact.cards[2].text}</p>
            </article>
          </AnimatedSection>

          <AnimatedSection className="order-1 lg:order-2" delay={0.2}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
