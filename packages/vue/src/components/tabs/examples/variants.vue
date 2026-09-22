<script setup lang="ts">
import { Tabs } from "..";
import { variantTabs } from "./helpers";

const defaultItems = variantTabs("Default variant");
const underlineItems = variantTabs("Underline variant");
const verticalItems = variantTabs("Underline + vertical");
</script>

<template>
  <div class="flex flex-col gap-2">
    <Tabs default-value="tab-1" :items="defaultItems" />
    <Tabs default-value="tab-1" :items="underlineItems" variant="underline" />
    <Tabs
      default-value="tab-1"
      :items="verticalItems"
      orientation="vertical"
      variant="underline"
    />
  </div>
</template>
