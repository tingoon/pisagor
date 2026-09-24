<script lang="ts" setup>
import { Card } from "..";
</script>

<template>
  <Card class="overflow-hidden">
    <Card.Media class="h-32 bg-muted" variant="image" />
    <Card.Header description="Product description" title="Product title" />
    <Card.Footer>
      <p class="text-muted-foreground text-sm">Footer actions</p>
    </Card.Footer>
  </Card>
</template>
