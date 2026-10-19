<script lang="ts" setup>
import { Input, InputGroup, NumberInput } from "@pisagor/vue";
</script>

<template>
  <InputGroup>
    <NumberInput.Root aria-label="Enter the amount" default-value="10">
      <NumberInput.Input as-child>
        <Input />
      </NumberInput.Input>
    </NumberInput.Root>
    <InputGroup.Addon>
      <InputGroup.Text>€</InputGroup.Text>
    </InputGroup.Addon>
    <InputGroup.Addon align="inline-end">
      <InputGroup.Text>EUR</InputGroup.Text>
    </InputGroup.Addon>
  </InputGroup>
</template>
