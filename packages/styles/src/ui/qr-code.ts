import { tv } from "tailwind-variants";

export const qrCodeVariants = tv({
  base: [
    "[--qr-code-overlay-size:calc(var(--qr-code-size)/4)] [--qr-code-size:--spacing(32)]",
    "relative",
    "w-fit",
    "flex shrink-0 flex-col gap-4",
  ],
});

export const qrCodeFrameVariants = tv({
  base: ["size-(--qr-code-size)", "bg-background", "fill-black", "rounded-md", "overflow-hidden"],
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

export const qrCodePatternVariants = tv({
  base: "fill-inherit",
});
