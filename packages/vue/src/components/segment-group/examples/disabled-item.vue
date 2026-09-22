<script setup lang="ts">
import { SegmentGroup } from "..";

const items = ["Profile", "Account", "Security", "Notifications"];
</script>

<template>
        <SegmentGroup.Root class="rounded-lg" defaultValue="Profile">
          <SegmentGroup.Item
            v-for="item in items"
            :key="item"
            class="px-2 py-1.5 text-sm"
            :disabled="item === 'Security'"
            :value="item"
          >
            {{ item }}
          </SegmentGroup.Item>
        </SegmentGroup.Root>
  
</template>
