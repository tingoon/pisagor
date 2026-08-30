import { tv, type VariantProps } from "tailwind-variants";

export const signaturePadRecipe = tv({
  slots: {
    base: [
      "h-40 min-h-40 w-full",
      "flex flex-col gap-1.5",
      "data-disabled:opacity-64 data-disabled:grayscale",
    ],
    clear: ["absolute inset-e-2 top-2", "bg-muted", "text-muted-foreground"],
    control: [
      "relative",
      "size-full min-h-0 min-w-0",
      "flex flex-col",
      "rounded-xl border",
      "data-disabled:cursor-not-allowed",
      "data-invalid:border-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/24",
      "dark:data-invalid:border-destructive-foreground dark:data-invalid:ring-destructive-foreground/20",
    ],
    guide: [
      "absolute inset-x-6 bottom-6",
      "border-input border-b-2 border-dashed",
      "pointer-events-none",
    ],
    segment: ["size-full", "min-h-0", "fill-foreground", "touch-none"],
  },
});

export type SignaturePadVariantProps = VariantProps<typeof signaturePadRecipe>;
export type SignaturePadRecipe = ReturnType<typeof signaturePadRecipe>;
export type SignaturePadRecipeSlot = keyof SignaturePadRecipe;
