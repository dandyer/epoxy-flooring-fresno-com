export interface Location {
  slug: string; name: string; description: string;
  content: string;
}

export const locations: Location[] = [
  {
    slug: "clovis",
    name: "Clovis",
    description: "Serving Clovis homeowners and businesses with professional epoxy flooring.",
    content: "Clovis is one of the fastest-growing cities in the Central Valley, and its homeowners take pride in their properties. From newer homes in Loma Vista and Buchanan Estates to established neighborhoods near Old Town Clovis, we've coated hundreds of garage floors, patios, and commercial spaces throughout the city.\n\nOur Clovis customers most frequently ask about garage floor epoxy — the newer tract homes in east Clovis often have unfinished concrete that benefits enormously from a quality coating. Call us for a free estimate anywhere in Clovis.",
  },
  {
    slug: "madera",
    name: "Madera",
    description: "Epoxy flooring for Madera residences, shops, and agricultural facilities.",
    content: "Madera County's mix of residential neighborhoods, industrial facilities, and agricultural operations creates diverse flooring needs. We serve homeowners looking to upgrade garage floors as well as businesses in Madera's industrial park and auto service corridor.\n\nThe area's temperature swings make concrete prep especially important — we always diamond grind to ensure maximum adhesion. Whether you need a standard garage floor or a heavy-duty commercial system, we bring the same quality to every Madera project.",
  },
  {
    slug: "visalia",
    name: "Visalia",
    description: "Professional epoxy coatings for Visalia's growing residential and commercial market.",
    content: "Visalia is the commercial hub of Tulare County and we serve the entire area including Tulare and Exeter. Visalia homeowners frequently request decorative flake systems for garages and covered patios — the flake finish hides dirt beautifully and provides natural slip resistance.\n\nFor commercial clients in Visalia's retail and industrial corridors, we offer quick-cure polyaspartic systems that can be back in service within 24 hours. Contact us for a same-week estimate throughout the Visalia area.",
  },
  {
    slug: "tulare",
    name: "Tulare",
    description: "Epoxy flooring for Tulare homes, auto shops, and agricultural processing facilities.",
    content: "Tulare's economy is driven by agriculture, dairy, and manufacturing — industries where tough, easy-to-clean floors are essential. We've installed epoxy systems in dairy processing facilities, packing sheds, auto shops, and farm shops throughout Tulare.\n\nFor residential customers, we specialize in garage floor coatings that stand up to Central Valley heat and agricultural dust. Our systems are designed to resist chemicals and the heavy use that comes with working families.",
  },
  {
    slug: "sanger",
    name: "Sanger",
    description: "Epoxy flooring for Sanger and the Kings River foothill communities.",
    content: "Sanger and the foothill communities east of Fresno are growing, and we've served homeowners and business owners throughout this area for years. From garage floors in Sanger's new subdivisions to shop floors and agricultural buildings in the surrounding foothills, we handle all sizes.\n\nWe don't charge extra for travel to Sanger and nearby communities — call us for a free estimate.",
  },
  {
    slug: "selma",
    name: "Selma",
    description: "Epoxy floor coatings for Selma homes, packing facilities, and commercial spaces.",
    content: "Selma sits at the heart of raisin and table grape country. We serve the local agricultural community and residential customers in Selma's established neighborhoods. Packing shed floors, processing facility floors, and shop floors all benefit from the chemical resistance of a quality epoxy system.\n\nFor Selma homeowners, we most commonly install garage floor epoxy and covered patio coatings. Our crews work efficiently and leave the site cleaner than we found it.",
  },
  {
    slug: "reedley",
    name: "Reedley",
    description: "Serving Reedley, Dinuba, and the Kings River Valley with expert epoxy flooring.",
    content: "Reedley and the surrounding Kings River Valley communities are a growing market for quality flooring. We serve residential and commercial customers in Reedley, Dinuba, and Parlier, handling everything from single-car garage floors to large agricultural facility floors.\n\nContact us for a free estimate — we serve the entire area on regular rotation.",
  },
];

export function getLocationBySlug(slug: string) {
  return locations.find(l => l.slug === slug);
}
