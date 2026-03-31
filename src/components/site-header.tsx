"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { navItems } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-base/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: -10, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="/" className="group flex items-center gap-3" aria-label="RV Frontend home">
            <div className="relative overflow-hidden rounded-md">
              <motion.div
                initial={{ opacity: 0, x: -28, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image src="/logos/rvfrontend-white-v2.png" alt="RV Frontend logo" width={144} height={60} className="h-9 w-auto" priority />
              </motion.div>

              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/45 to-transparent mix-blend-screen"
                initial={{ x: "-120%", opacity: 0 }}
                animate={{ x: "420%", opacity: [0, 1, 0] }}
                transition={{ delay: 0.34, duration: 0.85, ease: "easeInOut" }}
              />
            </div>
          </Link>
        </motion.div>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium tracking-wide text-white/75 transition-colors hover:text-white",
                  active && "text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full border border-electric/60 bg-electric/20 px-5 py-2 text-sm font-semibold text-white transition hover:bg-electric/40"
          >
            Start gesprek
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="relative rounded-md border border-white/20 p-2 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <motion.span
            key={open ? "close" : "open"}
            initial={{ opacity: 0, rotate: open ? -90 : 90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="block"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </motion.span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden border-t border-white/10 bg-surface/95 md:hidden"
          >
            <div className="px-6 py-5">
              <nav className="flex flex-col gap-1">
                {navItems.map((item, index) => {
                  const active = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 + index * 0.055, duration: 0.25, ease: "easeOut" }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "block rounded-xl px-3 py-2.5 text-base text-white/75 transition-colors hover:bg-white/5 hover:text-white",
                          active && "bg-white/5 text-white"
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.25, ease: "easeOut" }}
                className="mt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-block rounded-full border border-electric/60 bg-electric/20 px-5 py-2 text-sm font-semibold text-white transition hover:bg-electric/40"
                >
                  Start gesprek
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
