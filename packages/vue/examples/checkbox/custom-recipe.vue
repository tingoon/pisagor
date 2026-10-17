<script lang="ts">
import source from "./custom-recipe.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { checkboxRecipe } from "@pisagor/recipes";
import { Checkbox, Field } from "@pisagor/vue";
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

<template>
  <Field orientation="horizontal">
    <Checkbox :recipe="brandCheckboxRecipe" />
    <Field.Label>Accept terms and conditions</Field.Label>
  </Field>
</template>
