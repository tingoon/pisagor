<script lang="ts">
import source from "./mouse-wheel.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { NumberInput } from "@pisagor/vue";
</script>

<template>
  <NumberInput allow-mouse-wheel default-value="10">
    <NumberInput.Control>
      <NumberInput.DecrementTrigger />
      <NumberInput.Input />
      <NumberInput.IncrementTrigger />
    </NumberInput.Control>
  </NumberInput>
</template>
