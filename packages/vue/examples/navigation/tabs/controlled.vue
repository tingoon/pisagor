<script lang="ts" setup>
import { Tabs } from "@pisagor/vue";
import { ref } from "vue";
import { profileTabs } from "./helpers";

const items = profileTabs();
const value = ref(["tab-1"]);
</script>

<template>
  <Tabs v-model="value" :items="items" />
</template>
