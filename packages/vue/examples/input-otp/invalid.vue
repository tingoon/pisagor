<script lang="ts" setup>
import { InputOTP } from "@pisagor/vue";
import { ref } from "vue";

const value = ref([""]);
const onValueChange = setValue;
</script>

<template>
  <InputOTP
    :invalid="!isCorrect()"
    :value="value"
    @value-change="onValueChange"
  >
    <InputOTP.Slot :index="0" />
    <InputOTP.Slot :index="1" />
    <InputOTP.Slot :index="2" />
    <InputOTP.Slot :index="3" />
  </InputOTP>
</template>
