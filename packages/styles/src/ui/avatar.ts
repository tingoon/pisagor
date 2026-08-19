import { tv } from "tailwind-variants";

export const avatarVariants = tv({
  defaultVariants: {
    shape: "circle",
    size: "md",
  },
  slots: {
    fallback: [
      "size-full",
      "flex items-center justify-center",
      "bg-muted",
      "rounded-[inherit]",
      "[&_svg]:size-4 group-data-[size=lg]/avatar:[&_svg]:size-4.5 group-data-[size=sm]/avatar:[&_svg]:size-3",
    ],
    image: ["size-full", "aspect-square object-cover", "rounded-[inherit]"],
    root: [
      "group/avatar",
      "relative",
      "size-8",
      "inline-flex shrink-0 items-center justify-center",
      "bg-background",
      "select-none font-medium text-xs",
      "after:absolute after:inset-0 after:rounded-[inherit] after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten",
    ],
  },
  variants: {
    shape: {
      circle: { root: "rounded-full" },
      rounded: { root: "rounded-lg" },
      square: { root: "rounded-none" },
    },
    size: {
      lg: { root: "size-10" },
      md: { root: "size-8" },
      sm: { root: "size-6" },
    },
  },
});

export const avatarGroupVariants = tv({
  base: [
    "flex -space-x-2",
    "**:data-[scope=avatar]:data-[part=root]:ring-2 **:data-[scope=avatar]:data-[part=root]:ring-background",
  ],
});

export const avatarGroupCountVariants = tv({
  base: [
    "relative",
    "size-8",
    "flex shrink-0 items-center justify-center",
    "bg-muted",
    "select-none text-muted-foreground text-sm",
    "rounded-full",
    "ring-2 ring-background",
    "[&_svg]:size-4",
  ],
});
