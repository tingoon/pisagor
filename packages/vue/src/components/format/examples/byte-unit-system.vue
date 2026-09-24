<script lang="ts" setup>
import { Format } from "..";
</script>

<template>
  <div class="flex flex-col gap-2">
    <div>
      <span class="text-muted-foreground text-sm">Decimal (1000): </span>
      <Format.Byte unit-system="decimal" :value="1024" />
    </div>
    <div>
      <span class="text-muted-foreground text-sm">Binary (1024): </span>
      <Format.Byte unit-system="binary" :value="1024" />
    </div>
  </div>
</template>
