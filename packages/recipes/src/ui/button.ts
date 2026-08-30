import { tv, type VariantProps } from "tailwind-variants";

export const buttonRecipe = tv({
  defaultVariants: {
    clickEffect: true,
    loading: false,
    pill: false,
    size: "md",
    variant: "default",
  },
  slots: {
    base: [
      "relative",
      "inline-flex shrink-0 items-center justify-center gap-2",
      "whitespace-nowrap font-medium text-sm",
      "rounded-lg",
      "transition-all",
      "outline-hidden focus-visible:ring-[3px] focus-visible:ring-ring/32",
      "disabled:pointer-events-none disabled:opacity-64",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
      "aria-disabled:pointer-events-none aria-disabled:opacity-64",
      "aria-invalid:border-destructive aria-invalid:ring-destructive/24",
      "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      "motion-reduce:transition-none!",
    ],
    hidden: "invisible",
    spinner: ["absolute inset-0 flex items-center justify-center"],
    srOnly: "sr-only",
  },
  variants: {
    clickEffect: {
      true: {
        base: "active:not-aria-[haspopup]:scale-[0.98]",
      },
    },
    loading: {
      true: {
        base: "pointer-events-none",
      },
    },
    pill: {
      true: {
        base: [
          "rounded-full",
          "has-[>svg]:data-[size=xs]:pe-3",
          "has-[>svg]:data-[size=sm]:pe-3.5",
          "has-[>svg]:data-[size=md]:pe-4",
          "has-[>svg]:data-[size=lg]:pe-4.5",
          "has-[>svg]:data-[size=xl]:pe-5",
        ],
      },
    },
    size: {
      "icon-lg": { base: "size-9" },
      "icon-md": { base: "size-8" },
      "icon-sm": { base: "size-7" },
      "icon-xl": { base: "size-10 [&_svg:not([class*='size-'])]:size-5" },
      "icon-xs": { base: "size-6 rounded-xs" },
      lg: { base: ["h-9", "px-3.5"] },
      md: { base: ["h-8", "px-3", "py-2"] },
      sm: { base: ["h-7", "px-2.5", "gap-1.5", "[&_svg:not([class*='size-'])]:size-3.5"] },
      xl: { base: ["h-10", "text-base", "px-4"] },
      xs: {
        base: [
          "h-6",
          "gap-1.5",
          "px-2",
          "text-xs",
          "rounded-xs",
          "[&_svg:not([class*='size-'])]:size-2.5",
        ],
      },
    },
    variant: {
      default: {
        base: [
          "bg-primary",
          "border border-transparent shadow-primary/24 shadow-xs",
          "text-primary-foreground",
          "hover:bg-primary/90",
          "focus-visible:border-background",
        ],
      },
      destructive: {
        base: [
          "bg-destructive",
          "text-destructive-foreground",
          "border border-transparent shadow-destructive/24 shadow-xs",
          "hover:bg-destructive/90",
          "focus-visible:border-background focus-visible:ring-destructive-foreground/32",
        ],
      },
      ghost: {
        base: [
          "hover:bg-accent hover:text-accent-foreground",
          "border border-transparent",
          "focus-visible:border-primary",
        ],
      },
      link: {
        base: [
          "text-primary",
          "underline-offset-4",
          "border border-transparent",
          "hover:underline",
          "focus-visible:border-primary",
        ],
      },
      outline: {
        base: [
          "bg-transparent",
          "text-foreground",
          "border border-input shadow-xs/5",
          "hover:bg-accent hover:text-accent-foreground",
          "dark:bg-input/32 dark:hover:bg-input/64",
          "focus-visible:border-primary",
        ],
      },
      secondary: {
        base: [
          "bg-secondary",
          "text-secondary-foreground",
          "border border-transparent",
          "focus-visible:border-primary",
          "hover:bg-secondary/80",
        ],
      },
    },
  },
});

export type ButtonVariantProps = VariantProps<typeof buttonRecipe>;
export type ButtonRecipe = ReturnType<typeof buttonRecipe>;
export type ButtonRecipeSlot = keyof ButtonRecipe;
