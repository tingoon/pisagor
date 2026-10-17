import { Surface } from "@pisagor/react";
import { surfaceRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandSurfaceRecipe = tv({
  base: surfaceRecipe.base,
  extend: surfaceRecipe,
  variants: {
    variant: {
      default: ["border-emerald-500/40 bg-emerald-500/5"],
    },
  },
});

export function CustomRecipe() {
  return (
    <Surface bordered className="p-4 text-sm" recipe={brandSurfaceRecipe}>
      Workspace settings
    </Surface>
  );
}
