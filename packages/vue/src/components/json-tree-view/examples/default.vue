<script lang="ts" setup>
import { JsonTreeView } from "..";
import { defaultData } from "./helpers";

const data = defaultData();
</script>

<template>
  <JsonTreeView :data="data" :default-expanded-depth="1" />
</template>
