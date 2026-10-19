<script lang="ts" setup>
import { Combobox } from "@pisagor/vue";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];
</script>

<template>
  <Combobox clearable :default-value="['apple']" :items="items" />
</template>
