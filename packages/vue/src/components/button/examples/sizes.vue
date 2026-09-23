<script lang="ts" setup >
import { PhPlus } from "@phosphor-icons/vue";
import { Button } from "..";

const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-2" v-for="size in sizes" :key="size" >
      <Button :size="size">Button</Button>
      <Button :size="`icon-${size}`">
        <PhPlus />
      </Button>
    </div>
  </div>
</template>
