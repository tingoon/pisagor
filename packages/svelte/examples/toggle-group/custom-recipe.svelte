<script lang="ts">
import { toggleGroupRecipe } from "@pisagor/recipes";
import { ToggleGroup } from "@pisagor/svelte";
import { tv } from "tailwind-variants";

const brandToggleGroupRecipe = tv({
  extend: toggleGroupRecipe,
  slots: { item: "data-[state=on]:bg-emerald-600 data-[state=on]:text-white" },
  variants: {},
});
</script>

<ToggleGroup
  defaultValue={["bold"]}
  items={[
    { children: "Bold", value: "bold" },
    { children: "Italic", value: "italic" },
    { children: "Underline", value: "underline" },
  ]}
  multiple
  recipe={brandToggleGroupRecipe}
/>
