<script lang="ts">
import source from "./sizes.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { InputOTP } from "@pisagor/vue";

const sizes = ["sm", "md", "lg"] as const;
</script>

<template>
  <div class="flex flex-col gap-2">
    <InputOTP v-for="size in sizes" :key="size" :size="size">
      <InputOTP.Slot :index="0" />
      <InputOTP.Slot :index="1" />
      <InputOTP.Slot :index="2" />
      <InputOTP.Slot :index="3" />
    </InputOTP>
  </div>
</template>
