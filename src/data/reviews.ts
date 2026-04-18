export interface Review {
  name: string;
  text: string;
  time: string;
  featured?: boolean;
}

export const reviews: Review[] = [
  {
    name: "Marcus T.",
    text: "Dan and his crew coated my two-car garage in one day. The prep work alone took most of the morning — they really ground the concrete properly. The flake finish looks incredible and it's been 8 months with zero issues. Highly recommend.",
    time: "2 months ago",
    featured: true,
  },
  {
    name: "Linda Herrera",
    text: "I was nervous about the smell and mess but they kept everything very contained. Laid down drop cloths on everything, taped off the walls, and cleaned up completely before leaving. The floor looks like something out of a showroom. Worth every penny.",
    time: "4 months ago",
    featured: true,
  },
  {
    name: "Kevin S.",
    text: "Had them do the shop floor at my auto repair business on Blackstone. They phased it over two days so we could keep operating. Chemical resistance is excellent — brake fluid, oil, nothing stains it. Already referred them to two other shop owners.",
    time: "5 months ago",
  },
  {
    name: "Priya Nair",
    text: "The metallic epoxy in my laundry room is absolutely stunning. People always ask about it. Dan was upfront about what colors and patterns were achievable and the finished product matched exactly what we discussed. Great communication throughout.",
    time: "6 months ago",
  },
  {
    name: "Tom Brightwell",
    text: "Second time using Fresno Epoxy Flooring Experts — they did my garage two years ago and I had them come back for the back patio. Both jobs were done right the first time. Punctual, clean, professional.",
    time: "8 months ago",
    featured: true,
  },
  {
    name: "Sandra F.",
    text: "Got three quotes and they were in the middle on price but clearly had the best knowledge of the product. The other guys were going to acid etch my floor — Dan explained why diamond grinding gives a much better result. That sold me. Floor has been perfect for 10 months.",
    time: "10 months ago",
  },
];

export const featuredReviews = reviews.filter(r => r.featured);
export const totalReviews = reviews.length;
export const averageRating = 5.0;
