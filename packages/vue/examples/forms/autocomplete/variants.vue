<script lang="ts" setup>
import { Autocomplete } from "@pisagor/vue";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];
</script>

<template>
  <div class="flex flex-col gap-2">
    <Autocomplete placeholder="Primary" variant="primary" :items="items" />
    <Autocomplete placeholder="Secondary" variant="secondary" :items="items" />
  </div>
</template>
