<script lang="ts" setup>
import { Format } from "..";
</script>

<template>
  <div class="flex flex-col gap-2">
    <div>
      <span class="text-muted-foreground text-sm">1.2M: </span>
      <Format.Number notation="compact" :value="1200000" />
    </div>
    <div>
      <span class="text-muted-foreground text-sm">120K: </span>
      <Format.Number notation="compact" :value="120000" />
    </div>
    <div>
      <span class="text-muted-foreground text-sm">Downloads: </span>
      <Format.Number notation="compact" :value="1234567" />
      <span class="text-muted-foreground text-sm"> per month</span>
    </div>
  </div>
</template>
