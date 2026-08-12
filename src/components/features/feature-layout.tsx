import { cn } from "@/lib/util";
import React from "react";
import { FirstCard } from "./cards/first-card";

export const FeatureLayout = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <FirstCard />
      <div className="w-full h-70 md:h-100 bg-indigo-900"></div>
      <div className="w-full h-70 md:h-100 bg-purple-900"></div>
      <div className="w-full h-70 md:h-100 bg-red-900"></div>
    </div>
  );
};

export const CardSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-full border border-neutral-100 dark:border-neutral-900 h-80 md:h-100 p-2 md:p-4",
        className,
      )}
    >
      {children}
    </div>
  );
};
