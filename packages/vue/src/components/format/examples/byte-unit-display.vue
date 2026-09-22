<script setup lang="ts">
import { Format } from "..";
</script>

<template>
        <div class="flex flex-col gap-2">
          <div>
            <span class="text-muted-foreground text-sm">Long: </span>
            <Format.Byte :value="1500000" unit-display="long" />
          </div>
          <div>
            <span class="text-muted-foreground text-sm">Short: </span>
            <Format.Byte :value="1500000" unit-display="short" />
          </div>
          <div>
            <span class="text-muted-foreground text-sm">Narrow: </span>
            <Format.Byte :value="1500000" unit-display="narrow" />
          </div>
        </div>
  
</template>
