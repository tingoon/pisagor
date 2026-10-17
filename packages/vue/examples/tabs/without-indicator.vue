<script lang="ts">
import source from "./without-indicator.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Tabs } from "@pisagor/vue";
import { profileTabs } from "./helpers";

const items = profileTabs();
</script>

<template>
  <Tabs default-value="tab-1" :items="items" :show-indicator="false" />
</template>
