import { tv, type VariantProps } from "tailwind-variants";

export const toggleGroupRecipe = tv({
  defaultVariants: {
    orientation: "horizontal",
  },
  slots: {
    base: ["w-fit", "flex items-center gap-[--spacing(var(--gap))]", "rounded-lg"],
    item: [
      "shrink-0 focus:z-10 focus-visible:z-10",
      "data-[spacing=0]:rounded-none",
      "data-[spacing=0]:px-2",
      "data-[orientation=horizontal]:data-[spacing=0]:first:rounded-s-lg",
      "data-[orientation=vertical]:data-[spacing=0]:first:rounded-t-lg",
      "data-[orientation=horizontal]:data-[spacing=0]:last:rounded-e-lg",
      "data-[orientation=vertical]:data-[spacing=0]:last:rounded-b-lg",
      "data-[orientation=horizontal]:data-[spacing=0]:data-[variant=outline]:border-s-0",
      "data-[orientation=vertical]:data-[spacing=0]:data-[variant=outline]:border-t-0",
      "data-[orientation=horizontal]:data-[spacing=0]:data-[variant=outline]:first:border-s",
    ],
  },
  variants: {
    orientation: {
      horizontal: {
        base: "flex-row pointer-coarse:*:after:min-w-auto",
      },
      vertical: {
        base: "flex-col items-stretch pointer-coarse:*:after:min-h-auto",
      },
    },
  },
});

export type ToggleGroupVariantProps = VariantProps<typeof toggleGroupRecipe>;
export type ToggleGroupSlots = ReturnType<typeof toggleGroupRecipe>;
