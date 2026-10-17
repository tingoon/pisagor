<script lang="ts">
import source from "./default.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Button, VisuallyHidden } from "@pisagor/vue";
</script>

<template>
  <Button size="icon-md" variant="outline">
    <span aria-hidden="true">×</span>
    <VisuallyHidden>Close</VisuallyHidden>
  </Button>
</template>
