<script lang="ts" setup>
import { NumberInput } from "..";
</script>

<template>
  <NumberInput
    default-value="19.00"
    :format-options="{ currency: 'USD', style: 'currency' }"
  >
    <NumberInput.Control>
      <NumberInput.DecrementTrigger />
      <NumberInput.Input />
      <NumberInput.IncrementTrigger />
    </NumberInput.Control>
  </NumberInput>
</template>
