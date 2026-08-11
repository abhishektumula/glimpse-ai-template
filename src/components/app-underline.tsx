import { cn } from "@/lib/util";

export const UnderLineApp = ({
  device,
  className,
}: {
  device: string;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "w-fit font-sm text-neutral-600 dark:text-neutral-400 underline",
        className,
      )}
    >
      {device}
    </span>
  );
};
