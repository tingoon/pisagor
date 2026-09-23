<script lang="ts" setup >
import { JsonTreeView } from "..";
import { defaultData } from "./helpers";

const items = defaultData();
const data = defaultData();
</script>

<template>
  <JsonTreeView :data="data" :default-expanded-depth="1" />
</template>
