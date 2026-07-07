export type Testimonial = {
  quote: string;
  name: string;
  event: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Regal Knot transformed our wedding reception into something straight from a magazine. Every detail felt intentional, luxurious, and completely us.",
    name: "Sarah & James",
    event: "Wedding Reception",
    rating: 5,
  },
  {
    quote:
      "From the first mood board to pack-down on the night, the team were calm, creative, and incredibly professional. Our guests couldn't stop talking about the decor.",
    name: "Amira K.",
    event: "Milestone Birthday",
    rating: 5,
  },
  {
    quote:
      "They understood our baby shower theme instantly and delivered a setup that felt warm, elegant, and beautifully styled. Booking was effortless too.",
    name: "Priya M.",
    event: "Baby Shower",
    rating: 5,
  },
];
