<script setup lang="ts">
import { CircularProgress } from "..";
</script>

<template>
        <div class="flex flex-col items-center gap-2">
          <span class="font-medium text-sm">Establishing connection...</span>
          <CircularProgress indeterminate />
        </div>
  
</template>
