<script setup lang="ts">
import { Format } from "..";

const date = new Date(Date.now() - 1000 * 60 * 30);
</script>

<template>
        <div class="flex flex-col gap-2">
          <div>
            <span class="text-muted-foreground text-sm">Long: </span>
            <Format.RelativeTime :value="date" style="long" />
          </div>
          <div>
            <span class="text-muted-foreground text-sm">Short: </span>
            <Format.RelativeTime :value="date" style="short" />
          </div>
          <div>
            <span class="text-muted-foreground text-sm">Narrow: </span>
            <Format.RelativeTime :value="date" style="narrow" />
          </div>
        </div>
  
</template>
