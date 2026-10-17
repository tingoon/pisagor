<script module lang="ts">
  import source from "./custom-recipe.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { checkboxRecipe } from "@pisagor/recipes";
  import { Checkbox, Field } from "@pisagor/svelte";
  import { tv } from "tailwind-variants";

  const brandCheckboxRecipe = tv({
    extend: checkboxRecipe,
    slots: {
      indicator:
        "text-white data-[state=checked]:border-emerald-600 data-[state=checked]:bg-emerald-600",
    },
    variants: {},
  });
</script>

<Field orientation="horizontal">
  <Checkbox recipe={brandCheckboxRecipe} />
  <Field.Label>Accept terms and conditions</Field.Label>
</Field>
