<script setup lang="ts">
import { Format } from "..";
</script>

<template>
        <div class="inline-flex items-baseline gap-1">
          <span class="text-muted-foreground text-sm">Downloads</span>
          <span class="font-medium text-foreground tabular-nums tracking-tight">
            <Format.Number :value="1234567" />
          </span>
          <span class="text-muted-foreground text-sm">per month</span>
        </div>
  
</template>
