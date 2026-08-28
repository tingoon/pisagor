import { tv, type VariantProps } from "tailwind-variants";

export const tourVariants = tv({
  slots: {
    actions: ["flex flex-wrap gap-2"],
    backdrop: "duration-initial",
    close: ["absolute top-4 right-4"],
    closeButton: ["size-8 border-none opacity-70 hover:opacity-100"],
    closeLabel: "sr-only",
    content: [
      "[--space:--spacing(4)]",
      "z-[calc(var(--z-modal)+var(--layer-index,0))]",
      "relative",
      "w-full max-w-md",
      "flex flex-col gap-4",
      "bg-background",
      "rounded-lg border shadow-lg",
      "focus:outline-hidden focus:ring-0",
      "data-[state=closed]:animate-out data-[state=open]:animate-in",
      "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
      "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
      "motion-reduce:animate-none!",
    ],
    description: ["text-muted-foreground text-sm"],
    positioner: [
      "z-modal",
      "flex items-center justify-center",
      "data-[type=dialog]:fixed data-[type=dialog]:inset-0",
      "data-[type=tooltip]:absolute",
    ],
    progressText: ["text-muted-foreground text-sm"],
    spotlight: ["z-modal border-2 border-primary"],
    title: ["font-semibold text-base leading-none tracking-tight"],
  },
});

export type TourVariantProps = VariantProps<typeof tourVariants>;
export type TourVariants = ReturnType<typeof tourVariants>;
export type TourSlots = keyof TourVariants;
