import { highlightRecipe } from "@pisagor/recipes";
import { Highlight } from "@pisagor/solid";
import { tv } from "tailwind-variants";

const brandHighlightRecipe = tv({
  base: ["bg-emerald-500/20 text-emerald-800 dark:text-emerald-200"],
  extend: highlightRecipe,
});

export function CustomRecipe() {
  return (
    <p class="text-base text-foreground leading-relaxed">
      <Highlight
        query="Pisagor"
        recipe={brandHighlightRecipe}
        text="Build faster with Pisagor components."
      />
    </p>
  );
}
