import { cn } from "@/lib/util";
import React from "react";

export const Container = ({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("max-w-6xl mx-auto", className)}>{children}</div>;
};
