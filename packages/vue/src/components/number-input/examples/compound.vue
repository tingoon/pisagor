<script lang="ts" setup>
import { NumberInput } from "..";
</script>

<template>
  <NumberInput default-value="5">
    <NumberInput.Control>
      <NumberInput.DecrementTrigger />
      <NumberInput.Input placeholder="0" />
      <NumberInput.IncrementTrigger />
    </NumberInput.Control>
  </NumberInput>
</template>
