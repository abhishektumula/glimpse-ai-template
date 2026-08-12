import { cn } from "@/lib/util";
import React from "react";
import { FirstCard } from "./cards/first-card";
import { SecondCard } from "./cards/second-card";
import { ThirdCard } from "./cards/third-card";
import { FourthCard } from "./cards/fourth-card";

export const FeatureLayout = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <FirstCard />
      <SecondCard />
      <ThirdCard />
      <FourthCard />
    </div>
  );
};

export const CardSkeleton = ({
  className,
  heading,
  subheading,
  children,
}: {
  heading: string;
  subheading: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-full border border-neutral-100 dark:border-neutral-900 h-80 md:h-100 p-2 md:p-4 flex flex-col gap-2 rounded-xl",
        className,
      )}
    >
      <div>
        <h1 className="font-semibold text-md text-primary">{heading}</h1>
        <p className="font-medium text-secondary text-sm">{subheading}</p>
      </div>
      {children}
    </div>
  );
};
