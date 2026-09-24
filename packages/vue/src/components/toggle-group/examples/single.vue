<script lang="ts" setup>
import { PhTextB, PhTextItalic, PhTextUnderline } from "@phosphor-icons/vue";
import { ToggleGroup } from "..";
</script>

<template>
  <ToggleGroup.Root :default-value="['bold']" :multiple="false">
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
</template>
