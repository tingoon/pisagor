<script lang="ts" setup>
import { Format } from "..";

const date = new Date(Date.now() - 1000 * 60 * 30);
</script>

<template>
  <div class="flex flex-col gap-2">
    <div>
      <span class="text-muted-foreground text-sm">Long: </span>
      <Format.RelativeTime style="long" :value="date" />
    </div>
    <div>
      <span class="text-muted-foreground text-sm">Short: </span>
      <Format.RelativeTime style="short" :value="date" />
    </div>
    <div>
      <span class="text-muted-foreground text-sm">Narrow: </span>
      <Format.RelativeTime style="narrow" :value="date" />
    </div>
  </div>
</template>
