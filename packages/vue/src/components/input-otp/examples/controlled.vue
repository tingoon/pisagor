<script setup lang="ts">
import { ref } from "vue";
import { InputOTP } from "..";

const value = ref([""]);
const onValueChange = setValue;
</script>

<template>
        <div class="flex flex-col gap-2">
          <p class="text-center text-muted-foreground text-sm">Enter the code 1234</p>
          <InputOTP @value-change="onValueChange" :value="value">
            <InputOTP.Slot :index="0" />
            <InputOTP.Slot :index="1" />
            <InputOTP.Slot :index="2" />
            <InputOTP.Slot :index="3" />
          </InputOTP>
          <p class="text-center text-muted-foreground text-sm">{{ isCorrect() ? "✅" : "❌" }}</p>
        </div>
  
</template>
