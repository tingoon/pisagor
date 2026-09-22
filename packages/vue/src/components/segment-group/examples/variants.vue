<script setup lang="ts">
import { SegmentGroup } from "..";

const items = ["Profile", "Account", "Security", "Notifications"];
</script>

<template>
        <div class="flex flex-col gap-2">
          <SegmentGroup.Root class="rounded-lg" defaultValue="Profile" variant="default">
            <SegmentGroup.Item
              v-for="item in items"
              :key="item"
              class="px-2 py-1.5 text-sm"
              :value="item"
            >
              {{ item }}
            </SegmentGroup.Item>
          </SegmentGroup.Root>
          <SegmentGroup.Root defaultValue="Profile" variant="underline">
            <SegmentGroup.Item
              v-for="item in items"
              :key="item"
              class="px-2 py-1.5 text-sm"
              :value="item"
            >
              {{ item }}
            </SegmentGroup.Item>
          </SegmentGroup.Root>
          <SegmentGroup.Root defaultValue="Profile" orientation="vertical" variant="underline">
            <SegmentGroup.Item
              v-for="item in items"
              :key="item"
              class="px-2 py-1.5 text-sm"
              :value="item"
            >
              {{ item }}
            </SegmentGroup.Item>
          </SegmentGroup.Root>
        </div>
  
</template>
