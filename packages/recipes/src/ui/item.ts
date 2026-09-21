import { tv, type VariantProps } from "tailwind-variants";

export const itemRecipe = tv({
  defaultVariants: {
    variant: "default",
  },
  slots: {
    actions: ["flex items-center gap-2"],
    base: [
      "[--space:--spacing(3)]",
      "group/item",
      "flex w-full flex-wrap items-center",
      "gap-(--space) p-(--space)",
      "in-[[data-scope=menu][data-part=list]]:p-0",
      "text-sm",
      "rounded-2xl border border-border/50",
      "transition-[color,background-color,border-color] duration-fast ease-out",
      "[a]:transition-[color,background-color] [a]:duration-fast [a]:ease-out [a]:hover:bg-muted",
      "outline-hidden focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/24",
      "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      "motion-reduce:transition-none!",
    ],
    content: ["flex flex-1 flex-col gap-0.5", "[&+[data-scope=item][data-part=content]]:flex-none"],
    description: [
      "line-clamp-2 text-left font-normal text-muted-foreground text-sm leading-relaxed",
      "[&>a:hover]:text-primary",
      "[&>a]:underline [&>a]:underline-offset-4",
    ],
    footer: ["flex basis-full items-center justify-between gap-2"],
    group: ["group/item-group", "flex w-full flex-col gap-4"],
    header: [
      "flex basis-full items-center justify-between gap-2",
      "[&_img]:size-full [&_img]:rounded-2xl [&_img]:object-cover",
    ],
    media: [
      "flex shrink-0 items-center justify-center gap-2",
      "group-has-[[data-scope=item][data-part=description]]/item:translate-y-0.5 group-has-[[data-scope=item][data-part=description]]/item:self-start",
      "[&_svg]:pointer-events-none",
    ],
    separator: "my-2",
    title: [
      "w-fit",
      "flex items-center gap-2",
      "line-clamp-1 font-medium text-sm leading-snug tracking-tight",
      "underline-offset-4",
    ],
  },
  variants: {
    variant: {
      default: {
        base: "border-transparent",
        media: "bg-transparent",
      },
      icon: {
        media: ["[&_svg:not([class*='size-'])]:size-4"],
      },
      image: {
        media: [
          "size-10",
          "rounded-2xl",
          "overflow-hidden",
          "[&_img]:size-full [&_img]:object-cover",
        ],
      },
      muted: {
        base: "border-transparent bg-muted/48 shadow-xs",
      },
      outline: {
        base: "border-border/50 shadow-xs",
      },
    },
  },
});

export type ItemVariantProps = VariantProps<typeof itemRecipe>;
export type ItemRecipe = ReturnType<typeof itemRecipe>;
export type ItemRecipeSlot = keyof ItemRecipe;
