import { cn } from "@/lib/util";
import { Container } from "../container";
import { IconFilter, IconSparkle2 } from "@tabler/icons-react";

export const IntroSection = () => {
  return (
    <Container className="p-2 my-6 md:my-12 w-full md:max-w-5xl">
      <div className="w-full flex items-center justify-center">
        <p className="font-medium text-lg md:text-2xl text-center">
          Marketing{"   "}
          <ShadedIntro
            className="p-1 bg-foreground text-background rounded-lg inline-block rotate-12 hover:rotate-0 transition-all duration-300 hover"
            text=<IconFilter />
          />
          {"   "}
          <ShadedIntro
            text="isn't a numbers game"
            className="text-neutral-300 dark:text-neutral-700"
          />
          , it's a results game. See your performance clearly, understand what
          truly moves growth, and make smarter decisions.
          {"   "}
          <ShadedIntro
            className="p-1 bg-foreground text-background rounded-lg inline-block rotate-12 hover:rotate-0 transition-all duration-300 hover"
            text=<IconSparkle2 />
          />
          {"   "}
          Built to help teams focus on what actually matters, not empty metrics.
        </p>
      </div>
    </Container>
  );
};

export const ShadedIntro = ({
  text,
  className,
}: {
  text: string | React.ReactNode;
  className?: string;
}) => {
  return <span className={cn("", className)}>{text}</span>;
};
