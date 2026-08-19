import { tv } from "tailwind-variants";

export const cardMediaVariants = tv({
  base: ["flex shrink-0 items-center gap-2", "[&_svg]:pointer-events-none", "px-(--space)"],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: "bg-transparent",
      icon: "[&_svg:not([class*='size-'])]:size-4",
      image: ["overflow-hidden rounded-t-sm", "px-0", "[&_img]:size-full [&_img]:object-cover"],
    },
  },
});

export const cardVariants = tv({
  base: [
    "[--space:--spacing(6)]",
    "group/card",
    "py-(--space)",
    "flex flex-col gap-4",
    "bg-card",
    "text-foreground",
    "has-data-[variant=image]:pt-0 has-[[data-scope=card][data-part=footer]]:pb-0",
    "rounded-xl border shadow-xs/5",
  ],
});

export const cardHeaderVariants = tv({
  base: [
    "grid auto-rows-min grid-rows-[auto_auto] gap-1",
    "px-(--space)",
    "items-start",
    "has-[[data-scope=card][data-part=action]]:grid-cols-[1fr_auto]",
  ],
});

export const cardTitleVariants = tv({
  base: ["font-heading font-semibold text-foreground text-lg/6"],
});

export const cardDescriptionVariants = tv({
  base: ["row-start-2", "text-muted-foreground text-sm"],
});

export const cardActionVariants = tv({
  base: ["col-start-2 row-span-2 row-start-1 self-start justify-self-end"],
});

export const cardContentVariants = tv({
  base: "px-(--space)",
});

export const cardFooterVariants = tv({
  base: [
    "flex items-center gap-2",
    "px-(--space)",
    "bg-muted/48",
    "rounded-b-xl border-t",
    "py-(--space)",
  ],
});
