import { tv, type VariantProps } from "tailwind-variants";

export const buttonGroupRecipe = tv({
  defaultVariants: {
    orientation: "horizontal",
  },
  slots: {
    base: [
      "flex w-fit items-stretch",
      "*:not([class*='w-']):w-fit",
      "*:not([class*='flex-']):flex-1",
      "*:focus-visible:relative *:focus-visible:z-10",
      "has-[>[data-scope=button-group][data-part=root]]:gap-2",
      "has-[select[aria-hidden=true]:last-child]:[&>[data-scope=select][data-part=trigger]:last-of-type]:rounded-e-md",
    ],
    separator: [
      "relative",
      "self-stretch",
      "bg-input",
      "data-[orientation=vertical]:h-auto",
      "m-0!",
    ],
    text: [
      "flex items-center gap-2 px-4",
      "font-medium text-sm",
      "rounded-md border bg-muted shadow-xs",
      "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
    ],
  },
  variants: {
    orientation: {
      horizontal: {
        base: [
          "[&>*:not(:first-child)]:rounded-s-none",
          "[&>*:not(:first-child)]:border-s-0",
          "[&>*:not(:last-child)]:rounded-e-none",
        ],
      },
      vertical: {
        base: [
          "flex-col",
          "[&>*:not(:first-child)]:rounded-t-none",
          "[&>*:not(:first-child)]:border-t-0",
          "[&>*:not(:last-child)]:rounded-b-none [&>*:not(:last-child)]:shadow-none",
        ],
      },
    },
  },
});

export type ButtonGroupVariantProps = VariantProps<typeof buttonGroupRecipe>;
export type ButtonGroupRecipe = ReturnType<typeof buttonGroupRecipe>;
export type ButtonGroupRecipeSlot = keyof ButtonGroupRecipe;
