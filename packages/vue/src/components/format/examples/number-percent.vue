<script lang="ts" setup >
import { Format } from "..";
</script>

<template>
        <div class="flex flex-col gap-2">
          <div>
            <span class="text-muted-foreground text-sm">Default: </span>
            <Format.Number style="percent" :value="0.75" />
          </div>
          <div>
            <span class="text-muted-foreground text-sm">With decimals: </span>
            <Format.Number style="percent" :minimum-fraction-digits="2" :value="0.7567" />
          </div>
        </div>
  
</template>
