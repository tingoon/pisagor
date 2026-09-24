<script lang="ts" setup>
import { JsonTreeView } from "..";
import { mapSetData } from "./helpers";

const data = mapSetData();
</script>

<template>
  <JsonTreeView :data="data" :default-expanded-depth="1" />
</template>
