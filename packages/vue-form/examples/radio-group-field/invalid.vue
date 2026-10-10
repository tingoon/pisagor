<script lang="ts" setup>
import { RadioGroupField } from "@pisagor/vue-form";
import { planOptions } from "../options";
</script>

<template>
  <RadioGroupField
    error="Please select a plan."
    id="radio-group-field-plan-invalid"
    invalid
    label="Plan"
    :options="planOptions"
  />
</template>
