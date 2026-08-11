"use client";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { MoonIcon, SunIcon } from "lucide-react";
import { cn } from "@/lib/util";
import { useSyncExternalStore } from "react";

export const ThemeToggle = ({ className }: { className?: string }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const handleThemeChange = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  return (
    <button
      onClick={handleThemeChange}
      className={cn(
        "p-2 rounded-full transparent border border-neutral-200 dark:border-neutral-700 hover:-rotate-24 transition-all duration-300",
        className,
      )}
    >
      <span className="">
        {mounted &&
          (resolvedTheme === "dark" ? (
            <SunIcon className="size-5" />
          ) : (
            <MoonIcon className="size-5" />
          ))}
      </span>
    </button>
  );
};
