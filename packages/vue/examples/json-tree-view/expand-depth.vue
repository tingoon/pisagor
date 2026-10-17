<script lang="ts">
import source from "./expand-depth.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { JsonTreeView } from "@pisagor/vue";
import { expandDepthData } from "./helpers";

const data = expandDepthData();
const collapsedData = data;
const expandedData = data;
</script>

<template>
  <div class="flex flex-col gap-6">
    <div>
      <p class="text-foreground mb-2 text-sm font-medium">
        defaultExpandedDepth=0 (all collapsed)
      </p>
      <JsonTreeView :data="collapsedData" :default-expanded-depth="0" />
    </div>
    <div>
      <p class="text-foreground mb-2 text-sm font-medium">
        defaultExpandedDepth=2
      </p>
      <JsonTreeView :data="expandedData" :default-expanded-depth="2" />
    </div>
  </div>
</template>
