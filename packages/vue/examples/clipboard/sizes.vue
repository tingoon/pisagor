<script lang="ts">
import source from "./sizes.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Clipboard } from "@pisagor/vue";

const sizes = ["sm", "md", "lg"] as const;
const docsUrl = "https://example.com/docs";
</script>

<template>
  <div class="flex flex-col gap-2">
    <Clipboard
      v-for="size in sizes"
      :key="size"
      :size="size"
      :value="docsUrl"
    />
  </div>
</template>
