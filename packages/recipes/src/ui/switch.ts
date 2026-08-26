import { tv, type VariantProps } from "tailwind-variants";

export const switchVariants = tv({
  compoundVariants: [
    {
      class: {
        base: "data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input",
      },
      surfaceVariant: undefined,
      variant: "primary",
    },
    {
      class: {
        base: "data-[state=unchecked]:bg-muted/64",
      },
      surfaceVariant: "default",
      variant: "secondary",
    },
    {
      class: {
        base: "data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input",
      },
      surfaceVariant: ["secondary", "tertiary"],
      variant: "secondary",
    },
    {
      class: {
        base: "data-[state=unchecked]:bg-muted/64",
      },
      surfaceVariant: undefined,
      variant: "secondary",
    },
  ],
  defaultVariants: {
    surfaceVariant: undefined,
    variant: "primary",
  },
  slots: {
    base: [
      "group/switch",
      "[--thumb-size:--spacing(5)] sm:[--thumb-size:--spacing(4)]",
      "h-[calc(var(--thumb-size)+2px)] w-[calc(var(--thumb-size)*2-2px)]",
      "p-px",
      "inline-flex shrink-0 items-center",
      "rounded-full border border-transparent",
      "transition-all",
      "outline-hidden [[data-focus-visible],[data-invalid]]:ring-[3px]",
      "data-focus-visible:border-primary data-focus-visible:ring-ring/32",
      "data-invalid:border-destructive data-invalid:ring-destructive/24",
      "dark:data-invalid:border-destructive-foreground dark:data-invalid:ring-destructive-foreground/20",
      "data-[state=checked]:bg-primary",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
      "motion-reduce:transition-none!",
    ],
    control: ["flex size-full items-center"],
    thumb: [
      "block",
      "aspect-square h-full w-auto",
      "bg-background",
      "rounded-full ring-0",
      "pointer-events-none",
      "transition-transform",
      "data-[state=checked]:translate-x-[calc(var(--thumb-size)-4px)]",
      "rtl:data-[state=checked]:-translate-x-[calc(var(--thumb-size)-4px)]",
      "dark:data-[state=checked]:bg-primary-foreground",
      "data-[state=unchecked]:translate-x-0",
      "rtl:data-[state=unchecked]:translate-x-0",
      "dark:data-[state=unchecked]:bg-foreground",
      "motion-reduce:transition-none!",
    ],
  },
  variants: {
    surfaceVariant: {
      default: "",
      secondary: "",
      tertiary: "",
      transparent: "",
    },
    variant: {
      primary: "",
      secondary: "",
    },
  },
});

export type SwitchVariantProps = VariantProps<typeof switchVariants>;
export type SwitchVariants = ReturnType<typeof switchVariants>;
export type SwitchSlots = keyof SwitchVariants;
