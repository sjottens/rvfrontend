export type NavKey = "home" | "pricing" | "portfolio" | "contact";

export const siteConfig = {
  name: "RV Frontend",
  tagline: "render: pixel-perfect",
  domain: "https://rvfrontend.nl",
  email: "rvottens@gmail.com",
  phone: "+31628522314",
  location: "Remote (NL / EU)",
  description:
    "RV Frontend helpt bedrijven met pixel-perfect UI implementatie en custom-built websites: designs omzetten naar schaalbare front-end code in React, Vue, Angular of bestaande codebases. Geen WordPress, wel moderne stack en SEO-sterke performance."
};

export const navItems = [
  { key: "home", href: "/" },
  { key: "pricing", href: "/pricing" },
  { key: "portfolio", href: "/portfolio" },
  { key: "contact", href: "/contact" }
] satisfies Array<{ key: NavKey; href: string }>;
