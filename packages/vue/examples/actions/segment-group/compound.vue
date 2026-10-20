<script lang="ts" setup>
import { SegmentGroup } from "@pisagor/vue";

const items = ["Profile", "Account", "Security", "Notifications"];
</script>

<template>
  <SegmentGroup.Root class="rounded-lg" default-value="Profile">
    <SegmentGroup.Indicator />
    <SegmentGroup.Item
      class="px-2 py-1.5 text-sm"
      v-for="item in items"
      :key="item"
      :value="item"
    >
      <SegmentGroup.ItemText>{{ item }}</SegmentGroup.ItemText>
      <SegmentGroup.ItemControl />
      <SegmentGroup.ItemHiddenInput />
    </SegmentGroup.Item>
  </SegmentGroup.Root>
</template>
