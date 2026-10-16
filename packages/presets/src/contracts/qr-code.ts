import { tv, type VariantProps } from "tailwind-variants";

export const qrCodeRecipe = tv({
  defaultVariants: {
    /** Size scale. */
    size: "md",
  },
  slots: {
    base: [
      "[--qr-code-overlay-size:calc(var(--qr-code-size)/4)] [--qr-code-size:--spacing(32)]",
      "relative",
      "w-fit",
      "flex shrink-0 flex-col gap-4",
    ],
    frame: [
      "size-(--qr-code-size)",
      "bg-background",
      "fill-foreground",
      "rounded-md",
      "overflow-hidden",
    ],
    overlay: [
      "size-(--qr-code-overlay-size)",
      "absolute inset-0",
      "p-2",
      "flex items-center justify-center",
      "bg-foreground",
      "text-background",
      "rounded-full",
      "*:size-full *:object-contain",
    ],
    pattern: "fill-inherit",
  },
  variants: {
    size: {
      lg: {
        base: "[--qr-code-size:--spacing(48)]",
      },
      md: {},
      sm: {
        base: "[--qr-code-size:--spacing(24)]",
      },
    },
  },
});

export type QrCodeRecipeFn = typeof qrCodeRecipe;
export type QrCodeRecipe = ReturnType<QrCodeRecipeFn>;
export type QrCodeRecipeSlot = keyof QrCodeRecipe;
export type QrCodeVariantProps = VariantProps<QrCodeRecipeFn>;
