<script lang="ts" setup >
import { DataList } from "..";
</script>

<template>
        <div class="w-96 rounded-xl border bg-card p-4">
          <DataList.Root orientation="vertical">
            <DataList.Item value="Jane">First name</DataList.Item>
            <DataList.Item value="Doe">Last name</DataList.Item>
            <DataList.Item value="jane.doe@example.com">Email</DataList.Item>
          </DataList.Root>
        </div>
  
</template>
