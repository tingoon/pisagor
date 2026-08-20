import { tv, type VariantProps } from "tailwind-variants";

export const toggleGroupVariants = tv({
  base: ["w-fit", "flex items-center gap-[--spacing(var(--gap))]", "rounded-lg"],
  defaultVariants: {
    orientation: "horizontal",
  },
  variants: {
    orientation: {
      horizontal: "flex-row pointer-coarse:*:after:min-w-auto",
      vertical: "flex-col items-stretch pointer-coarse:*:after:min-h-auto",
    },
  },
});

export const toggleGroupInlineVariants = tv({
  base: [
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
});

export type ToggleGroupVariantProps = VariantProps<typeof toggleGroupVariants>;
export type ToggleGroupVariants = ReturnType<typeof toggleGroupVariants>;

export type ToggleGroupInlineVariantProps = VariantProps<typeof toggleGroupInlineVariants>;
export type ToggleGroupInlineVariants = ReturnType<typeof toggleGroupInlineVariants>;
