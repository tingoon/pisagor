<script lang="ts">
import source from "./with-keyboard-shortcut.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { InputGroup, Kbd } from "@pisagor/vue";
</script>

<template>
  <InputGroup>
    <InputGroup.Input placeholder="Search..." />
    <InputGroup.Addon align="inline-end">
      <Kbd>⌘K</Kbd>
    </InputGroup.Addon>
  </InputGroup>
</template>
