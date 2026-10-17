<script lang="ts">
import source from "./sizes.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Card } from "@pisagor/vue";

const sizes = ["sm", "md", "lg"] as const;
</script>

<template>
  <div class="flex flex-col gap-4">
    <Card v-for="size in sizes" :key="size" :size="size">
      <Card.Header title="Card header" :description="`Size ${size}`" />
      <Card.Content>
        <p class="text-muted-foreground text-sm">Card content</p>
      </Card.Content>
    </Card>
  </div>
</template>
