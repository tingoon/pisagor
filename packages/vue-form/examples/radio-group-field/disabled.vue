<script lang="ts" setup>
import { RadioGroupField } from "@pisagor/vue-form";
import { planOptions } from "../options";
</script>

<template>
  <RadioGroupField
    description="You can change this anytime in billing settings."
    disabled
    id="radio-group-field-plan-disabled"
    label="Plan"
    :options="planOptions"
  />
</template>
