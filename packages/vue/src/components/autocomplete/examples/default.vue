<script lang="ts" setup>
import { Autocomplete } from "..";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];
</script>

<template>
  <Autocomplete :clearable="true" :items="items" />
</template>
