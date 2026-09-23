<script lang="ts" setup >
import { ref } from "vue";
import { SegmentGroup } from "..";

const items = ["Profile", "Account", "Security", "Notifications"];
const value = ref("Profile");
const onValueChange = setValue;
</script>

<template>
        <SegmentGroup.Root class="rounded-lg" :value="value" @value-change="onValueChange">
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
