<script lang="ts" setup>
import { Card } from "@pisagor/vue";

const sizes = ["sm", "md", "lg"] as const;
</script>

<template>
  <div class="flex flex-col gap-4">
    <Card v-for="size in sizes" :key="size" :size="size">
      <Card.Header>
        <Card.Title>Card header</Card.Title>
        <Card.Description>Size {{ size }}</Card.Description>
      </Card.Header>
      <Card.Content>
        <p class="text-muted-foreground text-sm">Card content</p>
      </Card.Content>
    </Card>
  </div>
</template>
