<script lang="ts">
import source from "./disabled.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Tabs } from "@pisagor/vue";
import { profileTabs } from "./helpers";

const items = profileTabs();
</script>

<template>
  <Tabs default-value="tab-1" :items="items" />
</template>
