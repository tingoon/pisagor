<script lang="ts" setup>
import { RadioGroupField } from "../../../../../src/fields/radio-group-field";
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
