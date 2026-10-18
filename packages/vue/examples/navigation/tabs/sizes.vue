<script lang="ts" setup>
import { Tabs } from "@pisagor/vue";
import { profileTabs } from "./helpers";

const sizes = ["sm", "md", "lg"] as const;
const items = profileTabs();
</script>

<template>
  <div class="flex flex-col gap-4">
    <Tabs
      default-value="tab-1"
      v-for="size in sizes"
      :key="size"
      :items="items"
      :size="size"
    />
  </div>
</template>
