<script setup lang="ts">
import { NumberInput } from "@pisagor/vue";
import { Field } from "..";
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
