export interface Service {
  slug: string; name: string; description: string;
  metaTitle: string; metaDescription: string;
  heroHeading: string; heroSubheading: string;
  body: string[];
  features: string[];
  faq: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "garage-floor-epoxy",
    name: "Garage Floor Epoxy",
    description: "Transform your garage with a durable, high-gloss epoxy coating that resists oil, chemicals, and heavy traffic.",
    metaTitle: "Garage Floor Epoxy Fresno CA | Fresno Epoxy Flooring Experts",
    metaDescription: "Professional garage floor epoxy in Fresno, CA. Oil-resistant, easy-to-clean, beautiful. Free estimates — call (916) 234-0003.",
    heroHeading: "Garage Floor Epoxy Coating in Fresno",
    heroSubheading: "Durable, professional-grade epoxy that transforms your garage into a clean, impressive space.",
    body: [
      "Your garage floor takes more abuse than almost any surface in your home — hot tire marks, oil drips, chemical spills, and constant foot traffic. A quality epoxy coating doesn't just protect your concrete; it completely transforms how your garage looks and functions.",
      "Our garage floor epoxy systems start with thorough diamond grinding to open the concrete pores and ensure a bond that lasts for decades. We use 100% solids epoxy — not the water-based kits from the hardware store — which means you get a coating that's 3–4x thicker and far more durable.",
      "Most garage floors are completed in one to two days. We apply a primer coat, a full epoxy base coat with your choice of decorative flake or solid color, and a polyaspartic topcoat for UV stability and maximum durability. The result is a floor that's easy to clean and looks sharp for years.",
    ],
    features: [
      "Diamond grinding prep for maximum adhesion",
      "100% solids epoxy (not water-based)",
      "Decorative flake or solid color options",
      "UV-stable polyaspartic topcoat",
      "Resistant to hot tire marks, oil & chemicals",
      "Written warranty on labor and materials",
    ],
    faq: [
      { q: "How long does garage floor epoxy last?", a: "A professionally installed system with a polyaspartic topcoat typically lasts 10–20 years with normal use. Proper diamond grinding prep is the key factor." },
      { q: "How long do I have to stay off the floor?", a: "Light foot traffic after 24 hours. Park vehicles after 72 hours. Full cure in 7 days." },
      { q: "Can you coat a floor with cracks?", a: "Yes — minor cracks and spalling can be filled and repaired before coating. We assess during the free estimate." },
    ],
  },
  {
    slug: "basement-floor-coating",
    name: "Basement Floor Coating",
    description: "Moisture-resistant epoxy coatings that protect basement floors from humidity and create a clean usable space.",
    metaTitle: "Basement Floor Epoxy Fresno CA | Fresno Epoxy Flooring Experts",
    metaDescription: "Basement floor epoxy coatings in Fresno, CA. Moisture-resistant, mold-resistant finish. Free estimates — call (916) 234-0003.",
    heroHeading: "Basement Floor Epoxy in Fresno",
    heroSubheading: "Moisture-resistant coatings that protect your basement and make it usable year-round.",
    body: [
      "Below-grade concrete presents unique challenges — moisture vapor can cause coatings to peel if the surface isn't properly prepared. We test moisture levels before every basement job and use moisture-tolerant primer systems when needed.",
      "The finished floor resists mold and mildew, is easy to clean, and turns an unfinished basement into usable storage or living space. We offer solid colors and decorative flake systems for basements.",
    ],
    features: [
      "Moisture vapor testing included",
      "Moisture-tolerant primer systems",
      "Mold and mildew resistant",
      "Solid color and decorative flake options",
      "Transforms unfinished space",
    ],
    faq: [
      { q: "Can epoxy be applied to a damp basement floor?", a: "The surface needs to be dry and within acceptable moisture vapor range. We test first and use appropriate systems if needed." },
    ],
  },
  {
    slug: "commercial-epoxy-flooring",
    name: "Commercial Epoxy Flooring",
    description: "Heavy-duty epoxy floor systems for warehouses, auto shops, restaurants, and commercial spaces throughout Fresno.",
    metaTitle: "Commercial Epoxy Flooring Fresno CA | Fresno Epoxy Flooring Experts",
    metaDescription: "Industrial-grade epoxy flooring for Fresno businesses. Warehouses, auto shops & more. Call (916) 234-0003.",
    heroHeading: "Commercial Epoxy Flooring in Fresno, CA",
    heroSubheading: "Industrial-grade floor systems built to handle the demands of your business.",
    body: [
      "Commercial floors need to handle forklift traffic, chemical spills, dropped equipment, and constant use — while meeting health and safety standards. We install heavy-duty epoxy systems designed for exactly these conditions.",
      "We work around your schedule to minimize downtime. Quick-cure polyaspartic systems can be back in service in as little as 24 hours. We also offer OSHA-compliant safety line striping for warehouses and manufacturing facilities.",
    ],
    features: [
      "Forklift and heavy equipment rated",
      "Chemical and solvent resistant",
      "FDA-compliant food service systems",
      "Non-slip aggregate finishes",
      "Phased installation to minimize downtime",
      "OSHA safety line striping",
    ],
    faq: [
      { q: "How long does commercial installation take?", a: "Smaller spaces (under 2,000 sq ft) often take 1–2 days. Larger warehouses are phased over several days." },
    ],
  },
  {
    slug: "epoxy-flake-flooring",
    name: "Epoxy Flake Flooring",
    description: "Decorative vinyl flake broadcasts create a terrazzo-like finish with excellent slip resistance and dozens of color options.",
    metaTitle: "Epoxy Flake Flooring Fresno CA | Fresno Epoxy Flooring Experts",
    metaDescription: "Decorative flake epoxy floors in Fresno, CA. Dozens of color combos, slip-resistant. Call (916) 234-0003.",
    heroHeading: "Decorative Epoxy Flake Flooring in Fresno",
    heroSubheading: "Stunning, slip-resistant floors with endless color options for garages, patios, and commercial spaces.",
    body: [
      "Decorative vinyl flake epoxy is one of our most popular finishes. Colored vinyl chips are broadcast into wet epoxy and sealed under a clear topcoat, creating a terrazzo-like appearance that hides dirt and minor imperfections beautifully.",
      "We carry over 30 standard flake blends in single and multi-color combinations. The textured surface provides natural slip resistance, making it great for patios, pool decks, and any area that gets wet.",
    ],
    features: [
      "30+ standard color blends",
      "Custom colors available",
      "Natural slip resistance",
      "Hides surface imperfections",
      "Easy to clean",
      "Works on garages, patios, pool decks",
    ],
    faq: [
      { q: "How do I choose a flake color?", a: "We bring physical sample boards to every estimate so you can see exactly how the colors look in person before deciding." },
    ],
  },
  {
    slug: "metallic-epoxy-flooring",
    name: "Metallic Epoxy Flooring",
    description: "Unique swirling metallic pigments create a one-of-a-kind showroom floor with incredible depth and visual impact.",
    metaTitle: "Metallic Epoxy Flooring Fresno CA | Fresno Epoxy Flooring Experts",
    metaDescription: "Stunning metallic epoxy floors in Fresno, CA. Perfect for showrooms, restaurants & upscale garages. Call (916) 234-0003.",
    heroHeading: "Metallic Epoxy Flooring in Fresno",
    heroSubheading: "A truly unique floor with liquid-metal depth and a high-gloss finish unlike anything else.",
    body: [
      "Metallic epoxy uses pearlescent pigments suspended in a clear epoxy base to create floors with incredible depth and movement — no two are identical. The swirling patterns form naturally during application. Popular for car showrooms, restaurant bars, retail stores, and upscale garages.",
      "The high-gloss surface reflects light beautifully, making spaces feel larger and more open. Installation requires skilled applicators — our team has extensive experience with metallic systems and will walk you through color palette options before we start.",
    ],
    features: [
      "Unique patterns — no two floors alike",
      "Dozens of metallic colors",
      "High-gloss mirror finish",
      "Reflective surface brightens spaces",
      "Easy to clean",
      "Ideal for showrooms & boutique garages",
    ],
    faq: [
      { q: "Can I choose the exact pattern?", a: "You choose colors and general style, but the exact swirling pattern forms organically during installation — that's what makes each floor unique." },
    ],
  },
  {
    slug: "concrete-polishing",
    name: "Concrete Polishing",
    description: "Grind and polish existing concrete to a smooth, reflective finish — a low-maintenance alternative to coatings.",
    metaTitle: "Concrete Polishing Fresno CA | Fresno Epoxy Flooring Experts",
    metaDescription: "Professional concrete polishing in Fresno, CA. Durable, low-maintenance floors. Call (916) 234-0003.",
    heroHeading: "Concrete Polishing in Fresno, CA",
    heroSubheading: "Reveal the natural beauty of your concrete with a mirror-smooth polished finish.",
    body: [
      "Polished concrete is one of the most popular commercial and residential floor finishes — durable, low-maintenance, and clean looking. We use diamond tooling in progressively finer grits to polish the surface to your desired sheen level, from satin to high-gloss mirror.",
      "Unlike coatings, polished concrete becomes part of the slab — nothing to peel or delaminate. A densifier hardens the concrete, and a final sealer protects against staining. Works beautifully in retail, restaurants, offices, warehouses, and residential living areas.",
    ],
    features: [
      "Satin to mirror sheen levels",
      "Nothing to peel or delaminate",
      "Densifier hardens concrete",
      "Compatible with dyes and stains",
      "Excellent for retail and office",
      "Lower long-term maintenance",
    ],
    faq: [
      { q: "Can old or damaged concrete be polished?", a: "Often yes — cracks can be filled with color-matched patching material before polishing. We assess during the free estimate." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find(s => s.slug === slug);
}
