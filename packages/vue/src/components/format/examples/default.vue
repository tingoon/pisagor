<script lang="ts" setup >
import { Format } from "..";

const relativeDate = new Date(Date.now() - 1000 * 60 * 60 * 24);
</script>

<template>
        <div class="flex flex-col gap-4">
          <p class="text-sm">
            <Format.Byte unit="byte" :value="2048" /> bytes
          </p>
          <p class="text-sm">
            <Format.Number notation="compact" :value="12345.67" /> units
          </p>
          <p class="text-sm">
            <Format.RelativeTime :value="relativeDate" /> ago
          </p>
        </div>
  
</template>
