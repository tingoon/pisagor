<script lang="ts" setup>
import { Button } from "@pisagor/vue";
import { DropdownMenu } from "..";

const items = Array.from({ length: 15 }, (_, i) => `Item ${i + 1}`);
</script>

<template>
  <DropdownMenu>
    <DropdownMenu.Trigger as-child>
      <Button variant="outline">Open</Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class="max-h-60 min-w-40">
      <DropdownMenu.Item v-for="(label, index) in items" :key="label" :value="`item-${index + 1}`">
        {{ label }}
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu>
</template>
