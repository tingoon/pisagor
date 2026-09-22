<script setup lang="ts">
import { ref } from "vue";
import { RadioGroup } from "..";

const value = ref(null);
const items = [
  { label: "Default", value: "default" },
  { label: "Comfortable", value: "comfortable" },
  { label: "Compact", value: "compact" },
];
const onValueChange = setValue;
</script>

<template>
        <div class="flex flex-col items-center gap-2 text-center text-sm">
          <p>Select the option comfortable</p>
          <RadioGroup :items="items" @value-change="onValueChange" :value="value" />
          <p class="text-center">{{ value === "comfortable" ? "✅" : "❌" }}</p>
        </div>
  
</template>
