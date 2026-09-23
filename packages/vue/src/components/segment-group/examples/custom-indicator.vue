<script lang="ts" setup >
import { SegmentGroup } from "..";

const items = ["Profile", "Account", "Security", "Notifications"];
</script>

<template>
        <SegmentGroup.Root
          class="rounded-lg *:data-[slot=segment-group-indicator]:bg-primary/40"
          defaultValue="Profile"
        >
          <SegmentGroup.Item
            class="px-2 py-1.5 text-sm"
            v-for="item in items"
            :key="item"
            :disabled="item === 'Security'"
            :value="item"
          >
            {{ item }}
          </SegmentGroup.Item>
        </SegmentGroup.Root>
  
</template>
