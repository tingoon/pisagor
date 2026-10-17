<script lang="ts" setup>
import { Tabs } from "@pisagor/vue";
import { numberedTabs } from "./helpers";

const items = numberedTabs();
</script>

<template>
  <Tabs default-value="tab-1" :items="items" />
</template>
