<script lang="ts" setup>
import { Command } from "@pisagor/vue";

const items = [
  { group: "Fruit", label: "Apple", value: "apple" },
  { group: "Fruit", label: "Banana", value: "banana" },
  { group: "Fruit", label: "Cherry", value: "cherry" },
  { group: "Countries", label: "United States", value: "us" },
  { group: "Countries", label: "United Kingdom", value: "uk" },
  { group: "Countries", label: "Germany", value: "de" },
];
</script>

<template>
  <Command :items="items" placeholder="Search..." />
</template>
