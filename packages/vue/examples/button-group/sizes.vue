<script lang="ts">
import source from "./sizes.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Button, ButtonGroup } from "@pisagor/vue";

const sizes = ["sm", "md", "lg"] as const;
</script>

<template>
  <div class="flex flex-col items-start gap-2">
    <ButtonGroup v-for="size in sizes" :key="size" :size="size">
      <Button variant="outline" :size="size">Archive</Button>
      <Button variant="outline" :size="size">Report</Button>
    </ButtonGroup>
  </div>
</template>
