<script setup lang="ts">
import { ref } from "vue";
import { SegmentGroup } from "..";

const items = ["Profile", "Account", "Security", "Notifications"];
const value = ref("Profile");
const onValueChange = setValue;
</script>

<template>
        <SegmentGroup.Root class="rounded-lg" :value="value" @value-change="onValueChange">
          <SegmentGroup.Item
            v-for="item in items"
            :key="item"
            class="px-2 py-1.5 text-sm"
            :value="item"
          >
            {{ item }}
          </SegmentGroup.Item>
        </SegmentGroup.Root>
  
</template>
