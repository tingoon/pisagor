<script setup lang="ts">
import { SegmentGroup } from "..";

const items = [
  { label: "Alpha", value: "a" },
  { label: "Beta", value: "b" },
  { label: "Gamma", value: "c" },
];
</script>

<template>
  <SegmentGroup :items="items" :value="'b'" />
</template>
