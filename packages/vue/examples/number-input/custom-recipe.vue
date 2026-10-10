<script lang="ts" setup>
import { numberInputRecipe } from "@pisagor/recipes";
import { NumberInput } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandNumberInputRecipe = tv({
  extend: numberInputRecipe,
  slots: {
    control: "focus-within:border-emerald-600",
    decrementTrigger: "text-emerald-600",
    incrementTrigger: "text-emerald-600",
    input: "caret-emerald-600",
  },
  variants: {},
});
</script>

<template>
  <NumberInput default-value="1" :recipe="brandNumberInputRecipe" />
</template>
