import { tv, type VariantProps } from "tailwind-variants";

export const surfaceRecipe = tv({
  base: "text-foreground",
  defaultVariants: {
    bordered: false,
    rounded: true,
    variant: "default",
  },
  variants: {
    bordered: {
      false: "",
      true: "border border-border/50 shadow-xs",
    },
    padding: {
      lg: "p-6",
      md: "p-4",
      none: "p-0",
      sm: "p-2",
    },
    rounded: {
      false: "rounded-none",
      true: "rounded-2xl",
    },
    variant: {
      default: "bg-background",
      glass: [
        "bg-background/72 backdrop-blur-xl backdrop-saturate-150",
        "border border-border/40",
        "transparency-reduce:bg-background transparency-reduce:backdrop-blur-none transparency-reduce:backdrop-saturate-100",
        "contrast-more:bg-background contrast-more:backdrop-blur-none",
      ],
      secondary: "bg-muted/40",
      tertiary: "bg-muted/64",
      transparent: "bg-transparent",
    },
  },
});

export type SurfaceVariantProps = VariantProps<typeof surfaceRecipe>;
export type SurfaceRecipe = ReturnType<typeof surfaceRecipe>;
export type SurfaceRecipeSlot = keyof SurfaceRecipe;
