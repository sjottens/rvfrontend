import type { Language } from "@/lib/language";

type PortfolioProjectText = {
  category: string;
  title: string;
  description: string;
};

const portfolioProjectCopy: Record<Language, Record<string, PortfolioProjectText>> = {
  nl: {
    alko: {
      category: "B2C / E-commerce",
      title: "B2C website",
      description:
        "Onderhoud en doorontwikkeling van e-commerce platform. Implementatie van nieuwe features en optimalisatie van bestaande functionaliteiten."
    },
    bmn: {
      category: "B2B Commerce",
      title: "A/B-testen van nieuwe designs",
      description:
        "Opzetten en uitvoeren van A/B-testen met VWO. Designs omgezet naar HTML, CSS en JavaScript in samenwerking met designer en business analyst."
    },
    isero: {
      category: "B2B Commerce",
      title: "Productgroepen en navigatie",
      description: "Pixel-perfect implementatie van assortiment- en categoriecomponenten binnen een grote commerce omgeving."
    },
    plus: {
      category: "B2C E-commerce",
      title: "Opzetten van de nieuwe e-commerce frontend",
      description:
        "Nieuwe e-commerce website opgezet met Intershop in een multidisciplinair scrumteam op locatie. Betrokken bij het ontwerpen van pagina's en verantwoordelijk voor HTML-structuur, Less, Bootstrap, JavaScript (jQuery) en ISML-templating."
    },
    xerox: {
      category: "B2C E-commerce",
      title: "Onderhouden en implementeren van nieuwe designs",
      description: "E-commerce website onderhouden en nieuwe designs geimplementeerd in een multidisciplinair scrumteam."
    },
    hoogvliet: {
      category: "B2C E-commerce",
      title: "Onderhouden en implementeren van nieuwe designs",
      description:
        "E-commerce website onderhouden en nieuwe designs geimplementeerd in een multidisciplinair scrumteam. Verantwoordelijk voor bugfixes, nieuwe checkout-flow en het opzetten van HTML-structuur, Less, Bootstrap, JavaScript (jQuery), ISML-templating en Mustache.js."
    },
    bodyandfit: {
      category: "B2C E-commerce",
      title: "Het opzetten van A/B-testen met Optimizely Web",
      description:
        "Aangeleverde designs omgezet naar HTML en CSS met JavaScript binnen het Optimizely Web platform om de gebruikerservaring te verbeteren en conversie te verhogen."
    },
    wefashion: {
      category: "B2C E-commerce",
      title: "Email templates in HTML en CSS",
      description:
        "Tijdens de migratie van Intershop naar Demandware (nu Salesforce) gewerkt aan het opnieuw opzetten van e-mailtemplates in HTML en CSS voor WE Fashion."
    }
  },
  en: {
    alko: {
      category: "B2C / E-commerce",
      title: "B2C website",
      description:
        "Maintenance and ongoing development of an e-commerce platform, including new feature implementation and optimization of existing functionality."
    },
    bmn: {
      category: "B2B Commerce",
      title: "A/B testing for new designs",
      description:
        "Set up and executed A/B tests with VWO. Converted designs into HTML, CSS, and JavaScript in collaboration with a designer and business analyst."
    },
    isero: {
      category: "B2B Commerce",
      title: "Product groups and navigation",
      description:
        "Pixel-perfect implementation of assortment and category components within a large-scale commerce environment."
    },
    plus: {
      category: "B2C E-commerce",
      title: "Building the new e-commerce front-end",
      description:
        "Built a new e-commerce website with Intershop in a multidisciplinary on-site scrum team. Contributed to page design and led HTML structure, Less, Bootstrap, JavaScript (jQuery), and ISML templating setup."
    },
    xerox: {
      category: "B2C E-commerce",
      title: "Maintaining and implementing new designs",
      description:
        "Maintained an e-commerce website and implemented new designs within a multidisciplinary scrum team."
    },
    hoogvliet: {
      category: "B2C E-commerce",
      title: "Maintaining and implementing new designs",
      description:
        "Maintained an e-commerce website and implemented new designs in a multidisciplinary scrum team. Responsible for bug fixing, new checkout flow implementation, and setup of HTML structure, Less, Bootstrap, JavaScript (jQuery), ISML templating, and Mustache.js."
    },
    bodyandfit: {
      category: "B2C E-commerce",
      title: "Setting up A/B tests with Optimizely Web",
      description:
        "Converted provided designs to HTML and CSS with JavaScript in the Optimizely Web platform to improve user experience and increase conversion."
    },
    wefashion: {
      category: "B2C E-commerce",
      title: "Email templates in HTML and CSS",
      description:
        "During the migration from Intershop to Demandware (now Salesforce), focused on rebuilding email templates in HTML and CSS for WE Fashion."
    }
  }
};

export const messages = {
  nl: {
    nav: {
      home: "Home",
      pricing: "Pricing",
      portfolio: "Portfolio",
      contact: "Contact"
    },
    header: {
      cta: "Start gesprek",
      languageSwitchAria: "Wissel taal",
      menuToggleAria: "Menu openen/sluiten"
    },
    footer: {
      quickLinks: "Snel naar",
      contactTitle: "Contact",
      rightsReserved: "Alle rechten voorbehouden."
    },
    audio: {
      on: "Muziek aan",
      off: "Muziek uit",
      playAria: "Achtergrondmuziek afspelen",
      pauseAria: "Achtergrondmuziek pauzeren"
    },
    home: {
      heroKicker: "Senior UI engineering",
      heroTitle: "Pixel-perfect front-end voor teams die snel en strak willen leveren.",
      heroDescription:
        "RV Frontend helpt bedrijven met het omzetten van designs naar schaalbare UI code. Of je stack nu React, Vue, Angular of custom is: ik sluit naadloos aan en lever websites met de modernste stack. Geen WordPress-themes, maar custom build front-end die snel, schaalbaar en SEO-sterk is.",
      primaryCta: "Plan een gesprek",
      secondaryCta: "Bekijk portfolio",
      highlights: ["Vanaf EUR 75 per uur", "Remote inzetbaar", "React, Vue, Angular"],
      sideBullets: ["Design-to-code delivery", "CSS, SCSS, Tailwindcss of Bootstrap", "SEO en Core Web Vitals focus"],
      workKicker: "Wat ik doe",
      workTitle: "UI implementatie die designkwaliteit en engineeringkwaliteit samenbrengt.",
      processKicker: "Werkwijze",
      techKicker: "Tech stack fit",
      techTitle: "Direct inzetbaar in jouw project",
      techItems: ["React / Next.js", "Vue / Nuxt", "Angular", "Legacy codebases"],
      process: [
        {
          title: "Analyse",
          text: "Snelle intake van design, scope en technische context."
        },
        {
          title: "Implementatie",
          text: "Designs worden vertaald naar onderhoudbare css."
        },
        {
          title: "Optimalisatie",
          text: "Aanscherpen van performance, responsive gedrag en SEO-kwaliteit."
        },
        {
          title: "Overdracht",
          text: "Heldere oplevering met code die direct in jullie sprintproces past."
        }
      ],
      capabilities: [
        "Designs vertalen naar productieklare UI",
        "Websites bouwen met moderne stack, custom build (geen WordPress)",
        "CSS, SCSS, Tailwindcss of Bootstrap",
        "GitHub Copilot en AI-tools in front-end workflow",
        "React, Vue, Angular en bestaande codebases",
        "A/B testen met VWO",
        "Performance en SEO-bewuste front-end implementatie",
        "Remote inzetbaar met snelle communicatie"
      ]
    },
    pricing: {
      kicker: "Pricing",
      title: "Transparant, schaalbaar en vanaf EUR 75,-",
      description:
        "Kies een samenwerkingsvorm die past bij jouw fase: losse ondersteuning, een afgebakend project of structurele capaciteit binnen je team.",
      onRequest: "Op aanvraag",
      cta: "Plan intake",
      alwaysIncludedTitle: "Wat je altijd krijgt",
      alwaysIncluded: [
        "Pixel-perfect implementatie met oog voor detail.",
        "Code die past bij jouw bestaande architectuur.",
        "Responsieve layouts die werken op alle schermformaten.",
        "Heldere communicatie, korte feedbackloops en remote samenwerking."
      ]
    },
    portfolio: {
      kicker: "Portfolio",
      title: "Projecten waar UI-kwaliteit echt verschil maakte",
      description:
        "Hieronder een selectie van projecten waaraan ik heb meegewerkt bij de implementatie van de gebruikersinterface en diverse functionaliteiten.",
      liveView: "Live bekijken",
      caseOnRequest: "Case details op aanvraag",
      logosKicker: "Projectlogo's",
      logosTitle: "Samenwerkingen en platformen"
    },
    contact: {
      kicker: "Contact",
      title: "Vertel wat je wilt bouwen, ik pak de UI op.",
      description:
        "Voor nieuwe features, complete pages of structurele front-end capaciteit. Reactietijd: meestal binnen 24 uur.",
      cards: [
        {
          title: "Snelle start",
          text: "Vaak binnen enkele dagen inzetbaar in bestaande projecten."
        },
        {
          title: "Stack-flexibel",
          text: "CSS/SCSS, Tailwind of Bootstrap in React, Vue, Angular of custom stacks."
        },
        {
          title: "Remote samenwerking",
          text: "Heldere communicatie en focus op concrete oplevering."
        }
      ]
    },
    form: {
      name: "Naam",
      namePlaceholder: "Jouw naam",
      company: "Bedrijf",
      companyPlaceholder: "Bedrijfsnaam",
      email: "E-mail",
      emailPlaceholder: "naam@bedrijf.nl",
      budget: "Budget",
      message: "Bericht",
      messagePlaceholder: "Wat wil je laten bouwen of verbeteren?",
      send: "Verstuur bericht",
      sending: "Versturen...",
      undecided: "Nog te bepalen",
      validationError: "Vul naam, e-mail en bericht in.",
      success: "Bedankt. Ik kom binnen 24 uur bij je terug.",
      genericError: "Er ging iets mis. Probeer het nog een keer of mail direct.",
      onRequest: "Op aanvraag"
    },
    site: {
      description:
        "RV Frontend helpt bedrijven met pixel-perfect UI implementatie en custom-built websites: designs omzetten naar schaalbare front-end code in React, Vue, Angular of bestaande codebases. Geen WordPress, wel moderne stack en SEO-sterke performance.",
      location: "Remote (NL / EU)"
    }
  },
  en: {
    nav: {
      home: "Home",
      pricing: "Pricing",
      portfolio: "Portfolio",
      contact: "Contact"
    },
    header: {
      cta: "Start project",
      languageSwitchAria: "Switch language",
      menuToggleAria: "Toggle menu"
    },
    footer: {
      quickLinks: "Quick links",
      contactTitle: "Contact",
      rightsReserved: "All rights reserved."
    },
    audio: {
      on: "Music on",
      off: "Music off",
      playAria: "Play background music",
      pauseAria: "Pause background music"
    },
    home: {
      heroKicker: "Senior UI engineering",
      heroTitle: "Pixel-perfect front-end for teams that ship fast and clean.",
      heroDescription:
        "RV Frontend helps companies turn designs into scalable UI code. Whether your stack is React, Vue, Angular, or custom, I plug in fast and deliver with a modern toolchain. No WordPress themes, but custom-built front-end that is fast, scalable, and SEO strong.",
      primaryCta: "Book a call",
      secondaryCta: "View portfolio",
      highlights: ["From EUR 75 per hour", "Available remotely", "React, Vue, Angular"],
      sideBullets: ["Design-to-code delivery", "CSS, SCSS, Tailwindcss, or Bootstrap", "SEO and Core Web Vitals focus"],
      workKicker: "What I do",
      workTitle: "UI implementation that combines design quality and engineering quality.",
      processKicker: "Process",
      techKicker: "Tech stack fit",
      techTitle: "Ready to plug into your project",
      techItems: ["React / Next.js", "Vue / Nuxt", "Angular", "Legacy codebases"],
      process: [
        {
          title: "Discovery",
          text: "Rapid intake of design, scope, and technical context."
        },
        {
          title: "Implementation",
          text: "Designs are translated into maintainable CSS."
        },
        {
          title: "Optimization",
          text: "Sharpening performance, responsive behavior, and SEO quality."
        },
        {
          title: "Handover",
          text: "Clear delivery with code that fits your sprint process."
        }
      ],
      capabilities: [
        "Translate designs into production-ready UI",
        "Build websites with a modern stack, custom-built (no WordPress)",
        "CSS, SCSS, Tailwindcss, or Bootstrap",
        "GitHub Copilot and AI tools in the front-end workflow",
        "React, Vue, Angular, and existing codebases",
        "A/B testing with VWO",
        "Performance and SEO-aware front-end implementation",
        "Remote collaboration with fast communication"
      ]
    },
    pricing: {
      kicker: "Pricing",
      title: "Transparent, scalable, and from EUR 75,-",
      description:
        "Choose a collaboration model that matches your phase: ad-hoc support, a scoped project, or structural front-end capacity.",
      onRequest: "On request",
      cta: "Plan intake",
      alwaysIncludedTitle: "What you always get",
      alwaysIncluded: [
        "Pixel-perfect implementation with attention to detail.",
        "Code aligned with your existing architecture.",
        "Responsive layouts that work on every screen size.",
        "Clear communication, short feedback loops, and remote collaboration."
      ]
    },
    portfolio: {
      kicker: "Portfolio",
      title: "Projects where UI quality made a real difference",
      description:
        "A selection of projects where I contributed to user interface implementation and feature delivery.",
      liveView: "View live",
      caseOnRequest: "Case details on request",
      logosKicker: "Project logos",
      logosTitle: "Collaborations and platforms"
    },
    contact: {
      kicker: "Contact",
      title: "Tell me what you want to build, I will take care of the UI.",
      description:
        "For new features, complete pages, or structural front-end capacity. Response time: usually within 24 hours.",
      cards: [
        {
          title: "Fast start",
          text: "Often available within days in existing projects."
        },
        {
          title: "Stack-flexible",
          text: "CSS/SCSS, Tailwind, or Bootstrap in React, Vue, Angular, or custom stacks."
        },
        {
          title: "Remote collaboration",
          text: "Clear communication and focus on concrete delivery."
        }
      ]
    },
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      company: "Company",
      companyPlaceholder: "Company name",
      email: "Email",
      emailPlaceholder: "name@company.com",
      budget: "Budget",
      message: "Message",
      messagePlaceholder: "What do you want to build or improve?",
      send: "Send message",
      sending: "Sending...",
      undecided: "To be decided",
      validationError: "Please fill in name, email, and message.",
      success: "Thanks. I will get back to you within 24 hours.",
      genericError: "Something went wrong. Try again or email directly.",
      onRequest: "On request"
    },
    site: {
      description:
        "RV Frontend helps companies with pixel-perfect UI implementation and custom-built websites: turning designs into scalable front-end code in React, Vue, Angular, or existing codebases. No WordPress, but a modern stack with SEO-strong performance.",
      location: "Remote (NL / EU)"
    }
  }
} as const;

export function getMessages(language: Language) {
  return messages[language];
}

export function getPortfolioProjectText(language: Language, projectId: string): PortfolioProjectText | undefined {
  return portfolioProjectCopy[language][projectId.toLowerCase()];
}
