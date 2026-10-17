<script lang="ts" setup>
import { listboxRecipe } from "@pisagor/recipes";
import { Listbox } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandListboxRecipe = tv({
  extend: listboxRecipe,
  slots: { content: "rounded-xl border border-emerald-500/30 p-1" },
  variants: {},
});
</script>

<template>
  <Listbox
    :default-value="['br']"
    :items="[
      { label: 'Brazil', value: 'br' },
      { label: 'Mexico', value: 'mx' },
      { label: 'Ireland', value: 'ie' },
    ]"
    :recipe="brandListboxRecipe"
  />
</template>
