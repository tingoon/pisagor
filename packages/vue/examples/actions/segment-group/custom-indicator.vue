<script lang="ts" setup>
import { SegmentGroup } from "@pisagor/vue";

const items = ["Profile", "Account", "Security", "Notifications"];
</script>

<template>
  <SegmentGroup.Root
    class="*:data-[slot=segment-group-indicator]:bg-primary/40 rounded-lg"
    default-value="Profile"
  >
    <SegmentGroup.Indicator />
    <SegmentGroup.Item
      class="px-2 py-1.5 text-sm"
      v-for="item in items"
      :key="item"
      :disabled="item === 'Security'"
      :value="item"
    >
      <SegmentGroup.ItemText>{{ item }}</SegmentGroup.ItemText>
      <SegmentGroup.ItemControl />
      <SegmentGroup.ItemHiddenInput />
    </SegmentGroup.Item>
  </SegmentGroup.Root>
</template>
