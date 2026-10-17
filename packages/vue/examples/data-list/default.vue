<script lang="ts">
import source from "./default.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { DataList } from "@pisagor/vue";

const items = [
  { label: "New users", value: "234" },
  { label: "Sales", value: "£12,340" },
  { label: "Revenue", value: "3,450" },
];
</script>

<template>
  <div class="bg-card w-96 rounded-xl border p-4">
    <DataList :items="items" />
  </div>
</template>
