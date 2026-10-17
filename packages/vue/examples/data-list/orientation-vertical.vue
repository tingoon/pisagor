<script lang="ts">
import source from "./orientation-vertical.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { DataList } from "@pisagor/vue";
</script>

<template>
  <div class="bg-card w-96 rounded-xl border p-4">
    <DataList.Root orientation="vertical">
      <DataList.Item value="Jane">First name</DataList.Item>
      <DataList.Item value="Doe">Last name</DataList.Item>
      <DataList.Item value="jane.doe@example.com">Email</DataList.Item>
    </DataList.Root>
  </div>
</template>
