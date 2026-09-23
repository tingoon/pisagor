<script lang="ts" setup >
import { Tabs } from "..";
import { variantTabs } from "./helpers";

const defaultItems = variantTabs("Default variant");
const underlineItems = variantTabs("Underline variant");
const verticalItems = variantTabs("Underline + vertical");
</script>

<template>
  <div class="flex flex-col gap-2">
    <Tabs default-value="tab-1" :items="defaultItems" />
    <Tabs default-value="tab-1" variant="underline" :items="underlineItems" />
    <Tabs
      default-value="tab-1"
      orientation="vertical"
      variant="underline"
      :items="verticalItems"
    />
  </div>
</template>
