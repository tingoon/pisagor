<script setup lang="ts">
import { PhTextB, PhTextItalic, PhTextUnderline } from "@phosphor-icons/vue";
import { ref } from "vue";
import { ToggleGroup } from "..";

const value = ref(["bold"]);
function handleValueChange(details?: { value?: unknown; page?: unknown }) {
  if (details && "value" in details) value.value = details.value;
  else if (details && "page" in details) value.value = details.page;
}
</script>

<template>
        <div class="flex flex-col items-center gap-2">
          <ToggleGroup.Root @value-change="handleValueChange" :value="value">
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
