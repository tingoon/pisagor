<script lang="ts" setup>
import { tabsRecipe } from "@pisagor/recipes";
import { Tabs } from "@pisagor/vue";
import { tv } from "tailwind-variants";
import { profileTabs } from "./helpers";

const brandTabsRecipe = tv({
  extend: tabsRecipe,
  slots: {
    trigger:
      "aria-selected:text-emerald-700 dark:aria-selected:text-emerald-300",
  },
  variants: {},
});
</script>

<template>
  <Tabs
    default-value="tab-1"
    :items="profileTabs()"
    :recipe="brandTabsRecipe"
  />
</template>
