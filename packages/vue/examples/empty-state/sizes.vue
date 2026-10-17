<script lang="ts">
import source from "./sizes.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { EmptyState } from "@pisagor/vue";

const sizes = ["sm", "md", "lg"] as const;
</script>

<template>
  <div class="flex flex-col gap-4">
    <EmptyState
      description="No items match your current filters."
      title="No projects found"
      v-for="size in sizes"
      :key="size"
      :size="size"
    />
  </div>
</template>
