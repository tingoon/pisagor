<script lang="ts" setup>
import { RadioGroup } from "@pisagor/vue";
</script>

<template>
  <div class="flex flex-col gap-2">
    <RadioGroup.Root default-value="primary">
      <RadioGroup.Item value="primary" variant="primary">
        <RadioGroup.ItemControl />
        <RadioGroup.ItemText>Primary</RadioGroup.ItemText>
        <RadioGroup.ItemHiddenInput />
      </RadioGroup.Item>
      <RadioGroup.Item value="secondary" variant="secondary">
        <RadioGroup.ItemControl />
        <RadioGroup.ItemText>Secondary</RadioGroup.ItemText>
        <RadioGroup.ItemHiddenInput />
      </RadioGroup.Item>
    </RadioGroup.Root>
  </div>
</template>
