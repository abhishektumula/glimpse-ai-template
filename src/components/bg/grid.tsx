import { cn } from "@/lib/util";

export const BackgroundGird = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "bg-transparent bg-[repeating-linear-gradient(0deg,var(--color-neutral-100)_0px,var(--color-neutral-100)_1px,transparent_1px,transparent_46px),repeating-linear-gradient(90deg,var(--color-neutral-100)_0px,var(--color-neutral-100)_1px,transparent_1px,transparent_46px)] dark:bg-[repeating-linear-gradient(0deg,var(--color-neutral-900)_0px,var(--color-neutral-900)_1px,transparent_1px,transparent_46px),repeating-linear-gradient(90deg,var(--color-neutral-900)_0px,var(--color-neutral-900)_1px,transparent_1px,transparent_46px)]",
        className,
      )}
    ></div>
  );
};
