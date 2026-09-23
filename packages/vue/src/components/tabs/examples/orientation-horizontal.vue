<script lang="ts" setup >
import { Tabs } from "..";
import { numberedTabs } from "./helpers";

const items = numberedTabs();
</script>

<template>
  <Tabs default-value="tab-1" :items="items" />
</template>
