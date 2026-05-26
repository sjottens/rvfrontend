"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ConsentChoice = "all" | "essential" | null;

const CONSENT_COOKIE_NAME = "adsense_consent";
const CONSENT_EXPIRY_DAYS = 365;

export function CookieConsentBanner() {
  const [consent, setConsent] = useState<ConsentChoice>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isEEA, setIsEEA] = useState(false);

  // Check if user is in EEA and load saved consent
  useEffect(() => {
    // Check for saved consent
    const savedConsent = localStorage.getItem(CONSENT_COOKIE_NAME);
    if (savedConsent) {
      const parsed = JSON.parse(savedConsent) as { choice: ConsentChoice; timestamp: number };
      setConsent(parsed.choice);
      updateGoogleConsentMode(parsed.choice === "all");
      return;
    }

    // Simple EEA detection (check for user's timezone or IP-based detection would be better)
    const detectEEA = () => {
      const eea_countries = [
        "AT",
        "BE",
        "BG",
        "HR",
        "CY",
        "CZ",
        "DK",
        "EE",
        "FI",
        "FR",
        "DE",
        "GR",
        "HU",
        "IE",
        "IT",
        "LV",
        "LT",
        "LU",
        "MT",
        "NL",
        "PL",
        "PT",
        "RO",
        "SK",
        "SI",
        "ES",
        "SE",
        "GB", // UK still covered by similar regulations
        "IS",
        "LI",
        "NO"
      ];

      // Attempt to detect country from timezone (basic method)
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const isLikelyEEA = timezone.includes("Europe") || timezone === "UTC";

      return isLikelyEEA;
    };

    setIsEEA(detectEEA());
    setShowBanner(true);
  }, []);

  function updateGoogleConsentMode(allowPersonalization: boolean) {
    // Initialize Google Consent Mode v2
    if (typeof window !== "undefined" && "gtag" in window) {
      const gtag = (window as any).gtag;
      gtag("consent", "update", {
        analytics_storage: allowPersonalization ? "granted" : "denied",
        ad_storage: allowPersonalization ? "granted" : "denied",
        ad_user_data: allowPersonalization ? "granted" : "denied",
        ad_personalization: allowPersonalization ? "granted" : "denied"
      });
    } else {
      // If gtag not loaded yet, set data layer
      if (typeof window !== "undefined") {
        (window as any).dataLayer = (window as any).dataLayer || [];
        function gtag(...args: any[]) {
          (window as any).dataLayer.push(arguments);
        }
        gtag("consent", "update", {
          analytics_storage: allowPersonalization ? "granted" : "denied",
          ad_storage: allowPersonalization ? "granted" : "denied",
          ad_user_data: allowPersonalization ? "granted" : "denied",
          ad_personalization: allowPersonalization ? "granted" : "denied"
        });
      }
    }
  }

  function saveConsent(choice: ConsentChoice) {
    const timestamp = Date.now();
    localStorage.setItem(
      CONSENT_COOKIE_NAME,
      JSON.stringify({
        choice,
        timestamp,
        expiresAt: timestamp + CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000
      })
    );

    setConsent(choice);
    updateGoogleConsentMode(choice === "all");
    setShowBanner(false);
  }

  // Only show banner for EEA users or if no consent decision has been made
  if (!showBanner || consent !== null) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[#050812]/95 backdrop-blur-xl md:bottom-6 md:left-6 md:right-auto md:max-w-md md:rounded-2xl md:border"
      >
        <div className="p-5 md:p-6">
          <div className="flex items-start gap-3">
            <Cookie className="mt-1 flex-shrink-0 text-cyan" size={20} />
            <div className="flex-1">
              <h3 className="font-semibold text-white">Cookie Preferences</h3>
              <p className="mt-2 text-sm text-white/70">
                We use cookies to enhance your experience, provide personalized content, and serve relevant
                advertisements. Please choose your preference.
              </p>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <Link href="/cookie-policy" className="text-cyan hover:text-cyan/80 underline">
                  Learn more about our cookie use
                </Link>
              </div>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => saveConsent("essential")}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40"
                >
                  Essential Only
                </button>
                <button
                  onClick={() => saveConsent("all")}
                  className="rounded-full bg-cyan px-4 py-2 text-sm font-medium text-black transition hover:bg-cyan/90"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Overlay for mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-30 bg-black/40 md:hidden"
        onClick={() => saveConsent("essential")}
      />
    </AnimatePresence>
  );
}
