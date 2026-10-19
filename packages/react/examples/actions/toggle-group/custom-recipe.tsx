import { ToggleGroup } from "@pisagor/react";
import { toggleGroupRecipe } from "@pisagor/recipes";
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
        { content: "Bold", value: "bold" },
        { content: "Italic", value: "italic" },
        { content: "Underline", value: "underline" },
      ]}
      multiple
      recipe={brandToggleGroupRecipe}
    />
  );
}
