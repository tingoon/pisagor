import { toggleGroupRecipe } from "@pisagor/recipes";
import { ToggleGroup } from "@pisagor/solid";
import { tv } from "tailwind-variants";

const brandToggleGroupRecipe = tv({
  extend: toggleGroupRecipe,
  slots: { item: "data-[state=on]:bg-emerald-600 data-[state=on]:text-white" },
  variants: {},
});

export function CustomRecipe() {
  return (
    <ToggleGroup
      defaultValue={["bold"]}
      items={[
        { children: "Bold", value: "bold" },
        { children: "Italic", value: "italic" },
        { children: "Underline", value: "underline" },
      ]}
      multiple
      recipe={brandToggleGroupRecipe}
    />
  );
}
