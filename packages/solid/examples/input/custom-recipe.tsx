import { inputRecipe } from "@pisagor/recipes";
import { Input } from "@pisagor/solid";
import { tv } from "tailwind-variants";

const brandInputRecipe = tv({
  extend: inputRecipe,
  slots: {
    clearableRoot: "caret-emerald-600",
  },
  variants: {},
});

export function CustomRecipe() {
  return <Input clearable defaultValue="Pisagor" recipe={brandInputRecipe} />;
}
