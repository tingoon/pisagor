<script setup lang="ts">
import { ref } from "vue";
import { InputOTP } from "..";

const value = ref([""]);
const onValueChange = setValue;
</script>

<template>
        <InputOTP :invalid="!isCorrect()" @value-change="onValueChange" :value="value">
          <InputOTP.Slot :index="0" />
          <InputOTP.Slot :index="1" />
          <InputOTP.Slot :index="2" />
          <InputOTP.Slot :index="3" />
        </InputOTP>
  
</template>
