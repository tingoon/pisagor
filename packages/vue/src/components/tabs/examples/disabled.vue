<script setup lang="ts">
import { Tabs } from "..";
import { profileTabs } from "./helpers";

const items = profileTabs();
</script>

<template>
  <Tabs default-value="tab-1" :items="items" />
</template>
