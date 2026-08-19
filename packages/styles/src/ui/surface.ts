import { tv } from "tailwind-variants";

export const surfaceVariants = tv({
  base: "text-foreground",
  defaultVariants: {
    bordered: false,
    rounded: true,
    variant: "default",
  },
  variants: {
    bordered: {
      false: "",
      true: "border border-border shadow-xs/5",
    },
    padding: {
      lg: "p-6",
      md: "p-4",
      none: "p-0",
      sm: "p-2",
    },
    rounded: {
      false: "rounded-none",
      true: "rounded-xl",
    },
    variant: {
      default: "bg-background",
      secondary: "bg-muted/40",
      tertiary: "bg-muted/64",
      transparent: "bg-transparent",
    },
  },
});
