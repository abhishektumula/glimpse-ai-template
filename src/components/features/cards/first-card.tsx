"use client";
import { cn } from "@/lib/util";
import { CardSkeleton } from "../feature-layout";
import React, { useState } from "react";
import { motion, Variants } from "motion/react";
import {
  IconActivity,
  IconBoltFilled,
  IconPresentationAnalyticsFilled,
} from "@tabler/icons-react";

export const FirstCard = () => {
  const iconpill_items: {
    title: string;
    icon: React.ReactNode;
    className?: string;
    animation?: Variants;
  }[] = [
    {
      title: "Live Activity",
      icon: <IconActivity className="size-6 md:size-10 text-purple-600" />,
      className:
        "absolute top-5 left-6 rotate-12 shadow-purple-500 dark:shadow-purple-700 inset-shadow-xs inset-shadow-purple-500 dark:inset-shadow-purple-700",
      animation: {
        initial: { x: 0, y: 0, rotate: 0 },
        hover: { x: 20, y: 20, rotate: 12 },
      },
    },
    {
      title: "Monitoring Analytics",
      icon: (
        <IconPresentationAnalyticsFilled className="size-6 md:size-10 text-green-600" />
      ),

      className:
        "absolute bottom-6 right-4 -rotate-20 shadow-green-500 dark:shadow-green-700 inset-shadow-xs inset-shadow-green-500 dark:inset-shadow-green-700",
    },
    {
      title: "Faster Metrics and Analysis",
      icon: <IconBoltFilled className="size-6 md:size-10 text-indigo-600" />,

      className:
        "absolute bottom-6 left-4 rotate-30 shadow-indigo-500 dark:shadow-indigo-700 inset-shadow-xs inset-shadow-indigo-500 dark:inset-shadow-indigo-700",
    },
  ];
  return (
    <CardSkeleton className="flex flex-col gap-2 rounded-xl">
      <div>
        <h1 className="font-semibold text-md text-primary">
          Marketing Intelligence
        </h1>
        <p className="font-medium text-secondary text-sm">
          See performace across audiences and channels
        </p>
      </div>
      <div className="w-full h-full border border-neutral-100 dark:border-neutral-900 rounded-lg bg-[repeating-linear-gradient(45deg,var(--color-neutral-100)_0px,var(--color-neutral-100)_1px,transparent_1px,transparent_24px)] dark:bg-[repeating-linear-gradient(45deg,var(--color-neutral-900)_0px,var(--color-neutral-900)_1px,transparent_1px,transparent_24px)]">
        <motion.div
          initial="initial"
          whileHover="hover"
          className="w-full h-full flex items-center justify-center gap-4 relative overflow-hidden group"
        >
          {iconpill_items.map((item, index) => (
            <div className="" key={item.title}>
              <IconPill
                title={item.title}
                icon={item.icon}
                className={item.className}
                animation={item.animation}
              />
            </div>
          ))}
          <motion.div className="bg-background rounded-3xl relative p-px overflow-hidden">
            <div className="w-full absolute inset-0 bg-[conic-gradient(var(--color-purple-600)_0deg,var(--color-indigo-600)_180deg,var(--color-purple-600)_330deg)]"></div>
            <div className="w-full h-full relative z-10 text-primary bg-background rounded-[23px] px-4 py-2">
              View Insights
            </div>
          </motion.div>
        </motion.div>
      </div>
    </CardSkeleton>
  );
};

export const IconPill = ({
  title,
  icon,
  className,
  animation,
}: {
  title: string;
  icon: React.ReactNode;
  className?: string;
  animation?: Variants;
}) => {
  return (
    <motion.div
      //   initial={{ x: 0, y: 0 }}
      //   animate={{ x: 0, y: [0, 4, 0, -4, 0, 4, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
      className={cn("p-2 md:p-4 rounded-lg shadow-md bg-background", className)}
      layout
      variants={animation}
    >
      <div>{icon}</div>
    </motion.div>
  );
};
