<script lang="ts">
import source from "./default.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Highlight } from "@pisagor/vue";
</script>

<template>
  <div class="bg-card w-96 rounded-xl border p-4 text-sm">
    <Highlight
      query="accessible"
      text="Build accessible interfaces with reusable UI components."
    />
  </div>
</template>
