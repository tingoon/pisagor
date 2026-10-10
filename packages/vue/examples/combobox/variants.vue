<script lang="ts" setup>
import { Combobox } from "@pisagor/vue";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];
</script>

<template>
  <div class="flex flex-col gap-2">
    <Combobox placeholder="Primary" variant="primary" :items="items" />
    <Combobox placeholder="Secondary" variant="secondary" :items="items" />
  </div>
</template>
