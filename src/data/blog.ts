export interface BlogPost {
  slug: string; title: string; excerpt: string; publishedDate: string;
  metaTitle: string; metaDescription: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "epoxy-vs-polyurea-garage-floor",
    title: "Epoxy vs. Polyurea Garage Floor Coatings: What's the Difference?",
    excerpt: "Not all garage floor coatings are the same. Here's a plain-English breakdown of epoxy, polyaspartic, and polyurea — and which one is right for your Fresno garage.",
    publishedDate: "March 15, 2026",
    metaTitle: "Epoxy vs. Polyurea Garage Floor Coatings | Fresno Epoxy Flooring Experts",
    metaDescription: "What's the difference between epoxy, polyaspartic, and polyurea garage floor coatings? A plain-English guide from Fresno's flooring experts.",
    content: "Walk into any flooring conversation and you'll hear three terms tossed around interchangeably: epoxy, polyaspartic, and polyurea. They're not the same thing, and knowing the difference helps you ask better questions and make a smarter decision.\n\nEpoxy is the base coating — it bonds directly to your concrete and provides the main structural layer of your floor system. 100% solids epoxy is thick, tough, and adheres exceptionally well when the concrete is properly prepared. Water-based epoxy (what you buy at the hardware store) is a very different product — it's much thinner and typically fails within a few years.\n\nPolyaspartic and polyurea are topcoats applied over the epoxy base. They're UV-stable (won't yellow or fade in sunlight), cure faster than epoxy, and add an extra layer of chemical resistance and durability. Most professional floor systems are a combination: epoxy base coat + polyaspartic topcoat. This gives you the best of both — the thick bonding strength of epoxy and the UV-stable, fast-curing benefits of polyaspartic.\n\nFor Fresno homeowners, the UV stability matters. We have intense sun here, and a floor that sees any sunlight through windows or an open garage door will yellow without a UV-stable topcoat. The polyaspartic topcoat solves this completely.\n\nThe bottom line: don't let anyone sell you a single-coat system for a garage floor. A proper system has at least three layers — primer, epoxy base, polyaspartic topcoat — applied over diamond-ground concrete. That's what we install, and that's what lasts.",
  },
  {
    slug: "how-to-prep-garage-floor-for-epoxy",
    title: "Why Concrete Prep Makes or Breaks Your Epoxy Floor",
    excerpt: "Most epoxy floor failures aren't a product problem — they're a prep problem. Here's why diamond grinding matters and what to ask your contractor before they start.",
    publishedDate: "February 8, 2026",
    metaTitle: "Concrete Prep for Epoxy Floors | Fresno Epoxy Flooring Experts",
    metaDescription: "Why concrete prep is the most important part of any epoxy floor installation — and what questions to ask your contractor before they start.",
    content: "If you've seen an epoxy floor that peeled within a year or two, the product probably wasn't the problem. The prep was.\n\nConcrete looks solid but it has a surface layer called laitance — a thin, weak layer of cement and water that rises to the surface as concrete cures. Epoxy applied over laitance bonds to that weak layer instead of the strong concrete underneath, and when the laitance eventually fails, the epoxy goes with it.\n\nProper prep removes the laitance entirely and opens the concrete pores so the epoxy can penetrate and bond. There are two ways to do this: acid etching and diamond grinding. Acid etching dissolves some of the laitance but often leaves the pores contaminated and the surface inconsistent. Diamond grinding physically removes the laitance and opens the pores uniformly — it's simply more effective, especially in garages with oil contamination or previous coatings.\n\nHere's the question to ask any contractor before they start: 'How are you preparing the surface?' If they say acid etching, that's a red flag. If they say diamond grinding with industrial equipment (not a handheld grinder), that's what you want.\n\nThe grinding step takes time and the right equipment. It's the part some contractors skip to save time and money. It's also the part that determines whether your floor lasts 2 years or 20. We never skip it — it's too important.",
  },
  {
    slug: "best-epoxy-colors-for-garage-floors-fresno",
    title: "The Most Popular Epoxy Garage Floor Colors in Fresno (2026)",
    excerpt: "Choosing a color for your garage floor is harder than it sounds. Here's what Fresno homeowners are actually choosing — and a few things to consider before you decide.",
    publishedDate: "January 20, 2026",
    metaTitle: "Best Epoxy Garage Floor Colors Fresno 2026 | Fresno Epoxy Flooring Experts",
    metaDescription: "What garage floor epoxy colors are Fresno homeowners choosing in 2026? A look at the most popular flake blends and solid colors from a local installer.",
    content: "One of the most common questions we get is: 'What color should I choose?' And the honest answer is that it depends on your garage, your car, and your personal taste. But there are some clear trends in the Central Valley that might help you decide.\n\nFor decorative flake systems, gray-based blends are by far the most popular in Fresno right now. A medium gray with white, black, and silver chips gives you a clean, modern look that hides dirt well and complements almost any car color. Earth tones — warm beiges and tans with brown and cream chips — are a close second, especially for homes with tan or brown stucco exteriors.\n\nFor solid color systems (no flake), charcoal gray and battleship gray remain classics. They're timeless, clean, and easy to maintain. Tan and beige work well for more traditional homes.\n\nA few things to consider when choosing: lighter colors show dust and debris more easily but make the garage feel brighter and more open. Darker colors hide dirt better but can absorb more heat. Medium-value flake blends are the sweet spot — they look clean, hide minor dirt, and the texture from the flake gives natural slip resistance.\n\nWe bring sample boards to every estimate so you can see real colors in your actual space before committing. Colors look different in different lighting, and we want you to love the result.",
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find(p => p.slug === slug);
}
