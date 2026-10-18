import { toggleRecipe } from "@pisagor/recipes";
import { Toggle } from "@pisagor/solid";
import { tv } from "tailwind-variants";

const brandToggleRecipe = tv({
  base: ["data-[state=on]:bg-emerald-600 data-[state=on]:text-white"],
  extend: toggleRecipe,
});

export function CustomRecipe() {
  return (
    <Toggle defaultPressed recipe={brandToggleRecipe}>
      Bold
    </Toggle>
  );
}
