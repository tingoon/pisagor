<script lang="ts">
import source from "./field-only.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { NumberInput } from "@pisagor/vue";
</script>

<template>
  <NumberInput default-value="0">
    <NumberInput.Control>
      <NumberInput.Input />
    </NumberInput.Control>
  </NumberInput>
</template>
