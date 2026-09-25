<script lang="ts" setup>
import { PhGear, PhShield, PhUser } from "@phosphor-icons/vue";
import { h } from "vue";
import { Tabs } from "..";

const items = [
  {
    content: "Profile content",
    label: () =>
      h("span", { class: "inline-flex items-center gap-1.5" }, [
        h(PhUser),
        " Profile",
      ]),
    value: "tab-1",
  },
  {
    content: "Security content",
    label: () =>
      h("span", { class: "inline-flex items-center gap-1.5" }, [
        h(PhShield),
        " Security",
      ]),
    value: "tab-2",
  },
  {
    content: "Settings content",
    label: () =>
      h("span", { class: "inline-flex items-center gap-1.5" }, [
        h(PhGear),
        " Settings",
      ]),
    value: "tab-3",
  },
];
</script>

<template>
  <Tabs default-value="tab-1" :items="items" />
</template>
