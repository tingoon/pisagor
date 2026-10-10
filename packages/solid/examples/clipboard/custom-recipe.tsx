import { clipboardRecipe } from "@pisagor/recipes";
import { Clipboard } from "@pisagor/solid";
import { tv } from "tailwind-variants";

const brandClipboardRecipe = tv({
  extend: clipboardRecipe,
  slots: {
    indicator: "text-emerald-600",
    value: "font-medium text-emerald-700 dark:text-emerald-300",
  },
  variants: {},
});

export function CustomRecipe() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Clipboard
        recipe={brandClipboardRecipe}
        value="https://example.com/docs"
        variant="input"
      />
      <Clipboard value="https://example.com/docs" variant="button" />
      <Clipboard value="https://example.com/docs" variant="value" />
    </div>
  );
}
