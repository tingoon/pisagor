<script lang="ts" setup>
import { scrollAreaRecipe } from "@pisagor/recipes";
import { ScrollArea, Separator } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const tags = Array.from({ length: 50 }, (_, i) => `v1.0.0-beta.${i}`);

const brandScrollAreaRecipe = tv({
  extend: scrollAreaRecipe,
  slots: { thumb: "bg-emerald-600/40" },
  variants: {},
});
</script>

<template>
  <ScrollArea
    class="h-64 w-48 rounded-md border"
    :recipe="brandScrollAreaRecipe"
  >
    <div class="p-4">
      <h4 class="mb-4 font-medium text-sm leading-none">Tags</h4>
      <template v-for="tag in tags" :key="tag">
        <div class="text-sm">{{ tag }}</div>
        <Separator class="my-2" />
      </template>
    </div>
  </ScrollArea>
</template>
