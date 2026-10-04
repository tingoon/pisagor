<script lang="ts" setup>
import { Tabs } from "../../src/components/tabs";
import { numberedTabs } from "./helpers";

const items = numberedTabs();
</script>

<template>
  <Tabs default-value="tab-1" orientation="vertical" :items="items" />
</template>
