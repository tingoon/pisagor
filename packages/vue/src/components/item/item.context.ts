import type { ItemVariantProps, ItemVariants } from "@pisagor/recipes/item";
import { type MaybeRef, unref } from "vue";
import { createContext } from "../../utils/create-context";

export interface ItemContextValue extends ItemVariantProps {
  slots: ItemVariants;
}

export const [provideItemContext, , useItemContextRef] = createContext<ItemContextValue>({
  name: "Item",
});

export function useItem(): MaybeRef<ItemContextValue> {
  const context = useItemContextRef();

  if (context === undefined) {
    throw new Error("useItem must be used within ItemContext.");
  }

  return context;
}

export function useItemSlots() {
  return unref(useItem()).slots;
}

export function resolveItemVariant(
  itemVariant: ItemVariantProps["variant"],
  groupVariant: ItemVariantProps["variant"],
): NonNullable<ItemVariantProps["variant"]> {
  return itemVariant ?? groupVariant ?? "default";
}
