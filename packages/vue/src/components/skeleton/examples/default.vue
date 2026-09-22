<script setup lang="ts">
import { Skeleton } from "..";
</script>

<template>
        <div class="flex items-center gap-2">
          <Skeleton.Circle class="size-16" />
          <Skeleton.Text :lines="3" />
        </div>
  
</template>
