<script lang="ts" setup >
import { InputOTP } from "..";
</script>

<template>
        <InputOTP class="*:data-[slot=input-otp-input]:size-12 *:data-[slot=input-otp-input]:text-lg">
          <InputOTP.Slot :index="0" />
          <InputOTP.Slot :index="1" />
          <InputOTP.Slot :index="2" />
          <InputOTP.Slot :index="3" />
        </InputOTP>
  
</template>
