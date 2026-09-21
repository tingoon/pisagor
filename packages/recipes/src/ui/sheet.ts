import { tv, type VariantProps } from "tailwind-variants";

export const sheetRecipe = tv({
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
      "bg-popover/92 backdrop-blur-2xl backdrop-saturate-150",
      "text-popover-foreground",
      "shadow-lg",
      "transition-[opacity,translate] duration-slow ease-emphasized will-change-transform",
      "data-[state=closed]:fade-out-0 data-[state=closed]:animate-out",
      "data-[state=open]:fade-in-0 data-[state=open]:animate-in",
      "transparency-reduce:bg-popover transparency-reduce:backdrop-blur-none transparency-reduce:backdrop-saturate-100",
      "contrast-more:bg-popover contrast-more:backdrop-blur-none",
      "motion-reduce:animate-none! motion-reduce:transition-none!",
    ],
    footer: "sm:rounded-none",
    inline: ["absolute inset-e-2 top-2 opacity-64 hover:opacity-100"],
    positioner: ["fixed inset-0 z-modal grid h-svh w-screen"],
  },
  variants: {
    placement: {
      bottom: {
        content: [
          "row-start-2 border-t border-border/40",
          "rounded-t-3xl",
          "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        ],
        positioner: "grid grid-rows-[1fr_auto] pt-12",
      },
      left: {
        content: [
          "w-[calc(100%-(--spacing(12)))] max-w-md",
          "col-start-2",
          "border-e border-border/40",
          "rounded-e-3xl",
          "data-[state=closed]:slide-out-to-start data-[state=open]:slide-in-from-start",
        ],
        positioner: "flex justify-start",
      },
      right: {
        content: [
          "w-[calc(100%-(--spacing(12)))] max-w-md",
          "col-start-2",
          "border-s border-border/40",
          "rounded-s-3xl",
          "data-[state=closed]:slide-out-to-end data-[state=open]:slide-in-from-end",
        ],
        positioner: "flex justify-end",
      },
      top: {
        content: [
          "border-b border-border/40",
          "rounded-b-3xl",
          "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        ],
        positioner: "grid grid-rows-[auto_1fr] pb-12",
      },
    },
    variant: {
      default: {},
      inset: {
        content: [
          "sm:rounded-3xl sm:border sm:border-border/50",
          "sm:**:data-[scope=sheet]:data-[part=footer]:rounded-b-[calc(var(--radius-3xl)-1px)]",
        ],
        positioner: "sm:p-4",
      },
    },
  },
});

export type SheetVariantProps = VariantProps<typeof sheetRecipe>;
export type SheetRecipe = ReturnType<typeof sheetRecipe>;
export type SheetRecipeSlot = keyof SheetRecipe;
