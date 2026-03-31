import Link from "next/link";

import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#060810]">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
          <p className="mt-2 max-w-xs text-sm text-white/60">{siteConfig.description}</p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">Snel naar</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-white/80">
            <Link href="/">Home</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">Contact</p>
          <p className="mt-4 text-sm text-white/80">{siteConfig.email}</p>
          <p className="text-sm text-white/80">{siteConfig.phone}</p>
          <p className="text-sm text-white/80">{siteConfig.location}</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/45">
        {new Date().getFullYear()} RV Frontend. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}
