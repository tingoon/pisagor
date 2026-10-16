import { tv } from "tailwind-variants";

export const loginCardBlock = tv({
  slots: {
    action: "w-full",
    footer: "flex-col gap-2",
    root: "mx-auto w-full max-w-md",
  },
});

export const loginCardCustomSpacingBlock = tv({
  slots: {
    root: "[--space:--spacing(2)] md:[--space:--spacing(8)]",
  },
});

export const productCardBlock = tv({
  slots: {
    action: "flex-1",
    footer: "gap-2",
    media: "bg-muted aspect-4/3",
    root: "max-w-sm overflow-hidden",
  },
});
