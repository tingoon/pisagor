<script lang="ts" setup>
import { PhMinus, PhPlus } from "@phosphor-icons/vue";
import { Button, Input, NumberInput } from "@pisagor/vue";
</script>

<template>
  <NumberInput.Root allow-mouse-wheel default-value="10">
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
</template>
