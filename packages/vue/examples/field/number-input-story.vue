<script lang="ts">
import source from "./number-input-story.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Field, NumberInput } from "@pisagor/vue";
</script>

<template>
  <Field>
    <NumberInput default-value="50" :max="100" :min="1">
      <NumberInput.Scrubber>Quantity</NumberInput.Scrubber>
      <NumberInput.Control>
        <NumberInput.DecrementTrigger />
        <NumberInput.Input />
        <NumberInput.IncrementTrigger />
      </NumberInput.Control>
    </NumberInput>
  </Field>
</template>
