"use client";

import { IconQuote } from "@tabler/icons-react";
import { motion } from "motion/react";
import { Container } from "../container";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "Glimpse turned a week of reporting into a conversation we can have in five minutes.",
    name: "Maya Chen",
    role: "VP Marketing, Northstar",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=face",
  },
  {
    quote: "The clarity is the real product. Every recommendation comes with a reason we can act on.",
    name: "Andre Walker",
    role: "Growth Lead, Vanta House",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=face",
  },
  {
    quote: "Our team finally agrees on which numbers matter. That alone changed how we plan launches.",
    name: "Elena Rossi",
    role: "Director of Brand, Koto",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&crop=face",
  },
  {
    quote: "It feels like having an analyst in the room who has already read every campaign brief.",
    name: "Samir Patel",
    role: "Co-founder, Orbit Labs",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=face",
  },
  {
    quote: "We found the drop-off in our funnel before it became a quarterly problem.",
    name: "Clara Brooks",
    role: "Performance Manager, Arc",
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=160&h=160&fit=crop&crop=face",
  },
  {
    quote: "Beautiful, fast, and opinionated in all the right ways. The team adopted it instantly.",
    name: "Noah Williams",
    role: "Head of Growth, Loomery",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&h=160&fit=crop&crop=face",
  },
];

const columns = [testimonials.slice(0, 4), testimonials.slice(2, 6), testimonials.slice(1, 5)];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <article className="mb-4 break-inside-avoid rounded-2xl border border-neutral-200/80 bg-background/90 p-5 shadow-sm dark:border-neutral-800">
    <IconQuote className="mb-4 size-5 text-purple-500" />
    <p className="text-sm font-medium leading-6 text-primary">{testimonial.quote}</p>
    <div className="mt-6 flex items-center gap-3">
      <div
        aria-label={`${testimonial.name}'s avatar`}
        className="size-9 rounded-full bg-cover bg-center"
        style={{ backgroundImage: `url(${testimonial.avatar})` }}
      />
      <div>
        <p className="text-xs font-semibold text-primary">{testimonial.name}</p>
        <p className="text-[11px] text-secondary">{testimonial.role}</p>
      </div>
    </div>
  </article>
);

export const Testimonials = () => (
  <section className="border-t border-neutral-200 dark:border-neutral-800">
    <Container className="px-6 py-16 md:py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-purple-600">Loved by thoughtful teams</p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-primary md:text-5xl">Less reporting. More momentum.</h2>
        <p className="mt-4 text-sm leading-6 text-secondary md:text-base">The teams moving fastest use Glimpse to stay close to what their customers are telling them.</p>
      </div>

      <div
        className="relative grid max-h-[42rem] grid-cols-1 gap-4 overflow-hidden md:grid-cols-3"
        style={{ maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)" }}
      >
        {columns.map((column, columnIndex) => {
          const loopedColumn = [...column, ...column];
          return (
            <motion.div
              key={columnIndex}
              animate={{ y: [0, "-50%"] }}
              transition={{ duration: 24 + columnIndex * 5, repeat: Infinity, ease: "linear", delay: columnIndex * -3 }}
              className="flex flex-col"
            >
              {loopedColumn.map((testimonial, index) => <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />)}
            </motion.div>
          );
        })}
      </div>
    </Container>
  </section>
);
