<script lang="ts" setup>
import { Field } from "@pisagor/vue";
import { NumberInput } from "..";
</script>

<template>
  <div class="flex flex-col gap-6">
    <NumberInput default-value="0" :step="5">
      <Field.Label>Step 5</Field.Label>
      <NumberInput.Control>
        <NumberInput.DecrementTrigger />
        <NumberInput.Input />
        <NumberInput.IncrementTrigger />
      </NumberInput.Control>
    </NumberInput>
    <NumberInput default-value="0.1" :step="0.1">
      <Field.Label>Step 0.1</Field.Label>
      <NumberInput.Control>
        <NumberInput.DecrementTrigger />
        <NumberInput.Input />
        <NumberInput.IncrementTrigger />
      </NumberInput.Control>
    </NumberInput>
  </div>
</template>
