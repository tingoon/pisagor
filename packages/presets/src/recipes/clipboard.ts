import { tv, type VariantProps } from "tailwind-variants";

export const clipboardRecipe = tv({
  defaultVariants: {
    /** Size scale of the input, label, and copy control. */
    size: "md",
    /** Height scale when showing the value text. */
    valueSize: "md",
  },
  slots: {
    control: ["flex items-center gap-2"],
    field: ["flex flex-col gap-1.5"],
    indicator: ["pointer-events-none"],
    input: ["peer", "w-full min-w-0", "px-3", "text-base md:text-sm", "h-8"],
    label: ["text-sm font-medium"],
    value: ["inline-flex items-center", "px-3", "text-base md:text-sm"],
  },
  variants: {
    size: {
      lg: { input: "h-9", label: "text-base" },
      md: {},
      sm: { input: "h-7", label: "text-xs" },
    },
    valueSize: {
      lg: { value: "h-9" },
      md: { value: "h-8" },
      sm: { value: "h-7" },
      xl: { value: "h-10" },
      xs: { value: "h-6" },
    },
  },
});

export type ClipboardRecipeFn = typeof clipboardRecipe;
export type ClipboardVariantProps = VariantProps<ClipboardRecipeFn>;
export type ClipboardRecipe = ReturnType<ClipboardRecipeFn>;
export type ClipboardRecipeSlot = keyof ClipboardRecipe;
