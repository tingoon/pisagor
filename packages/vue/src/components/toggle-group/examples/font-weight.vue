<script setup lang="ts">
import { ref } from "vue";
import { ToggleGroup } from "..";

const value = ref(["normal"]);
function handleValueChange(details?: { value?: unknown; page?: unknown }) {
  if (details && "value" in details) value.value = details.value;
  else if (details && "page" in details) value.value = details.page;
}

const fontWeights = ["normal", "medium", "semibold", "bold"] as const;
</script>

<template>
        <div class="flex flex-col gap-2">
          <div class="flex flex-col gap-2">
            <span class="font-medium text-sm">Font weight</span>
            <ToggleGroup.Root
              class="flex-wrap"
              :multiple="false"
              @value-change="handleValueChange"
              size="lg"
              :spacing="2"
              :value="value"
              variant="outline"
            >
              <ToggleGroup.Item
                v-for="weight in fontWeights"
                :key="weight.value"
                :aria-label="'Set font weight to ' + weight.label"
                class="size-16 flex-col gap-1 py-2"
                :value="weight.value"
              >
                <span class="text-lg" :class="weight.className">Aa</span>
                <span class="text-muted-foreground text-xs">{{ weight.label }}</span>
              </ToggleGroup.Item>
            </ToggleGroup.Root>
          </div>
        </div>
  
</template>
