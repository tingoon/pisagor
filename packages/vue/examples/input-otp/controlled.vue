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
    <p class="text-center text-muted-foreground text-sm">Enter the code 1234</p>
    <InputOTP :value="value" @value-change="onValueChange">
      <InputOTP.Slot :index="0" />
      <InputOTP.Slot :index="1" />
      <InputOTP.Slot :index="2" />
      <InputOTP.Slot :index="3" />
    </InputOTP>
    <p class="text-center text-muted-foreground text-sm">
      {{ isCorrect ? "✅" : "❌" }}
    </p>
  </div>
</template>
