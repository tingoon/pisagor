<script lang="ts" setup>
import { RadioGroup } from "@pisagor/vue";
import { ref } from "vue";

const value = ref<string | null>(null);
const items = [
  { label: "Default", value: "default" },
  { label: "Comfortable", value: "comfortable" },
  { label: "Compact", value: "compact" },
];
function onValueChange(next: typeof value.value) {
  value.value = next;
}
</script>

<template>
  <div class="flex flex-col items-center gap-2 text-center text-sm">
    <p>Select the option comfortable</p>
    <RadioGroup :items="items" :value="value" @value-change="onValueChange" />
    <p class="text-center">{{ value === "comfortable" ? "✅" : "❌" }}</p>
  </div>
</template>
