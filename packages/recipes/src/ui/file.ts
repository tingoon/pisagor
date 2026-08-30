import { tv, type VariantProps } from "tailwind-variants";

export const fileRecipe = tv({
  defaultVariants: {
    variant: "icon",
  },
  slots: {
    actions: ["flex shrink-0 items-center gap-1"],
    base: [
      "group/file",
      "inline-flex w-full min-w-0 items-center gap-3",
      "rounded-xl border bg-card p-2",
      "text-sm",
    ],
    content: ["min-w-0 flex-1 overflow-hidden"],
    media: [
      "flex shrink-0 items-center justify-center overflow-hidden",
      "rounded-lg bg-muted text-muted-foreground",
    ],
    meta: ["truncate text-muted-foreground text-xs"],
    name: ["truncate font-medium text-foreground"],
    size: ["truncate text-muted-foreground text-xs"],
  },
  variants: {
    variant: {
      icon: {
        media: "size-10 [&_svg:not([class*='size-'])]:size-5",
      },
      image: {
        media: "size-10 [&_img]:size-full [&_img]:object-cover",
      },
    },
  },
});

export type FileVariantProps = VariantProps<typeof fileRecipe>;
export type FileRecipe = ReturnType<typeof fileRecipe>;
export type FileRecipeSlot = keyof FileRecipe;
