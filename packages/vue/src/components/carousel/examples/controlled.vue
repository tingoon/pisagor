<script lang="ts" setup>
import { ref } from "vue";

import { Carousel } from "..";
import { numberedSlides } from "./helpers";

const slides = numberedSlides(8);
const page = ref(0);
</script>

<template>
  <div class="flex flex-col gap-2">
    <Carousel v-model:page="page" :slides="slides" />
    <p class="text-center text-muted-foreground text-sm">
      Current page: {{ page + 1 }} of 5
    </p>
  </div>
</template>
