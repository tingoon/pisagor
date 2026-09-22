<script setup lang="ts">
import { PhTextB, PhTextItalic, PhTextUnderline } from "@phosphor-icons/vue";
import { ToggleGroup } from "..";
</script>

<template>
        <div class="flex flex-wrap items-center gap-2">
          <ToggleGroup.Root :default-value="['bold']" multiple size="sm">
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
          <ToggleGroup.Root :default-value="['bold']" multiple size="lg">
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
        </div>
  
</template>
