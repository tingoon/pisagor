<script lang="ts">
import source from "./orientation-horizontal.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Tabs } from "@pisagor/vue";
import { numberedTabs } from "./helpers";

const items = numberedTabs();
</script>

<template>
  <Tabs default-value="tab-1" :items="items" />
</template>
