import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Zap, Eye, Target } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about RV Frontend, the senior front-end engineer specializing in pixel-perfect UI implementation and custom-built websites.",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  return (
    <div className="container-shell py-16 md:py-20">
      {/* Hero Section */}
      <AnimatedSection>
        <div className="max-w-3xl">
          <p className="kicker">About RV Frontend</p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-6xl">
            Senior front-end engineer with a focus on pixel-perfect implementation.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            RV Frontend specializes in translating designs into high-quality, maintainable code. With over a decade of
            experience in front-end development, I help companies deliver fast, scalable, and SEO-strong websites.
          </p>
        </div>
      </AnimatedSection>

      {/* Core Values */}
      <AnimatedSection className="mt-16 grid gap-6 md:grid-cols-2" delay={0.1}>
        <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <Eye className="text-cyan" size={24} />
          <h2 className="mt-4 text-xl font-semibold text-white">Pixel-Perfect Quality</h2>
          <p className="mt-2 text-white/70">
            Every project is treated with meticulous attention to detail, ensuring designs are accurately and
            beautifully implemented.
          </p>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <Zap className="text-cyan" size={24} />
          <h2 className="mt-4 text-xl font-semibold text-white">Performance-First</h2>
          <p className="mt-2 text-white/70">
            Fast-loading websites matter. Every implementation prioritizes Core Web Vitals and optimal performance
            metrics.
          </p>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <Target className="text-cyan" size={24} />
          <h2 className="mt-4 text-xl font-semibold text-white">SEO-Strong</h2>
          <p className="mt-2 text-white/70">
            Technical SEO and semantic HTML are foundational to every project. Websites that rank and convert.
          </p>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <CheckCircle2 className="text-cyan" size={24} />
          <h2 className="mt-4 text-xl font-semibold text-white">Production-Ready</h2>
          <p className="mt-2 text-white/70">
            Clean code, proper testing, and clear documentation. Everything is ready to be shipped and maintained
            immediately.
          </p>
        </article>
      </AnimatedSection>

      {/* Expertise */}
      <AnimatedSection className="mt-16" delay={0.2}>
        <h2 className="text-3xl font-semibold text-white">Expertise & Skills</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-white">Frontend Technologies</h3>
            <ul className="mt-4 space-y-2 text-white/75">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan" />
                React / Next.js 15
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan" />
                Vue.js / Nuxt
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan" />
                Angular
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan" />
                TypeScript
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Styling & Design</h3>
            <ul className="mt-4 space-y-2 text-white/75">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan" />
                Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan" />
                SCSS / SASS
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan" />
                CSS Grid & Flexbox
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan" />
                Responsive Design
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Performance & Quality</h3>
            <ul className="mt-4 space-y-2 text-white/75">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan" />
                Core Web Vitals
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan" />
                SEO Best Practices
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan" />
                Web Performance
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan" />
                Accessibility (WCAG)
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Tools & Platforms</h3>
            <ul className="mt-4 space-y-2 text-white/75">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan" />
                Git / GitHub
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan" />
                Figma / Design Systems
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan" />
                Vercel / Deployment
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan" />
                A/B Testing (VWO)
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {/* Work Approach */}
      <AnimatedSection className="mt-16" delay={0.3}>
        <h2 className="text-3xl font-semibold text-white">How I Work</h2>
        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="inline-flex items-center gap-2 text-sm text-cyan">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan bg-cyan/10 text-xs font-bold">
                1
              </span>
              Discovery & Planning
            </p>
            <p className="mt-3 text-white/75">
              I start by understanding your project, design requirements, technical stack, and business goals. Quick
              intake meetings ensure clear alignment on scope and deliverables.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="inline-flex items-center gap-2 text-sm text-cyan">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan bg-cyan/10 text-xs font-bold">
                2
              </span>
              Implementation & Iteration
            </p>
            <p className="mt-3 text-white/75">
              Designs are translated into clean, maintainable code. I work with your team in short feedback loops,
              iterating quickly to ensure pixel-perfect results and code quality.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="inline-flex items-center gap-2 text-sm text-cyan">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan bg-cyan/10 text-xs font-bold">
                3
              </span>
              Optimization & Testing
            </p>
            <p className="mt-3 text-white/75">
              Performance, responsiveness, and SEO are optimized. Testing ensures everything works across browsers,
              devices, and screen sizes.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="inline-flex items-center gap-2 text-sm text-cyan">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan bg-cyan/10 text-xs font-bold">
                4
              </span>
              Handover & Support
            </p>
            <p className="mt-3 text-white/75">
              Clean code documentation and knowledge transfer ensure your team can maintain and extend the work
              immediately. Ongoing support available as needed.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* E-E-A-T Section */}
      <AnimatedSection className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-b from-electric/25 to-electric/5 p-8" delay={0.4}>
        <h2 className="text-3xl font-semibold text-white">Experience & Credibility</h2>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-white">Professional Background</h3>
            <p className="mt-2 text-white/75">
              With 10+ years of front-end development experience, I've worked with companies ranging from startups to
              large enterprises. My focus has always been on delivering high-quality, maintainable, and performant UI
              solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Industry Experience</h3>
            <p className="mt-2 text-white/75">
              I've specialized in e-commerce, B2B platforms, and SaaS applications. Major clients and projects include
              work with leading brands like Alko, PLUS, Isero, and Xerox. I bring real-world expertise in complex,
              high-traffic environments.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Technical Authority</h3>
            <p className="mt-2 text-white/75">
              Stay current with latest web technologies and best practices. Strong foundation in modern frameworks,
              performance optimization, and SEO. Published and shared knowledge on front-end development through
              professional work and community engagement.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Trustworthiness</h3>
            <p className="mt-2 text-white/75">
              Transparent communication, reliable delivery, and long-term client relationships. Known for production-ready
              code, clear documentation, and professional collaboration. Available for remote projects with fast response
              times and quality guarantees.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="mt-16 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-8" delay={0.5}>
        <div>
          <h2 className="text-2xl font-semibold text-white">Ready to work together?</h2>
          <p className="mt-2 text-white/75">Let's discuss your project and how I can help deliver pixel-perfect results.</p>
        </div>
        <Link
          href="/contact"
          className="mt-4 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-white/90 md:mt-0"
        >
          Start a Project
        </Link>
      </AnimatedSection>
    </div>
  );
}
