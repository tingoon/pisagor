<script setup lang="ts">
import { RadioGroupField } from "..";
</script>

<template>
  <RadioGroupField error="Please select a plan." id="radio-group-field-plan-invalid" invalid label="Plan" :options='planOptions' />
</template>
