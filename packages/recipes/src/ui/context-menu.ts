import { tv, type VariantProps } from "tailwind-variants";

export const contextMenuVariants = tv({
  base: "cursor-default",
});

export type ContextMenuVariantProps = VariantProps<typeof contextMenuVariants>;
export type ContextMenuVariants = ReturnType<typeof contextMenuVariants>;
