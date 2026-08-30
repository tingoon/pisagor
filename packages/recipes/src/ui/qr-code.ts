import { tv, type VariantProps } from "tailwind-variants";

export const qrCodeRecipe = tv({
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
      "fill-black",
      "rounded-md",
      "overflow-hidden",
    ],
    overlay: [
      "size-(--qr-code-overlay-size)",
      "absolute inset-0",
      "p-2",
      "flex items-center justify-center",
      "bg-black",
      "text-background",
      "rounded-full",
      "[&_svg,img]:size-full [&_svg,img]:object-contain",
    ],
    pattern: "fill-inherit",
  },
});

export type QrCodeVariantProps = VariantProps<typeof qrCodeRecipe>;
export type QrCodeRecipe = ReturnType<typeof qrCodeRecipe>;
export type QrCodeRecipeSlot = keyof QrCodeRecipe;
