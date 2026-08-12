"use client";

import { IconHeartHandshake, IconUsers } from "@tabler/icons-react";
import { motion } from "motion/react";
import { CardSkeleton } from "../feature-layout";

const segments = ["bg-purple-500", "bg-indigo-500", "bg-blue-400", "bg-cyan-300", "bg-neutral-200 dark:bg-neutral-700"];

export const FourthCard = () => (
  <CardSkeleton heading="Audience pulse" subheading="Turn customer signals into momentum." className="font-display">
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border border-neutral-100 bg-[repeating-linear-gradient(45deg,var(--color-neutral-100)_0px,var(--color-neutral-100)_1px,transparent_1px,transparent_24px)] dark:border-neutral-900 dark:bg-[repeating-linear-gradient(45deg,var(--color-neutral-900)_0px,var(--color-neutral-900)_1px,transparent_1px,transparent_24px)]">
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative w-[min(80%,20rem)] rounded-2xl border border-neutral-200 bg-background p-5 shadow-xl shadow-indigo-500/10 dark:border-neutral-800">
        <div className="mb-7 flex items-center justify-between">
          <div className="flex items-center gap-3"><span className="rounded-xl bg-indigo-500/10 p-2 text-indigo-600"><IconUsers className="size-5" /></span><div><p className="text-sm font-semibold text-primary">High intent</p><p className="text-xs text-secondary">Audience segment</p></div></div>
          <IconHeartHandshake className="size-5 text-rose-500" />
        </div>
        <div className="flex h-20 items-end gap-1.5">
          {segments.map((color, index) => <motion.div key={index} initial={{ height: 0 }} animate={{ height: `${35 + index * 13}%` }} transition={{ delay: index * 0.1, duration: 0.55 }} className={`flex-1 rounded-t-md ${color}`} />)}
        </div>
        <div className="mt-3 flex justify-between text-[10px] text-secondary"><span>Discover</span><span>Consider</span><span>Convert</span></div>
      </motion.div>
    </div>
  </CardSkeleton>
);
