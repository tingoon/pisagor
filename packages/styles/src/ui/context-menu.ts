import { tv, type VariantProps } from "tailwind-variants";

export const contextMenuTriggerVariants = tv({
  base: "cursor-default",
});
export type ContextMenuTriggerVariantProps = VariantProps<typeof contextMenuTriggerVariants>;
