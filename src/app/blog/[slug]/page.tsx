import { cookies } from "next/headers";
import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ChevronLeft, Tag, Calendar } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { blogPosts, getBlogPost } from "@/data/blog";
import { getMessages } from "@/data/i18n";
import { LANG_COOKIE, normalizeLanguage } from "@/lib/language";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Article Not Found",
      description: "The blog article you're looking for doesn't exist."
    };
  }

  return {
    title: `${post.title} | RV Frontend Blog`,
    description: post.description,
    keywords: [...post.tags, "blog", "frontend development"],
    authors: [{ name: post.author }],
    
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      
      authors: [post.author],
      tags: post.tags
    }
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const cookieStore = await cookies();
  const language = normalizeLanguage(cookieStore.get(LANG_COOKIE)?.value);
  const t = getMessages(language);

  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div className="container-shell py-24 text-center">
        <h1 className="text-4xl font-semibold text-white">{t.blog.articleNotFound}</h1>
        <p className="mt-4 text-white/75">{language === "nl" ? "Het artikel dat je zoekt bestaat niet." : "The article you're looking for doesn't exist."}</p>
        <Link href="/blog" className="mt-8 inline-flex items-center gap-2 text-cyan hover:text-cyan/80">
          <ChevronLeft size={18} />
          {t.blog.backToBlog}
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const contentSections = (language === "nl" ? post.content : post.contentEn).split('\n\n').filter(s => s.trim());
  const displayTitle = language === "nl" ? post.title : post.titleEn;
  const displayDescription = language === "nl" ? post.description : post.descriptionEn;
  const displayCategory = language === "nl" ? post.category : post.categoryEn;
  const displayTags = language === "nl" ? post.tags : post.tagsEn;

  return (
    <article className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#050812]/95 via-[#050812]/85 to-[#050812]/75 py-16 md:py-24">
        <div className="container-shell">
          <AnimatedSection>
            <Link href="/blog" className="inline-flex items-center gap-2 text-cyan hover:text-cyan/80 mb-8">
              <ChevronLeft size={18} />
              {t.blog.backToBlog}
            </Link>

            <div className="max-w-3xl">
              <p className="kicker">{displayCategory}</p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-6xl">{displayTitle}</h1>
              <p className="mt-6 max-w-2xl text-lg text-white/80">{displayDescription}</p>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-cyan" />
                  <span>{new Date(post.publishDate).toLocaleDateString(language === "nl" ? "nl-NL" : "en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-cyan" />
                  <span>{post.readTime} {t.blog.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{t.blog.byAuthor} {post.author}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24">
        <div className="container-shell max-w-3xl">
          <AnimatedSection>
            <div className="space-y-6 text-white/80 leading-relaxed prose prose-invert max-w-none">
              {contentSections.map((section, idx) => {
                if (section.trim().startsWith('# ')) {
                  return (
                    <h2 key={idx} className="text-3xl font-bold text-white mt-8 mb-4">
                      {section.replace(/^# /, '').trim()}
                    </h2>
                  );
                }
                if (section.trim().startsWith('## ')) {
                  return (
                    <h3 key={idx} className="text-2xl font-semibold text-white mt-6 mb-3">
                      {section.replace(/^## /, '').trim()}
                    </h3>
                  );
                }
                if (section.trim().startsWith('```')) {
                  return (
                    <pre key={idx} className="bg-white/5 border border-white/10 rounded p-4 overflow-x-auto my-4">
                      <code className="text-white/70 text-sm">{section.replace(/```/g, '').trim()}</code>
                    </pre>
                  );
                }
                return (
                  <p key={idx} className="text-white/80">
                    {section.trim()}
                  </p>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Tags */}
          <AnimatedSection delay={0.1}>
            <div className="mt-12 border-t border-white/10 pt-8">
              <div className="flex flex-wrap gap-2">
                {displayTags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="inline-flex items-center gap-1 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-sm font-semibold text-cyan transition hover:bg-cyan/20"
                  >
                    <Tag size={14} />
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Author Info */}
      <section className="border-t border-white/5 bg-gradient-to-b from-[#050812]/50 to-[#050812]/75 py-16">
        <div className="container-shell max-w-3xl">
          <AnimatedSection>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <div className="flex items-start gap-6">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan/50 to-cyan/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-cyan">RV</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{post.author}</h3>
                  <p className="mt-2 text-white/75">
                    {language === "nl" ? "Senior Frontend Developer met 10+ jaar ervaring in het bouwen van pixel-perfect UIs, performance optimalisatie en schaalbare frontend oplossingen." : "Senior Frontend Developer with 10+ years of experience building pixel-perfect UIs, optimizing performance, and creating scalable frontend solutions."}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container-shell">
            <AnimatedSection>
              <h2 className="text-3xl font-semibold text-white">{t.blog.relatedArticles}</h2>
            </AnimatedSection>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost, index) => (
                <AnimatedSection key={relatedPost.id} delay={(index + 1) * 0.1}>
                  <Link href={`/blog/${relatedPost.slug}`} className="group block">
                    <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan/50 hover:bg-white/5">
                      <p className="text-sm font-semibold text-cyan">{language === "nl" ? relatedPost.category : relatedPost.categoryEn}</p>
                      <h3 className="mt-2 text-lg font-semibold text-white transition group-hover:text-cyan">
                        {language === "nl" ? relatedPost.title : relatedPost.titleEn}
                      </h3>
                      <p className="mt-2 text-sm text-white/70 line-clamp-2">{language === "nl" ? relatedPost.description : relatedPost.descriptionEn}</p>
                      <div className="mt-4 flex items-center justify-between text-xs text-white/60">
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{relatedPost.readTime} {t.blog.readTime}</span>
                        </div>
                        <span>{new Date(relatedPost.publishDate).toLocaleDateString(language === "nl" ? "nl-NL" : "en-US")}</span>
                      </div>
                    </article>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="border-t border-white/5 bg-gradient-to-b from-[#050812]/50 to-[#050812]/75 py-16 md:py-24">
        <div className="container-shell">
          <AnimatedSection>
            <div className="rounded-3xl border border-cyan/30 bg-gradient-to-r from-cyan/10 to-transparent p-8 md:p-12">
              <h2 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                {language === "nl" ? "Heb je een project in gedachten?" : "Have a Project in Mind?"}
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-white/75">
                {language === "nl" ? "Laten we jouw frontend development wensen bespreken. Van UI implementatie tot complete React applicaties, ik ben hier om te helpen." : "Let's discuss your frontend development needs. From UI implementation to complete React applications, I'm here to help."}
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan px-8 py-3 font-semibold text-black transition hover:bg-cyan/90"
              >
                {language === "nl" ? "Neem contact op" : "Get in Touch"}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </article>
  );
}

