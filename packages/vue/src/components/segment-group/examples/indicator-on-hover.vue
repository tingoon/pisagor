<script setup lang="ts">
import { ref } from "vue";

import { SegmentGroup } from "..";

const pages = ["Profile", "Account", "Security", "Notifications"];
const onValueChange = (value) => setValue(value ?? "Profile");

const activeValue = ref("react");
</script>

<template>
        <SegmentGroup.Root class="rounded-lg" :value="activeValue" @value-change="onValueChange">
          <SegmentGroup.Item
            v-for="page in pages"
            :key="page"
            class="px-2 py-1.5 text-sm"
            :value="page"
            @click="value = page"
            @mouseenter="hoverValue = page"
            @mouseleave="hoverValue = null"
          >
            {{ page }}
          </SegmentGroup.Item>
        </SegmentGroup.Root>
  
</template>
