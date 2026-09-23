<script lang="ts" setup >
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
