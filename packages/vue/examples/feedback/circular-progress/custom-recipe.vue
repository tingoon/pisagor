<script lang="ts" setup>
import { circularProgressRecipe } from "@pisagor/recipes";
import { CircularProgress } from "@pisagor/vue";
import { tv } from "tailwind-variants";
import { onBeforeUnmount, onMounted, ref } from "vue";

const brandCircularProgressRecipe = tv({
  extend: circularProgressRecipe,
  slots: { range: "stroke-emerald-600" },
  variants: {},
});

const progress = ref(24);
let timer: ReturnType<typeof setTimeout> | undefined;

onMounted(() => {
  timer = setTimeout(() => {
    progress.value = 72;
  }, 500);
});

onBeforeUnmount(() => clearTimeout(timer));
</script>

<template>
  <CircularProgress :recipe="brandCircularProgressRecipe" :value="progress" />
</template>
