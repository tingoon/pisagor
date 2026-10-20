<script lang="ts" setup>
import { PhMinus, PhPlus } from "@phosphor-icons/vue";
import { Button, Field, Input, NumberInput } from "@pisagor/vue";
</script>

<template>
  <div class="flex flex-col gap-6">
    <NumberInput.Root default-value="0" :step="5">
      <Field.Label>Step 5</Field.Label>
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
    <NumberInput.Root default-value="0.1" :step="0.1">
      <Field.Label>Step 0.1</Field.Label>
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
  </div>
</template>
