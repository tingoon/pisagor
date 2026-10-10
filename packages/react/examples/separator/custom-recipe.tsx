import { Separator } from "@pisagor/react";
import { separatorRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandSeparatorRecipe = tv({
  base: ["bg-emerald-500/40"],
  extend: separatorRecipe,
});

export function CustomRecipe() {
  return (
    <div className="flex flex-col gap-2 text-sm">
      <div className="flex flex-col gap-1">
        <h4 className="font-medium leading-none">Acme UI</h4>
        <p className="text-muted-foreground">
          A set of primitive components for building UI.
        </p>
      </div>
      <Separator recipe={brandSeparatorRecipe} />
      <div>
        A collection of accessible, beautiful, and customizable components.
      </div>
    </div>
  );
}
