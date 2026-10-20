<script lang="ts" setup>
import { InputOTP } from "@pisagor/vue";
import { computed, ref } from "vue";

const value = ref([""]);
function onValueChange(next: typeof value.value) {
  value.value = next;
}
const isCorrect = computed(() => value.value.join("") === "1234");
</script>

<template>
  <div class="flex flex-col gap-2">
    <p class="text-muted-foreground text-center text-sm">Enter the code 1234</p>
    <InputOTP :value="value" @value-change="onValueChange" :length="4" />
    <p class="text-muted-foreground text-center text-sm">
      {{ isCorrect ? "✅" : "❌" }}
    </p>
  </div>
</template>
