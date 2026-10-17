<script lang="ts">
import source from "./sizes.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Frame } from "@pisagor/vue";

const sizes = ["sm", "md", "lg"] as const;
</script>

<template>
  <div class="flex flex-col gap-4">
    <Frame v-for="size in sizes" :key="size" :size="size">
      <Frame.Header>
        <Frame.Title>Section {{ size }}</Frame.Title>
      </Frame.Header>
      <Frame.Panel>
        <p class="text-muted-foreground text-sm">Section content</p>
      </Frame.Panel>
    </Frame>
  </div>
</template>
