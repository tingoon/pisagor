<script lang="ts" setup >
import { ref } from "vue";
import { Tabs } from "..";
import { profileTabs } from "./helpers";

const items = profileTabs();
const value = ref(["tab-1"]);
</script>

<template>
  <Tabs v-model="value" :items="items" />
</template>
