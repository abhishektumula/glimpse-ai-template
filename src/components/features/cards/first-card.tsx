"use client";

import { IconActivity, IconArrowUpRight, IconBoltFilled } from "@tabler/icons-react";
import { motion } from "motion/react";
import { CardSkeleton } from "../feature-layout";

const bars = [34, 48, 42, 62, 58, 76, 68, 92];

export const FirstCard = () => {
  return (
    <CardSkeleton
      heading="Marketing intelligence"
      subheading="See the signals behind every decision."
      className="font-display"
    >
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border border-neutral-100 bg-[repeating-linear-gradient(45deg,var(--color-neutral-100)_0px,var(--color-neutral-100)_1px,transparent_1px,transparent_24px)] dark:border-neutral-900 dark:bg-[repeating-linear-gradient(45deg,var(--color-neutral-900)_0px,var(--color-neutral-900)_1px,transparent_1px,transparent_24px)]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-[min(82%,22rem)] rounded-2xl border border-neutral-200/80 bg-background/95 p-4 shadow-xl shadow-purple-500/10 backdrop-blur dark:border-neutral-800"
        >
          <div className="mb-5 flex items-start justify-between">
            <div>
              <p className="text-xs font-medium text-secondary">Conversion rate</p>
              <p className="mt-1 text-3xl font-semibold tracking-tight text-primary">8.42%</p>
            </div>
            <div className="flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-1 text-xs font-semibold text-green-600">
              <IconArrowUpRight className="size-3.5" /> 24.8%
            </div>
          </div>

          <div className="flex h-28 items-end gap-2 border-b border-neutral-200/80 pb-0 dark:border-neutral-800">
            {bars.map((height, index) => (
              <motion.div
                key={height + index}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: index * 0.07, duration: 0.55, ease: "easeOut" }}
                className={`w-full rounded-t-md ${index > 5 ? "bg-purple-500" : "bg-purple-500/25"}`}
              />
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between text-[10px] text-secondary">
            <span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 18, y: 16 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ delay: 0.45, type: "spring", stiffness: 260, damping: 18 }}
          className="absolute right-[7%] top-[12%] z-20 flex items-center gap-2 rounded-xl bg-background px-3 py-2 text-xs font-medium text-primary shadow-lg shadow-purple-500/15"
        >
          <IconActivity className="size-4 text-purple-600" /> Live signal
        </motion.div>

        <motion.div
          animate={{ y: [0, -7, 0], rotate: [-3, 0, -3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[12%] left-[8%] z-20 rounded-full bg-background p-3 text-indigo-600 shadow-lg shadow-indigo-500/15"
        >
          <IconBoltFilled className="size-5" />
        </motion.div>
      </div>
    </CardSkeleton>
  );
};
