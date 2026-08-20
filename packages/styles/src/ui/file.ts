import { tv, type VariantProps } from "tailwind-variants";

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

export type FileVariantProps = VariantProps<typeof fileVariants>;
export type FileVariants = ReturnType<typeof fileVariants>;

export type FileMediaVariantProps = VariantProps<typeof fileMediaVariants>;
export type FileMediaVariants = ReturnType<typeof fileMediaVariants>;

export type FileContentVariantProps = VariantProps<typeof fileContentVariants>;
export type FileContentVariants = ReturnType<typeof fileContentVariants>;

export type FileNameVariantProps = VariantProps<typeof fileNameVariants>;
export type FileNameVariants = ReturnType<typeof fileNameVariants>;

export type FileMetaVariantProps = VariantProps<typeof fileMetaVariants>;
export type FileMetaVariants = ReturnType<typeof fileMetaVariants>;

export type FileSizeVariantProps = VariantProps<typeof fileSizeVariants>;
export type FileSizeVariants = ReturnType<typeof fileSizeVariants>;

export type FileActionsVariantProps = VariantProps<typeof fileActionsVariants>;
export type FileActionsVariants = ReturnType<typeof fileActionsVariants>;
