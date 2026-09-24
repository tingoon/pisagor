<script lang="ts" setup>
import { Surface } from "@pisagor/vue";
import { RadioGroup } from "..";
</script>

<template>
  <Surface bordered padding="md" variant="default">
    <div class="flex flex-col gap-2">
      <RadioGroup.Root default-value="primary">
        <RadioGroup.Item value="primary" variant="primary">Primary</RadioGroup.Item>
        <RadioGroup.Item value="secondary" variant="secondary">Secondary</RadioGroup.Item>
      </RadioGroup.Root>
    </div>
  </Surface>
</template>
