<script lang="ts">
import source from "./sizes.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { SegmentGroup } from "@pisagor/vue";

const sizes = ["sm", "md", "lg"] as const;
const items = [
  { label: "Profile", value: "Profile" },
  { label: "Account", value: "Account" },
  { label: "Security", value: "Security" },
];
</script>

<template>
  <div class="flex flex-col items-start gap-2">
    <SegmentGroup
      default-value="Profile"
      v-for="size in sizes"
      :key="size"
      :items="items"
      :size="size"
    />
  </div>
</template>
