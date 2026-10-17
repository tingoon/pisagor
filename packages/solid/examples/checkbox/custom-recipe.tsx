import source from "./custom-recipe.tsx?raw";
import { checkboxRecipe } from "@pisagor/recipes";
import { Checkbox, Field } from "@pisagor/solid";
import { tv } from "tailwind-variants";

const brandCheckboxRecipe = tv({
  extend: checkboxRecipe,
  slots: {
    indicator:
      "text-white data-[state=checked]:border-emerald-600 data-[state=checked]:bg-emerald-600",
  },
  variants: {},
});

export function CustomRecipe() {
  return (
    <Field orientation="horizontal">
      <Checkbox recipe={brandCheckboxRecipe} />
      <Field.Label>Accept terms and conditions</Field.Label>
    </Field>
  );
}

export { source as CustomRecipeSource };
