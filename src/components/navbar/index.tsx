"use client";
import { useMotionValueEvent, useScroll } from "motion/react";
import { LayersArrowDown } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/providers/theme-toggle";
export const NavBar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <div
      className={`bg-white/70 dark:bg-black/80 w-full h-14 fixed z-50 overflow-hidden border-b transition-colors duration-200 ${scrolled ? "border-neutral-300 dark:border-neutral-700 shadow-md/20" : "border-transparent shadow-none"}`}
    >
      <div className="w-full h-full max-w-6xl mx-auto flex items-center justify-between p-2">
        <h1 className="font-display font-semibold text-lg">A3dotgg</h1>
        <div className="flex items-center justify-center gap-4">
          <button className="px-4 py-2 rounded-full bg-transparent border border-neutral-200 hover:bg-neutral-300/20 dark:hover:bg-neutral-700/20 dark:border-neutral-800 font-inter text-sm flex gap-2 items-start transition-all duration-300 text-neutral-600 dark:text-neutral-400 hover:text-foreground">
            <span>
              <LayersArrowDown className="size-5 text-neutral-700 dark:text-neutral-300" />
            </span>
            <span className="font-inter">Login</span>
          </button>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};
