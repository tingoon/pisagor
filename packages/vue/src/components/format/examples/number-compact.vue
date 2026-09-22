<script setup lang="ts">
import { Format } from "..";
</script>

<template>
        <div class="flex flex-col gap-2">
          <div>
            <span class="text-muted-foreground text-sm">1.2M: </span>
            <Format.Number :value="1200000" notation="compact" />
          </div>
          <div>
            <span class="text-muted-foreground text-sm">120K: </span>
            <Format.Number :value="120000" notation="compact" />
          </div>
          <div>
            <span class="text-muted-foreground text-sm">Downloads: </span>
            <Format.Number :value="1234567" notation="compact" />
            <span class="text-muted-foreground text-sm"> per month</span>
          </div>
        </div>
  
</template>
