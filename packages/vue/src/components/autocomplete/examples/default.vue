<script setup lang="ts">
import { Autocomplete } from "..";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];
</script>

<template>
  <Autocomplete :items="items" :clearable="true" />
</template>
