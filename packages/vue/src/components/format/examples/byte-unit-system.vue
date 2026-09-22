<script setup lang="ts">
import { Format } from "..";
</script>

<template>
        <div class="flex flex-col gap-2">
          <div>
            <span class="text-muted-foreground text-sm">Decimal (1000): </span>
            <Format.Byte :value="1024" unit-system="decimal" />
          </div>
          <div>
            <span class="text-muted-foreground text-sm">Binary (1024): </span>
            <Format.Byte :value="1024" unit-system="binary" />
          </div>
        </div>
  
</template>
