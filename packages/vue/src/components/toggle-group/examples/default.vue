<script setup lang="ts">
import { ToggleGroup } from "..";

const items = [
  { children: "Bold", value: "bold" },
  { children: "Italic", value: "italic" },
  { children: "Underline", value: "underline" },
];
</script>

<template>
  <ToggleGroup :items="items" :multiple="true" :spacing="0" />
</template>
