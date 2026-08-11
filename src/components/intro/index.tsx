import { cn } from "@/lib/util";
import { Container } from "../container";

export const IntroSection = () => {
  return (
    <Container className="p-2 my-6 md:my-12">
      <div className="w-full flex items-center justify-center"></div>
    </Container>
  );
};

export const ShadedIntro = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <span className={cn("", className)}>{text}</span>;
};
