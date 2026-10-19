<script lang="ts" setup>
import { toggleGroupRecipe } from "@pisagor/recipes";
import { ToggleGroup } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandToggleGroupRecipe = tv({
  extend: toggleGroupRecipe,
  slots: { item: "data-[state=on]:bg-emerald-600 data-[state=on]:text-white" },
  variants: {},
});
</script>

<template>
  <ToggleGroup
    multiple
    :default-value="['bold']"
    :items="[
      { content: 'Bold', value: 'bold' },
      { content: 'Italic', value: 'italic' },
      { content: 'Underline', value: 'underline' },
    ]"
    :recipe="brandToggleGroupRecipe"
  />
</template>
