<script lang="ts" setup>
import { DataList } from "..";
</script>

<template>
  <div class="w-96 rounded-xl border bg-card p-4">
    <DataList.Root>
      <DataList.Item value="234">New users</DataList.Item>
      <DataList.Item value="£12,340">Sales</DataList.Item>
      <DataList.Item value="3,450">Revenue</DataList.Item>
    </DataList.Root>
  </div>
</template>
