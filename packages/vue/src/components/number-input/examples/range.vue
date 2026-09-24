<script lang="ts" setup>
import { NumberInput } from "..";
</script>

<template>
  <NumberInput default-value="5" :max="10" :min="0">
    <NumberInput.Control>
      <NumberInput.DecrementTrigger />
      <NumberInput.Input />
      <NumberInput.IncrementTrigger />
    </NumberInput.Control>
  </NumberInput>
</template>
