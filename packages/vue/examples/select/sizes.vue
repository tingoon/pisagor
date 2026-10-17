<script lang="ts" setup>
import { Select } from "@pisagor/vue";

const items = [
  { label: "Next.js", value: "next" },
  { label: "Vite", value: "vite" },
  { label: "ESBuild", value: "esbuild" },
];
const sizes = ["sm", "md", "lg"] as const;
</script>

<template>
  <div class="flex flex-col gap-2">
    <Select
      placeholder="Select framework"
      v-for="size in sizes"
      :key="size"
      :items="items"
      :size="size"
    />
  </div>
</template>
