import { tv, type VariantProps } from "tailwind-variants";

export const contextMenuRecipe = tv({
  base: "cursor-default",
});

export type ContextMenuVariantProps = VariantProps<typeof contextMenuRecipe>;
export type ContextMenuSlots = ReturnType<typeof contextMenuRecipe>;
