<script setup lang="ts">
import { PhPlus } from "@phosphor-icons/vue";
import { Button } from "..";

const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
</script>

<template>
  <div class="flex flex-col gap-2">
    <div v-for="size in sizes" :key="size" class="flex items-center gap-2">
      <Button :size="size">Button</Button>
      <Button :size="`icon-${size}`">
        <PhPlus />
      </Button>
    </div>
  </div>
</template>
