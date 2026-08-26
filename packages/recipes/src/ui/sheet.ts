import { tv, type VariantProps } from "tailwind-variants";

export const sheetVariants = tv({
  defaultVariants: {
    placement: "right",
    variant: "default",
  },
  slots: {
    body: "in-[[data-scope=dialog][data-part=content]:has([data-scope=sheet][data-part=header])]:pt-0",
    content: [
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
    footer: "sm:rounded-none",
    inline: ["absolute inset-e-2 top-2 opacity-64 hover:opacity-100"],
    positioner: ["fixed inset-0 z-50 grid h-svh w-screen"],
  },
  variants: {
    placement: {
      bottom: {
        content: [
          "row-start-2 border-t",
          "data-[state=closed]:slide-in-from-bottom-10 data-[state=open]:slide-in-from-bottom-10",
        ],
        positioner: "grid grid-rows-[1fr_auto] pt-12",
      },
      left: {
        content: [
          "w-[calc(100%-(--spacing(12)))] max-w-md",
          "col-start-2",
          "border-e",
          "data-[state=closed]:slide-out-to-start-10 data-[state=open]:slide-in-from-start-10",
        ],
        positioner: "flex justify-start",
      },
      right: {
        content: [
          "w-[calc(100%-(--spacing(12)))] max-w-md",
          "col-start-2",
          "border-s",
          "data-[state=closed]:slide-out-to-end-10 data-[state=open]:slide-in-from-end-10",
        ],
        positioner: "flex justify-end",
      },
      top: {
        content: [
          "border-b",
          "data-[state=closed]:slide-out-to-top-10 data-[state=open]:slide-in-from-top-10",
        ],
        positioner: "grid grid-rows-[auto_1fr] pb-12",
      },
    },
    variant: {
      default: {},
      inset: {
        content: [
          "sm:rounded-2xl sm:border",
          "sm:**:data-[scope=sheet]:data-[part=footer]:rounded-b-[calc(var(--radius-2xl)-1px)]",
        ],
        positioner: "sm:p-4",
      },
    },
  },
});

export type SheetVariantProps = VariantProps<typeof sheetVariants>;
export type SheetVariants = ReturnType<typeof sheetVariants>;
export type SheetSlots = keyof SheetVariants;
