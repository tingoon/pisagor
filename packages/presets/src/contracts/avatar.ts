import { tv, type VariantProps } from "tailwind-variants";

export const avatarRecipe = tv({
  defaultVariants: {
    /** Shape of the control. */
    shape: "circle",
    /** Control size. */
    size: "md",
  },
  slots: {
    base: [
      "group/avatar",
      "relative",
      "size-8",
      "inline-flex shrink-0 items-center justify-center",
      "bg-background",
      "text-xs font-medium select-none",
      "after:rounded-inherit after:border-border after:absolute after:inset-0 after:border after:mix-blend-darken dark:after:mix-blend-lighten",
    ],
    fallback: [
      "size-full",
      "flex items-center justify-center",
      "bg-muted",
      "rounded-inherit",
      "[&_svg]:size-4 group-data-[size=lg]/avatar:[&_svg]:size-4.5 group-data-[size=sm]/avatar:[&_svg]:size-3",
    ],
    image: ["size-full", "aspect-square object-cover", "rounded-inherit"],
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
      "**:data-[scope=avatar]:data-[part=root]:ring-background **:data-[scope=avatar]:data-[part=root]:ring-2",
    ],
    count: [
      "relative",
      "size-8",
      "flex shrink-0 items-center justify-center",
      "bg-muted",
      "text-muted-foreground text-sm select-none",
      "rounded-full",
      "ring-background ring-2",
      "[&_svg]:size-4",
    ],
  },
});

export type AvatarRecipeFn = typeof avatarRecipe;
export type AvatarVariantProps = VariantProps<AvatarRecipeFn>;
export type AvatarRecipe = ReturnType<AvatarRecipeFn>;
export type AvatarRecipeSlot = keyof AvatarRecipe;

export type AvatarGroupRecipeFn = typeof avatarGroupRecipe;
export type AvatarGroupRecipe = ReturnType<AvatarGroupRecipeFn>;
export type AvatarGroupRecipeSlot = keyof AvatarGroupRecipe;
