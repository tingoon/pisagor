<script lang="ts" setup>
import { PhMinus, PhPlus } from "@phosphor-icons/vue";
import { Button, Field, Input, NumberInput } from "@pisagor/vue";
</script>

<template>
  <Field>
    <NumberInput.Root default-value="50" :max="100" :min="1">
      <NumberInput.Scrubber as-child>
        <NumberInput.Label as-child>
          <Field.Label>Quantity</Field.Label>
        </NumberInput.Label>
      </NumberInput.Scrubber>
      <NumberInput.Control>
        <NumberInput.DecrementTrigger as-child>
          <Button variant="ghost">
            <PhMinus aria-hidden />
          </Button>
        </NumberInput.DecrementTrigger>
        <NumberInput.Input as-child>
          <Input />
        </NumberInput.Input>
        <NumberInput.IncrementTrigger as-child>
          <Button variant="ghost">
            <PhPlus aria-hidden />
          </Button>
        </NumberInput.IncrementTrigger>
      </NumberInput.Control>
    </NumberInput.Root>
  </Field>
</template>
