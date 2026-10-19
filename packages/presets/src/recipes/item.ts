import { tv, type VariantProps } from "tailwind-variants";

export const itemRecipe = tv({
  defaultVariants: {
    /** Size scale. */
    size: "md",
    /** Visual emphasis. */
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
      "border-border/50 rounded-2xl border",
      "duration-fast transition-colors ease-out",
      "[a]:duration-fast [a]:hover:bg-muted [a]:transition-colors [a]:ease-out",
      "focus-visible:border-primary focus-visible:ring-0.75 focus-visible:ring-ring/24 outline-hidden",
      "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      "motion-reduce:transition-none!",
    ],
    content: [
      "flex flex-1 flex-col gap-0.5",
      "[&+[data-scope=item][data-part=content]]:flex-none",
    ],
    description: [
      "text-muted-foreground line-clamp-2 text-start text-sm leading-relaxed font-normal",
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
      "line-clamp-1 text-sm leading-snug font-medium tracking-tight",
      "underline-offset-4",
    ],
  },
  variants: {
    size: {
      lg: {
        base: "text-base [--space:--spacing(4)]",
        description: "text-base",
        title: "text-base",
      },
      md: {},
      sm: {
        base: "text-xs [--space:--spacing(2)]",
        description: "text-xs",
        title: "text-xs",
      },
    },
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
        base: "bg-muted/48 border-transparent shadow-xs",
      },
      outline: {
        base: "border-border/50 shadow-xs",
      },
    },
  },
});

export type ItemRecipeFn = typeof itemRecipe;
export type ItemVariantProps = VariantProps<ItemRecipeFn>;
export type ItemRecipe = ReturnType<ItemRecipeFn>;
export type ItemRecipeSlot = keyof ItemRecipe;
