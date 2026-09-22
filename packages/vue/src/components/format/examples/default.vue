<script setup lang="ts">
import { Format } from "..";

const relativeDate = new Date(Date.now() - 1000 * 60 * 60 * 24);
</script>

<template>
        <div class="flex flex-col gap-4">
          <p class="text-sm">
            <Format.Byte :value="2048" unit="byte" /> bytes
          </p>
          <p class="text-sm">
            <Format.Number :value="12345.67" notation="compact" /> units
          </p>
          <p class="text-sm">
            <Format.RelativeTime :value="relativeDate" /> ago
          </p>
        </div>
  
</template>
