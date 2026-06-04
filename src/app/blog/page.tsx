import { cookies } from "next/headers";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { blogPosts } from "@/data/blog";
import { getMessages } from "@/data/i18n";
import { LANG_COOKIE, normalizeLanguage } from "@/lib/language";

export const metadata: Metadata = {
  title: "Blog | RV Frontend",
  description: "Read articles about React, Next.js, TypeScript, performance, accessibility, and frontend best practices.",
  keywords: ["blog", "frontend", "React", "Next.js", "TypeScript", "performance", "accessibility"],
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "Blog | RV Frontend",
    description: "Frontend insights and best practices",
    url: "/blog",
    siteName: "RV Frontend"
  }
};

export default async function BlogPage() {
  const cookieStore = await cookies();
  const language = normalizeLanguage(cookieStore.get(LANG_COOKIE)?.value);
  const t = getMessages(language);

  const categories = Array.from(new Set(blogPosts.map(post => language === "nl" ? post.category : post.categoryEn)));

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-[#050812]/95 via-[#050812]/85 to-[#050812]/75 py-16 md:py-24">
        <div className="container-shell">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="kicker">{t.blog.kicker}</p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-6xl">
                {t.blog.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/80">
                {t.blog.description}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-shell">
          <div className="mb-12 flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="rounded-full border border-cyan px-4 py-2 text-sm text-cyan hover:bg-cyan/10"
            >
              {t.blog.allCategories}
            </Link>
            {categories.map(cat => (
              <Link
                key={cat}
                href={`/blog?category=${cat}`}
                className="rounded-full border border-white/25 px-4 py-2 text-sm text-white/75 hover:border-white/50"
              >
                {cat}
              </Link>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.slug} delay={index * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <article className="h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-cyan/50 hover:bg-white/5">
                    <div className="aspect-video relative overflow-hidden bg-white/5">
                      <Image
                        src={post.image}
                        alt={language === "nl" ? post.title : post.titleEn}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-cyan">
                          {language === "nl" ? post.category : post.categoryEn}
                        </span>
                        <span className="text-xs text-white/50">{post.readTime} {t.blog.readTime}</span>
                      </div>
                      <h2 className="mt-3 text-xl font-semibold text-white group-hover:text-cyan transition">
                        {language === "nl" ? post.title : post.titleEn}
                      </h2>
                      <p className="mt-2 line-clamp-2 text-white/70">
                        {language === "nl" ? post.description : post.descriptionEn}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {(language === "nl" ? post.tags : post.tagsEn).slice(0, 2).map(tag => (
                          <span key={tag} className="text-xs text-cyan/70">#{tag}</span>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center justify-between text-sm text-white/60">
                        <time>{new Date(post.publishDate).toLocaleDateString(language === "nl" ? "nl-NL" : "en-US")}</time>
                        <span className="text-cyan opacity-0 group-hover:opacity-100 transition">
                          <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-gradient-to-b from-[#050812]/50 to-[#050812]/75 py-16 md:py-24">
        <div className="container-shell text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-semibold text-white">
              {language === "nl" ? "Geen artikel gevonden dat je zoekt?" : "Can't find what you're looking for?"}
            </h2>
            <p className="mt-4 text-white/75">
              {language === "nl" ? "Stuur me een vraag - ik schrijf graag over onderwerpen die relevant zijn." : "Send me a question - I'm happy to write about relevant topics."}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-base transition hover:bg-white/90"
            >
              {language === "nl" ? "Neem contact op" : "Get in touch"}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}