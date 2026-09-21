import { tv, type VariantProps } from "tailwind-variants";

export const cardRecipe = tv({
  defaultVariants: {
    variant: "default",
  },
  slots: {
    action: ["col-start-2 row-span-2 row-start-1 self-start justify-self-end"],
    base: [
      "[--space:--spacing(6)]",
      "group/card",
      "py-(--space)",
      "flex flex-col gap-5",
      "bg-card",
      "text-foreground",
      "has-data-[variant=image]:pt-0 has-[[data-scope=card][data-part=footer]]:pb-0",
      "rounded-2xl border border-border/50 shadow-sm",
    ],
    content: "px-(--space)",
    description: ["row-start-2", "text-muted-foreground text-sm leading-relaxed"],
    footer: [
      "flex items-center gap-2",
      "px-(--space)",
      "rounded-b-2xl",
      "border-t border-border/40",
      "py-(--space)",
    ],
    header: [
      "grid auto-rows-min grid-rows-[auto_auto] gap-1.5",
      "px-(--space)",
      "items-start",
      "has-[[data-scope=card][data-part=action]]:grid-cols-[1fr_auto]",
    ],
    media: ["flex shrink-0 items-center gap-2", "[&_svg]:pointer-events-none", "px-(--space)"],
    title: ["font-heading font-semibold text-foreground text-xl leading-tight tracking-tight"],
  },
  variants: {
    variant: {
      default: {
        media: "bg-transparent",
      },
      icon: {
        media: "[&_svg:not([class*='size-'])]:size-4",
      },
      image: {
        media: ["overflow-hidden rounded-t-2xl", "px-0", "[&_img]:size-full [&_img]:object-cover"],
      },
    },
  },
});

export type CardVariantProps = VariantProps<typeof cardRecipe>;
export type CardRecipe = ReturnType<typeof cardRecipe>;
export type CardRecipeSlot = keyof CardRecipe;
