import { Prose } from "@pisagor/react";
import { proseRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandProseRecipe = tv({
  base: [
    "[&_a]:text-emerald-700 [&_a]:decoration-emerald-500/40 [&_blockquote]:border-emerald-500/60 dark:[&_a]:text-emerald-300",
  ],
  extend: proseRecipe,
});

export function CustomRecipe() {
  return (
    <Prose recipe={brandProseRecipe}>
      <p>
        Read the <a href="https://example.com">release notes</a> before you
        upgrade.
      </p>
      <blockquote>Breaking changes are listed at the top.</blockquote>
    </Prose>
  );
}
