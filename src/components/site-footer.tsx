"use client";

import Image from "next/image";
import Link from "next/link";

import { getMessages } from "@/data/i18n";
import { siteConfig } from "@/data/site";
import { navItems } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

export function SiteFooter() {
  const { language } = useLanguage();
  const t = getMessages(language);

  return (
    <footer className="border-t border-white/10 bg-[#060810]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.25fr_0.85fr_0.9fr] md:items-start">
        <div className="max-w-md">
          <Link
            href="/"
            aria-label="RV Frontend home"
            className="footer-logo-shell group inline-flex rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
          >
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/logos/rvfrontend-white-v2.png"
                alt="RV Frontend logo"
                width={220}
                height={92}
                className="h-auto w-[156px] sm:w-[190px]"
              />
              <span className="footer-logo-sheen pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent mix-blend-screen" />
            </div>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-6 text-white/60">{t.site.description}</p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">{t.footer.quickLinks}</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-white/80">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
                {t.nav[item.key]}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">{t.footer.contactTitle}</p>
          <div className="mt-4 space-y-1 text-sm text-white/80">
            <p>{siteConfig.email}</p>
            <p>{siteConfig.phone}</p>
            <p>{t.site.location}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/45">
        {new Date().getFullYear()} RV Frontend. {t.footer.rightsReserved}
      </div>
    </footer>
  );
}
