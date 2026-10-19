<script lang="ts" setup>
import { PhMinus, PhPlus } from "@phosphor-icons/vue";
import { Button, Input, NumberInput } from "@pisagor/vue";
import { ref } from "vue";

const value = ref("1");
function onValueChange(next: number | string) {
  value.value = String(next);
}
</script>

<template>
  <div class="flex flex-col gap-2 text-center text-sm">
    <p>Select the number 3</p>
    <NumberInput.Root :value="value" @value-change="onValueChange">
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
    <p class="text-center">{{ value === "3" ? "✅" : "❌" }}</p>
  </div>
</template>
