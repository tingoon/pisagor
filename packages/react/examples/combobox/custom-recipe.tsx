import { Combobox } from "@pisagor/react";
import { comboboxRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandComboboxRecipe = tv({
  extend: comboboxRecipe,
  slots: {
    content: "border-emerald-500/40",
    item: "data-highlighted:bg-emerald-500/10 data-highlighted:text-emerald-900 dark:data-highlighted:text-emerald-100",
  },
  variants: {},
});

export function CustomRecipe() {
  return (
    <Combobox
      items={[
        { label: "Apple", value: "apple" },
        { label: "Banana", value: "banana" },
        { label: "Cherry", value: "cherry" },
        { label: "Date", value: "date" },
      ]}
      recipe={brandComboboxRecipe}
    />
  );
}
