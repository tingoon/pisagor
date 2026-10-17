<script lang="ts" setup>
import { kbdRecipe } from "@pisagor/recipes";
import { Kbd } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandKbdRecipe = tv({
  base: ["font-mono"],
  extend: kbdRecipe,
  variants: {
    variant: {
      default: [
        "border-emerald-500/40 bg-emerald-500/10 text-emerald-900 dark:text-emerald-100",
      ],
    },
  },
});
</script>

<template>
  <div class="flex gap-2">
    <Kbd>⌘K</Kbd>
    <Kbd :recipe="brandKbdRecipe">⌘K</Kbd>
  </div>
</template>
