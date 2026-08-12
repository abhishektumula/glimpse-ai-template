import { IconArrowUpRight } from "@tabler/icons-react";
import { Container } from "../container";

const links = ["Product", "Customers", "About", "Journal"];

export const Footer = () => (
  <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
    <Container className="px-6 py-12 md:py-16">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-2xl font-semibold tracking-tight text-primary">See what matters.</p>
          <p className="mt-3 text-sm leading-6 text-secondary">Marketing intelligence for teams that care about making better decisions.</p>
        </div>
        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm text-secondary md:grid-cols-4">
          {links.map((link) => <a key={link} href="#" className="transition-colors hover:text-primary">{link}</a>)}
        </nav>
      </div>
      <div className="mt-12 flex flex-col gap-3 border-t border-neutral-200 pt-5 text-xs text-secondary dark:border-neutral-800 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2025 A3dotgg. Built for clearer decisions.</p>
        <a href="#" className="inline-flex items-center gap-1 transition-colors hover:text-primary">Start a conversation <IconArrowUpRight className="size-3.5" /></a>
      </div>
    </Container>
  </footer>
);
