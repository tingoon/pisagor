<script lang="ts" setup>
import { PhCaretRight } from "@phosphor-icons/vue";
import { JsonTreeView } from "@pisagor/vue";
import { h } from "vue";
import { defaultData } from "./helpers";

const data = defaultData();
const arrow = h(PhCaretRight);
</script>

<template>
  <JsonTreeView.Root :data="data" :default-expanded-depth="1">
    <JsonTreeView.Tree :arrow="arrow" />
  </JsonTreeView.Root>
</template>
