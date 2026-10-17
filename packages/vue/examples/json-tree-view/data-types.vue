<script lang="ts">
import source from "./data-types.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { JsonTreeView } from "@pisagor/vue";
import { dataTypesData } from "./helpers";

const data = dataTypesData();
</script>

<template>
  <JsonTreeView :data="data" :default-expanded-depth="2" />
</template>
