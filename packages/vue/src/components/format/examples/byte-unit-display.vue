<script lang="ts" setup >
import { Format } from "..";
</script>

<template>
        <div class="flex flex-col gap-2">
          <div>
            <span class="text-muted-foreground text-sm">Long: </span>
            <Format.Byte unit-display="long" :value="1500000" />
          </div>
          <div>
            <span class="text-muted-foreground text-sm">Short: </span>
            <Format.Byte unit-display="short" :value="1500000" />
          </div>
          <div>
            <span class="text-muted-foreground text-sm">Narrow: </span>
            <Format.Byte unit-display="narrow" :value="1500000" />
          </div>
        </div>
  
</template>
