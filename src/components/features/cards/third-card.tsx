"use client";

import { IconBrandInstagram, IconMail, IconWorld } from "@tabler/icons-react";
import { motion } from "motion/react";
import { CardSkeleton } from "../feature-layout";

const channels = [
  { name: "Instagram", value: "42%", width: "42%", icon: <IconBrandInstagram className="size-4" />, color: "bg-pink-500" },
  { name: "Email", value: "31%", width: "31%", icon: <IconMail className="size-4" />, color: "bg-blue-500" },
  { name: "Web", value: "27%", width: "27%", icon: <IconWorld className="size-4" />, color: "bg-amber-500" },
];

export const ThirdCard = () => (
  <CardSkeleton heading="Channel mix" subheading="Know where your growth comes from." className="font-display">
    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg border border-neutral-100 bg-[repeating-linear-gradient(45deg,var(--color-neutral-100)_0px,var(--color-neutral-100)_1px,transparent_1px,transparent_24px)] p-5 dark:border-neutral-900 dark:bg-[repeating-linear-gradient(45deg,var(--color-neutral-900)_0px,var(--color-neutral-900)_1px,transparent_1px,transparent_24px)]">
      <div className="w-full max-w-sm rounded-2xl bg-background p-5 shadow-xl shadow-blue-500/5">
        <div className="mb-6 flex items-end justify-between">
          <div><p className="text-xs text-secondary">Attributed revenue</p><p className="mt-1 text-2xl font-semibold text-primary">$84,290</p></div>
          <span className="text-xs font-semibold text-green-600">This month</span>
        </div>
        <div className="space-y-4">
          {channels.map((channel, index) => (
            <div key={channel.name} className="flex items-center gap-3 text-xs text-secondary">
              <span className={`flex size-7 items-center justify-center rounded-lg ${channel.color} text-white`}>{channel.icon}</span>
              <span className="w-16">{channel.name}</span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                <motion.div initial={{ width: 0 }} animate={{ width: channel.width }} transition={{ delay: index * 0.15, duration: 0.8 }} className={`h-full rounded-full ${channel.color}`} />
              </div>
              <span className="w-8 text-right font-semibold text-primary">{channel.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </CardSkeleton>
);
