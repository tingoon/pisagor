import { tv, type VariantProps } from "tailwind-variants";

const surfaceVariantOptions = {
  default: "",
  glass: "",
  secondary: "",
  tertiary: "",
  transparent: "",
} as const;

const mutedSurfaces: Array<"secondary" | "tertiary" | "glass"> = [
  "secondary",
  "tertiary",
  "glass",
];

export const switchRecipe = tv({
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
        base: "data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input",
      },
      surfaceVariant: ["default", "transparent"],
      variant: "primary",
    },
    {
      class: {
        base: "data-[state=unchecked]:bg-card dark:data-[state=unchecked]:bg-input",
      },
      surfaceVariant: mutedSurfaces,
      variant: "primary",
    },
    {
      class: {
        base: "data-[state=unchecked]:bg-muted",
      },
      surfaceVariant: undefined,
      variant: "secondary",
    },
    {
      class: {
        base: "data-[state=unchecked]:bg-muted",
      },
      surfaceVariant: ["default", "transparent"],
      variant: "secondary",
    },
    {
      class: {
        base: "data-[state=unchecked]:bg-card dark:data-[state=unchecked]:bg-input",
      },
      surfaceVariant: mutedSurfaces,
      variant: "secondary",
    },
  ],
  defaultVariants: {
    /** Size scale. */
    size: "md",
    /** Surface variant. */
    surfaceVariant: undefined,
    /** Visual emphasis. */
    variant: "primary",
  },
  slots: {
    base: [
      "group/switch",
      "h-[calc(var(--thumb-size)+2px)] w-[calc(var(--thumb-size)*2-2px)]",
      "p-px",
      "inline-flex shrink-0 items-center",
      "rounded-full border border-transparent",
      "duration-slow ease-emphasized transition-all",
      "[[data-focus-visible],[data-invalid]]:ring-0.75 outline-hidden",
      "data-focus-visible:border-primary data-focus-visible:ring-ring/32",
      "data-invalid:border-destructive data-invalid:ring-destructive/24",
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
      "duration-slow ease-emphasized transition-transform",
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
    size: {
      lg: { base: "[--thumb-size:--spacing(6)]" },
      md: { base: "[--thumb-size:--spacing(4)]" },
      sm: { base: "[--thumb-size:--spacing(3)]" },
    },
    surfaceVariant: surfaceVariantOptions,
    variant: {
      primary: "",
      secondary: "",
    },
  },
});

export type SwitchRecipeFn = typeof switchRecipe;
export type SwitchVariantProps = VariantProps<SwitchRecipeFn>;
export type SwitchRecipe = ReturnType<SwitchRecipeFn>;
export type SwitchRecipeSlot = keyof SwitchRecipe;
