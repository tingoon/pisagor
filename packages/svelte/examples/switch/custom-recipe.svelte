<script lang="ts">
import { switchRecipe } from "@pisagor/recipes";
import { Field, Switch } from "@pisagor/svelte";
import { tv } from "tailwind-variants";

const brandSwitchRecipe = tv({
  extend: switchRecipe,
  slots: { base: "data-[state=checked]:bg-emerald-600" },
  variants: {},
});
</script>

<Field orientation="horizontal">
  <Switch recipe={brandSwitchRecipe} />
  <Field.Label>Airplane mode</Field.Label>
</Field>
