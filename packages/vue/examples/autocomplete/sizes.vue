<script lang="ts" setup>
import { Autocomplete } from "@pisagor/vue";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];
const sizes = ["sm", "md", "lg"] as const;
</script>

<template>
  <div class="flex flex-col gap-2">
    <Autocomplete
      v-for="size in sizes"
      :key="size"
      :items="items"
      :placeholder="`Size ${size}`"
      :size="size"
    />
  </div>
</template>
