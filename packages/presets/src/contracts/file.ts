import { tv, type VariantProps } from "tailwind-variants";

export const fileRecipe = tv({
  defaultVariants: {
    /** Visual emphasis. */
    variant: "icon",
  },
  slots: {
    actions: ["flex shrink-0 items-center gap-1"],
    base: [
      "group/file",
      "inline-flex w-full min-w-0 items-center gap-3",
      "border-border/50 bg-card rounded-2xl border p-2",
      "text-sm",
    ],
    content: ["min-w-0 flex-1 overflow-hidden"],
    media: [
      "flex shrink-0 items-center justify-center overflow-hidden",
      "bg-muted text-muted-foreground rounded-lg",
    ],
    meta: ["text-muted-foreground truncate text-xs"],
    name: ["text-foreground truncate font-medium"],
    size: ["text-muted-foreground truncate text-xs"],
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

export type FileRecipeFn = typeof fileRecipe;
export type FileVariantProps = VariantProps<FileRecipeFn>;
export type FileRecipe = ReturnType<FileRecipeFn>;
export type FileRecipeSlot = keyof FileRecipe;
