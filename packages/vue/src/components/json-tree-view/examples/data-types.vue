<script lang="ts" setup>
import { JsonTreeView } from "..";
import { dataTypesData } from "./helpers";

const data = dataTypesData();
</script>

<template>
  <JsonTreeView :data="data" :default-expanded-depth="2" />
</template>
