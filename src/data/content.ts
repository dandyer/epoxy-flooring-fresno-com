export interface SiteContent {
  hero: { heading: string; subheading: string; serviceArea: string };
  services: { heading: string; subheading: string };
  howItWorks: { heading: string; subheading: string; steps: { title: string; description: string }[] };
  whyUs: { heading: string; items: { title: string; desc: string }[] };
  serviceAreas: { heading: string; subheading: string };
  faq: { q: string; a: string }[];
  cta: { heading: string; subheading: string; buttonText: string };
  about: { heading: string; body: string[]; ownerQuote: string };
}

export const content: SiteContent = {
  hero: {
    heading: "Fresno's Best Epoxy Flooring — Garages, Shops & Commercial",
    subheading: "Transform your concrete into a durable, beautiful floor that's easy to clean and built to last. Serving Fresno, Clovis, and the entire Central Valley.",
    serviceArea: "Serving Fresno, Clovis, Madera & Surrounding Cities",
  },
  services: {
    heading: "Epoxy Flooring Services",
    subheading: "From garage floors to commercial warehouses, we install systems that last.",
  },
  howItWorks: {
    heading: "How It Works",
    subheading: "A simple, professional process from estimate to finished floor.",
    steps: [
      { title: "Free Estimate", description: "We come to you, measure the space, assess the concrete, and give you a detailed written quote — usually same week." },
      { title: "Professional Installation", description: "Our crew preps the concrete with diamond grinders, applies the epoxy system, and finishes with a durable polyaspartic topcoat." },
      { title: "Enjoy Your Floor", description: "Light foot traffic in 24 hours, vehicles in 72 hours. A beautiful, easy-to-clean floor that holds up for years." },
    ],
  },
  whyUs: {
    heading: "Why Fresno Chooses Us",
    items: [
      { title: "Licensed & Insured", desc: "CA contractor license #1082347. Fully insured — protect your home and investment." },
      { title: "Diamond Grinding Prep", desc: "We always grind, never just acid etch. Proper prep is the difference between a 2-year and a 20-year floor." },
      { title: "100% Solids Epoxy", desc: "Professional-grade materials, not the kits from the hardware store. Thicker, tougher, longer-lasting." },
      { title: "Written Warranty", desc: "We stand behind our work with a written warranty on both labor and materials." },
      { title: "Over 620 Jobs in the Valley", desc: "More than a decade of experience in Fresno's climate and conditions. We know what works here." },
      { title: "Clean & Respectful", desc: "We protect your space, work cleanly, and leave the site better than we found it." },
    ],
  },
  serviceAreas: {
    heading: "Serving the Central Valley",
    subheading: "From Fresno to Visalia, Madera to Sanger — we come to you.",
  },
  faq: [
    { q: "How much does epoxy flooring cost in Fresno?", a: "Most residential garage floors in Fresno run $3–$6 per square foot depending on the system, prep required, and any damage repairs needed. A standard two-car garage is typically $1,200–$2,500. We provide detailed written quotes with no hidden fees." },
    { q: "How long does epoxy floor installation take?", a: "Most residential garage floors are completed in one day. Larger spaces or jobs requiring extensive crack repair may take two days. Commercial projects are phased to minimize business disruption." },
    { q: "Is epoxy flooring slippery when wet?", a: "Standard high-gloss epoxy can be slippery when wet. We recommend adding anti-slip aggregate to the topcoat for areas that see water — like pool decks, patios, and shop floors. Our flake finishes provide natural texture and grip." },
    { q: "How do I maintain an epoxy floor?", a: "Epoxy floors are extremely easy to maintain — sweep regularly and mop with a mild cleaner. Avoid harsh acidic cleaners. Most floors look great for years with minimal effort." },
    { q: "What is the difference between DIY epoxy kits and professional installation?", a: "DIY kits are water-based with low solids content — they go on thin and often peel within 1–2 years, especially if the surface wasn't ground (not just etched) beforehand. Professional systems use 100% solids epoxy applied over diamond-ground concrete, and last 10–20+ years." },
  ],
  cta: {
    heading: "Get Your Free Estimate",
    subheading: "Call or text today. Most estimates are scheduled within 2–3 business days.",
    buttonText: "Request Free Estimate",
  },
  about: {
    heading: "About Fresno Epoxy Flooring Experts",
    body: [
      "I started Fresno Epoxy Flooring Experts in 2014 after spending several years working for a larger flooring company and getting frustrated with the shortcuts — acid etching instead of grinding, thin water-based products, crews that rushed through prep to get to the next job. I knew there was a better way to do this, and I knew Fresno deserved it.",
      "Everything we do starts with the prep. I've seen more failed DIY epoxy jobs than I can count — the product wasn't the problem, the prep was. When we show up to your garage or shop floor, we bring industrial diamond grinding equipment that opens the concrete pores properly. The epoxy bonds to the concrete instead of sitting on top of it, and that's what makes a floor last 15 years instead of 2.",
      "We serve the entire Central Valley from Fresno to Visalia, Madera to Sanger. Every job gets the same level of care — whether it's a one-car garage or a 10,000-square-foot warehouse. I'm usually on-site for every job, and I'll give you my personal number. If something ever isn't right, call me directly.",
    ],
    ownerQuote: "The floor is the foundation of everything else in the space — get it right and everything looks better.",
  },
};
