import { Textarea } from "@pisagor/react";
import { textareaRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandTextareaRecipe = tv({
  extend: textareaRecipe,
  slots: {
    clearableRoot: "caret-emerald-600",
    rootLayout:
      "caret-emerald-600 focus-visible:border-emerald-600 focus-visible:ring-emerald-600/24",
  },
  variants: {},
});

export function CustomRecipe() {
  return (
    <Textarea placeholder="Write a message…" recipe={brandTextareaRecipe} />
  );
}
