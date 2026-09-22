<script setup lang="ts">
import { JsonTreeView } from "..";
import { mapSetData } from "./helpers";

const items = mapSetData();
const data = mapSetData();
</script>

<template>
  <JsonTreeView :data="data" :default-expanded-depth="1" />
</template>
