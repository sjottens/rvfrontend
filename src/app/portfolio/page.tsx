import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import portfolioData from "@/data/portfolio.json";
import { AnimatedSection } from "@/components/animated-section";

const projectLogos = [
  { src: "/projectlogos/alko-logo.png", alt: "Alko logo" },
  { src: "/projectlogos/BMN_Bouwmaterialen_Logo.png", alt: "BMN logo" },
  { src: "/projectlogos/intershop-logo.png", alt: "Intershop logo" },
  { src: "/projectlogos/isero-logo.png", alt: "Isero logo" },
  { src: "/projectlogos/PLUS_logo.png", alt: "PLUS logo" },
  { src: "/projectlogos/vml-logo.png", alt: "VML logo" },
  { src: "/projectlogos/Vwo_logo.png", alt: "VWO logo" },
  { src: "/projectlogos/wefashion-logo.png", alt: "WE Fashion logo" },
  { src: "/projectlogos/Xerox-logo.png", alt: "Xerox logo" }
];

export const metadata = {
  title: "Portfolio",
  description:
    "Projectvoorbeelden van RV Frontend: UI implementatie voor e-commerce en B2B platforms zoals Alko, Isero en PLUS."
};

export default function PortfolioPage() {
  return (
    <div className="container-shell py-16 md:py-20">
      <AnimatedSection>
        <p className="kicker">Portfolio</p>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">Projecten waar UI-kwaliteit echt verschil maakte</h1>
        <p className="mt-6 max-w-3xl text-lg text-white/70">
          Hieronder een selectie van projecten waaraan ik heb meegewerkt bij de implementatie van de gebruikersinterface en diverse functionaliteiten.
        </p>
      </AnimatedSection>

      <AnimatedSection className="mt-10 grid gap-7" delay={0.1}>
        {portfolioData.map((project) => (
          <article key={project.id} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[260px]">
                <Image
                  src={project.image}
                  alt={`${project.client} project preview`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
              </div>

              <div className="p-6 md:p-8">
                <p className="text-sm text-cyan">{project.category}</p>
                <h2 className="mt-2 text-3xl font-semibold text-white">{project.client}</h2>
                <p className="mt-2 text-lg text-white/85">{project.title}</p>
                <p className="mt-4 text-sm text-white/70">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">{project.year}</p>
                  {project.url ? (
                    <Link href={project.url} className="inline-flex items-center gap-2 text-sm text-cyan">
                      Live bekijken <ExternalLink size={14} />
                    </Link>
                  ) : (
                    <span className="text-sm text-white/45">Case details op aanvraag</span>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </AnimatedSection>

      <AnimatedSection className="mt-14" delay={0.2}>
        <p className="kicker">Projectlogo's</p>
        <h2 className="mt-3 text-2xl font-semibold text-white md:text-4xl">Samenwerkingen en platformen</h2>

        <div className="logo-marquee mt-8 rounded-3xl border border-white/10 bg-white/[0.03] py-6">
          <div className="logo-marquee-track">
            {[...projectLogos, ...projectLogos].map((logo, index) => (
              <div
                key={`${logo.src}-${index}`}
                className="mx-3 flex h-20 w-[160px] items-center justify-center rounded-2xl border border-white/10 bg-[#0f1729]/70 px-4 md:mx-4 md:h-24 md:w-[210px]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={60}
                  className="h-auto max-h-10 w-auto max-w-[130px] object-contain opacity-90 md:max-h-12 md:max-w-[165px]"
                />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* <AnimatedSection className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8" delay={0.2}>
        <h3 className="text-2xl font-semibold text-white">Meer cases toevoegen?</h3>
        <p className="mt-3 text-white/70">
          Voeg een nieuw object toe in de JSON data en zet een afbeelding in de portfolio map. De layout schaalt automatisch
          mee.
        </p>
      </AnimatedSection> */}
    </div>
  );
}
