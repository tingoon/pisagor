<script lang="ts" setup >
import { SegmentGroup } from "..";

const items = ["Profile", "Account", "Security", "Notifications"];
</script>

<template>
        <SegmentGroup.Root class="rounded-lg" defaultValue="Profile">
          <SegmentGroup.Item
            class="px-2 py-1.5 text-sm"
            v-for="item in items"
            :key="item"
            :value="item"
          >
            {{ item }}
          </SegmentGroup.Item>
        </SegmentGroup.Root>
  
</template>
