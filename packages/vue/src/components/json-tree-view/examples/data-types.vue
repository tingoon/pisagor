<script setup lang="ts">
import { JsonTreeView } from "..";
import { dataTypesData } from "./helpers";

const items = dataTypesData();
const data = dataTypesData();
</script>

<template>
  <JsonTreeView :data="data" :default-expanded-depth="2" />
</template>
