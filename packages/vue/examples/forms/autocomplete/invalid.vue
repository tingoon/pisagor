<script lang="ts" setup>
import { Autocomplete } from "@pisagor/vue";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];
</script>

<template>
  <Autocomplete invalid :items="items" />
</template>
