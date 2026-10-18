<script lang="ts" setup>
import { Rating } from "@pisagor/vue";
import { computed, ref } from "vue";

const value = ref(0);
const isCorrectRating = computed(() => value.value === 5);
function onValueChange(next: number | undefined) {
  value.value = next ?? 0;
}
</script>

<template>
  <div class="flex flex-col gap-2 text-center text-sm">
    <p>Select the rating 5</p>
    <Rating :value="value" @value-change="onValueChange" />
    <p class="text-center">{{ isCorrectRating ? "✅" : "❌" }}</p>
  </div>
</template>
