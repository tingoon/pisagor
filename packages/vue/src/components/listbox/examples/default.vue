<script setup lang="ts">
import { Listbox } from "..";

const items = [
  { label: "Brazil", value: "br" },
  { label: "Mexico", value: "mx" },
  { label: "Ireland", value: "ie" },
];
</script>

<template>
  <Listbox :items="items" />
</template>
