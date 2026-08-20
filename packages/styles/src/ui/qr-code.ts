import { tv, type VariantProps } from "tailwind-variants";

export const qrCodeVariants = tv({
  base: [
    "[--qr-code-overlay-size:calc(var(--qr-code-size)/4)] [--qr-code-size:--spacing(32)]",
    "relative",
    "w-fit",
    "flex shrink-0 flex-col gap-4",
  ],
});

export const qrCodeFrameVariants = tv({
  slots: {
    base: ["size-(--qr-code-size)", "bg-background", "fill-black", "rounded-md", "overflow-hidden"],
    pattern: "fill-inherit",
  },
});

export const qrCodeOverlayVariants = tv({
  base: [
    "size-(--qr-code-overlay-size)",
    "absolute inset-0",
    "p-2",
    "flex items-center justify-center",
    "bg-black",
    "text-white",
    "rounded-full",
    "[&_svg,img]:size-full [&_svg,img]:object-contain",
  ],
});

export type QrCodeVariantProps = VariantProps<typeof qrCodeVariants>;
export type QrCodeVariants = ReturnType<typeof qrCodeVariants>;

export type QrCodeFrameVariantProps = VariantProps<typeof qrCodeFrameVariants>;
export type QrCodeFrameVariants = ReturnType<typeof qrCodeFrameVariants>;
export type QrCodeFrameSlots = keyof QrCodeFrameVariants;

export type QrCodeOverlayVariantProps = VariantProps<typeof qrCodeOverlayVariants>;
export type QrCodeOverlayVariants = ReturnType<typeof qrCodeOverlayVariants>;
