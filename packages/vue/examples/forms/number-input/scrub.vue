<script lang="ts" setup>
import { Field, Input, NumberInput } from "@pisagor/vue";
</script>

<template>
  <NumberInput.Root default-value="10">
    <NumberInput.Scrubber as-child>
      <NumberInput.Label as-child>
        <Field.Label>Opacity</Field.Label>
      </NumberInput.Label>
    </NumberInput.Scrubber>
    <NumberInput.Control>
      <NumberInput.Input as-child>
        <Input />
      </NumberInput.Input>
    </NumberInput.Control>
  </NumberInput.Root>
</template>
