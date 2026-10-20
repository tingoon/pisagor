<script lang="ts" setup>
import { InputOTP } from "@pisagor/vue";

const sizes = ["sm", "md", "lg"] as const;
</script>

<template>
  <div class="flex flex-col gap-2">
    <InputOTP v-for="size in sizes" :key="size" :size="size" :length="4" />
  </div>
</template>
