import { Container } from "../container";
import { FeatureLayout } from "./feature-layout";

export const FeatureSection = () => {
  return (
    <Container className="py-6 md:py-12 px-6 relative">
      <div className="absolute  top-0 right-0 w-px h-full bg-neutral-300 dark:bg-neutral-800" />
      <div className="absolute top-0 left-0 w-px h-full bg-neutral-300 dark:bg-neutral-800" />
      <div className="w-full">
        <h1 className="font-semibold font-display text-4xl max-w-4xl text-primary">
          Built for clearer marketing decisions
        </h1>
        <p className="font-medium text-base md:text-md max-w-xl font-inter text-secondary">
          See what&apos;s actually driving results, ditch the guesswork, and move on
          what matters.
        </p>
        <FeatureLayout />
      </div>
    </Container>
  );
};
