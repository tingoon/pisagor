<script setup lang="ts">
import { Format } from "..";

const date = new Date(Date.now() - 1000 * 60 * 60 * 24 * 3);
</script>

<template>
        <div class="inline-flex items-baseline gap-1">
          <span class="text-muted-foreground text-sm">Last updated</span>
          <span class="font-medium text-foreground tabular-nums tracking-tight">
            <Format.RelativeTime :value="date" />
          </span>
        </div>
  
</template>
