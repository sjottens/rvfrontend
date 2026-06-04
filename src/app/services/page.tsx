import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { Code2, Zap, Palette, Smartphone, TrendingUp, Cpu } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { getMessages } from "@/data/i18n";
import { LANG_COOKIE, normalizeLanguage } from "@/lib/language";

export const metadata: Metadata = {
  title: "Services | RV Frontend",
  description:
    "Premium frontend development services: UI implementation, design-to-code, React development, Next.js optimization, and custom web solutions.",
  keywords: [
    "frontend services",
    "UI implementation",
    "design to code",
    "React development",
    "Next.js developer"
  ],
  alternates: {
    canonical: "/services"
  },
  openGraph: {
    title: "Frontend Development Services | RV Frontend",
    description: "Premium UI implementation and custom frontend solutions",
    url: "/services",
    siteName: "RV Frontend"
  }
};

const servicesNl = [
  {
    icon: Code2,
    title: "UI Implementatie & Design-to-Code",
    description:
      "Designs omzetten naar productieklare code. Ik specialiseer me in het vertalen van Figma, Adobe XD of elk design system naar schone, onderhoudbare frontend code met React, Vue of Angular.",
    details: [
      "Nauwkeurige design implementatie",
      "Semantische HTML5 structuur",
      "CSS/SCSS/Tailwind CSS expertise",
      "Responsive design implementatie",
      "Component architectuur"
    ]
  },
  {
    icon: Zap,
    title: "React & Next.js Development",
    description:
      "Snelle, schaalbare applicaties met modern React en Next.js. Van component development tot volledige application architectuur, ik zorg ervoor dat je project geoptimaliseerd is.",
    details: [
      "React component development",
      "Next.js 15+ implementatie",
      "Server-side rendering optimalisatie",
      "App Router architectuur",
      "Type-safe development met TypeScript"
    ]
  },
  {
    icon: Smartphone,
    title: "Responsive & Mobile-First Design",
    description:
      "Zorg dat je website perfect werkt op alle devices. Ik implementeer mobile-first strategieën, responsive layouts en adaptieve interfaces.",
    details: [
      "Mobile-first development",
      "Responsive breakpoint strategie",
      "Touch-friendly interfaces",
      "Performance optimalisatie voor mobile",
      "Progressive enhancement"
    ]
  },
  {
    icon: Palette,
    title: "Design System Implementatie",
    description:
      "Schaalbare, onderhoudbare design systems. Ik bouw herbruikbare component libraries, design tokens en style guides.",
    details: [
      "Component library development",
      "Design token systemen",
      "Storybook integratie",
      "CSS-in-JS solutions",
      "Documentatie & richtlijnen"
    ]
  },
  {
    icon: TrendingUp,
    title: "Performance & Core Web Vitals Optimalisatie",
    description:
      "Top performance scores. Ik optimaliseer websites voor snelheid, SEO ranking factors en user experience metrics.",
    details: [
      "Lighthouse score optimalisatie",
      "Core Web Vitals verbetering",
      "Image optimalisatie & lazy loading",
      "Code splitting & bundling",
      "Caching strategieën"
    ]
  },
  {
    icon: Cpu,
    title: "Legacy Codebase Modernisatie",
    description:
      "Upgrade en refactor bestaande projecten. Of je jQuery naar React wilt migreren of je Angular app wilt moderniseren—ik breng best practices.",
    details: [
      "Framework migratie",
      "Code quality verbetering",
      "Technical debt reduction",
      "Testing implementatie",
      "Documentatie & kennisoverdracht"
    ]
  }
];

const servicesEn = [
  {
    icon: Code2,
    title: "UI Implementation & Design-to-Code",
    description:
      "Transform designs into production-ready code. I specialize in converting Figma, Adobe XD, or any design system into clean, maintainable frontend code.",
    details: [
      "Precise design implementation",
      "Semantic HTML5 structure",
      "CSS/SCSS/Tailwind CSS expertise",
      "Responsive design implementation",
      "Component architecture"
    ]
  },
  {
    icon: Zap,
    title: "React & Next.js Development",
    description:
      "Build fast, scalable applications with modern React and Next.js. Optimized for performance and maintainability.",
    details: [
      "React component development",
      "Next.js 15+ implementation",
      "Server-side rendering optimization",
      "App Router architecture",
      "Type-safe development with TypeScript"
    ]
  },
  {
    icon: Smartphone,
    title: "Responsive & Mobile-First Design",
    description:
      "Ensure your website works flawlessly across all devices. I implement mobile-first strategies and adaptive interfaces.",
    details: [
      "Mobile-first development",
      "Responsive breakpoint strategy",
      "Touch-friendly interfaces",
      "Performance optimization for mobile",
      "Progressive enhancement"
    ]
  },
  {
    icon: Palette,
    title: "Design System Implementation",
    description:
      "Create scalable, maintainable design systems. I build reusable component libraries and design tokens.",
    details: [
      "Component library development",
      "Design token systems",
      "Storybook integration",
      "CSS-in-JS solutions",
      "Documentation & guidelines"
    ]
  },
  {
    icon: TrendingUp,
    title: "Performance & Core Web Vitals Optimization",
    description:
      "Achieve top performance scores. I optimize for speed, SEO, and user experience metrics.",
    details: [
      "Lighthouse score optimization",
      "Core Web Vitals improvement",
      "Image optimization & lazy loading",
      "Code splitting & bundling",
      "Caching strategies"
    ]
  },
  {
    icon: Cpu,
    title: "Legacy Codebase Modernization",
    description:
      "Upgrade and refactor existing projects. Whether you need framework migration or modernization.",
    details: [
      "Framework migration",
      "Code quality improvement",
      "Technical debt reduction",
      "Testing implementation",
      "Documentation & knowledge transfer"
    ]
  }
];

const processStepsNl = [
  { step: "01", title: "Discovery", description: "Begrijp je doelen, technische vereisten en projectscope in detail." },
  { step: "02", title: "Planning", description: "Creëer een technische roadmap, architectuurplan en implementatietijdlijn." },
  { step: "03", title: "Development", description: "Bouw met precisie, behoud duidelijke communicatie en regelmatige updates." },
  { step: "04", title: "Delivery", description: "Deploy productieklare code met documentatie en ondersteuning." }
];

const processStepsEn = [
  { step: "01", title: "Discovery", description: "Understand your goals, technical requirements, and project scope." },
  { step: "02", title: "Planning", description: "Create a technical roadmap and architecture plan." },
  { step: "03", title: "Development", description: "Build with precision and clear communication." },
  { step: "04", title: "Delivery", description: "Deploy production-ready code with documentation." }
];

const engagementModelsNl = [
  {
    title: "Project-based",
    price: "Op maat",
    description: "Afgebakende projecten met duidelijke scope en timeline."
  },
  {
    title: "Hourly",
    price: "€75-150/uur",
    description: "Flexibele ondersteuning voor bestaande teams en projecten."
  },
  {
    title: "Retainer",
    price: "Op aanvraag",
    description: "Structurele capaciteit voor structurele ondersteuning."
  }
];

const engagementModelsEn = [
  {
    title: "Project-based",
    price: "Custom",
    description: "Scoped projects with clear deliverables and timeline."
  },
  {
    title: "Hourly",
    price: "$85-180/hour",
    description: "Flexible support for existing teams and projects."
  },
  {
    title: "Retainer",
    price: "On request",
    description: "Structural capacity for ongoing support."
  }
];

export default async function ServicesPage() {
  const cookieStore = await cookies();
  const language = normalizeLanguage(cookieStore.get(LANG_COOKIE)?.value);
  const t = getMessages(language);

  const services = language === "nl" ? servicesNl : servicesEn;
  const processSteps = language === "nl" ? processStepsNl : processStepsEn;
  const engagementModels = language === "nl" ? engagementModelsNl : engagementModelsEn;

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-[#050812]/95 via-[#050812]/85 to-[#050812]/75 py-16 md:py-24">
        <div className="container-shell">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="kicker">{t.services.kicker}</p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-6xl">
                {t.services.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/80">
                {t.services.description}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-shell">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={index * 0.1}>
                  <article className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan/50 hover:bg-white/5 hover:shadow-lg">
                    <Icon className="text-cyan transition group-hover:scale-110" size={28} />
                    <h2 className="mt-4 text-xl font-semibold text-white">{service.title}</h2>
                    <p className="mt-3 text-white/70">{service.description}</p>
                    <ul className="mt-5 space-y-2">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-white/60">
                          <span className="mt-1 block h-1 w-1 rounded-full bg-cyan flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-gradient-to-b from-[#050812]/50 to-[#050812]/75 py-16 md:py-24">
        <div className="container-shell">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="kicker">{language === "nl" ? "Hoe ik werk" : "How It Works"}</p>
              <h2 className="mt-5 text-3xl font-semibold text-white">{t.services.processTitle}</h2>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {processSteps.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.15}>
                <div className="relative">
                  {index < 3 && (
                    <div className="absolute right-0 top-6 hidden h-1 w-[calc(100%_+_24px)] bg-gradient-to-r from-cyan/50 to-transparent md:block" />
                  )}
                  <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <div className="text-sm font-semibold text-cyan">{item.step}</div>
                    <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-white/70">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-shell">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="kicker">{language === "nl" ? "Tech stack" : "Technology Stack"}</p>
              <h2 className="mt-5 text-3xl font-semibold text-white">{t.services.techStackTitle}</h2>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              { category: "Frontend Frameworks", items: ["React 19", "Next.js 15", "Vue.js / Nuxt", "Angular", "Svelte"] },
              { category: "Styling & Design", items: ["Tailwind CSS", "SCSS/SASS", "CSS-in-JS", "Design Tokens", "Storybook"] },
              { category: "Languages & Tools", items: ["TypeScript", "JavaScript (ES2024)", "HTML5", "Git", "ESLint"] },
              { category: "Performance & Quality", items: ["Lighthouse", "Core Web Vitals", "Web Performance APIs", "Accessibility (WCAG)", "Testing"] }
            ].map((tech) => (
              <AnimatedSection key={tech.category}>
                <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="text-lg font-semibold text-white">{tech.category}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tech.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-sm text-cyan"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-gradient-to-b from-[#050812]/50 to-[#050812]/75 py-16 md:py-24">
        <div className="container-shell">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="kicker">{language === "nl" ? "Samenwerking" : "Engagement"}</p>
              <h2 className="mt-5 text-3xl font-semibold text-white">{t.services.engagementTitle}</h2>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {engagementModels.map((model, index) => (
              <AnimatedSection key={model.title} delay={index * 0.1}>
                <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
                  <h3 className="text-lg font-semibold text-white">{model.title}</h3>
                  <div className="mt-2 text-2xl font-bold text-cyan">{model.price}</div>
                  <p className="mt-3 text-white/70">{model.description}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 py-16 md:py-24">
        <div className="container-shell text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-semibold text-white">
              {language === "nl" ? "Klaar om te beginnen?" : "Ready to start?"}
            </h2>
            <p className="mt-4 text-white/75">
              {language === "nl" ? "Laat me weten wat je wilt bouwen." : "Tell me what you want to build."}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-base transition hover:bg-white/90"
            >
              {language === "nl" ? "Start een project" : "Start a project"}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}