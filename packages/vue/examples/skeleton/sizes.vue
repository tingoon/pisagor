<script lang="ts" setup>
import { Skeleton } from "@pisagor/vue";

const sizes = ["sm", "md", "lg"] as const;
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-2" v-for="size in sizes" :key="size">
      <Skeleton.Circle :size="size" />
      <Skeleton.Text :lines="2" :size="size" />
    </div>
  </div>
</template>
