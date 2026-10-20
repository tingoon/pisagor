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
  <InputOTP
    :invalid="!isCorrect"
    :value="value"
    @value-change="onValueChange"
    :length="4"
  />
</template>
