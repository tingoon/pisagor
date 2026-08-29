import { tv, type VariantProps } from "tailwind-variants";

export const avatarRecipe = tv({
  defaultVariants: {
    shape: "circle",
    size: "md",
  },
  slots: {
    base: [
      "group/avatar",
      "relative",
      "size-8",
      "inline-flex shrink-0 items-center justify-center",
      "bg-background",
      "select-none font-medium text-xs",
      "after:absolute after:inset-0 after:rounded-[inherit] after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten",
    ],
    fallback: [
      "size-full",
      "flex items-center justify-center",
      "bg-muted",
      "rounded-[inherit]",
      "[&_svg]:size-4 group-data-[size=lg]/avatar:[&_svg]:size-4.5 group-data-[size=sm]/avatar:[&_svg]:size-3",
    ],
    image: ["size-full", "aspect-square object-cover", "rounded-[inherit]"],
  },
  variants: {
    shape: {
      circle: { base: "rounded-full" },
      rounded: { base: "rounded-lg" },
      square: { base: "rounded-none" },
    },
    size: {
      lg: { base: "size-10" },
      md: { base: "size-8" },
      sm: { base: "size-6" },
    },
  },
});

export const avatarGroupRecipe = tv({
  slots: {
    base: [
      "flex -space-x-2",
      "**:data-[scope=avatar]:data-[part=root]:ring-2 **:data-[scope=avatar]:data-[part=root]:ring-background",
    ],
    count: [
      "relative",
      "size-8",
      "flex shrink-0 items-center justify-center",
      "bg-muted",
      "select-none text-muted-foreground text-sm",
      "rounded-full",
      "ring-2 ring-background",
      "[&_svg]:size-4",
    ],
  },
});

export type AvatarVariantProps = VariantProps<typeof avatarRecipe>;
export type AvatarSlots = ReturnType<typeof avatarRecipe>;

export type AvatarGroupVariantProps = VariantProps<typeof avatarGroupRecipe>;
export type AvatarGroupSlots = ReturnType<typeof avatarGroupRecipe>;
