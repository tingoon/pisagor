<script lang="ts" setup>
import { Listbox } from "../../src/components/listbox";

const items = [
  { label: "Brazil", value: "br" },
  { label: "Mexico", value: "mx" },
  { label: "Ireland", value: "ie" },
];
</script>

<template>
  <Listbox :items="items" />
</template>
