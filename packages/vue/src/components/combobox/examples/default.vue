<script setup lang="ts">
import { Combobox } from "..";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];
</script>

<template>
  <Combobox :items="items" :clearable="true" />
</template>
