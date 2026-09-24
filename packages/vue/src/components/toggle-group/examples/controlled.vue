<script lang="ts" setup>
import { PhTextB, PhTextItalic, PhTextUnderline } from "@phosphor-icons/vue";
import { ref } from "vue";
import { ToggleGroup } from "..";

const value = ref(["bold"]);

function handleValueChange(next: string | string[]) {
  value.value = Array.isArray(next) ? next : [next];
}
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <ToggleGroup.Root :value="value" @value-change="handleValueChange">
      <ToggleGroup.Item aria-label="Toggle bold" value="bold">
        <PhTextB />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle italic" value="italic">
        <PhTextItalic />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle underline" value="underline">
        <PhTextUnderline />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
    <p class="text-center text-muted-foreground text-sm">
      {{ value.length > 0 ? value.join(", ") : "None" }}
    </p>
  </div>
</template>
