<script lang="ts" setup>
import { Input, NumberInput } from "@pisagor/vue";
</script>

<template>
  <NumberInput.Root default-value="0">
    <NumberInput.Control>
      <NumberInput.Input as-child>
        <Input />
      </NumberInput.Input>
    </NumberInput.Control>
  </NumberInput.Root>
</template>
