<script lang="ts" setup>
import { SegmentGroup } from "..";

const items = ["Profile", "Account", "Security", "Notifications"];
</script>

<template>
  <div class="flex flex-col gap-2">
    <SegmentGroup.Root
      class="rounded-lg"
      default-value="Profile"
      variant="default"
    >
      <SegmentGroup.Item
        class="px-2 py-1.5 text-sm"
        v-for="item in items"
        :key="item"
        :value="item"
      >
        {{ item }}
      </SegmentGroup.Item>
    </SegmentGroup.Root>
    <SegmentGroup.Root default-value="Profile" variant="underline">
      <SegmentGroup.Item
        class="px-2 py-1.5 text-sm"
        v-for="item in items"
        :key="item"
        :value="item"
      >
        {{ item }}
      </SegmentGroup.Item>
    </SegmentGroup.Root>
    <SegmentGroup.Root
      default-value="Profile"
      orientation="vertical"
      variant="underline"
    >
      <SegmentGroup.Item
        class="px-2 py-1.5 text-sm"
        v-for="item in items"
        :key="item"
        :value="item"
      >
        {{ item }}
      </SegmentGroup.Item>
    </SegmentGroup.Root>
  </div>
</template>
