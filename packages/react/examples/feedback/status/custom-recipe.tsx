import { Status } from "@pisagor/react";
import { statusRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandStatusRecipe = tv({
  base: ["ring-emerald-100 dark:ring-emerald-950"],
  extend: statusRecipe,
  variants: {
    variant: {
      default: ["bg-emerald-600 text-white"],
    },
  },
});

export function CustomRecipe() {
  return (
    <div className="flex items-center gap-2">
      <Status />
      <Status recipe={brandStatusRecipe} />
    </div>
  );
}
