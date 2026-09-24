<script lang="ts" setup>
import { Carousel } from "..";

const slides = imageSlides();
</script>

<template>
  <Carousel class="h-40" orientation="vertical" :slides="slides" />
</template>
