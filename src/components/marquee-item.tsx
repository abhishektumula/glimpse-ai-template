import {
  IconBrandDropbox,
  IconBrandSlack,
  IconBrandZapier,
  IconBrandIntercom,
  IconBrandNotion,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandAsana,
} from "@tabler/icons-react";
import Marquee from "react-fast-marquee";

export const MarqeeSection = () => {
  const marquee_items: { title: string; icon: React.ReactNode }[] = [
    {
      title: "Dropbox",
      icon: (
        <IconBrandDropbox className="size-12 text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-all duration-300" />
      ),
    },
    {
      title: "Slack",
      icon: (
        <IconBrandSlack className="size-12 text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-all duration-300" />
      ),
    },
    {
      title: "Zapier",
      icon: (
        <IconBrandZapier className="size-12 text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-all duration-300" />
      ),
    },
    {
      title: "Intercom",
      icon: (
        <IconBrandIntercom className="size-12 text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-all duration-300" />
      ),
    },
    {
      title: "Notion",

      icon: (
        <IconBrandNotion className="size-12 text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-all duration-300" />
      ),
    },
    {
      title: "Figma",
      icon: (
        <IconBrandFigma className="size-12 text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-all duration-300" />
      ),
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="size-12 text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-all duration-300" />
      ),
    },
    {
      title: "Asana",
      icon: (
        <IconBrandAsana className="size-12 text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-all duration-300" />
      ),
    },
  ];
  return (
    <div className="w-full mask-x-from-40% bg-background max-w-4xl mx-auto">
      <Marquee speed={40} pauseOnHover>
        <div className="w-full h-full flex items-center justify-center gap-10">
          {marquee_items.map((item, index) => (
            <div
              key={index}
              className="p-2 flex flex-col items-center justify-center"
            >
              {item.icon}
              <p className="text-xs md:text-sm font-medium text-neutral-600 dark:text-neutral-300">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};
