import { tv } from "tailwind-variants";

export const signaturePadRecipe = tv({
  slots: {
    base: [
      "h-40 min-h-40 w-full",
      "flex flex-col gap-1.5",
      "data-disabled:opacity-64 data-disabled:grayscale",
    ],
    clear: [
      "absolute inset-e-2 top-2",
      "bg-muted",
      "text-muted-foreground",
      "transition-transform duration-fast ease-out",
      "active:scale-[0.97]",
      "motion-reduce:transition-none! motion-reduce:active:scale-100",
    ],
    control: [
      "relative",
      "size-full min-h-0 min-w-0",
      "flex flex-col",
      "rounded-xl border border-border/50",
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
});

export type SignaturePadRecipeFn = typeof signaturePadRecipe;
export type SignaturePadRecipe = ReturnType<SignaturePadRecipeFn>;
export type SignaturePadRecipeSlot = keyof SignaturePadRecipe;
