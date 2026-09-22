<script setup lang="ts">
import { InputOTP } from "..";
</script>

<template>
        <InputOTP :defaultValue="['1', '2', '3', '4']" :disabled="true">
          <InputOTP.Slot :index="0" />
          <InputOTP.Slot :index="1" />
          <InputOTP.Slot :index="2" />
          <InputOTP.Slot :index="3" />
        </InputOTP>
  
</template>
