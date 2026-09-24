<script lang="ts" setup>
import { ref } from "vue";
import { ToggleGroup } from "..";

const fontWeights = [
  { className: "font-light", label: "Light", value: "light" },
  { className: "font-normal", label: "Normal", value: "normal" },
  { className: "font-medium", label: "Medium", value: "medium" },
  { className: "font-bold", label: "Bold", value: "bold" },
] as const;

const value = ref(["normal"]);

function handleValueChange(next: string | string[]) {
  value.value = Array.isArray(next) ? next : [next];
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex flex-col gap-2">
      <span class="font-medium text-sm">Font weight</span>
      <ToggleGroup.Root
        class="flex-wrap"
        size="lg"
        variant="outline"
        :multiple="false"
        :spacing="2"
        :value="value"
        @value-change="handleValueChange"
      >
        <ToggleGroup.Item
          class="size-16 flex-col gap-1 py-2"
          v-for="weight in fontWeights"
          :key="weight.value"
          :aria-label="`Set font weight to ${weight.label}`"
          :value="weight.value"
        >
          <span class="text-lg" :class="weight.className">Aa</span>
          <span class="text-muted-foreground text-xs">{{ weight.label }}</span>
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  </div>
</template>
