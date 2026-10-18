<script lang="ts" setup>
import { Accordion } from "@pisagor/vue";
import { faqItems } from "./helpers";

const sizes = ["sm", "md", "lg"] as const;
</script>

<template>
  <div class="flex flex-col gap-4">
    <Accordion
      v-for="size in sizes"
      :key="size"
      :items="faqItems()"
      :size="size"
    />
  </div>
</template>
