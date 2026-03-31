import { Clock3, MonitorCog, SendHorizonal } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { ContactBackgroundVideo } from "@/components/contact-background-video";
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact",
  description:
    "Neem contact op met RV Frontend voor UI implementatie, design-to-code support of tijdelijke front-end capaciteit."
};

export default function ContactPage() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <ContactBackgroundVideo src="/media/hightech-contact.mp4" className="video-fade-in absolute inset-0 h-full w-full object-cover" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#04070f]/94 via-[#04070f]/86 to-[#04070f]/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#04070f]/94 via-[#04070f]/62 to-[#04070f]/78" />
      <div className="absolute inset-y-0 right-0 w-full bg-gradient-to-l from-[#02040a]/82 via-[#02040a]/50 to-transparent lg:w-[58%]" />

      <div className="container-shell relative z-10 py-16 md:py-20">
        <AnimatedSection>
          <p className="kicker">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">Vertel wat je wilt bouwen, ik pak de UI op.</h1>
          <p className="mt-6 max-w-3xl text-lg text-white/75">
            Voor nieuwe features, complete pages of structurele front-end capaciteit. Reactietijd: meestal binnen 24 uur.
          </p>
        </AnimatedSection>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          <AnimatedSection className="order-2 space-y-4 lg:order-1" delay={0.1}>
            <article className="rounded-2xl border border-white/15 bg-[#050812]/45 p-5 backdrop-blur-sm">
              <Clock3 className="text-cyan" size={18} />
              <h2 className="mt-3 text-xl font-semibold text-white">Snelle start</h2>
              <p className="mt-2 text-sm text-white/75">Vaak binnen enkele dagen inzetbaar in bestaande projecten.</p>
            </article>

            <article className="rounded-2xl border border-white/15 bg-[#050812]/45 p-5 backdrop-blur-sm">
              <MonitorCog className="text-cyan" size={18} />
              <h2 className="mt-3 text-xl font-semibold text-white">Stack-flexibel</h2>
              <p className="mt-2 text-sm text-white/75">CSS/SCSS, Tailwind of Bootstrap in React, Vue, Angular of custom stacks.</p>
            </article>

            <article className="rounded-2xl border border-white/15 bg-[#050812]/45 p-5 backdrop-blur-sm">
              <SendHorizonal className="text-cyan" size={18} />
              <h2 className="mt-3 text-xl font-semibold text-white">Remote samenwerking</h2>
              <p className="mt-2 text-sm text-white/75">Heldere communicatie en focus op concrete oplevering.</p>
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
