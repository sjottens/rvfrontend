"use client";

import { FormEvent, useEffect, useState } from "react";
import { ChevronDown, Send } from "lucide-react";

import pricingData from "@/data/pricing.json";
import { getMessages } from "@/data/i18n";
import { useLanguage } from "@/components/language-provider";

type FormState = {
  name: string;
  company: string;
  email: string;
  budget: string;
  message: string;
  website: string;
  startedAt: number;
};

type FeedbackKey = "validationError" | "success" | "genericError";

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  budget: "",
  message: "",
  website: "",
  startedAt: 0
};

function createBudgetOptions(onRequestLabel: string, undecidedLabel: string) {
  const options = pricingData.map((tier) => {
    const priceLabel = tier.priceFrom !== null ? `EUR ${tier.priceFrom} ${tier.unit}` : onRequestLabel;
    const details = "hours" in tier && tier.hours ? ` - ${tier.hours}` : "";

    return {
      value: `${tier.name} - ${priceLabel}${details}`,
      label: `${tier.name} - ${priceLabel}${details}`
    };
  });

  options.push({
    value: undecidedLabel,
    label: undecidedLabel
  });

  return options;
}

export function ContactForm() {
  const { language } = useLanguage();
  const t = getMessages(language);
  const budgetOptions = createBudgetOptions(t.form.onRequest, t.form.undecided);
  const defaultBudget = budgetOptions[0]?.value ?? t.form.undecided;

  const [form, setForm] = useState<FormState>({
    ...initialState,
    budget: defaultBudget,
    startedAt: 0
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedbackKey, setFeedbackKey] = useState<FeedbackKey | null>(null);

  useEffect(() => {
    setForm((prev) => {
      if (prev.startedAt) {
        return prev;
      }

      return {
        ...prev,
        startedAt: Date.now()
      };
    });
  }, []);

  useEffect(() => {
    setForm((prev) => {
      if (prev.budget && prev.budget !== defaultBudget) {
        return prev;
      }

      return {
        ...prev,
        budget: defaultBudget
      };
    });
  }, [defaultBudget]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setFeedbackKey("validationError");
      return;
    }

    setStatus("sending");
    setFeedbackKey(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setFeedbackKey("success");
      setForm({
        ...initialState,
        budget: defaultBudget,
        startedAt: Date.now()
      });
    } catch {
      setStatus("error");
      setFeedbackKey("genericError");
    }
  }

  return (
    <form onSubmit={onSubmit} className="contact-form space-y-4 rounded-3xl border border-white/45 bg-white/22 p-6 shadow-[0_24px_70px_-38px_rgba(0,0,0,0.75)] backdrop-blur-[24px]">
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={form.website}
        onChange={(event) => setForm((prev) => ({ ...prev, website: event.target.value }))}
        className="hidden"
        aria-hidden="true"
      />

      <label className="block space-y-2">
        <span className="text-sm font-medium text-white/90">{t.form.name}</span>
        <input
          className="field"
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          placeholder={t.form.namePlaceholder}
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-white/90">{t.form.company}</span>
        <input
          className="field"
          value={form.company}
          onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
          placeholder={t.form.companyPlaceholder}
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-white/90">{t.form.email}</span>
        <input
          type="email"
          className="field"
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          placeholder={t.form.emailPlaceholder}
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-white/90">{t.form.budget}</span>
        <div className="relative">
          <select
            className="field appearance-none pr-11"
            value={form.budget}
            onChange={(event) => setForm((prev) => ({ ...prev, budget: event.target.value }))}
          >
            {budgetOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-surface text-white">
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/60" size={16} />
        </div>
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-white/90">{t.form.message}</span>
        <textarea
          className="field min-h-36"
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          placeholder={t.form.messagePlaceholder}
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-electric/60 bg-electric/30 px-6 py-3 font-semibold text-white transition hover:bg-electric/50 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send size={16} />
        {status === "sending" ? t.form.sending : t.form.send}
      </button>

      {feedbackKey ? (
        <p className={status === "success" ? "text-sm text-emerald-300" : "text-sm text-rose-300"}>{t.form[feedbackKey]}</p>
      ) : null}
    </form>
  );
}
