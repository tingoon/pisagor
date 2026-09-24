<script lang="ts" setup>
import { Combobox } from "..";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];
</script>

<template>
  <Combobox :clearable="true" :items="items" />
</template>
