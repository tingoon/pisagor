<script lang="ts" setup>
import { ref } from "vue";
import { NumberInput } from "..";

const value = ref("1");
const onValueChange = (value) => setValue(String(value));
</script>

<template>
  <div class="flex flex-col gap-2 text-center text-sm">
    <p>Select the number 3</p>
    <NumberInput :value="value" @value-change="onValueChange">
      <NumberInput.Control>
        <NumberInput.DecrementTrigger />
        <NumberInput.Input />
        <NumberInput.IncrementTrigger />
      </NumberInput.Control>
    </NumberInput>
    <p class="text-center">{{ value === "3" ? "✅" : "❌" }}</p>
  </div>
</template>
