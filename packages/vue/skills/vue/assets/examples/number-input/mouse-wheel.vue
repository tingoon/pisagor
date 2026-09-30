<script lang="ts" setup>
import { NumberInput } from "../../../../../src/components/number-input";
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
