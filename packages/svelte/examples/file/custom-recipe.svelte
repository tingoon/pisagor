<script lang="ts">
import { fileRecipe } from "@pisagor/recipes";
import { File } from "@pisagor/svelte";
import { tv } from "tailwind-variants";

const brandFileRecipe = tv({
  extend: fileRecipe,
  slots: {
    base: "border-emerald-500/40 bg-emerald-500/5",
    name: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});
</script>

<File
  meta="PDF document"
  name="brand-guidelines.pdf"
  recipe={brandFileRecipe}
  size={245_760}
/>
