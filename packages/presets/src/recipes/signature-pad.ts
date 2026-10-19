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

export const signaturePadRecipe = tv({
  compoundVariants: [
    {
      class: { control: "bg-transparent" },
      surfaceVariant: undefined,
      variant: "primary",
    },
    {
      class: { control: "bg-transparent" },
      surfaceVariant: ["default", "transparent"],
      variant: "primary",
    },
    {
      class: { control: "bg-card/80" },
      surfaceVariant: mutedSurfaces,
      variant: "primary",
    },
    {
      class: { control: "bg-muted/40" },
      surfaceVariant: undefined,
      variant: "secondary",
    },
    {
      class: { control: "bg-muted/40" },
      surfaceVariant: ["default", "transparent"],
      variant: "secondary",
    },
    {
      class: { control: "bg-card/80" },
      surfaceVariant: mutedSurfaces,
      variant: "secondary",
    },
  ],
  defaultVariants: {
    /** Surface variant. */
    surfaceVariant: undefined,
    /** Visual emphasis. */
    variant: "primary",
  },
  slots: {
    base: [
      "h-40 min-h-40 w-full",
      "flex flex-col gap-1.5",
      "data-disabled:opacity-64 data-disabled:grayscale",
    ],
    clearTrigger: [
      "absolute inset-e-2 top-2",
      "bg-muted",
      "text-muted-foreground",
      "duration-fast transition-transform ease-out",
      "active:scale-97",
      "motion-reduce:transition-none! motion-reduce:active:scale-100",
    ],
    control: [
      "relative",
      "size-full min-h-0 min-w-0",
      "flex flex-col",
      "border-input rounded-2xl border-2 border-dashed",
      "data-disabled:cursor-not-allowed",
      "data-invalid:border-destructive data-invalid:ring-0.75 data-invalid:ring-destructive/24",
    ],
    guide: [
      "absolute inset-x-6 bottom-6",
      "border-input border-b-2 border-dashed",
      "pointer-events-none",
    ],
    segment: ["size-full", "min-h-0", "fill-foreground", "touch-none"],
  },
  variants: {
    surfaceVariant: surfaceVariantOptions,
    variant: {
      primary: {
        control: "shadow-xs/5",
      },
      secondary: {
        control: "",
      },
    },
  },
});

export type SignaturePadRecipeFn = typeof signaturePadRecipe;
export type SignaturePadVariantProps = VariantProps<SignaturePadRecipeFn>;
export type SignaturePadRecipe = ReturnType<SignaturePadRecipeFn>;
export type SignaturePadRecipeSlot = keyof SignaturePadRecipe;
