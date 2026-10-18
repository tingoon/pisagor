<script lang="ts" setup>
import { SegmentGroup } from "@pisagor/vue";
import { ref } from "vue";

const pages = ["Profile", "Account", "Security", "Notifications"];
const value = ref("Profile");
const hoverValue = ref<string | null>(null);

function onValueChange(next: string | null) {
  value.value = next ?? "Profile";
}
</script>

<template>
  <SegmentGroup.Root
    class="rounded-lg"
    :value="hoverValue ?? value"
    @value-change="onValueChange"
  >
    <SegmentGroup.Item
      class="px-2 py-1.5 text-sm"
      v-for="page in pages"
      :key="page"
      :value="page"
      @click="value = page"
      @mouseenter="hoverValue = page"
      @mouseleave="hoverValue = null"
    >
      {{ page }}
    </SegmentGroup.Item>
  </SegmentGroup.Root>
</template>
