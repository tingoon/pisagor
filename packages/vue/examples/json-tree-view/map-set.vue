<script lang="ts">
import source from "./map-set.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { JsonTreeView } from "@pisagor/vue";
import { mapSetData } from "./helpers";

const data = mapSetData();
</script>

<template>
  <JsonTreeView :data="data" :default-expanded-depth="1" />
</template>
