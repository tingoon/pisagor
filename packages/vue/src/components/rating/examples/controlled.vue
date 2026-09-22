<script setup lang="ts">
import { ref } from "vue";
import { Rating } from "..";

const value = ref(0);
const onValueChange = (value) => setValue(value ?? 0);
</script>

<template>
        <div class="flex flex-col gap-2 text-center text-sm">
          <p>Select the rating 5</p>
          <Rating :value="value" @value-change="onValueChange" />
          <p class="text-center">{{ isCorrectRating ? '✅' : '❌' }}</p>
        </div>
  
</template>
