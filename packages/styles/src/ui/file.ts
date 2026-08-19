import { tv } from "tailwind-variants";

export const fileVariants = tv({
  base: [
    "group/file",
    "inline-flex w-full min-w-0 items-center gap-3",
    "rounded-xl border bg-card p-2",
    "text-sm",
  ],
});

export const fileMediaVariants = tv({
  base: [
    "flex shrink-0 items-center justify-center overflow-hidden",
    "rounded-lg bg-muted text-muted-foreground",
  ],
  defaultVariants: {
    variant: "icon",
  },
  variants: {
    variant: {
      icon: "size-10 [&_svg:not([class*='size-'])]:size-5",
      image: "size-10 [&_img]:size-full [&_img]:object-cover",
    },
  },
});

export const fileContentVariants = tv({
  base: ["min-w-0 flex-1 overflow-hidden"],
});

export const fileNameVariants = tv({
  base: ["truncate font-medium text-foreground"],
});

export const fileMetaVariants = tv({
  base: ["truncate text-muted-foreground text-xs"],
});

export const fileSizeVariants = tv({
  base: ["truncate text-muted-foreground text-xs"],
});

export const fileActionsVariants = tv({
  base: ["flex shrink-0 items-center gap-1"],
});
