<script lang="ts" setup>
import { Button } from "@pisagor/vue";
import { VisuallyHidden } from "../../src/components/visually-hidden";
</script>

<template>
  <Button size="icon-md" variant="outline">
    <span aria-hidden="true">×</span>
    <VisuallyHidden>Close</VisuallyHidden>
  </Button>
</template>
