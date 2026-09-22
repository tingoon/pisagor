<script setup lang="ts">
import { DataList } from "..";

const data = [
  { label: "First name", value: "Jane" },
  { label: "Last name", value: "Doe" },
  { label: "Email", value: "jane.doe@example.com" },
  { label: "Phone", value: "1234567890" },
  { label: "Address", value: "1234 Main St, Anytown, USA" },
];
</script>

<template>
        <div class="w-96 rounded-xl border bg-card p-4">
          <DataList.Root class="divide-y" >
            <DataList.Item v-for="item in data" :key="item.label" :value="item.value">
              {{ item.label }}
            </DataList.Item>
          </DataList.Root>
        </div>
  
</template>
