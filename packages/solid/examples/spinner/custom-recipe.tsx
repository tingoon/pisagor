import source from "./custom-recipe.tsx?raw";
import { spinnerRecipe } from "@pisagor/recipes";
import { Spinner } from "@pisagor/solid";
import { tv } from "tailwind-variants";

const brandSpinnerRecipe = tv({
  base: ["text-emerald-600"],
  extend: spinnerRecipe,
});

export function CustomRecipe() {
  return <Spinner recipe={brandSpinnerRecipe} />;
}

export { source as CustomRecipeSource };
