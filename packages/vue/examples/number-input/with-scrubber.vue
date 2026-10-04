<script lang="ts" setup>
import { NumberInput } from "../../src/components/number-input";
</script>

<template>
  <NumberInput default-value="10">
    <NumberInput.Scrubber>Opacity</NumberInput.Scrubber>
    <NumberInput.Control>
      <NumberInput.Input />
    </NumberInput.Control>
  </NumberInput>
</template>
