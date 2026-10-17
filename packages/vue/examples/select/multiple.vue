<script lang="ts" setup>
import { Select } from "@pisagor/vue";

const items = [
  { label: "JavaScript", value: "javascript" },
  { label: "TypeScript", value: "typescript" },
  { label: "Python", value: "python" },
  { label: "Rust", value: "rust" },
];
</script>

<template>
  <Select
    multiple
    placeholder="Select languages…"
    :default-value="['javascript', 'typescript']"
    :items="items"
  />
</template>
