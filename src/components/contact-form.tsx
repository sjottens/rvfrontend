"use client";

import { FormEvent, useEffect, useState } from "react";
import { ChevronDown, Send } from "lucide-react";

import pricingData from "@/data/pricing.json";

type FormState = {
  name: string;
  company: string;
  email: string;
  budget: string;
  message: string;
  website: string;
  startedAt: number;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  budget: "",
  message: "",
  website: "",
  startedAt: 0
};

const budgetOptions = pricingData.map((tier) => {
  const priceLabel = tier.priceFrom !== null ? `EUR ${tier.priceFrom} ${tier.unit}` : "Op aanvraag";
  const details = "hours" in tier && tier.hours ? ` - ${tier.hours}` : "";

  return {
    value: `${tier.name} - ${priceLabel}${details}`,
    label: `${tier.name} - ${priceLabel}${details}`
  };
});

budgetOptions.push({
  value: "Nog te bepalen",
  label: "Nog te bepalen"
});

export function ContactForm() {
  const defaultBudget = budgetOptions[0]?.value ?? "Nog te bepalen";

  const [form, setForm] = useState<FormState>({
    ...initialState,
    budget: defaultBudget,
    startedAt: 0
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

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

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setFeedback("Vul naam, e-mail en bericht in.");
      return;
    }

    setStatus("sending");
    setFeedback("");

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
      setFeedback("Bedankt. Ik kom binnen 24 uur bij je terug.");
      setForm({
        ...initialState,
        budget: defaultBudget,
        startedAt: Date.now()
      });
    } catch {
      setStatus("error");
      setFeedback("Er ging iets mis. Probeer het nog een keer of mail direct.");
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
        <span className="text-sm font-medium text-white/90">Naam</span>
        <input
          className="field"
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          placeholder="Jouw naam"
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-white/90">Bedrijf</span>
        <input
          className="field"
          value={form.company}
          onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
          placeholder="Bedrijfsnaam"
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-white/90">E-mail</span>
        <input
          type="email"
          className="field"
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          placeholder="naam@bedrijf.nl"
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-white/90">Budget</span>
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
        <span className="text-sm font-medium text-white/90">Bericht</span>
        <textarea
          className="field min-h-36"
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          placeholder="Wat wil je laten bouwen of verbeteren?"
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-electric/60 bg-electric/30 px-6 py-3 font-semibold text-white transition hover:bg-electric/50 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send size={16} />
        {status === "sending" ? "Versturen..." : "Verstuur bericht"}
      </button>

      {feedback ? (
        <p className={status === "success" ? "text-sm text-emerald-300" : "text-sm text-rose-300"}>{feedback}</p>
      ) : null}
    </form>
  );
}
