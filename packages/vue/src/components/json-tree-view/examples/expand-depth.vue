<script setup lang="ts">
import { JsonTreeView } from "..";
import { expandDepthData } from "./helpers";

const data = expandDepthData();
const collapsedData = data;
const expandedData = data;
</script>

<template>
        <div class="flex flex-col gap-6">
          <div>
            <p class="mb-2 font-medium text-foreground text-sm">
              defaultExpandedDepth=0 (all collapsed)
            </p>
            <JsonTreeView :data="collapsedData" :default-expanded-depth="0" />
          </div>
          <div>
            <p class="mb-2 font-medium text-foreground text-sm">defaultExpandedDepth=2</p>
            <JsonTreeView :data="expandedData" :default-expanded-depth="2" />
          </div>
        </div>
  
</template>
