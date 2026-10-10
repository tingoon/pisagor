<script lang="ts">
import { comboboxRecipe } from "@pisagor/recipes";
import { Autocomplete } from "@pisagor/svelte";
import { tv } from "tailwind-variants";

const brandAutocompleteRecipe = tv({
  extend: comboboxRecipe,
  slots: {
    content: "border-emerald-500/40",
    item: "data-highlighted:bg-emerald-500/10 data-highlighted:text-emerald-900 dark:data-highlighted:text-emerald-100",
  },
  variants: {},
});
</script>

<Autocomplete
  items={[
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
    { label: "Date", value: "date" },
  ]}
  recipe={brandAutocompleteRecipe}
/>
