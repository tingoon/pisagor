<script lang="ts" setup>
import { progressRecipe } from "@pisagor/recipes";
import { Progress } from "@pisagor/vue";
import { tv } from "tailwind-variants";
import { onBeforeUnmount, onMounted, ref } from "vue";

const brandProgressRecipe = tv({
  extend: progressRecipe,
  slots: {
    range: "bg-emerald-600",
    track: "bg-emerald-500/20",
  },
  variants: {},
});

const progress = ref(13);
let timer: ReturnType<typeof setTimeout> | undefined;

onMounted(() => {
  timer = setTimeout(() => {
    progress.value = 66;
  }, 500);
});

onBeforeUnmount(() => clearTimeout(timer));
</script>

<template>
  <Progress :recipe="brandProgressRecipe" :value="progress" />
</template>
