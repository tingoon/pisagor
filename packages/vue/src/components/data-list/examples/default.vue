<script lang="ts" setup>
import { DataList } from "..";

const items = [
  { label: "New users", value: "234" },
  { label: "Sales", value: "£12,340" },
  { label: "Revenue", value: "3,450" },
];
</script>

<template>
  <div class="w-96 rounded-xl border bg-card p-4">
    <DataList :items="items" />
  </div>
</template>
