import { Container } from "./container";
import { UnderLineApp } from "./app-underline";
import Image from "next/image";
import { IconBrandAppleFilled } from "@tabler/icons-react";

export const HeroSection = () => {
  return (
    <Container className="p-2 w-full h-screen md:h-[170vh] flex items-center justify-center relative">
      <div className="flex flex-col items-center gap-4">
        <h1 className="w-full md:max-w-4xl font-display text-5xl md:text-7xl font-semibold text-center text-neutral-800 dark:text-neutral-300">
          Turn Data Into Smarter Marketing.
        </h1>
        <p className="w-full md:max-w-2xl text-center text-base md:text-xl font-normal text-neutral-700 dark:text-neutral-500 font-inter">
          We help you understand your customers better, so your marketing feels
          less like guesswork and more like magic.
        </p>
        <div className="w-full flex items-center justify-center">
          <button className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black border rounded-lg flex items-center justify-center gap-2">
            <IconBrandAppleFilled className="size-5 text-white dark:text-black" />
            <span className="font-display text-md font-semibold">
              Download for MacOS
            </span>
          </button>
        </div>
        <p className="w-full md:max-w-2xl text-center text-xs md:text-sm font-medium text-neutral-600 dark:text-neutral-500 font-inter">
          Also on Your phone{" "}
          <UnderLineApp
            device="ios"
            className="px-1 hover:text-foreground transition-all duration-300"
          />
          <UnderLineApp
            device="Android"
            className="px-1 hover:text-foreground transition-all duration-300"
          />
        </p>
        <div className="p-1 relative rounded-xl overflow-hidden group w-7xl mx-auto hidden md:block">
          <div className="absolute -inset-full bg-[conic-gradient(transparent_0deg,var(--color-indigo-900)_90deg,var(--color-purple-600)_120deg,transparent_140deg,transparent_360deg)] animate-[spin_12s_linear_infinite]" />
          <Image
            src="/hero-image.png"
            alt="hero image"
            height={1080}
            width={1080}
            className="object-cover w-full h-full bg-center overflow-hidden hidden md:block rounded-lg relative z-10"
          />
        </div>
      </div>
    </Container>
  );
};
