import { selectRecipe } from "@pisagor/recipes";
import { Select } from "@pisagor/solid";
import { tv } from "tailwind-variants";

const brandSelectRecipe = tv({
  extend: selectRecipe,
  slots: {
    content: "border-emerald-500/40",
    item: "data-highlighted:bg-emerald-500/10 data-highlighted:text-emerald-900 dark:data-highlighted:text-emerald-100",
    itemIndicator: "text-emerald-600",
    trigger: "data-[state=open]:border-emerald-600",
  },
  variants: {},
});

export function CustomRecipe() {
  return (
    <Select
      items={["Banana", "Apple", "Orange", "Pineapple"]}
      placeholder="Select a fruit"
      recipe={brandSelectRecipe}
    />
  );
}
