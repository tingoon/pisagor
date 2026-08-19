import { tv } from "tailwind-variants";

export const sheetPositionerVariants = tv({
  base: ["fixed inset-0 z-50 grid h-svh w-screen"],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    placement: {
      bottom: "grid grid-rows-[1fr_auto] pt-12",
      left: "flex justify-start",
      right: "flex justify-end",
      top: "grid grid-rows-[auto_1fr] pb-12",
    },
    variant: {
      default: "",
      inset: "sm:p-4",
    },
  },
});

export const sheetContentVariants = tv({
  base: [
    "[--space:--spacing(6)]",
    "relative",
    "flex flex-col",
    "max-h-full min-h-0 w-full min-w-0",
    "bg-popover",
    "text-popover-foreground",
    "shadow-lg/5",
    "transition-[opacity,translate] duration-200 ease-in-out will-change-transform",
    "data-[state=closed]:fade-out-0 data-[state=closed]:animate-out",
    "data-[state=open]:fade-in-0 data-[state=open]:animate-in",
    "motion-reduce:animate-none! motion-reduce:transition-none!",
  ],
  defaultVariants: {
    placement: "right",
    variant: "default",
  },
  variants: {
    placement: {
      bottom: [
        "row-start-2 border-t",
        "data-[state=closed]:slide-in-from-bottom-10 data-[state=open]:slide-in-from-bottom-10",
      ],
      left: [
        "w-[calc(100%-(--spacing(12)))] max-w-md",
        "col-start-2",
        "border-e",
        "data-[state=closed]:slide-out-to-start-10 data-[state=open]:slide-in-from-start-10",
      ],
      right: [
        "w-[calc(100%-(--spacing(12)))] max-w-md",
        "col-start-2",
        "border-s",
        "data-[state=closed]:slide-out-to-end-10 data-[state=open]:slide-in-from-end-10",
      ],
      top: [
        "border-b",
        "data-[state=closed]:slide-out-to-top-10 data-[state=open]:slide-in-from-top-10",
      ],
    },
    variant: {
      default: "",
      inset: [
        "sm:rounded-2xl sm:border",
        "sm:**:data-[scope=sheet]:data-[part=footer]:rounded-b-[calc(var(--radius-2xl)-1px)]",
      ],
    },
  },
});

export const sheetBodyVariants = tv({
  base: "in-[[data-scope=dialog][data-part=content]:has([data-scope=sheet][data-part=header])]:pt-0",
});

export const sheetFooterVariants = tv({
  base: "sm:rounded-none",
});

export const sheetInlineVariants = tv({
  base: ["absolute inset-e-2 top-2 opacity-64 hover:opacity-100"],
});
