<script lang="ts">
import source from "./input-group-with-number-input.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { InputGroup, NumberInput } from "@pisagor/vue";
</script>

<template>
  <InputGroup>
    <NumberInput aria-label="Enter the amount" default-value="10">
      <NumberInput.Input />
    </NumberInput>
    <InputGroup.Addon>
      <InputGroup.Text>€</InputGroup.Text>
    </InputGroup.Addon>
    <InputGroup.Addon align="inline-end">
      <InputGroup.Text>EUR</InputGroup.Text>
    </InputGroup.Addon>
  </InputGroup>
</template>
