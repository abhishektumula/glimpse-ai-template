"use client";

import {
  IconChartBar,
  IconClick,
  IconRocket,
  IconTrendingUp,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { CardSkeleton } from "../feature-layout";

const improvements = [
  {
    id: "campaign-optimization",
    label: "Campaign optimization",
    detail: "Improved rate by",
    value: "+18%",
    icon: <IconTrendingUp className="size-8 text-green-600" />,
    valueClassName: "text-green-500",
  },
  {
    id: "audience-insights",
    label: "Audience insights",
    detail: "Reached new users by",
    value: "+32%",
    icon: <IconChartBar className="size-8 text-blue-600" />,
    valueClassName: "text-blue-500",
  },
  {
    id: "click-through-rate",
    label: "Click-through rate",
    detail: "Increased engagement by",
    value: "+24%",
    icon: <IconClick className="size-8 text-purple-600" />,
    valueClassName: "text-purple-500",
  },
  {
    id: "launch-readiness",
    label: "Launch readiness",
    detail: "Reduced setup time by",
    value: "-41%",
    icon: <IconRocket className="size-8 text-orange-600" />,
    valueClassName: "text-orange-500",
  },
];

export const SecondCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % improvements.length);
    }, 3200);

    return () => window.clearInterval(rotation);
  }, []);

  const activeImprovement = improvements[activeIndex];

  return (
    <CardSkeleton
      heading="Campaign optimization"
      subheading="Test, learn and improve campaigns faster."
      className="font-display"
    >
      <div className="w-full h-full border border-neutral-100 dark:border-neutral-900 rounded-lg bg-[repeating-linear-gradient(45deg,var(--color-neutral-100)_0px,var(--color-neutral-100)_1px,transparent_1px,transparent_24px)] dark:bg-[repeating-linear-gradient(45deg,var(--color-neutral-900)_0px,var(--color-neutral-900)_1px,transparent_1px,transparent_24px)]">
        <div className="w-full h-full flex items-center justify-center overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <SecondCardSkeleton
              key={activeImprovement.id}
              improvement={activeImprovement}
            />
          </AnimatePresence>
        </div>
      </div>
    </CardSkeleton>
  );
};

export const SecondCardSkeleton = ({
  improvement,
}: {
  improvement: (typeof improvements)[number];
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -18, scale: 0.94 }}
      transition={{
        opacity: { duration: 0.28 },
        y: { type: "spring", stiffness: 260, damping: 24 },
        scale: { type: "spring", stiffness: 260, damping: 24 },
      }}
      aria-live="polite"
      className="inline-flex h-fit w-fit max-w-[calc(100%-2rem)] items-center justify-center gap-4 rounded-xl bg-background px-4 py-2 shadow-sm/40 inset-shadow-2xs inset-shadow-purple-500 dark:shadow-neutral-500 dark:inset-shadow-purple-800"
    >
      {improvement.icon}
      <div className="flex flex-col items-start">
        <p className="font-medium text-secondary text-xs">
          {improvement.label}
        </p>
        <p className="text-primary font-normal text-sm">
          {improvement.detail}{" "}
          <span className={`${improvement.valueClassName} font-bold text-base`}>
            {improvement.value}
          </span>
        </p>
      </div>
    </motion.div>
  );
};
