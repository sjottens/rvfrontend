export type Language = "nl" | "en";

export const LANG_COOKIE = "rv_lang";

export function normalizeLanguage(value?: string | null): Language {
  return value === "en" ? "en" : "nl";
}
