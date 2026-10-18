import { Badge } from "@pisagor/react";
import { badgeRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandBadgeRecipe = tv({
  base: ["rounded-full"],
  extend: badgeRecipe,
  variants: {
    variant: {
      default: ["bg-emerald-600 text-white [a&]:hover:bg-emerald-700"],
    },
  },
});

export function CustomRecipe() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default recipe</Badge>
      <Badge recipe={brandBadgeRecipe}>Brand recipe</Badge>
    </div>
  );
}
